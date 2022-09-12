import { createRouter, createWebHistory } from 'vue-router'
import PageIndex from '../views/PageIndex.vue'
import PageLogin from '../views/PageLogin.vue'
import PageRegister from '../views/PageRegister.vue'

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      name: 'main',
      path: '/',
      component: PageIndex,
    },
    {
      name: 'login',
      path: '/login:query',
      props: true,
      component: PageLogin,
    },
    {
      name: 'register',
      path: '/register',
      component: PageRegister,
    },
  ],
})
