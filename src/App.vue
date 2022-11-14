<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <main-page2-component></main-page2-component>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
export default {
  components: { HeaderComponent },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
@import "assets/scss/global.scss";
</style>
