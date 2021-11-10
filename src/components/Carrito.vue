<template>
  <div class="mt-5 carrito container pt-3" v-show="visible">
    <h3>Resumen de Compra</h3>

    <!-- Producto 1  -->
    <div class="row mb-2">
      <hr />
      <div class="row">
        <div class="col-12">
          <b>Nombre Producto:</b><span>producto xx</span>
        </div>
      </div>
      <div class="row flex-row">
        <div class="col-3">
          <b>Precio:</b>
          <span> $2900. </span>
        </div>
        <div class="col-4">
          <div class="d-flex mb-2">
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              class="minus"
            >
              <b-iconstack font-scale="1">
                <b-icon stacked icon="cart-dash" variant=""></b-icon>
              </b-iconstack>
            </button>
            <input
              class="quantity w-25"
              min="0"
              name="quantity"
              value="1"
              type="number"
            />
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              class="plus"
            >
              <b-iconstack font-scale="1">
                <b-icon stacked icon="cart-plus" variant=""></b-icon>
              </b-iconstack>
            </button>
          </div>
        </div>
        <div class="col-3">
          <b>Subtotal:</b>
          <span> $2900. </span>
        </div>
      </div>
    </div>
    <!-- Producto 2  -->
    <div class="row">
      <hr />
      <div class="row mb-1">
        <div class="col-12">
          <b>Nombre Producto:</b><span>producto xx</span>
        </div>
      </div>
      <div class="row flex-row">
        <div class="col-3">
          <b>Precio:</b>
          <span> $2900. </span>
        </div>
        <div class="col-4">
          <div class="d-flex mb-2">
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              class="minus"
            >
              <b-iconstack font-scale="1">
                <b-icon stacked icon="cart-dash" variant=""></b-icon>
              </b-iconstack>
            </button>
            <input
              class="quantity w-25"
              min="0"
              name="quantity"
              value="1"
              type="number"
            />
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              class="plus"
            >
              <b-iconstack font-scale="1">
                <b-icon stacked icon="cart-plus" variant=""></b-icon>
              </b-iconstack>
            </button>
          </div>
        </div>
        <div class="col-3">
          <b>Subtotal:</b>
          <span> $2900. </span>
        </div>
      </div>
    </div>
    <hr />
    <div class="row d-flex justify-content-center">
      <div class="col-12m w-50 d-flex justify-content-between">
        <p>Sub-Total</p>
        <b>$89.000.</b>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters("Carrito", {
      visible: "carritoStadoGet",
    }),
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.carrito {
  position: absolute;
  left: 50%;
  top: -3%;
  z-index: 1;
  border: 1px solid black;
  width: 50%;
  height: auto;
  background-color: white;
}
</style>
