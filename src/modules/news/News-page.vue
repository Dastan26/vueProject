<template>
  <div class="news">
    <div class="container">
      <div class="news-items">
        <div class="news-item" v-for="(item, index) in news" :key="index">
          <img :src="item.img" alt="" />
          <h2>{{ item.title }}</h2>
          <div class="news-btns">
            <button>View more</button>
            <button @click="deleteNews" class="news-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: "",
    };
  },

  created() {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },

  methods: {
    deleteNews() {
      fetch("http://localhost:3000/news", {
        method: " DELETE",
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/news.scss";
</style>
