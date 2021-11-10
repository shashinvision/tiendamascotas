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
      // console.log("Carritoget", state.arrayProductos);
      return state.arrayProductos;
    },
    totalValorYCantidadProductos(state) {
      let dataCantidad = {
        totalCantidad: 0,
        totalValor: 0,
      };

      for (let i = 0; i < state.arrayProductos.length; i++) {
        dataCantidad.totalCantidad +=
          state.arrayProductos[i].dataModal.cantidadProductos;
        dataCantidad.totalValor += state.arrayProductos[i].subTotal;
      }
      return dataCantidad;
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
    cambiarCantidadYSubTotalMutation(state, payload) {
      // console.log("state de carrito ", state);
      // console.log("Payload de carrito ", payload);
      // state.arrayProductos.dataModal.dataProducto.id;
      // state.arrayProductos.dataModal.cantidadProductos;
      // state.arrayProductos.subTotal;
      for (let i = 0; i < state.arrayProductos.length; i++) {
        if (state.arrayProductos[i].dataModal.dataProducto.id == payload.id) {
          state.arrayProductos[i].dataModal.cantidadProductos =
            payload.cantidad;
          state.arrayProductos[i].subTotal = payload.Subtotal;
        }
      }
    },
  },
  actions: {
    mostrarCarritoAction({ commit }) {
      commit("mostrarCarritoMutation");
    },
    addDataCarritoAction({ commit }, payload) {
      commit("addDataCarritoMutation", payload);
    },
    cambiarCantidadYSubTotalAction({ commit }, payload) {
      commit("cambiarCantidadYSubTotalMutation", payload);
    },
  },
};

export default Carrito;
