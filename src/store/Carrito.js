const Carrito = {
  namespaced: true,
  state: {
    carritoState: false,
    arrayProductos: [],
  },
  getters: {
    carritoStadoGet(state) {
      return state.carritoState;
    },
    totalProductos(state) {
      return state;
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
