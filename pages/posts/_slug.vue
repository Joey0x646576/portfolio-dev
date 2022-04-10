<template>
  <div class="my-6 lg:my-12 container px-6 mx-auto text-white">

    <!-- Return to home -->
    <section class="py-3">
      <nuxt-link :to="{ name: 'blog' }" class="flex gap-2 border-b-2 w-32 transition duration-150 border-b-2 border-transparent hover:border-indigo-400 hover:text-gray-300 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Go back
      </nuxt-link>
    </section>
    <!-- End return to home -->

    <!-- Displays the md file -->
    <section class="content">
      <h1 class="text-6xl font-bold mb-6">{{post.title}}</h1>
      <PostTag :tags="post.tags"/>
      <nuxt-content :document="post" class="prose prose-dark prose-lg mx-auto max-w-none mt-5"/>
    </section>
    <!-- End displays the md file -->

    <!-- Next/Previous page -->
    <div class="flex justify-between mt-6">
      <nuxt-link :to="{ name: 'posts-slug', params: { slug: next && next.path } }">
        <div v-if="next" class="flex gap-2 border-b-2 w-32 transition duration-150 border-b-2 border-transparent hover:border-indigo-400 hover:text-gray-300 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Previous
        </div>
      </nuxt-link>
      <nuxt-link :to="{ name: 'posts-slug', params: { slug: previous && previous.path } }">
        <div v-if="previous" class="flex gap-2 border-b-2 w-32 transition duration-150 border-b-2 border-transparent hover:border-indigo-400 hover:text-gray-300 justify-center">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </nuxt-link>
    </div>
    <!-- End Next/Previous page -->

  </div>
</template>

<script>

export default {
  name: 'PostPage',

  async asyncData({ $content, error, params }) {

    const [previous, next] = await $content().only(['path']).sortBy('createdAt', 'desc').surround(params.slug).fetch();

    const post = await $content(`posts/${params.slug}`).fetch()
    .catch(() => error({
      statusCode: 404,
      message: 'This page does not exist...'
    }));

    return {
      post,
      previous,
      next
    }
  },

  head({$config}) {

    return {
      title: this.post.title,
      meta: [
        { hid: 'title', name: 'title', content: this.post.title},
        { hid: 'description', name: 'description', content: this.post.description},


        { hid: 'og:title', name: 'og:title', content: this.post.title},
        { hid: 'og:description', name: 'og:description', content: this.post.description},
        { hid: 'og:url', property: 'og:url', content: `${this.$config.BASE_URL}/posts/${this.post.slug}` },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:image', property: 'og:image', content: this.post.imageSrc ? this.$config.BASE_URL + require(`~/assets/images/${this.post.imageSrc}`) : null },

        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title},
        { hid: "twitter:description", name: "twitter:description", content: this.post.description },
        { hid: 'twitter:image', property: 'twitter:image', content: this.post.imageSrc ? this.$config.BASE_URL + require(`~/assets/images/${this.post.imageSrc}`) : null },
        { hid: 'twitter:title', property: 'twitter:title', content: `${this.$config.BASE_URL}/posts/${this.post.slug}` },

        {
          property: "article:published_time",
          content: this.post.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.post.updatedAt,
        },
        {
          property: "article:tag",
          content: this.post.tags ? this.post.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${$config.BASE_URL}/posts/${this.$route.params.slug}`,
        },
      ]
    }

  },
}

</script>
