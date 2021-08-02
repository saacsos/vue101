import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Pokemon from "@/views/PokemonList"
import PokedexIndex from "@/views/pokedex/Index"
import PokedexCreate from "@/views/pokedex/Create"
import Register from "@/views/auth/Register"
import Login from "@/views/auth/Login"
import Logout from "@/views/auth/Logout"

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: Pokemon,
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: PokedexIndex,
  },
  {
    path: "/pokedex/create",
    name: "PokedexCreate",
    component: PokedexCreate,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
