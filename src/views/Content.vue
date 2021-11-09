<template>
  <div style="position: relative">
    <div class="row mt-5 pt-5">
      <div class="col-12">
        <h2>Categoría 1</h2>
        {{ this.$route.params.id }}
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4" v-for="producto in getAllProductos" :key="producto.id">
        <Card :dataProducto="producto"></Card>
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
    ...mapGetters({
      getAllProductos: "productosGet",
    }),
  },
  methods: {
    ...mapActions({
      allproductosAction: "getProductosAPIAction",
    }),
  },
  mounted() {
    this.allproductosAction();
  },
};
</script>

<style lang="css" scoped></style>
