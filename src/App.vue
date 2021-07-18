<template>
  <div id="app">
    <div
      id="nav"
      class="flex items-center justify-between flex-wrap bg-green-400"
    >
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            class="block mt-2 sm:inline-block lg:mt-0 hover:text-white mr-4"
            to="/"
            >Home</router-link
          >
          <router-link
            class="block mt-2 sm:inline-block lg:mt-0 hover:text-white mr-4"
            to="/pokemon"
            >Pokemon</router-link
          >
          <router-link
            class="block mt-2 sm:inline-block lg:mt-0 hover:text-white mr-4"
            to="/about"
            >About</router-link
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #004fff;
    }
  }
}
</style>
