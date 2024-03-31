/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'
// Translations provided by Vuetify
import { ar, en } from 'vuetify/locale'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  locale: {
    locale: 'en',
    fallback: 'ar',
    messages: { en, ar },
  },
  theme: {
    // defaultTheme:'dark',
    themes: {
      light: {
        colors: {
          primary: '#ecf5f4',
          secondary: '#34394c',
        },
      },
      dark: {
        colors: {
          primary: '#111111',
          secondary: '#589195',
        },
      }
    },
  },
})

