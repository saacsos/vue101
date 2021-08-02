<template>
  <div class="mx-auto w-full max-w-md">
    <h1 class="text-3xl bold p-4">
      Login
    </h1>

    <form
      @submit.prevent="login"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block float-left text-gray-700 text-sm font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          autocomplete="off"
          v-model="form.email"
          placeholder="your.email@example.com"
        />
      </div>
      <div class="mb-4">
        <label
          class="block float-left text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          autocomplete="off"
          v-model="form.password"
          placeholder=""
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="login"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import AuthService from "@/services/AuthService"
import AuthUser from "@/store/AuthUser"

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async login() {
      // let res = await AuthService.login(this.form)
      let res = await AuthUser.dispatch('login', this.form)
      if (res.success) {
        this.$router.push('/pokedex')
      } else {
        this.$swal("Login failed", res.message, "error")
      }
    }
  }
}
</script>

<style></style>
