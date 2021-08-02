import Vue from "vue"
import Vuex from "vuex"
import AuthService from "@/services/AuthService"

Vue.use(Vuex)
let authKey = 'auth-pokedex'
let auth = JSON.parse(localStorage.getItem(authKey))

const initialState = {
  user: auth ? auth.user : "",
  isAuthen: auth ? true: false
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    loginSuccess(state, user) {
      state.user = user
      state.isAuthen = true
    },
    logoutSuccess(state) {
      state.user = ""
      state.isAuthen = false
    },
  },
  getters: {
    user: (state) => state.user,
    isAuthen: (state) => state.isAuthen,
  },
  actions: {
    async login ({ commit }, user) {
      let res = await AuthService.login(user)
      if (res.success) {
        commit('loginSuccess', res.user)
      }
      return res
    },
    async register ({ commit }, user) {
      let res = await AuthService.register(user)
      if (res.success) {
        commit('loginSuccess', res.user)
      }
      return res
    },
    logout ({ commit }) {
      AuthService.logout()
      commit('logoutSuccess')
    }
  }
})
