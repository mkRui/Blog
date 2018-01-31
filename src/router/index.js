import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const index = () => import('@/pages/index')
const details = () => import('@/pages/details')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
