import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由容器
const home = r => require.ensure([], () => r(require('./../pages/home.vue')), 'group1')

// 首页
const index = r => require.ensure([], () => r(require('./../pages/index/index.vue')), 'group2')

// 详情
const details = r => require.ensure([], () => r(require('./../pages/details/index.vue')), 'group3')

// 关于我
const aboutMe = r => require.ensure([], () => r(require('./../pages/about/index.vue')), 'group4')

// 留言墙
const message = r => require.ensure([], () => r(require('./../pages/message/index.vue')), 'group5')

// 自定义定制
const custom = r => require.ensure([], () => r(require('./../pages/custom.vue')), 'group6')

// 归档
const archive = r => require.ensure([], () => r(require('./../pages/archive/index.vue')), 'group7')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/',
      name: 'index',
      component: home,
      children: [
        {path: '/index', component: index, name: '首页列表', meta: {page: 'index'}}
      ]
    },
    {
      path: '/',
      name: 'details',
      component: home,
      children: [
        {path: '/details', component: details, name: '列表详情', meta: {page: 'details'}}
      ]
    },
    {
      path: '/',
      name: 'aboutMe',
      component: home,
      children: [
        {path: '/aboutMe', component: aboutMe, name: '关于作者', meta: {page: 'aboutMe'}}
      ]
    },
    {
      path: '/',
      name: 'message',
      component: home,
      children: [
        {path: '/message', component: message, name: '留言墙', meta: {page: 'message'}}
      ]
    },
    {
      path: '/',
      name: 'custom',
      component: home,
      children: [
        {path: '/custom', component: custom, name: '定制', meta: {page: 'custom'}}
      ]
    },
    {
      path: '/',
      name: 'archive',
      component: home,
      children: [
        {path: '/archive', component: archive, name: '归档', meta: {page: 'archive'}}
      ]
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
