<template>
  <div class="home">
    <SwiperSlider>
      <template #slide-0>
        <div class="home-block">
          <div class="home-content">
            <h1>Автономная канализация для частного дома</h1>
            <p>Производим автономные канализации, очистные сооружения, накопительные ёмкости и различные комплектующие к ним.</p>
    
            <UIButton>Перейти в каталог</UIButton>
          </div>
          <div class="home-slider">
            <nuxt-img
              src="/images/home-slider.svg"
              alt="img"
              class="banner-image"
              :width="364"
              :height="482"
            />
          </div>
        </div>
      </template>

      <template #slide-1>
        123
      </template>
    </SwiperSlider>
  </div>
</template>

<script lang="ts" setup>
import UIButton from '~/components/UI/UIButton.vue'
import SwiperSlider from '~/components/SwiperSlider.vue'

const { data, pending, error } = await useFetch('https://api.los-bio.ru/info/group/slide')


</script>

<style lang="scss" scoped>
.home {
  height: 90vh;
  padding-top: 80px;
  padding-bottom: 148px;
&-block {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
}
  &-content {
    h1 {
      font-weight: 700;
      margin-bottom: 30px;
      line-height: 100%;
    }
    p {
      margin-bottom: 110px;
      line-height: 150%;
    }
  }
  &-slider {
    img {
      height: 100%;
    }
  }
}
:deep(.btn) {
  padding: 16px 40px;
  border-radius: 12px;
}
</style>