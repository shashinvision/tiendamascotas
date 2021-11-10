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
    addDataCarritoMutation(state, payload) {
      alert("En la mutacion");
      console.log("Payload de carrito ", payload);
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
