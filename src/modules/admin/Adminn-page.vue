<template>
  <div class="admin">
    <div class="container">
      <div class="admin-wrapper">
        <h2>Add news</h2>
        <h3>Only for admins</h3>
        <form action="" class="form">
          <label for="image">Image URL</label>
          <input type="text" id="image" v-model="news.img" />
          <label for="title">Title</label>
          <input type="text" id="title" v-model="news.title" />
          <label for="description">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            v-model="news.description"
          ></textarea>
          <button type="button" @click="addNews">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        img: "",
        title: "",
        description: "",
      },
    };
  },
  methods: {
    addNews() {
      try {
        fetch("http://localhost:3000/news", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.news),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));

        alert("Новости были успешно добавлены!");
      } catch {
        alert("Ошибка!");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/admin.scss";
</style>
