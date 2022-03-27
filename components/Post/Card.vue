<template>

  <section class="text-gray-300 body-font overflow-hidden border-b border-gray-700">
    <div class="container px-5 py-4 mx-auto">
      <div class="-my-8 divide-gray-100">
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col md:m-4">
            <span class="uppercase font-bold text-gray-700">{{post.category}}</span>
            <PostDate :created-at="post.createdAt" class="text-gray-500 text-sm mt-1"/>
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
              <img class="object-cover h-48 w-64 rounded-lg shadow-2xl" :src="post.imageUrl">
            </nuxt-link>
          </div>
          <div class="md:flex-grow">
            <h1 class="text-3xl">{{post.title}}</h1>
            <PostTag v-if="post.tags" :tags="post.tags"/>
            <nuxt-content :document="{ body: post.excerpt }"/>
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }" class="float-right">
              <div  class="flex border-b-2 w-32 transition duration-150 border-b-2 border-transparent hover:border-indigo-400 hover:text-gray-300 justify-center text-white">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import PostTag from "~/components/Post/Tag";
export default {
  name: 'PostCard',
  components: {PostTag},
  props: {
    post: {
      required: true,
      type: Object
    }
  }
}

</script>
