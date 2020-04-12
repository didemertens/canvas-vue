import axios from 'axios'

const state = {
  searchedPoems: [],
  currentDay: null,
  savedPoems: []
}

const getters = {
  getDay: (state) => state.currentDay,
  getSearchPoems: (state) => state.searchedPoems,
  getSavedPoems: (state) => state.savedPoems
}

const actions = {
  loadPoems: ({ commit }, searchTerm) => {
    axios.get(`http://poetrydb.org/lines/${searchTerm}/.json`)
    .then(response => {
      console.log(response.data)
      commit('setPoems', response.data)
    })
  },
  setDay: ({ commit }) => {
    commit('setDay')
  },
  savePoem: ({ commit }, poem) => {
    commit('savePoem', poem)
  }
}

const mutations = {
  setPoems: (state, poems) => {
    state.searchedPoems = poems
  },
  setDay: () =>  {
    const todayDate = new Date().getDay()
    const dayNumbers = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    state.currentDay = dayNumbers[todayDate]
  },
  savePoem: (state, poem) => {
    state.savedPoems.push(poem)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}