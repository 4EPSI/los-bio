<template>
  <div class="container header-main">
    <nuxt-link to="/">
      <img src="/images/logo.svg" alt="logo">
    </nuxt-link>

    <NavMenu :menu-items="menuItems" />

    <CallToActionButton>Получить КП</CallToActionButton>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '~/components/Header/NavMenu.vue'
import CallToActionButton from '~/components/UI/CallToActionButton.vue'

const menuItems = [
  { label: 'О компании', to: '/' },
  { label: 'Проекты', to: '/' },
  {
    label: 'Каталог',
    dropdown: true,
    items: [
      { label: 'Категория 1', to: '/' },
      { label: 'Категория 2', to: '/' }
    ]
  },
  { label: 'Контакты', to: '/' }
]
</script>

<style lang="scss" scoped>
.header-main {
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>