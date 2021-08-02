<template>
  <div class="mx-auto w-full max-w-xs">
    <form @submit.prevent="addPokemon" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Pokemon Name (EN)
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          autocomplete="off"
          v-model="form.name.english"
          placeholder="Pokemon Name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name_jp">
          Pokemon Name (JP)
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="name_jp"
          type="text"
          autocomplete="off"
          v-model="form.name.japanese"
          placeholder="ポケモン名"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
          Pokemon Type
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="type"
          type="text"
          autocomplete="off"
          v-model="form.type"
          placeholder="type1,type2"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="addPokemon"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { pokemon } from "@/store/Pokemon"
export default {
  data() {
    return {
      form: {
        name: {
          english: "",
          japanese: "",
        },
        type: [],
      },
    }
  },
  methods: {
    clearForm() {
      this.form = {
        name: {
          english: "",
          japanese: "",
        },
        type: [],
      }
    },
    async addPokemon() {
      let payload = {
        name: this.form.name,
        type: this.form.type.split(",").map((item) => item.trim()),
      }
      await pokemon.dispatch("addPokemon", payload)
      this.clearForm()
    },
  },
}
</script>

<style></style>
