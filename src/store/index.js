import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carritoState: false,
    API: {
      baseURL: "http://sva.talana.com:8000/api/",
      categorias: "product-category/?format=json",
      productos: "product/?format=json",
    },
    categoriasState: {},
    productosStare: {},
    dataModalState: {},
  },
  getters: {
    carritoStadoGet(state) {
      return state.carritoState;
    },
    categoriaGet(state) {
      return state.categoriasState;
    },
    productosGet(state) {
      return state.productosStare;
    },
    dataModalGet(state) {
      return state.dataModalState;
    },
  },
  mutations: {
    mostrarCarritoMutation(state) {
      state.carritoState = !state.carritoState;
    },
    getCategoriasAPIMutation(state, payload) {
      // console.log("payload mutation", payload);
      state.categoriasState = payload;
    },
    getProductosAPIMutation(state, payload) {
      // console.log("payload mutation", payload);
      state.productosStare = payload;
    },
    cargaDataModalMutation(state, payload) {
      // console.log("cargaDataModalMutation", payload);
      state.dataModalState = payload;
    },
  },

  actions: {
    mostrarCarritoAction({ commit }) {
      commit("mostrarCarritoMutation");
    },
    async getCategoriasAPIAction({ commit }) {
      await fetch(this.state.API.baseURL + this.state.API.categorias, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((payload) => {
          // console.log("URL", payload);
          commit("getCategoriasAPIMutation", payload);
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    async getProductosAPIAction({ commit }) {
      await fetch(this.state.API.baseURL + this.state.API.productos, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((payload) => {
          // console.log("getProductosAPIAction", payload);
          commit("getProductosAPIMutation", payload);
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    cargaDataModalAction({ commit }, payload) {
      // console.log("Data del action", payload);
      commit("cargaDataModalMutation", payload);
    },
  },

  modules: {},
});
