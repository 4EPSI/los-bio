<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer-logo-block">
        <nuxt-link class="logo" to="/">
          <img src="/images/logo.svg" alt="logo">
        </nuxt-link>
        <div class="footer-company-info">
          <p><span>ООО</span> «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</p>
          <p><span>ИНН:</span> 2463123719 <span class="footer-kpp">КПП:</span> 246301001</p>
          <p><span>ОГРН:</span> 1212400008688</p>
        </div>
      </div>

      <div class="footer-section">
        <h4>КОМПАНИЯ</h4>
        <ul>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Проекты</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>КАТАЛОГ</h4>
        <ul>
          <li><a href="#">КНС</a></li>
          <li><a href="#">Ёмкости</a></li>
          <li><a href="#">Ливневые<br />очистные сооружения</a></li>
          <li><a href="#">Хозяйственно-бытовые<br />очистные сооружения</a></li>
          <li><a href="#">Комплектующие</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>КОНТАКТЫ</h4>
        <ul class="footer-contacts">
          <li><i class="icon-phone-bg"></i> <nuxt-link to="/">+7 (391) 209–57–57</nuxt-link></li>
          <li><i class="icon-phone-bg"></i> <nuxt-link to="/">+7 (391) 209–57–57</nuxt-link></li>
          <li><i class="icon-mail"></i> <nuxt-link class="footer-contacts-link" to="/">los-bio@mail.ru</nuxt-link></li>
          <li><i class="icon-arrow-right"></i> <nuxt-link class="footer-contacts-link" to="/">Заказать звонок</nuxt-link></li>
        </ul>
        <button class="footer-btn">Получить КП</button>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(187.91deg, #090B1A 10.06%, #060B17 90.18%);
  padding: 90px 0;

  &-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    align-items: start;
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
  }

  &-logo-block {
    // max-width: 300px;

    .logo {
      margin-bottom: 30px;
      display: block;
    }

    .footer-company-info {
      p {
        font-size: 14px;
        color: var(--text-color);
        font-weight: 500;
        &:first-child {
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 600;
        }
        span {
          color: #FFFFFF54;
        }
      }
    }
  }
  &-kpp {
    margin-left: 12px;
  }

  &-section {
    // min-width: 180px;

    h4 {
      font-weight: 600;
      font-size: 18px;
      color: var(--text-color);
      margin-bottom: 20px;
      text-transform: uppercase;
    }

    ul {
      li {
        margin-bottom: 20px;
        color: #FFFFFFCC;
        font-weight: 400;
        font-size: 16px;
        transition: all .3s ease;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          color: var(--primary-color)
        }
      }
    }
  }

  &-contacts {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      i {
        color: #519ADD;
        margin-right: 8px;
        height: 16px;
      }

      .icon {
        margin-right: 10px;
      }
    }
    &-link {
      text-decoration: underline;
    }
  }

  &-btn {
    margin-top: 20px;
    background-color: #2e7dd1;
    border: none;
    color: var(--text-color);
    padding: 8px 28px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #1a5fa5;
    }
  }
}
</style>