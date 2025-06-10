<template>
  <footer class="footer">
    <div class="footer-container container">
      <FooterLogo />

      <FooterSection
        title="КОМПАНИЯ"
        :items="companyLinks"
      />

      <FooterSection
        title="КАТАЛОГ"
        :items="catalogLinks"
      />

      <FooterContacts :contacts="contacts" />
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FooterLogo from './FooterLogo.vue'
import FooterSection from './FooterSection.vue'
import FooterContacts from './FooterContacts.vue'

interface FooterLink {
  label: string
  to: string
} 

const companyLinks: FooterLink[] = [
  { label: 'О компании', to: '#' },
  { label: 'Проекты', to: '#' },
  { label: 'Каталог', to: '#' },
  { label: 'Контакты', to: '#' }
]

const catalogLinks: FooterLink[] = [
  { label: 'КНС', to: '#' },
  { label: 'Ёмкости', to: '#' },
  { label: 'Ливневые очистные сооружения', to: '#' },
  { label: 'Хозяйственно-бытовые очистные сооружения', to: '#' },
  { label: 'Комплектующие', to: '#' }
]

const contacts = [
  { icon: 'icon-phone-bg', label: '+7 (391) 209–57–57', href: 'tel:+73912095757', isLink: true },
  { icon: 'icon-phone-bg', label: '+7 (391) 209–57–57', href: 'tel:+73912095757', isLink: true },
  { icon: 'icon-mail', label: 'los-bio@mail.ru', href: 'mailto:los-bio@mail.ru', isLink: true },
  { icon: 'icon-arrow-right', label: 'Заказать звонок', href: '/', isLink: false }
]
</script>
