<template>
  <div>
    <h1>Все проекты</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <nuxt-link :to="`/projects/${project.slug}`">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: projects, error } = await useFetch('https://api.los-bio.ru/projects')

if (error.value) {
  console.error('Ошибка загрузки проектов:', error.value)
}
</script>