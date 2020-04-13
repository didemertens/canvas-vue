import axios from 'axios'

const state = {
  loading: true,
  searchedPoems: [],
  currentDay: null,
  savedPoems: []
}

const getters = {
  getLoading: (state) => state.loading,
  getDay: (state) => state.currentDay,
  getSearchPoems: (state) => state.searchedPoems,
  getSavedPoems: (state) => state.savedPoems
}

const actions = {
  changeLoading: ({ commit }) => {
    commit('setLoading')
  },
  loadPoems: ({ commit }, payload) => {
    axios.get(`http://poetrydb.org/${payload.filter}/${payload.search}/.json`)
    .then(response => {
      commit('setPoems', response.data)
      commit('setLoading')
    })
  },
  loadRandomPoem: ({ commit }, payload) => {
    axios.get(`http://poetrydb.org/${payload.filter}/${payload.search}/.json`)
    .then(response => {
      const poem = response.data[Math.floor(Math.random() * response.data.length)]
      if (poem) {
        commit('setPoems', poem)
        commit('setLoading')
      }
      else {
        commit('setPoems', {
          title: 'Not found. Try again!'
        })
        commit('setLoading')
      }
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