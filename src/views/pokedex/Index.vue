<template>
  <div class="m-4">
    <h1 class="text-3xl bold p-4">
      Pokedex
    </h1>

    <div v-if="isAuthen()" class="float-right">
      <router-link
        class="mx-4 py-1 px-4 bg-blue-400 hover:bg-blue-200"
        to="/pokedex/create"
      >
        Add New Pokemon
      </router-link>
    </div>

    <table class="table w-full mt-8">
      <thead>
        <tr class="table-row">
          <th class="table-cell border p-2">No.</th>
          <th class="table-cell border p-2">Name (EN)</th>
          <th class="table-cell border p-2">Type</th>
          <th class="table-cell border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row hover:bg-pink-50" v-for="(poke, index) in pokemons" :key="index">
          <td class="table-cell border p-1">
            {{ index + 1 }}
          </td>
          <td class="table-cell border p-1">
            {{ poke.name }}
          </td>
          <td class="table-cell border p-1">
            {{ poke.types.map((it) => it.name).join(", ") }}
          </td>
          <td class="table-cell border p-1">
            <a href="">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PokedexApiStore from "@/store/PokedexApi"
// import AuthService from "@/services/AuthService"
import AuthUser from "@/store/AuthUser"

export default {
  data() {
    return {
      pokemons: [],
    }
  },
  created() {
    this.fetchPokemon()
  },
  methods: {
    isAuthen() {
      // return AuthService.isAuthen()
      return AuthUser.getters.isAuthen
    },
    async fetchPokemon() {
      await PokedexApiStore.dispatch("fetchPokemon")
      this.pokemons = PokedexApiStore.getters.pokemons
    },
  },
}
</script>

<style></style>
