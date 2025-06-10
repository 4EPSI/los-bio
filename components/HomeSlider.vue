<template>
  <div class="home">
    <div class="home-block">
      <div class="home-content">
        <h1>Автономная канализация для частного дома</h1>
        <p>Производим автономные канализации, очистные сооружения, накопительные ёмкости и различные комплектующие к ним.</p>

        <UIButton>Перейти в каталог</UIButton>
      </div>
      <div class="home-slider">
        <!-- <img src="../assets//images/home-slider.svg" alt="img"> -->
         <!-- <nuxt-img src="/images/home-slider.svg"></nuxt-img> -->
        <!-- <SvgoHomeSlider /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UIButton from '~/components/UI/UIButton.vue'

const { data, pending, error } = await useFetch('https://api.los-bio.ru/info/group/slide')
</script>

<style lang="scss" scoped>
.home {
  padding-top: 80px;
  padding-bottom: 148px;
&-block {
  display: flex;
}
  &-content {
    h1 {
      font-weight: 700;
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 60px;
    }
  }
}
:deep(.btn) {
  padding: 16px 40px;
  border-radius: 12px;
}





.home-slider {
  svg {
    max-width: 100%;
    height: auto;
    fill: currentColor;
  }
}
</style>