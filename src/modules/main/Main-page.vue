<template>
  <main class="main">
    <section class="hero">
      <div class="container">
        <div class="hero-wrapper">
          <h1 class="hero-title">The Trail Runner SWT Is Here</h1>
          <p class="hero-text">Durable. Comfortable. Ready to get dirty.</p>
          <div class="hero-btns">
            <button class="hero-btn">Shop Men</button>
            <button class="hero-btn">Shop Women</button>
          </div>
        </div>
      </div>
    </section>

    <section class="main-2">
      <main-page2-components></main-page2-components>
    </section>

    <section class="products">
      <h2 class="products-title"></h2>
      <products-components></products-components>
    </section>

    <section class="main-3">
      <nature-components></nature-components>
    </section>
  </main>
</template>

<script>
import ProductsComponents from "./components/Products-components.vue";
import MainPage2Components from "./components/Main-page2-component.vue";
import NatureComponents from "./components/Nature-components.vue";
export default {
  components: {
    ProductsComponents,
    MainPage2Components,
    NatureComponents,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
</style>
