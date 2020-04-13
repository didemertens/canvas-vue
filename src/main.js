import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import store from './store'
import SearchBar from "./components/SearchBar"
import PoemDay from './components/PoemDay'
import RandomPoem from './components/RandomPoem'
import SavedPoems from './components/SavedPoems'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SearchBar },
    { path: '/poemsoftheday', component: PoemDay },
    { path: '/randompoem', component: RandomPoem },
    { path: '/favourites', component: SavedPoems }
  ]
})

new Vue ({
  router,
  store,
  render: h => h(App)
}).$mount('#app')