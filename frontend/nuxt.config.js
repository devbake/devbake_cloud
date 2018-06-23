module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "sample",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
  },
  modules: [
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    "~plugins/buefy",
    { src: '~plugins/quill.js', ssr: false }
  ],
  css: [
    // { src: "@/assets/scss/buefy-customize.scss", lang: "sass" },
    { src: "@/assets/scss/quill-preview.scss", lang: "sass" }, // This will load "@/assets/scss/buefy-customize.scss"
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  // Can comment this except Windows system
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // }
};
