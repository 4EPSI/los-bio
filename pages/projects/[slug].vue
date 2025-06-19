<template>
  <div>
    <Breadcrumbs :project-title="project?.title" />

    <div class="project">
      <div class="project-content">
        <h3>{{ project?.title }}</h3>
        <div class="project-description">
          <p>Автономная система канализации эффективно и главное незаметно для проживающих и окружающих, выполняет свой прямой функционал и обеспечивает высокое качество очистки стоков.</p>

          <p><strong>Устаревшие варианты </strong>септиков из колец, выгребные ямы и заглубленных в грунт перфорированные емкости — все эти версии канализации в частном доме достаточно серьезно вредят окружающей среде и загрязняют опасными биологическими включениями подземные воды.</p>
          
          <p><strong>Автономная канализация </strong>частного дома полностью нивелирует вышеперечисленные риски навредить окружающей среде. Проходящие многоступенчатую систему очистки стоки на выходе из установки полностью  <strong>соответствуют нормативам</strong>для сброса в грунт или фильтрующие колодцы.</p>

          <h5>Почему клиенты выбирают ЛОС:</h5>

          <ProjectAdvantages :items="advantages" />

          <h5>Также лос выбирают за:</h5>

          <ProjectFeatures :features="features" />
        </div>
      </div>
      <div class="project-image">
        <ProjectGallery :photos="images" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Project {
  title: string
  image?: string
}


const route = useRoute()
const project = ref<Project | null>(null)

const fetchProject = async () => {
  try {
    const res = await fetch(`https://api.los-bio.ru/projects/${route.params.slug}`)
    if (!res.ok) throw new Error('Ошибка запроса')
    const json = await res.json()
    project.value = json
  } catch (e) {
    console.error('Ошибка при загрузке проекта:', e)
    project.value = null
  }
}

watch(() => route.params.slug, fetchProject, { immediate: true })

const advantages: string[] = [
  'Срок службы <strong>50 лет</strong>',
  'Производительность <strong>до 15 человек</strong>',
  'Устойчивость <strong>к залповым сбросам</strong>',
  '<strong>Отказ</strong> от ассенизационной машины',
  'Работает <strong>при отключенной электроэнергии</strong>',
]

const features: Array<{ title: string; text: string }> = [
  {
    title: 'ЭКОНОМИЧНОСТЬ',
    text: 'Приобретая станцию у производителя, вы добьетесь максимальной экономии',
  },
  {
    title: 'ЭКОЛОГИЧНОСТЬ',
    text: 'токи, прошедшие через установку, полностью безопасны для окружающей среды',
  },
  {
    title: 'ДОЛГОВЕЧНОСТЬ',
    text: 'Стеклопластиковый корпус прослужит не менее 50 лет',
  },
]

const images = [
  '/images/project1.jpg',
  '/images/car.jpg',
  '/images/ba.jpg',
  '/images/project1.jpg',
  '/images/car.jpg',
  '/images/project1.jpg',
]
</script>

<style lang="scss" scoped>
.project {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  margin-top: 38px;
  margin-bottom: 70px;
  &-content {
    position: relative;
    background: #1215237D;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 52px;
    border-radius: 20px;
    z-index: 0;

    h3 {
      margin-bottom: 36px;
      font-weight: 700;
      font-size: 36px;
      line-height: 150%;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 1px;
      background: linear-gradient(171.41deg, rgba(255, 255, 255, 0.3) -0.7%, rgba(255, 255, 255, 0) 93.44%);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      z-index: -1;
    }
  }
  &-description {
    p {
      color: #FFFFFFCC;
      margin-bottom: 38px;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      &:last-child {
        margin-bottom: 0;
      }
      strong {
        font-weight: 700;
      }
    }
    h5 {
      text-transform: uppercase;
      color: #FFFFFFCC;
      margin-bottom: 14px;
    }
  }
}
</style>