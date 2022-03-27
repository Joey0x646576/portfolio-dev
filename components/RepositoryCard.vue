<template>
  <div class="flex p-1">
    <a :href="repository.html_url" class="w-full border rounded-lg border-gray-700 p-5 shadow hover:bg-midnight delay-100 duration-200">

      <!-- Repository user image/title -->
      <div class="flex flex-row">
        <img :src="repository.owner.avatar_url" class="rounded w-16" />
        <p class="ml-3">
          <span class="text-gray-500 font-semibold">{{repository.owner.login}}/</span>
          <span class="text-gray-300 font-semibold">{{ repository.name }}</span>
        </p>
      </div>

      <!-- Repository description -->
      <p class="text-xs text-gray-500 mt-3 h-8">
        {{repository.description}}
      </p>

    </a>
  </div>
</template>


<script>
export default {
  name: 'RepositoryCard',

  props: {
    repository: {
      required: true,
      type: Object
    }
  }
}
</script>
