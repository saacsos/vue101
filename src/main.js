import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSwal from "vue-swal"

Vue.use(VueAxios, axios)
Vue.use(VueSwal)

import "@/assets/styles/tailwind.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
