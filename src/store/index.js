import { createStore } from 'vuex'

export default createStore({
  state: {
    retourData: undefined,
  },
  getters: {
  },
  mutations: {
    updateData(state, payload) {
      state.retourData = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
