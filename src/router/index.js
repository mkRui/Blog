import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const index = () => import('@/pages/index')
const details = () => import('@/pages/details')
const aboutMe = () => import('@/pages/aboutme')
const message = () => import('@/pages/leavmessage')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      name: '首页',
      component: index
    },
    {
      path: '/details',
      name: '文章详情',
      component: details
    },
    {
      path: '/aboutMe',
      name: '关于作者',
      component: aboutMe
    },
    {
      path: '/message',
      name: '留言墙',
      component: message
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
