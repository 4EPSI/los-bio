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

          <ul class="project-advantages">
            <li>Срок службы <strong>50 лет</strong></li>
            <li>Производительность <strong>до 15 человек</strong></li>
            <li>Устойчивость <strong>к залповым сбросам</strong></li>
            <li><strong>Отказ</strong>от ассенизационной машины</li>
            <li>Работает <strong>при отключенной электроэнергии</strong></li>
          </ul>

          <h5>Также лос выбирают за:</h5>

          <div class="features">
            <div class="features-item">
              <span>1</span>
              <div class="features-info">
                <div>ЭКОНОМИЧНОСТЬ</div>
                <p>Приобретая станцию у производителя, вы добьетесь максимальной экономии</p>
              </div>
            </div>

            <div class="features-item">
              <span>2</span>
              <div class="features-info">
                <div>ЭКОЛОГИЧНОСТЬ</div>
                <p>токи, прошедшие через установку, полностью безопасны для окружающей среды</p>
              </div>
            </div>

            <div class="features-item">
              <span>3</span>
              <div class="features-info">
                <div>ДОЛГОВЕЧНОСТЬ</div>
                <p>Стеклопластиковый корпус прослужит не менее 50 лет</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-image">222</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref(null)

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
  &-advantages {
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      margin-bottom: 32px;
    li {
      position: relative;
      padding-left: 32px;
      margin-bottom: 22px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        width: 8px;
        height: 8px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        background-color: transparent;
      }
      strong {
        font-weight: 700;
      }
    }
  }
}

.features {
  &-item {
    display: flex;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
    span {
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      font-size: 10px;
      height: 24px;
      min-width: 24px;
    }
  }
  &-info {
    div {
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
    }
    p {
      font-weight: 400;
    }
  }
}
</style>