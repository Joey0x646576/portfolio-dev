<template>

  <div>
    <span
      v-for="tag of tags" :key="tag"
      class="bg-opacity-40 text-slate-50 text-sm rounded bg-indigo-700 mr-1 px-1"
    >
      #{{ tag }}
    </span>
  </div>

</template>

<script>

export default {
  name: 'PostTag',

  props: {
    tags: {
      required: true,
      type: Array,
    }
  },
}
</script>
