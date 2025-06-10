<template>
  <div class="footer-section">
    <h4>КОНТАКТЫ</h4>
    <ul class="footer-contacts">
      <li v-for="(item, index) in contacts" :key="index">
        <i :class="item.icon"></i>
        <component
          :is="item.isLink ? 'a' : 'nuxt-link'"
          :href="item.isLink ? item.href : undefined"
          :to="!item.isLink ? item.href : undefined"
          :class="[
            'footer-contacts-link',
            item.href.startsWith('tel:') ? 'no-underline' : ''
          ]"
        >
          {{ item.label }}
        </component>
      </li>
    </ul>
    <button class="footer-btn">Получить КП</button>
  </div>
</template>

<script setup lang="ts">
interface ContactItem {
  icon: string
  label: string
  href: string
  isLink?: boolean
}

defineProps<{
  contacts: ContactItem[]
}>()
</script>

<style scoped lang="scss">
.no-underline {
  text-decoration: none !important;
}
</style>