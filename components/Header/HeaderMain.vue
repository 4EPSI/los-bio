<template>
  <div class="container header-main">
    <nuxt-link class="logo" to="/">
      <img src="/images/logo.svg" alt="logo">
    </nuxt-link>

    <NavMenu :menu-items="menuItems" :is-open="isOpen" @close="isOpen = false" />
    
    <CallToActionButton>Получить КП</CallToActionButton>

    <button class="burger" @click="toggleMenu" aria-label="Меню">
      <span :class="{ open: isOpen }"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from '~/components/Header/NavMenu.vue'
import CallToActionButton from '~/components/UI/CallToActionButton.vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

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
.burger {
  display: none;
  background: none;
  border: none;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
  z-index: 1001;

  span,
  span::before,
  span::after {
    content: "";
    display: block;
    height: 3px;
    background: white;
    border-radius: 2px;
    position: absolute;
    transition: 0.3s;
    width: 100%;
  }

  span::before {
    top: -8px;
  }

  span::after {
    bottom: -8px;
  }

  span.open {
    background: transparent;
  }

  span.open::before {
    transform: rotate(45deg);
    top: 0;
  }

  span.open::after {
    transform: rotate(-45deg);
    bottom: 0;
  }
}

.cta-btn {
  z-index: 1000;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .header-main {
    justify-content: unset;
    padding-bottom: 18px;
  }
  .logo {
    margin-right: auto;
  }
  .burger {
    margin-left: 20px;
  }
  .nav-menu {
    top: 100px;
  }
}
@media (max-width: 480px) {
  .logo {
    width: 100px;
  }
  .nav-menu {
    top: 70px;
  }
}
</style>