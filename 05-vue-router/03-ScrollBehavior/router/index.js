import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory('/05-vue-router/03-ScrollBehavior'),

  scrollBehavior(to, from, savedPosition) {
    if (to.meta.saveScrollPosition && from.meta.saveScrollPosition) {
      console.log('saveScrollPosition - прокрутки нет')
      return null
    } else if (from.meta.saveScrollPosition) {
      console.log('saveScrollPosition - прокрутка в 0:0')
      return { left: 0, top: 0 }
    } else if (to.hash) {
      console.log('hash - прокрутка к hash')
      return {
        el: to.hash,
      }
    } else if (savedPosition) {
      console.log('savedPosition - прокрутка к X:Y')
      return savedPosition
    } else {
      console.log('no savedPosition - прокрутка к 0:0')
      return { left: 0, top: 0 }
    }
  },

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/PageMeetups'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      redirect: { name: 'index' },
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      meta: {
        showReturnToMeetups: true,
        saveScrollPosition: true,
      },
      props: true,
      redirect: (to) => ({ name: 'meetup.description', params: to.params }),
      component: () => import('../views/PageMeetup'),
      children: [
        {
          path: '',
          alias: 'description',
          name: 'meetup.description',
          props: true,
          component: () => import('../views/PageMeetupDescription'),
        },
        {
          path: 'agenda',
          name: 'meetup.agenda',
          props: true,
          component: () => import('../views/PageMeetupAgenda'),
        },
      ],
    },
  ],
})
