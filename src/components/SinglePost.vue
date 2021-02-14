<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src="imageUrlFor(post.image).width(480)" />

      <h6>By: {{ post.name }}</h6>
      <div v-html="bodyHtml" class="post" />
    </div>
  </div>
</template>

<script>
import sanity from "../client";
import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;

export default {
  name: "SinglePost",
  data() {
    return {
      loading: true,
      post: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.bodyHtml = blocksToHtml({
            blocks: post.body,
            dataset: sanity.dataset,
            projectId: sanity.projectId,
          });
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
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 42em;
}
h1 {
  text-align: center;
}
h6 {
  color: #aaa;
  padding: 1em;
}
</style>