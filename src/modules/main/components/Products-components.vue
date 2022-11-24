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
    <button v-if="getProducts.length === limitValue" @click="loadMoreProducts">
      View more
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      limitValue: 6,
    };
  },

  computed: mapGetters(["getProducts"]),

  created() {
    this.$store.dispatch("allProducts", this.limitValue);
  },
  methods: {
    loadMoreProducts() {
      this.limitValue += 3;

      this.$store.dispatch("allProducts", this.limitValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/products.scss";
</style>
