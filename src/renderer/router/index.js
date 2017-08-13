import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/folders',
      name: 'folders-page',
      component: require('@/components/FoldersPage')
    },
    {
      path: '/options',
      name: 'options-page',
      component: require('@/components/OptionsPage')
    }
  ]
})
