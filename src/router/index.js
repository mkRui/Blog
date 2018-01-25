import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/pages/index')
const details = () => import('@/pages/details')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: 'details',
      name: 'details',
      component: details
    }
  ]
})
