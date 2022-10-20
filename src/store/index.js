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
    },
    ajoutrecette(state, ajout) {
      state.retourData.recettes.push(ajout);
    }

  },
  actions: {
    recupRecettes(contexte) {
      if (this.state.retourData == undefined) {
        fetch(process.env.VUE_APP_CON_URL + "/recipe")
          .then(data => data.json())
          .then(data => {
            contexte.commit('updateData', data);
          })
      }
    }
  },
  modules: {
  }
})
