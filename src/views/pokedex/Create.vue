<template>
  <div class="mx-auto w-full max-w-xs">
    <h1 class="text-3xl bold p-4">
      Add New Pokedex
    </h1>

    <form
      @submit.prevent="addPokemon"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Pokemon Name (EN)
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          autocomplete="off"
          v-model="form.name"
          placeholder="Pokemon Name"
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
import PokedexApiStore from "@/store/PokedexApi"
import AuthUser from "@/store/AuthUser"

export default {
  data() {
    return {
      form: {
        name: "",
        type: "",
      },
    }
  },
  mounted() {
    if (!this.isAuthen()) {
      this.$swal("Restricted Area", "You have no permission", "warning")
      return this.$router.push('/pokedex')
    }
  },
  methods: {
    clearForm() {
      this.form = {
        name: "",
        type: "",
      }
    },
    async addPokemon() {
      if (this.form.type.trim() !== "" && this.form.name.trim() !== "") {
        let payload = {
          name: this.form.name,
          type: this.form.type.split(",").map((item) => item.trim()),
        }
        let res = await PokedexApiStore.dispatch("addPokemon", payload)
        if (res.success) {
          this.clearForm()
          this.$router.push("/pokedex")
        } else {
          console.log(res)
          this.$swal("An error occurred", res.message, "error")
        }
      } else {
        this.$swal("Data is required", "Please type your data", "info")
      }
    },
    isAuthen() {
      return AuthUser.getters.isAuthen
    }
  },
}
</script>

<style></style>
