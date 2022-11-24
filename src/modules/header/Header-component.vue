<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <router-link to="/" class="header-logo">Logo</router-link>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu__item">
              <router-link to="about" class="nav-menu__item-link"
                >About</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="news" class="nav-menu__item-link"
                >News</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="contacts" class="nav-menu__item-link"
                >Contacts</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/admin" class="nav-menu__item-link"
                >Admin</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/header.scss";
</style>
