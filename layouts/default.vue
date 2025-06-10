<template>
  <div class="layout">
    <Header />
    <div class="container">
      <main class="main-content">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/footer/Footer.vue'
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px 0;
}
</style>