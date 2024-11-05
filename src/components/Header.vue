<template>
  <nav class="navbar">
    <div class="main-content">
      <img :src="'logo.png'" alt="Logo" />
      <nav class="nav-desktop">
        <a
          href="#"
          data-to="kip"
          class="navbar__link nav-desktop-link nav-desktop-link--active"
        >
          <span>Кид</span> </a
        ><a href="#dip" data-to="dip" class="navbar__link nav-desktop-link">
          <span>Дип</span> </a
        ><a href="#skin" data-to="skin" class="navbar__link nav-desktop-link">
          <span>Скин</span> </a
        ><a href="#tpt" data-to="tpt" class="navbar__link nav-desktop-link">
          <span>Тпт</span>
        </a>
      </nav>
    </div>
    <div class="content">
      <div class="search">
        <i class="pi pi-search"></i>
      </div>
      <div class="phone-number">+7 (8552) 53-45-20</div>
      <button type="button" class="resident-button">Стать резидентом</button>
      <button type="button" class="personal-account">
        <div class="icon">
          <i class="pi pi-arrow-right"></i>
        </div>
        <a class="text">Личный кабинет</a>
      </button>
      <button type="button" class="menu-button" @click="toggleNavbar">
        <i class="pi pi-bars"></i>
      </button>
      <div ref="navbar-links" class="navbar__links" @click="setCurrentActive">
        <RouterLink to="/about" class="navbar__link navbar__link--active"
          >О компании</RouterLink
        >
        <RouterLink to="/residents" class="navbar__link">Резиденты</RouterLink>
        <RouterLink to="/ecosystem" class="navbar__link">Экосистема</RouterLink>
        <RouterLink to="/press-center" class="navbar__link"
          >Пресс-центр</RouterLink
        >
        <RouterLink to="/contacts" class="navbar__link">Контакты</RouterLink>
      </div>
      <div class="lang">
        <span>RU</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useTemplateRef } from "vue"

let currentNode = null
const navbarLinks = useTemplateRef("navbar-links")

function removeActiveStyle() {
  Array.from(navbarLinks.value.children).forEach((item) =>
    item.classList.remove("navbar__link--active")
  )
}

function setCurrentActive(event) {
  const target = event.target

  if (currentNode !== target.closest("a")) {
    removeActiveStyle()
    target.closest("a").classList.add("navbar__link--active")
    currentNode = target.closest("a")
  }
}

function toggleNavbar() {
  navbarLinks.value.className === "navbar__links"
    ? (navbarLinks.value.className += " navbar__links--mobile")
    : (navbarLinks.value.className = "navbar__links")
}
</script>

<style lang="scss">
$border-color: #667683;
$link-active: #b9b9b9;

.navbar {
  display: flex;
  justify-content: space-between;
  background: $bg-header;
  color: $fc-header;

  .nav-desktop,
  .resident-button,
  .phone-number {
    display: none;
  }

  .menu-button {
    color: $fc-header;
    width: 24px;
    border: 1px solid $border-color;
    border-radius: 100%;
    justify-content: center;
    align-items: center;

    i {
      margin: auto;
    }
  }

  .main-content {
    img {
      width: 100%;
      height: 100%;
    }

    .nav-desktop {
      display: none;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .personal-account {
    display: flex;
    align-items: center;
    gap: 8px;
    color: $fc-header;

    .icon {
      border: 1px solid $border-color;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 9px;
      width: 18px;
      height: 18px;

      .icon {
        i {
          margin: auto;
        }
      }
    }

    .text {
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
    }
  }

  .lang {
    display: none;
  }

  .navbar__links-desktop {
    display: none;
  }

  @media screen and (max-width: $mobile) {
    min-height: 48px;
    padding: 12px 16px;

    .menu-button {
      display: flex;
      width: 24px;
      height: 24px;

      i {
        font-size: 9px;
      }
    }

    .main-content {
      width: 68px;
      height: 24px;
    }
  }

  @media screen and (min-width: $min-tablet) {
    min-height: 88px;
    padding: 24px 40px;

    .personal-account {
      .text {
        font-size: 14px;
        line-height: 16px;
      }
    }

    .menu-button {
      width: 40px;
      height: 40px;

      i {
        font-size: 12px;
      }
    }

    .main-content {
      width: 108px;
      height: 40px;
    }
  }

  @media screen and (min-width: $desktop) {
    padding: 24px 52px;

    .content {
      gap: 24px;
    }

    .menu-button {
      display: none;
    }

    .resident-button {
      border: 1px solid $border-color;
      border-radius: 36px;
      padding: 11px 16px;
    }

    .resident-button,
    .phone-number {
      color: $fc-header;
      display: block;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
    }

    .lang {
      display: flex;
      color: $fc-header;
      width: 40px;
      height: 40px;
      border: 1px solid $border-color;
      border-radius: 100%;
      justify-content: center;
      align-items: center;

      span {
        margin: auto;
      }
    }

    .main-content {
      display: flex;
      gap: 32px;
    }

    .main-content .nav-desktop {
      display: flex;
      gap: 16px;

      &-link {
        text-transform: uppercase;
        font-size: 12px;
        line-height: 14px;
        background: transparent;

        &:hover,
        &--active {
          color: $link-active;
          background: transparent;
        }
      }
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    display: none;

    &--mobile {
      display: block;
      position: fixed;
      background: $bg-header;
      width: 100%;
      top: 48px;
      left: 0;

      .navbar__link {
        width: 100%;
        height: 48px;
        justify-content: center;
      }
    }

    @media screen and (min-width: $min-tablet) {
      &--mobile {
        top: 88px;
      }
    }
  }

  &__link {
    text-decoration: none;
    text-align: center;
    color: white;
    font-weight: 600;

    display: flex;
    flex-direction: column;

    &:hover,
    &--active {
      background: $link-active;
    }
  }
}
</style>
