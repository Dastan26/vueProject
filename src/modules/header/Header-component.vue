<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <a href="#!" class="header-logo">Logo</a>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu__item">
              <router-link to="/" class="nav-menu__item-link"
                >About</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/" class="nav-menu__item-link">News</router-link>
            </li>
            <li class="nav-menu__item">
              <router-link to="/" class="nav-menu__item-link"
                >Contacts</router-link
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
