<template>
  <div class="header-top">
    <div class="container">
      <div class="header-top-container">
        <div v-for="contact in contacts" :key="contact.icon" class="header-top-content">
          <i :class="contact.icon" />
          <nuxt-link v-if="contact.type === 'phone' || contact.type === 'email'" :to="contact.link">{{ contact.name }}</nuxt-link>
          <nuxt-link v-else-if="contact.type === 'map'" target="_blank" :to="contact.link">{{ contact.name }}</nuxt-link>
          <nuxt-link v-else-if="contact.type === 'internal'" :to="contact.link">{{ contact.name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Contacts = {
  icon: string
  type: string
  link: string
  name: string
}

const contacts: Contacts[] = [
  {
    icon: 'icon-map',
    type: 'map',
    link: 'https://www.google.com/maps/place/%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+1,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+660062/@56.0239369,92.7998895,17z/data=!3m1!4b1!4m6!3m5!1s0x5cd7adbbd5497179:0xb2524e523e568aa4!8m2!3d56.0239369!4d92.7998895!16s%2Fg%2F11c43xty1b!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D',
    name: 'г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204'
  },
  {
    icon: 'icon-phone',
    type: 'phone',
    link: 'tel:+73912095757',
    name: '+7 (391) 209 57-57'
  },
  {
    icon: 'icon-phone',
    type: 'phone',
    link: 'tel:+73912155433',
    name: '+7 (391) 215 54-33'
  },
  {
    icon: 'icon-email',
    type: 'email',
    link: 'mailto:los-bio@mail.ru',
    name: 'los-bio@mail.ru'
  },
  {
    icon: 'icon-arrow-right',
    type: 'internal',
    link: '/',
    name: 'Заказать звонок'
  }
]
</script>

<style lang="scss" scoped>
.header-top {
  padding: 12px 0 12px 0;
  &-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // gap: 82px;
  }
  border: 1px solid #FFFFFF26;
  &-content {
    display: flex;
    align-items: center;
  }
}
a {
  font-size: 13px;
  font-weight: 400;
  color: #80808c;
  transition: all .3s ease;
  &:hover {
    color: var(--primary-color)
  }
}
i {
  color: var(--primary-color);
  display: block;
  margin-right: 5px;
  &::before {
    font-size: 24px;
  }
}
// @media (max-width: 1024px) {
//   .header-top-container {
//     gap: 20px;
//     justify-content: flex-start;
//   }

//   .header-top-content {
//     width: 48%;
//     margin-bottom: 10px;
//   }
// }

// @media (max-width: 768px) {
//   .header-top-container {
//     flex-direction: column;
//     gap: 12px;
//     align-items: flex-start;
//   }

//   .header-top-content {
//     width: 100%;
//   }

//   .header-top-link {
//     font-size: 14px;
//   }

//   i::before {
//     font-size: 20px;
//   }
// }
</style>