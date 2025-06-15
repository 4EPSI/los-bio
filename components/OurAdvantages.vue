<template>
  <div class="advantages">
    <h2>Наши преимущества</h2>
    <div class="advantages-content">
      <div v-if="pending">Загрузка...</div>
      <div v-if="error">Ошибка загрузки данных</div>
      <div v-if="!pending && slides.length === 0">Нет данных</div>
      <div
        class="advantages-item"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="advantages-top">
          <nuxt-img
            :src="slide.icon"
            alt="img"
            class="banner-image"
            width="auto"
            height="auto"
          />
          <h3>{{ slide.title }}</h3>
        </div>
        <p>{{ slide.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useParsedGroupData } from '~/composables/useParsedGroupData'

interface Advantage {
  title: string
  description: string
  icon: string
}

const { data: slides, pending, error } = useParsedGroupData<Advantage>('advantage')
</script>

<style lang="scss" scoped>
.advantages {
  h2 {
    font-weight: 700;
    margin-bottom: 80px;
  }
  &-content {
    margin-bottom: 148px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  &-item {
    display: inline-block;
    padding: 40px 52px;
    box-shadow: 7px 4px 27.1px 0px #0000000A;
    border: 2px solid #121F2380;
    background: #121F2380;
    border-radius: 19px;
    p {
      font-size: 18px;
    }
  }
  &-top {
    display: flex;
    margin-bottom: 18px;
    h3 {
      margin-left: 30px;
    }
  }
}
@media (max-width: 768px) {
  .advantages {
    &-content {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    &-item {
      padding: 24px;
      p {
        font-size: 16px;
      }
    }
    &-top {
      flex-direction: column;
      align-items: center;
      h3 {
        margin-left: 0;
        margin-top: 16px;
      }
    }
  }
}
</style>