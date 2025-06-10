<template>
  <div class="footer-section">
    <h4>КОНТАКТЫ</h4>
    <ul class="footer-contacts">
      <li v-for="(item, index) in contacts" :key="index">
        <component :is="getSvgIcon(item.icon)" class="svg-icon" :aria-label="`${item.label} icon`" />
        <component
          :is="item.isLink ? 'a' : 'nuxt-link'"
          v-bind="item.isLink ? { href: item.href } : { to: item.href }"
          :class="[
            'footer-contacts-link',
            item.href.startsWith('tel:') ? 'no-underline' : ''
          ]"
        >
          {{ item.label }}
        </component>
      </li>
    </ul>
    <UIButton>Получить КП</UIButton>
  </div>
</template>

<script setup lang="ts">
import UIButton from '~/components/UI/UIButton.vue'
interface ContactItem {
  icon: string
  label: string
  href: string
  isLink?: boolean
}

defineProps<{
  contacts: ContactItem[]
}>()

function getSvgIcon(iconName: string) {
  const componentName = `Svgo${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`;
  return componentName;
}
</script>

<style scoped lang="scss">
.no-underline {
  text-decoration: none !important;
}
:deep(.btn) {
  margin-top: 20px;
}
</style>