<template>
  <a href="/" class="text-9xl font-bold text-white text-center border-dotted border-b border-indigo-500 transition ease-in-out hover:bg-indigo-500 duration-300">

    <h1 v-if="error.statusCode === 404" class="tracking-widest">
      404
      <div class="px-2 text-sm rounded">
        Page Not Found
      </div>
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <p class="mt-2 text-sm">click to go back</p>
  </a>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'errorLayout',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
