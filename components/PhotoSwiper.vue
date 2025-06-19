<template>
  <div class="swiper-container">
    <Swiper
      :modules="modules"
      @swiper="setSwiper"
      @slide-change="updateCurrentIndex"
      class="custom-swiper"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <slot name="slide" :slide="slide" :index="index">
          <div class="slide-content">{{ slide }}</div>
        </slot>
      </SwiperSlide>
      
      <!-- Кастомная кнопка "Следующее фото" -->
      <div 
        class="next-photo-btn"
        @click="goToNextSlide"
        v-if="showNextButton && currentIndex < slides.length - 1"
      >
        Следующее фото
      </div>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  },
  showNextButton: {
    type: Boolean,
    default: true
  }
})

const modules = [Navigation]
const swiperInstance = ref<any>(null)
const currentIndex = ref(0)

const setSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const updateCurrentIndex = () => {
  if (swiperInstance.value) {
    currentIndex.value = swiperInstance.value.activeIndex
  }
}

const goToNextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.custom-swiper {
  width: 100%;
  height: 100%;
  
  .next-photo-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 10;
    font-size: 14px;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>