<template>
  <header class="header">
    <HeaderTop />
    <HeaderMain />
  </header>
</template>

<script setup>
import HeaderTop from './HeaderTop.vue'
import HeaderMain from './HeaderMain.vue'
</script>

<style lang="scss" scoped>
// .header {
//   padding: 10px 0;
//   background: var(--bg-color);

//   &__container {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }

//   &__logo {
//     display: flex;
//     align-items: center;
//   }

//   &__nav-list {
//     display: flex;
//     gap: 30px;
//     list-style: none;
//   }

//   &__nav-item a {
//     color: var(--text-color);
//     text-decoration: none;

//     &:hover {
//       color: var(--primary-color);
//     }
//   }

//   &__contacts {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//   }

//   &__phone,
//   &__email {
//     color: var(--text-color);
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//     gap: 5px;
//   }
// }
</style>