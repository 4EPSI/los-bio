<template>
  <button class="btn"><slot /></button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.btn {
  background: var(--primary-color);
  font-weight: 500;
  font-size: 14px;
  padding: 8px 20px;
  color: var(--text-colors);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #1a5fa5;
  }
}
</style>