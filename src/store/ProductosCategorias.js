const ProductosCategorias = {
  namespaced: true,
  state: {
    API: {
      baseURL: "http://sva.talana.com:8000/api/",
      categorias: "product-category/?format=json",
      productos: "product/?format=json",
    },
    categoriasState: {},
    productosStare: {},
  },
  getters: {
    categoriaGet(state) {
      return state.categoriasState;
    },
    productosGet(state) {
      return state.productosStare;
    },
  },
  mutations: {
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
    async getCategoriasAPIAction({ commit, state }) {
      await fetch(state.API.baseURL + state.API.categorias, {
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
    async getProductosAPIAction({ commit, state }) {
      await fetch(state.API.baseURL + state.API.productos, {
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
};

export default ProductosCategorias;
