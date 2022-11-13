<template>
  <div id="app">
    <header-component></header-component>
    <main-page></main-page>
    <main-page2-component></main-page2-component>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
import MainPage from "./modules/main/Main-page.vue";
export default {
  components: { HeaderComponent, MainPage },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
@import "assets/scss/global.scss";
</style>
