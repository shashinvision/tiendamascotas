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
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import Carrito from "@/components/Carrito.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 3,
    };
  },
  components: {
    Card,
    Modal,
    Carrito,
  },
  computed: {
    ...mapGetters("ProductosCategorias", {
      getAllProductos: "productosGet",
    }),
    rows() {
      let data;
      if (this.$route.params.name == undefined) {
        data = this.getAllProductos.length;
      } else if (this.$route.params.name || this.$route.params.id) {
        data = this.productosData.length;
      }
      return data;
    },

    productosData() {
      let data = [];
      for (let i = 0; i < this.getAllProductos.length; i++) {
        if (this.$route.params.name == undefined) {
          // Muestra todos los productos
          data.push(this.getAllProductos[i]);
        } else if (
          // Muestra plos productos según la busqueda
          this.getAllProductos[i].category.name
            .toLowerCase()
            .includes(this.$route.params.name.toLowerCase()) ||
          this.getAllProductos[i].name
            .toLowerCase()
            .includes(this.$route.params.name.toLowerCase())
        ) {
          data.push(this.getAllProductos[i]);
        } else if (
          // Muestra los productos según la categoria
          this.$route.params.id == this.getAllProductos[i].category.id
        ) {
          data.push(this.getAllProductos[i]);
        }
      }
      // Paginación
      data = data.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
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
