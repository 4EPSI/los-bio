<template>
  <div class="swiper-custom-container">
    <Swiper
      :modules="modules"
      @swiper="setSwiper"
      @slide-change="updateCurrentIndex"
      class="custom-swiper"
    >
      <SwiperSlide
        v-for="(_, index) in slideSlotCount"
        :key="index"
      >
        <slot :name="`slide-${index}`" />
      </SwiperSlide>
    </Swiper>

    <div class="custom-pagination" v-if="slideSlotCount > 1">
      <div class="pagination-bullets">
        <div
          v-for="index in slideSlotCount"
          :key="index"
          class="bullet"
          :class="{ active: currentIndex === index - 1 }"
          @click="goToSlide(index - 1)"
        >
          <div class="bullet-inner" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import { ref, computed, useSlots } from 'vue'

const swiperInstance = ref<any>(null)
const currentIndex = ref(0)

const modules = [Pagination]

const setSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const updateCurrentIndex = () => {
  if (swiperInstance.value) {
    currentIndex.value = swiperInstance.value.realIndex
  }
}

const goToSlide = (index: number) => {
  swiperInstance.value?.slideTo(index)
}

const slots = useSlots()
const slideSlotCount = computed(() => {
  return Object.keys(slots).filter((slotName) =>
    /^slide-\d+$/.test(slotName)
  ).length
})
</script>

<style lang="scss" scoped>
.swiper-custom-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.custom-swiper {
  width: 100%;
  height: 100%;
}

.custom-pagination {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 10;
}

.pagination-bullets {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bullet {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #FFFFFF0D;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &-inner {
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }
  
  &.active {
    width: 34px;
    height: 34px;
    
    .bullet-inner {
      width: 12px;
      height: 12px;
    }
  }
}

:deep(.swiper-pagination) {
  display: none;
}
</style>