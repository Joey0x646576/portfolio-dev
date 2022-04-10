<template>
  <div class="my-6 container mx-auto">

    <h3 class="text-lg text-white flex justify-center items-center mx-auto">Blogs posts</h3>

    <div v-for="(post, index) in posts" :key="index" class="mx-auto w-3/4">
      <PostCard :post="post"/>
    </div>

    <div v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>

export default{
  name: 'BlogPage',

  // fetches from the nuxt content module
  async asyncData({ $content }) {
    const limit = 5;
    const page = 1;

    const posts = await $content('posts')
      .limit(limit)
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      page,
      limit,
      posts,
    }
  },

  methods: {
     async visibilityChanged (isVisible) {
      if(!isVisible) return;

       const fetchedPosts = await this.$content()
         .limit(this.limit)
         .sortBy('createdAt', 'desc')
         .skip((this.limit) * (this.page))
         .fetch();

      if(fetchedPosts.length > 0)
        this.page++;

      this.posts = [...this.posts, ...fetchedPosts];
    }
  },
}
</script>
