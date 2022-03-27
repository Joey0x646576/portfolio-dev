<template>
  <span class="font-light">{{createdAtFormat}}</span>
</template>

<script>

export default {
  name: 'PostDate',

  props: {
    createdAt: {
      required: true,
      type: String,
    }
  },

  computed: {
    createdAtFormat() {
      return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(this.createdAt))
    }
  }
}
</script>
