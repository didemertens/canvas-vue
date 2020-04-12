import Vuex from 'vuex'
import Vue from 'vue'
import poems from './modules/poems'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    poems
  }
})