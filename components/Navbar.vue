<template>

  <!-- Start of navigation -->
  <nav class="md:flex md:justify-between p-4 text-white">

    <!-- Left side of navigation -->
    <div class="flex items-center">
      <!-- Text Logo-->
      <LogoLink :title="$config.PORTFOLIO_NAME" sub-title=".com"/>
    </div>
    <!-- End left side of navigation -->

    <!-- Right side of navigation -->
    <div id="menu-right">
      <!-- 768px and up menu display -->
      <div id="link-effect-selector" class="hidden md:flex items-center space-x-1 font-medium text-xl links link-effect-selector">
        <nuxt-link :to="{ name: 'about' }"><span class="link-effect-selector">About me</span></nuxt-link>
        <nuxt-link :to="{ name: 'blog' }"><span class="link-effect-selector">Blog</span></nuxt-link>
      </div>
      <!-- End 768px display -->

      <!-- Mobile menu toggle (below 768px) -->
      <div class="md:hidden flex items-center">
        <button class="outline-none mobile-menu-button ml-auto transition transform" :class="toggleMenu ? 'rotate-180' : 'rotate-0'" @click="toggleMenu = !toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <!-- End mobile display -->
    </div>
    <!-- End right side of navigation -->

    <!-- Slide/Fade in mobile menu -->
    <transition name="menu-fade">
      <div v-show="toggleMenu" class="md:hidden mobile-menu">
          <ul class="link-effect-selector flex flex-col text-center font-medium text-2xl">
            <nuxt-link :to="{ name: 'about' }"><span class="block link-effect-selector">About me</span></nuxt-link>
            <nuxt-link :to="{ name: 'blog' }"><span class="block link-effect-selector">Blog</span></nuxt-link>
          </ul>
      </div>
    </transition>
    <!-- End Slide/Fade in mobile menu -->

  </nav>
  <!-- End of navigation -->
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      toggleMenu: false
    }
  }
}
</script>
