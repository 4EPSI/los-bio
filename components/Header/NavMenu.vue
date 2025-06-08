<template>
  <nav class="nav-menu" :class="{ open: isOpen }">
    <template v-for="item in menuItems" :key="item.label">
      <div v-if="item.dropdown" class="dropdown" @click="toggleDropdown(item.label)">
        <span class="dropdown-toggle">
          {{ item.label }}
          <i class="icon-arrow-down" :class="{ rotated: openedDropdown === item.label }" />
        </span>
        <div class="dropdown-menu" v-show="openedDropdown === item.label">
          <nuxt-link v-for="subItem in item.items" :key="subItem.label" :to="subItem.to">
            {{ subItem.label }}
          </nuxt-link>
        </div>
      </div>
      <nuxt-link v-else :to="item.to" @click="$emit('close')">{{ item.label }}</nuxt-link>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type SubItem = { label: string; to: string }
type MenuItem = {
  label: string
  to?: string
  dropdown?: boolean
  items?: SubItem[]
}

defineProps<{
  menuItems: MenuItem[]
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const openedDropdown = ref<string | null>(null)

const toggleDropdown = (label: string) => {
  openedDropdown.value = openedDropdown.value === label ? null : label
}
</script>

<style scoped lang="scss">
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 4vw, 56px);

  a,
  .dropdown-toggle {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-color);
    }
  }

  .dropdown {
    position: relative;

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: #000;
      padding: 10px;
      border-radius: 4px;
      z-index: 10;
      display: none;
    }

    &:hover .dropdown-menu {
      display: block;
    }
  }

  .icon-arrow-down {
    margin-left: 6px;
    color: #ffffff40;
    transition: transform 0.3s ease;
  }

  .rotated {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    background: #000;
    padding: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: none;

    &.open {
      display: flex;
    }

    .dropdown-menu {
      position: static;
      display: block;
      padding-left: 16px;
    }
  }
}
</style>