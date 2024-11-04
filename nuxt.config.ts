import { locales } from "moment"
import { resolve } from "node:path"
import { defaultLocale, lazy } from "yup"
// https://nuxt.com/docs/api/configuration/nuxt-confi
/*
 Make sure to rename the " /nuxt/preview " to the subdirectory where you are gonana upload the project. If you are uploading it in root then chang the /nuxt/preview to '/' or remove.
*/
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  modules: ['@nuxt/image', '@pinia/nuxt', '@vueuse/motion/nuxt',
    '@element-plus/nuxt', '@nuxtjs/i18n'],
  // Used to add the base path of url Example : https://www.spruko.com/ynex-nuxt
  app: {
    baseURL: '/', // Replace with your desired base path
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: "/nuxt/preview/favicon.ico" }]
    },
  },
  ssr: false,
  build: {
    transpile: ["vuetify", 'vue-countup-v3']
  },
  devtools: { enabled: true },
  plugins: [
    { src: "@/plugins/plugins.ts", mode: "client" },
  ],
  i18n: {
    langDir: "locales/",
    lazy: true,
    locales: [
      {
        code: 'en',
        name: 'English(US)',
        file: 'en-US.json',
        image: '/images/flags/us_flag.jpg'
      },
      {
        code: 'kh',
        name: 'ភាសាខ្មែរ',
        file: 'km-KH.json',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png'
      },
    ],
    defaultLocale: 'kh',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      // cookieKey: 'i18n',
      alwaysRedirect: true,
      // redirectOn: 'root'
    },
  },
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/styles/main.sass',
    '@/assets/css/icons.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/styles.css',
  ],
  buildModules: [
    'nuxt-vite'
  ],
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/'),
      'import.meta.env.googleMapsApiKey': JSON.stringify('AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA')
    },
  }
})