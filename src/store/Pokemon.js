import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

// let api_endpoint =
//   "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
let api_endpoint = "http://localhost:8080/pokedex.json"

Vue.use(Vuex)

export const pokemon = new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add(state, { payload }) {
      state.data.push(payload)
    },
    edit(state, { payload }) {
      state.data[payload.index].name = payload.name
      state.data[payload.index].type = payload.type
    },
    delete(state, { payload }) {
      state.data.splice(payload.index, 1)
    },
  },
  actions: {
    async fetchPokemon({ commit }) {
      // let res = await Axios.get(api_endpoint)
      // commit("fetch", { res })
    },
    addPokemon({ commit }, payload) {
      commit("add", { payload })
    },
    deletePokemon({ commit }, payload) {
      commit("delete", { payload })
    },
    editPokemon({ commit }, payload) {
      commit("edit", { payload })
    },
  },
  modules: {},
  getters: {
    pokemons: (state) => state.data,
  },
})
