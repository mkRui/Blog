import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import article from './module/article'

Vue.use(Vuex)

const state = {
  ifDetail: false
}

const getters = {
  ifDetail (state) {
    return state.ifDetail
  }
}

const actions = {
  detailLike ({commit}, data) {
    commit('DETAILLIKE', data)
  }
}

const mutations = {
  DETAILLIKE (state, data) {
    state.ifDetail = data
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    article
  }
})
