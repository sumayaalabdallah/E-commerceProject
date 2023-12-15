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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
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

