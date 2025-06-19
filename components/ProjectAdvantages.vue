<template>
  <ul class="project-advantages">
    <li
      v-for="(item, index) in items"
      :key="index"
      v-html="item"
    />
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<style scoped lang="scss">
.project-advantages {
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  margin-bottom: 32px;

  li {
    position: relative;
    padding-left: 32px;
    margin-bottom: 22px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 8px;
      height: 8px;
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      background-color: transparent;
    }

    strong {
      font-weight: 700;
    }
  }
}
</style>