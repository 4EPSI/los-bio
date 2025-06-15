<template>
  <nav class="nav-menu" :class="{ open: isOpen }">
    <template v-for="item in menuItems" :key="item.label">
      <div
        v-if="item.dropdown"
        class="dropdown"
        :class="{ 'is-open': openedDropdown === item.label }"
        ref="dropdownRef"
        @click="toggleDropdown(item.label)"
      >
        <span class="dropdown-toggle">
          {{ item.label }}
          <svgoArrowDown class="icon-arrow-down" :class="{ rotated: openedDropdown === item.label }" />
        </span>
        <div class="dropdown-menu" v-show="openedDropdown === item.label">
          <nuxt-link
            v-for="subItem in item.items"
            :key="subItem.label"
            :to="subItem.to"
            @click="$emit('close')"
          >
            {{ subItem.label }}
          </nuxt-link>
        </div>
      </div>

      <nuxt-link
        v-else
        :to="item.to"
        class="nav-link"
        @click="$emit('close')"
      >
        {{ item.label }}
      </nuxt-link>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClickOutside } from '~/composables/useClickOutside'

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

// const dropdownRef = ref<HTMLElement | null>(null)
const openedDropdown = ref<string | null>(null)

const toggleDropdown = (label: string) => {
  openedDropdown.value = openedDropdown.value === label ? null : label
}

useClickOutside(
  () => document.querySelector('.dropdown.is-open') as HTMLElement | null,
  () => {
    openedDropdown.value = null
  }
)
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

    &:hover .dropdown-toggle {
      color: var(--primary-color);

      .icon-arrow-down {
        fill: var(--primary-color);
      }
    }

    &:hover .dropdown-menu {
      display: block;
    }

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
        padding: 8px 12px;
        color: white;

        &:hover {
          color: var(--primary-color);
        }
      }
    }

    &.is-open .dropdown-menu {
      display: block;
    }
  }

  .dropdown-toggle {
    &:hover {
      color: var(--primary-color);
    }
  }

  .icon-arrow-down {
    margin-left: 6px;
    width: 16px;
    height: 16px;
    fill: #ffffff40;
    transition: transform 0.3s ease, fill 0.3s ease;
  }

  .rotated {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background: #000;
    padding: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: none;
    gap: 16px;

    &.open {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dropdown {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover .dropdown-menu {
        display: none;
      }

      .dropdown-menu {
        display: none;
        position: static;
        padding: 10px 0 0 12px;
        background: transparent;

        a {
          padding: 8px 0;
        }
      }

      &.is-open .dropdown-menu {
        display: block;
      }
    }

    a,
    .dropdown-toggle {
      font-size: 18px;
    }

    .icon-arrow-down {
      width: 18px;
      height: 18px;
    }
  }
}
</style>