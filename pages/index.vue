<template>
  <div class="container mx-auto">

    <!-- Introduction -->
    <section class="flex flex-col text-center w-full mb-12 text-white space-y-2">
      <h1 class="text-4xl font-medium">Hello! 👋</h1>
      <p class="text-xl">My name is <span class="text-indigo-500">{{$config.PORTFOLIO_NAME}}</span> and I am a software developer from the Netherlands.</p>
      <p class="text-xl">I mostly consume
        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" class="border-dotted border-b border-indigo-500 transition ease-in-out hover:bg-indigo-500 duration-300">C#</a>
        and
        <a href="https://www.php.net/" class="border-dotted border-b border-indigo-500 transition ease-in-out hover:bg-indigo-500 duration-300">PHP</a>
        as a (web)developer. In my spare time I try to expand my horizon.
      </p>
      <p class="mt-4">Currently focusing on going more low level to learn
        <a href="https://en.wikipedia.org/wiki/Assembly_language" class="border-dotted border-b border-indigo-500 transition ease-in-out hover:bg-indigo-500 duration-300">Assembly</a>
        <span class="text-indigo-500">/</span>
        <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" class="border-dotted border-b border-indigo-500 transition ease-in-out hover:bg-indigo-500 duration-300">C++</a>
      </p>
    </section>
    <!-- End introduction -->

    <!-- Tech stacks -->
    <TechStack/>
    <!-- End tech stacks -->

    <!-- Blog posts -->
    <section class="flex flex-col w-full">
      <h3 class="text-lg text-white flex justify-center items-center mx-auto mb-8">Recent blog posts👇</h3>

      <div v-for="(post, index) in posts" :key="index" class="mx-auto w-3/4">
        <PostCard :post="post"/>
      </div>
    </section>
    <!-- End blog posts -->

    <!-- Github repositories -->
    <section class="flex flex-col text-center w-full mb-16 text-white space-y-2 mt-8">
      <h3 class="text-lg text-white flex justify-center items-center mx-auto mb-8">Recent repositories👇</h3>

      <div class="flex flex-wrap w-3/4 mx-auto m-2">
        <template v-if="repositories && repositories.items">
          <div v-for="repository in repositories.items" :key="repository.id" class="w-full md:w-2/4">
            <RepositoryCard :repository="repository" />
          </div>
          <p class="p-12 lg:p-1 lg:flex flex-1 justify-center items-center mt-8 md:mt-0">Do you want to see more? Visit my <a :href="`https://github.com/${$config.GITHUB_USERNAME}`" class="border-dotted border-b border-indigo-500 transition ease-in-out hover:bg-indigo-500 duration-300 ml-1">Github</a></p>
        </template>
        <template v-else>
          <p class="p-1 flex flex-col justify-center items-center mt-8 md:mt-0 w-full text-red-500">Unable to retrieve content for Github user: {{$config.GITHUB_USERNAME}}</p>
        </template>
      </div>
    </section>
    <!-- End Github repositories -->

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({ $content, $axios, $config: { GITHUB_USERNAME } }) {
    const limit = 3;

    // Retrieve content module posts
    const posts = await $content('posts')
      .limit(limit)
      .sortBy('createdAt', 'desc')
      .fetch();

    // Retrieve Github content
    const repositories = await $axios
      .get(`https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+sort:updated&per_page=${limit}`)

    return {
      posts,
      repositories: repositories ? repositories.data : null
    }
  },
}
</script>
