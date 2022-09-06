import { createStore } from 'vuex'

export default createStore({
  state: {
    retourData: undefined,
    RecetteUniq: undefined,
  },
  getters: {
  },
  mutations: {
    updateData(state, payload) {
      state.retourData = payload;
    },
    recepUniq(state, unique) {
      state.RecetteUniq = unique;
    },
    ajoutIngred(state, ajout) {
      state.retourData.element.push(ajout);
    }
  },
  actions: {
  },
  modules: {
  }
})
