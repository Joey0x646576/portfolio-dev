export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.PORTFOLIO_TITLE,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.PORTFOLIO_DESCRIPTION },
      { name: 'format-detection', content: 'telephone=no' },
      /* Twitter */
      {hid: "twitter:card", name: "twitter:card", content: "summary"},
      {hid: "twitter:site", name: "twitter:site", content: process.env.PORTFOLIO_TWITTER},
      {hid: "twitter:title", name: "twitter:title", content: process.env.PORTFOLIO_TITLE},
      {hid: "twitter:description", name: "twitter:description", content: process.env.PORTFOLIO_DESCRIPTION},
      {hid: "twitter:image", name: "twitter:image", content: '/favicon.ico'},
      /* Open-Graph */
      {hid: "og:type", name: "og:type", content: "website"},
      {hid: "og:site_name", name: "og:site_name", content: process.env.PORTFOLIO_TITLE},
      {hid: "og:description", name: "og:description", content: process.env.PORTFOLIO_DESCRIPTION},
      {hid: "og:image", name: "og:image", content: '/favicon.ico'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'true' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700;900&display=swap' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-observe-visibility', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics'
  ],

  colorMode: {
    classSuffix: '',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/moment',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Sitemap Configuration: https://sitemap.nuxtjs.org/usage/sitemap-options#from-a-function-which-returns-a-promise
  sitemap: {
    hostname: process.env.BASE_URL,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const posts = await $content()
        .only(['path'])
        .fetch()

      return posts.map((p) => p.path)
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
    PORTFOLIO_NAME: process.env.PORTFOLIO_NAME,
    PORTFOLIO_TITLE: process.env.PORTFOLIO_TITLE,
    PORTFOLIO_DESCRIPTION: process.env.PORTFOLIO_DESCRIPTION,
    PORTFOLIO_DOB: process.env.PORTFOLIO_DOB,
    PORTFOLIO_TWITTER: process.env.PORTFOLIO_TWITTER,
    PORTFOLIO_LINKEDIN: process.env.PORTFOLIO_LINKEDIN,

    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
}
