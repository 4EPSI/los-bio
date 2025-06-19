<template>
  <nav class="breadcrumbs">
    <NuxtLink to="/">Главная</NuxtLink>
    <span class="dot">•</span>
    <NuxtLink to="/projects">Проекты</NuxtLink>
    <span v-if="projectTitle" class="dot">•</span>
    <span v-if="projectTitle" class="current">{{ projectTitle }}</span>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  projectTitle?: string
}>()
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 13px;
  margin-bottom: 38px;
  /* color: #ffffffcc; */
  /* font-size: 16px; */
  a {
    color: var(--text-color);
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-color);
    }
  }
}
.dot {
  color: var(--primary-color);
}
.current {
  color: #ffffff33;
}
</style>