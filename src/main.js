import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import store from './store'
import SearchBar from "./components/SearchBar"
import PoemDay from './components/PoemDay'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SearchBar },
    { path: '/poemofday', component: PoemDay }
  ]
})

new Vue ({
  router,
  store,
  render: h => h(App)
}).$mount('#app')