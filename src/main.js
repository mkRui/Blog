// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './layout/App.vue'
import router from './router'
import store from './store/index'
import './assets/scss/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import 'highlight.js/styles/github.css'
import * as filters from './filter'

Vue.config.productionTip = false

Vue.use(VueSimplemde)

Vue.use(ElementUI)

// 全局实例化过滤器
Object.keys(filters).forEach((item) => {
  Vue.filter(item, filters[item])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
