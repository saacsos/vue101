<template>
  <div class="">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-pink-200">
        <tr>
          <th class="hidden md:inline-block px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">#</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Name (JP)</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Type</th>
          <th class="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-blue-200">
        <tr class="hover:bg-yellow-100" v-for="(pokemon, index) in pokemons" :key="index">
          <td class="hidden md:inline-block px-6 py-4 text-left whitespace-nowrap">
            {{ index + 1 }}
          </td>
          <td class="px-6 py-4 text-left whitespace-nowrap"
            v-if="index !== editIndex">
            {{ pokemon.name.english }}
          </td>
          <td class="px-6 py-4 text-left whitespace-nowrap"
            v-if="index !== editIndex">
            {{ pokemon.name.japanese }}
          </td>
          <td class="px-6 py-4 text-left whitespace-nowrap"
            v-if="index !== editIndex">
            {{ joinType(pokemon.type) }}
          </td>
          <td class="px-6 py-4 text-center whitespace-nowrap"
            v-if="index !== editIndex">
            <button class="px-2 bg-blue-100 rounded mx-2"
              @click="openForm(index, pokemon)">
              Edit
            </button>
            <button class="px-2 bg-red-200 rounded mx-2">
              Delete
            </button>
          </td>
          <td class="px-6 py-4 text-left whitespace-nowrap"
            v-if="index === editIndex">
            <input type="text" 
              class="border"
              v-model="form.name.english">
          </td>
          <td class="px-6 py-4 text-left whitespace-nowrap"
            v-if="index === editIndex">
            <input type="text" 
              class="border"
              v-model="form.name.japanese">
          </td>
          <td class="px-6 py-4 text-left whitespace-nowrap"
            v-if="index === editIndex">
            <input type="text" 
              class="border"
              v-model="form.type">
          </td>
          <td class="px-6 py-4 text-center whitespace-nowrap"
            v-if="index === editIndex">
            <button class="px-2 bg-blue-300 rounded mx-2"
              @click="editPokemon(index, pokemon)">
              Update
            </button>
            <button class="px-2 bg-yellow-200 rounded mx-2"
              @click="closeForm()">
              Cancel
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { pokemon } from '@/store/Pokemon'

export default {
  data() {
    return {
      pokemons: [],
      editIndex: -1,
      form: {
        name: {
          english: '',
          japanese: ''
        },
        type: []
      }
    }
  },
  created() {
    this.fetchPokemon()
  },
  methods: {
    async fetchPokemon() {
      await pokemon.dispatch('fetchPokemon')
      this.pokemons = pokemon.getters.pokemons
    },
    openForm(index, pokemon) {
      this.editIndex = index
      this.form.name.english = pokemon.name.english
      this.form.name.japanese = pokemon.name.japanese
      this.form.type = this.joinType(pokemon.type)
    },
    closeForm() {
      this.editIndex = -1;
      this.form = {
        name: {
          english: '',
          japanese: ''
        },
        type: []
      }
    },
    async editPokemon() {
      let payload = {
        index: this.editIndex,
        name: this.form.name,
        type: this.form.type.split(',').map(item => item.trim())
      }
      await pokemon.dispatch('editPokemon', payload)
      this.closeForm()
    },
    joinType(arr) {
      return arr.join(', ')
    }
  }
}
</script>

<style>

</style>