<template>
  <div class="home">
    <h1>Welcome to your Vue + Sanity Blog</h1>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div v-for="post in posts" class="post-item" :key="post._id">
          <router-link :to="`/blog/${post.slug.current}`">
            <h2>{{ post.title }}</h2>
          </router-link>
          <p>{{post.excerpt}}</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt
}[0...50]`;

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
.home h1{
    text-align: center;

}
.container {
  margin: 0 auto;
  max-width: 42em;
  width: 100%;
}
.post-item {
  box-sizing: border-box;
}
</style>