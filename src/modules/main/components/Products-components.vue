<template>
  <div class="product-main">
    <div class="product-cards">
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="index"
      >
        <img :src="product.image" alt="" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <h3>{{ product.price }}$</h3>
      </div>
    </div>
    <button v-if="products.length === limitValue" @click="loadMoreProducts">
      View more
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      limitValue: 6,
    };
  },
  created() {
    fetch(`https://fakestoreapi.com/products?limit=${this.limitValue}`)
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
  methods: {
    loadMoreProducts() {
      this.limitValue += 3;

      fetch(`https://fakestoreapi.com/products?limit=${this.limitValue}`)
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/products.scss";
</style>
