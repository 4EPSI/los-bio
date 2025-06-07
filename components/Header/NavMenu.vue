<template>
  <nav class="nav-menu">
    <template v-for="item in menuItems" :key="item.label">
      <div v-if="item.dropdown" class="dropdown">
        <span class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
          {{ item.label }} <i class="icon-arrow-down"></i>
        </span>
        <div class="dropdown-menu">
          <nuxt-link
            v-for="(subItem, subIndex) in item.items"
            :key="subItem.label"
            :to="subItem.to"
          >
            {{ subItem.label }}
          </nuxt-link>
        </div>
      </div>
      <nuxt-link v-else :to="item.to">{{ item.label }}</nuxt-link>
    </template>
  </nav>
</template>

<script setup lang="ts">
type SubItem = { label: string; to: string }
type MenuItem = {
  label: string
  to?: string
  dropdown?: boolean
  items?: SubItem[]
}

defineProps<{
  menuItems: MenuItem[]
}>()
</script>

<style scoped lang="scss">
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 4vw, 56px);

  a, .dropdown-toggle {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    position: relative;
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
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: #000;
      padding: 10px;
      border-radius: 4px;
      z-index: 10;

      a {
        display: block;
        padding: 5px 10px;
        white-space: nowrap;
      }
    }

    &:hover .dropdown-menu {
      display: block;
    }
  }
}

.icon-arrow-down {
  display: flex;
  align-items: center;
  margin-left: 6px;
  color: #ffffff40;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
  &::before {
    font-size: 14px;
  }
}

.dropdown:hover .dropdown-toggle .icon-arrow-down {
  transform: rotate(180deg);
}
</style>