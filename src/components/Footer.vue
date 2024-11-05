<template>
  <footer class="footer container">
    <div class="content">
      <div class="row">
        <div class="column column-1">
          <div class="resident">
            <img :src="'footer-logo.png'" alt="Logo" />
            <button type="button" class="resident-button">
              Стать резидентом
            </button>
          </div>
        </div>
        <div class="column column-2">
          <BoxList
            caption="Контакты"
            :items="[
              '+7 (8652) 53-45-20',
              'Республика Татарстан, г. Набережные Челны, Производственный проезд. д. 45',
              'kip-master@kamaz.ru',
              'Telegram',
            ]"
            :icons="['phone', 'location', 'contact', 'telegram']"
          />
        </div>
        <div class="column column-3">
          <BoxList
            caption="О компании"
            :items="[
              'О нас',
              'История',
              'Руководство',
              'Реквизиты',
              'Поставщикам',
              'Комплаенс',
            ]"
          />
        </div>
        <div class="column column-4">
          <BoxList
            caption="Экосистема"
            :items="[
              'HR',
              'Учебный центр',
              'Закупочные сервисы',
              'Услуги связи',
              'Экология',
              'Общественные пространства',
              'Господдержка',
              'Маркетинг',
            ]"
          />
        </div>
        <div class="column column-5">
          <BoxList
            caption="Резиденты"
            :items="['Каталог резидентов', 'Каталог продукции']"
          />
        </div>
        <div class="column column-6">
          <BoxList
            caption="Пресс-центр"
            :items="[
              'События',
              'КИП Мастер в СМИ',
              'Презентационные материалы',
            ]"
          />
        </div>
      </div>
      <Divider :height="1" :margin="[24, 24]" color="#4b7093" />
      <div class="footer-bottom">
        <h4 class="politics">Политика конфиденциальности</h4>
        <p class="rights">© КИП Мастер 2023</p>
        <p class="dev">Разработано в Air Production</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BoxList from "./BoxList.vue"
import Divider from "./Divider.vue"
</script>

<style lang="scss">
.footer {
  background: $bg-footer;

  .resident-button {
    border: 1px solid #667683;
    border-radius: 36px;
    padding: 11px 16px;
    color: $fc-header;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    width: 169px;
  }

  .resident {
    gap: 24px;
    display: flex;

    img {
      width: 106px;
      height: 40px;
    }
  }

  .footer-bottom {
    .dev,
    .rights,
    .politics {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    .politics {
      color: white;
    }

    .dev,
    .rights {
      color: #7493b0;
    }
  }

  @media screen and (max-width: $mobile) {
    height: 100%;

    .content {
      padding-top: 24px;
      padding-bottom: 24px;
    }

    .resident {
      justify-content: space-between;
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  @media screen and (min-width: $min-tablet) {
    .resident {
      flex-direction: column;
      margin-top: 17px;
    }

    .content {
      padding-top: 32px;
      padding-bottom: 32px;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .politics {
        order: 2;
      }

      .dev {
        order: 3;
      }
    }

    .row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px 40px;

      .column-1 {
        order: 1;
      }

      .column-2 {
        order: 3;
      }

      .column-3 {
        order: 2;
      }

      .column-4 {
        order: 4;
      }

      .column-5 {
        order: 6;
      }

      .column-6 {
        order: 5;
      }
    }
  }

  @media screen and (min-width: $desktop) {
    min-height: 466px;

    .content {
      padding-top: 80px;
    }

    .resident {
      position: relative;
      top: -22px;
    }

    .footer-bottom {
      gap: 84px;

      .politics {
        flex-grow: 1;
      }
    }

    .row {
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(6, 1fr);
      gap: 24px;

      .column-1 {
        order: 1;
      }

      .column-2 {
        order: 6;
      }

      .column-3 {
        order: 4;
      }

      .column-4 {
        order: 2;
      }

      .column-5 {
        order: 3;
      }

      .column-6 {
        order: 5;
      }
    }
  }
}
</style>
