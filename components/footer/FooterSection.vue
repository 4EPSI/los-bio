<template>
  <div class="footer-section">
    <h4>{{ title }}</h4>
    <ul>
      <li v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.to">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array
})
</script>