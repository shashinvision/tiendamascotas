<template>
  <div style="position: relative">
    <div class="row mt-5 pt-5">
      <div class="col-12">
        <h2>
          {{ $route.params.name ? $route.params.name : "Todos los productos" }}
        </h2>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4" v-for="producto in getAllProductos" :key="producto.id">
        <Card
          :dataProducto="producto"
          v-if="$route.params.name == undefined"
        ></Card>
        <Card
          :dataProducto="producto"
          v-else-if="$route.params.id == producto.category.id"
        ></Card>
      </div>
    </div>
    <Modal></Modal>
    <Carrito></Carrito>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import Carrito from "@/components/Carrito.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Card,
    Modal,
    Carrito,
  },
  computed: {
    ...mapGetters("ProductosCategorias", {
      getAllProductos: "productosGet",
    }),
  },
  methods: {
    ...mapActions("ProductosCategorias", {
      allproductosAction: "getProductosAPIAction",
    }),
  },
  mounted() {
    this.allproductosAction();
  },
};
</script>

<style lang="css" scoped></style>
