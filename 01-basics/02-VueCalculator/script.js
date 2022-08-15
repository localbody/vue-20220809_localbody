import { createApp, defineComponent } from './vendor/vue.esm-browser.js'

// Создайте Vue приложение
const App = defineComponent({
  name: 'App',

  data() {
    return {
      value1: null,
      value2: null,
      operator: null,
    }
  },

  computed: {
    result() {
      if (this.operator === 'sum') return this.value1 + this.value2
      else if (this.operator === 'subtract') return this.value1 - this.value2
      else if (this.operator === 'multiply') return this.value1 * this.value2
      else if (this.operator === 'divide') return this.value1 / this.value2
    },
  },
})

const app = createApp(App)

const vm = app.mount('#app')
