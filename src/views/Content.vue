<template>
  <div style="position: relative">
    <div class="row mt-5 pt-5">
      <div class="col-12">
        <h2>
          {{ $route.params.name ? $route.params.name : "Todos los productos" }}
          <br />
        </h2>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4" v-for="producto in productosData" :key="producto.id">
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
    ...mapGetters("ProductosCategorias", {
      getAllProductos: "productosGet",
    }),
    productosData() {
      let data = [];
      for (let i = 0; i < this.getAllProductos.length; i++) {
        if (this.$route.params.name == undefined) {
          data.push(this.getAllProductos[i]);
        } else if (
          this.getAllProductos[i].category.name
            .toLowerCase()
            .includes(this.$route.params.name.toLowerCase()) ||
          this.getAllProductos[i].name
            .toLowerCase()
            .includes(this.$route.params.name.toLowerCase())
        ) {
          data.push(this.getAllProductos[i]);
        } else if (
          this.$route.params.id == this.getAllProductos[i].category.id
        ) {
          data.push(this.getAllProductos[i]);
        }
      }
      return data;
    },
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
