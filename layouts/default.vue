<template>
  <div class="flex flex-col min-h-screen bg-complex border-t border-indigo-800">

    <div class="flex flex-col container mx-auto flex-grow">
      <Navbar/>

      <div class="flex-grow my-6">
        <Nuxt />
      </div>

      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
}
</script>
