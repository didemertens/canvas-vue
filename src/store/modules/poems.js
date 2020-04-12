import axios from 'axios'

const state = {
  loading: false,
  searchedPoems: [],
  currentDay: null,
  savedPoems: []
}

const getters = {
  getDay: (state) => state.currentDay,
  getSearchPoems: (state) => state.searchedPoems,
  getLoading: (state) => state.loading,
  getSavedPoems: (state) => state.savedPoems
}

const actions = {
  loadPoems: ({ commit }, searchTerm) => {
    commit('setLoading')
    axios.get(`http://poetrydb.org/title/${searchTerm}/.json`)
    .then(response => {
      commit('setPoems', response.data)
      commit('setLoading')
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
  setLoading: (state) => {
    state.loading = !state.loading
  },
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