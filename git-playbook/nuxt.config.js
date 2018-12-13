const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/ngelika94.github.io/git-playbook'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'git-playbook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: ['mainPath'],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...routerBase,
  plugins: [
    {src: '~/src/plugins/routes.js'},
    {src: '~/src/plugins/components.js'},
    {src: '~/src/plugins/filters.js'},
    {src: '~/src/plugins/vue-tree-navigation', ssr: false}
  ],
  css: [
    { src: '~/src/assets/scss/main.scss', lang: 'sass' },
  ]
}

