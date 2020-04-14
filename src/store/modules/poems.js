import PoemService from '../../services/PoemService'

const state = {
  loading: true,
  searchedPoems: [],
  currentDay: null,
  savedPoems: JSON.parse(localStorage.getItem('savedPoems'))
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
    PoemService.getPoems({search: payload.search, filter: payload.filter })
    .then(response => {
      commit('setPoems', response)
      commit('setLoading')
    })
  },
  loadRandomPoem: ({ commit }, payload) => {
    PoemService.getPoems({search: payload.search, filter: payload.filter })
    .then(response => {
      const poem = response[Math.floor(Math.random() * response.length)]
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
  },
  updateLocalStorage: () => {
    return localStorage.getItem('savedPoems')
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
    const todayNumber = new Date().getDay()
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    state.currentDay = daysOfWeek[todayNumber]
  },
  savePoem: (state, poem) => {
    const localPoems = localStorage.getItem('savedPoems')
    if (localPoems) {
      const updateLocalPoems = JSON.parse(localPoems)
      updateLocalPoems.push(poem)
      localStorage.setItem('savedPoems', JSON.stringify(updateLocalPoems))
    } else {
      localStorage.setItem('savedPoems', JSON.stringify([poem]))
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}