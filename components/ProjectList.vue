<template>
  <div class="projects">
    <h2>Проекты</h2>
    <div class="projects-content">
      <div class="projects-item">
        <nuxt-link to="/">
          <div class="projects-image">
            <nuxt-img
              src="/images/project1.jpg"
              alt="img"
              width="auto"
              height="auto"
            />
          </div>
          <h4>Проект 1</h4>
          <div class="projects-text">Mauris varius sem lacinia felis pellentesque. Maecenas vulputate tortor mattis consectetur.</div>
          <div class="projects-info">
            <span>Тип работы: <span class="projects-info-type">Строительство станции биологической очистки</span></span>
          </div>
          <div class="projects-info">
            <span>Заказчик:  <span class="projects-info-type">ИП Иван Васильев</span></span>
          </div>
        </nuxt-link>
        
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

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