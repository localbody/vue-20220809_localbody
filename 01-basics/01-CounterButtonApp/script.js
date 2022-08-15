import { createApp, defineComponent } from './vendor/vue.esm-browser.js'

// Создайте Vue приложение

const App = defineComponent({
  name: 'App',

  data() {
    return {
      counter: 0,
    }
  },
})

const app = createApp(App)

const vm = app.mount('#app')
