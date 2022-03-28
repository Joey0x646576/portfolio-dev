<template>

<img :src="getImage()" :alt="alt"/>

</template>

<script>

export default {
  name: 'PostImage',

  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  },

  methods: {
    getImage() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }

}

</script>
