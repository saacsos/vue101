import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"
import AuthService from "@/services/AuthService"

let api_endpoint =
  process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add(state, payload ) {
      state.data.push(payload)
    },
    edit(state, payload ) {
      state.data[payload.index].name = payload.name
      state.data[payload.index].type = payload.type
    },
    delete(state, payload ) {
      state.data.splice(payload.index, 1)
    },
  },
  actions: {
    async fetchPokemon({ commit }) {
      let res = await Axios.get(api_endpoint + "/monsters")
      commit("fetch", { res })
    },
    async addPokemon ({ commit }, payload) {
      // payload.type = ['Fire', 'Water']
      let types = payload.type.map(it => `name_in=${it}`).join('&')

      let type_url = `${api_endpoint}/types?${types}`
      let type_res = await Axios.get(type_url)
      let type_ = type_res.data.map(it => it.id)

      let url = `${api_endpoint}/monsters`
      let body = {
        name: payload.name,
        types: type_
      }
      try {
        let res = await Axios.post(url, body, AuthService.getApiHeader())
        commit("add", res.data)
        return {
          success: true,
        }
      } catch (e) {
        console.error('e', e.response)
        return {
          success: false,
          message: e.response.statusText,
        }
      }
    },
    deletePokemon({ commit }, payload) {
      commit("delete", payload )
    },
    editPokemon({ commit }, payload) {
      commit("edit", payload )
    },
  },
  modules: {},
  getters: {
    pokemons: (state) => state.data,
  },
})
