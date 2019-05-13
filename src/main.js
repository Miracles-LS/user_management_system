import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.prototype.$axios=axios
axios.defaults.baseURL = "http://localhost:3000/"

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
