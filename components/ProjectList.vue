<template>
  <div class="projects">
    <h2>Проекты</h2>
    <div class="projects-content">
      <div
        class="projects-item"
        v-for="project in data"
        :key="project.id"
      >
        <nuxt-link :to="`/projects/${project.slug}`">
          <div class="projects-image">
            <nuxt-img
              v-if="project.photos?.[0]"
              src="/images/project1.jpg"
              alt="project image"
              width="auto"
              height="auto"
            />
          </div>
          <h4>{{ project.title }}</h4>
          <div class="projects-text">
            {{ project.short_description?.blocks?.[0]?.data?.text || 'Описание отсутствует' }}
          </div>
          <div class="projects-info">
            <span>Тип работы: <span class="projects-info-type">{{ project.works }}</span></span>
          </div>
          <div class="projects-info">
            <span>Заказчик: <span class="projects-info-type">{{ project.customer?.trim() }}</span></span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, pending, error } = useFetch('https://api.los-bio.ru/projects/')

// try {
//   if()
// }

console.log(data.value);

</script>

<style lang="scss" scoped>
.projects {
  margin-bottom: 108px;
  h2 {
    margin-bottom: 90px;
    font-weight: 700;
  }
  &-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  &-item {
    position: relative;
    padding: 38px;
    border-radius: 20px;
    background: #1215237D;
    z-index: 1;
    overflow: hidden;

    h4 {
      margin-bottom: 28px;
    }

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 1px;
      background: linear-gradient(171.41deg, rgba(255, 255, 255, 0.3) -0.7%, rgba(255, 255, 255, 0) 93.44%);
      border-radius: 20px;
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
    }
  }
  &-image {
    margin-bottom: 38px;
    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-text {
    font-size: 18px;
    line-height: 148%;
    color: #FFFFFFCC;
    margin-bottom: 18px;
  }
  &-info {
    font-weight: 400;
    font-size: 16px;
    line-height: 148%;
    border-top: 1px solid #FFFFFF17;
    padding-top: 18px;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
    span {
      color: #FFFFFF4A;
    }
    &-type {
      color: #FFFFFFCC !important;
    }
  }
}
</style>