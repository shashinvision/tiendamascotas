<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li></li>
          </ul>
          <div class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Busca por nombre de producto o caregoría"
              aria-label="Search"
              v-model="dataBusqueda"
              @keyup="busqueda"
            />

            <button
              class="btn btn-outline-success w-50"
              type="submit"
              @click.prevent="verCarrito"
            >
              <b-iconstack font-scale="1">
                <b-icon stacked icon="cart-plus" variant="info"></b-icon>
              </b-iconstack>
              +{{ totalValorYCantidad.totalCantidad }}
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dataBusqueda: "",
    };
  },
  computed: {
    ...mapGetters("Carrito", {
      totalValorYCantidad: "totalValorYCantidadProductos",
    }),
  },
  methods: {
    ...mapActions("Carrito", {
      verCarrito: "mostrarCarritoAction",
    }),
    busqueda() {
      // console.log(this.dataBusqueda);
      this.$router.push({
        name: "Busqueda",
        params: { name: this.dataBusqueda },
      });

      if (this.dataBusqueda == "") {
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.navbar-dark {
  background-color: #151719 !important;
}
</style>
