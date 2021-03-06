const pkg = require('./package');

module.exports = {
  mode: 'spa',
  loadingIndicator: 'pulse',
  generate: {
    routes: ['404'],
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Intempio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          '//www.socialintents.com/api/socialintents.1.3.js#2c9fa563613f226f016142ba9b42018a',
        async: 'async',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    // Simple usage
    ['nuxt-buefy', { materialDesignIcons: false }],
    '@nuxtjs/sentry',
  ],
  sentry: {
    dsn: process.env.SENTRY_PUBLIC_KEY,
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
