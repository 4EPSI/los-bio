<template>
  <div class="home">
    <SwiperSlider>
      <template
        v-for="(slide, index) in slides"
        v-slot:[`slide-${index}`]
      >
        <div class="home-block">
          <div class="home-content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <UIButton>{{ slide.btnText }}</UIButton>
          </div>
          <div class="home-slider">
            <nuxt-img
              :src="`https://api.los-bio.ru/files/${slide.image?.[0]?.catalog}/${slide.image?.[0]?.name}`"
              alt="img"
              class="banner-image"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </template>
    </SwiperSlider>
  </div>
</template>

<script lang="ts" setup>
import UIButton from '~/components/UI/UIButton.vue'
import SwiperSlider from '~/components/SwiperSlider.vue'

const { data, pending, error } = await useFetch('https://api.los-bio.ru/info/group/slide')
const slides = (data.value || []).map((item) => {
  try {
    return JSON.parse(item.value)
  } catch (e) {
    console.error('Ошибка парсинга value:', item.value)
    return null
  }
}).filter(Boolean)

console.log(slides)

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