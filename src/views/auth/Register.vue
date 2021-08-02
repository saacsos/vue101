<template>
  <div class="mx-auto w-full max-w-md">
    <h1 class="text-3xl bold p-4">
      Registration
    </h1>

    <form
      @submit.prevent="register"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block float-left text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="inline-block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          autocomplete="off"
          v-model="form.username"
          placeholder="Username"
        />
      </div>
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
          placeholder="At least 8 characters with UPPER, lower, digit and special character"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="register"
        >
          Register
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
        username: "",
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async register() {
      // let res = await AuthService.register(this.form)
      let res = await AuthUser.dispatch('register', this.form)

      if (res.success) {
        await this.$swal("Register success", "", "success")
        this.$router.push('/pokedex')
      } else {
        await this.$swal("Register failed", res.message, "error")
        
      }
    },
  },
}
</script>

<style></style>
