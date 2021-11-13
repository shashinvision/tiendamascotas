import Vue from "vue";
import Vuex from "vuex";
import Carrito from "./Carrito.js";
import ProductosCategorias from "./ProductosCategorias.js";
import Modal from "./Modal.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ProductosCategorias,
    Carrito,
    Modal,
  },
});
