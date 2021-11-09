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
  },

  modules: {},
});
