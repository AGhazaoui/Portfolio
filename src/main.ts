import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

document.title = 'Portfolio'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(vuetify)
app.use(Vue3Toastify, { autoClose: 7000 } as ToastContainerOptions)
app.mount('#app')
