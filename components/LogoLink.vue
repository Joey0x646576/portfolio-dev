<template>

  <nuxt-link :to="{ name: route }" class="font-bold cursor-pointer text-6xl px-6 z-10 relative w-48">
    <div class="blob bg-indigo-700"></div>
    {{title}}
    <span class="block text-xs">{{subTitle}}</span>
  </nuxt-link>

</template>

<script>

export default {
  name: 'LogoLink',

  props: {
    route: {
      default: 'index',
      type: String,
      required: false
    },
    title: {
      default: '',
      type: String,
      required: true
    },
    subTitle: {
      default: '',
      type: String,
      required: false
    }
  }
}

</script>
