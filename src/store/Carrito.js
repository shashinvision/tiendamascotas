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
    totalProductosGet(state) {
      return state.arrayProductos;
    },
  },
  mutations: {
    mostrarCarritoMutation(state) {
      state.carritoState = !state.carritoState;
    },
    addDataCarritoMutation(state, payload) {
      // console.log("Payload de carrito ", payload);
      state.arrayProductos.push(payload);
    },
  },
  actions: {
    mostrarCarritoAction({ commit }) {
      commit("mostrarCarritoMutation");
    },
    addDataCarritoAction({ commit }, payload) {
      commit("addDataCarritoMutation", payload);
    },
  },
};

export default Carrito;
