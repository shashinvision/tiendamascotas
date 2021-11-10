const Modal = {
  namespaced: true,
  state: {
    dataModalState: {},
  },
  getters: {
    dataModalGet(state) {
      return state.dataModalState;
    },
  },
  mutations: {
    cargaDataModalMutation(state, payload) {
      // console.log("cargaDataModalMutation", payload);
      state.dataModalState = payload;
    },
  },
  actions: {
    cargaDataModalAction({ commit }, payload) {
      // console.log("Data del action", payload);
      commit("cargaDataModalMutation", payload);
    },
  },
};

export default Modal;
