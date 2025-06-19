<template>
  <div class="gallery">
    <div class="main-photo">
      <img :src="photos[activeIndex]" alt="Текущее фото" />
      <button @click="nextPhoto">Следующее фото</button>
    </div>
    <div class="thumbnails">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  photos: string[]
}>()

const activeIndex = ref(0)

const nextPhoto = () => {
  activeIndex.value = (activeIndex.value + 1) % props.photos.length
}
</script>

<style lang="scss" scoped>
.gallery {
  max-width: 900px;
  margin: auto;

  .main-photo {
    position: relative;

    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }

    button {
      position: absolute;
      bottom: 16px;
      right: 16px;
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }

  .thumbnails {
    display: flex;
    gap: 1px;
    overflow-x: auto;
    margin-top: 1px;

    img {
      width: 100px;
      height: 60px;
      object-fit: cover;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 6px;

      &.active {
        border-color: #007bff;
      }
    }
  }
}
</style>
