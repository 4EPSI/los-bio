<template>
  <div class="features">
    <div
      class="features-item"
      v-for="(feature, index) in features"
      :key="index"
    >
      <span>{{ index + 1 }}</span>
      <div class="features-info">
        <div>{{ feature.title }}</div>
        <p>{{ feature.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  features: { title: string; text: string }[]
}>()
</script>

<style scoped lang="scss">
.features {
  &-item {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      font-size: 10px;
      height: 24px;
      min-width: 24px;
    }
  }

  &-info {
    div {
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
    }

    p {
      font-weight: 400;
    }
  }
}
</style>