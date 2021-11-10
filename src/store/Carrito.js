const Carrito = {
  namespaced: true,
  state: {
    carritoState: false,
  },
  getters: {
    carritoStadoGet(state) {
      return state.carritoState;
    },
  },
  mutations: {
    mostrarCarritoMutation(state) {
      state.carritoState = !state.carritoState;
    },
  },
  actions: {
    mostrarCarritoAction({ commit }) {
      commit("mostrarCarritoMutation");
    },
  },
};

export default Carrito;
