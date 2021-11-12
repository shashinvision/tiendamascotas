<template>
  <div>
    <hr />
    <div class="row">
      <div class="col-12">
        <b>Nombre Producto: </b
        ><span>{{ producto.dataModal.dataProducto.name }}</span>
      </div>
    </div>
    <div class="row flex-row">
      <div class="col-3">
        <b>Precio: </b>
        <span>${{ producto.dataModal.dataProducto.price }} </span>
      </div>
      <div class="col-4">
        <div class="d-flex mb-2">
          <button
            @click="minus"
            :disabled="producto.dataModal.cantidadProductos <= 0"
          >
            <b-iconstack font-scale="1">
              <b-icon stacked icon="cart-dash" variant=""></b-icon>
            </b-iconstack>
          </button>
          <input
            class="quantity w-25"
            min="0"
            name="quantity"
            v-model="producto.dataModal.cantidadProductos"
            type="number"
            readonly
          />
          <button
            @click="plus"
            :disabled="
              producto.dataModal.cantidadProductos >=
              producto.dataModal.dataProducto.stock
            "
          >
            <b-iconstack font-scale="1">
              <b-icon stacked icon="cart-plus" variant=""></b-icon>
            </b-iconstack>
          </button>
        </div>
      </div>
      <div class="col-3">
        <b>Subtotal:</b>
        <span> ${{ subTotalData > 0 ? subTotalData : subTotal }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    producto: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return { subTotalData: 0 };
  },
  computed: {
    subTotal() {
      return (
        this.producto.dataModal.cantidadProductos *
        this.producto.dataModal.dataProducto.price
      );
    },
  },
  methods: {
    minus() {
      this.producto.dataModal.cantidadProductos--;
      if (this.producto.dataModal.cantidadProductos < 0) {
        this.producto.dataModal.cantidadProductos = 0;
      }
      this.subTotalResult();
      this.editCantidadSubtital();
    },
    plus() {
      this.producto.dataModal.cantidadProductos++;
      this.subTotalResult();
      this.editCantidadSubtital();
    },
    subTotalResult() {
      this.subTotalData =
        this.producto.dataModal.cantidadProductos *
        this.producto.dataModal.dataProducto.price;
    },
    ...mapActions("Carrito", {
      cambiarCantidadSubtotal: "cambiarCantidadYSubTotalAction",
    }),
    editCantidadSubtital() {
      let subtotal = this.subTotalData > 0 ? this.subTotalData : this.subTotal;
      //   console.log("Data", this.producto.dataModal.dataProducto.id);
      //   console.log("producto", this.producto.dataModal.cantidadProductos);
      //   console.log("subtotal", subtotal);
      this.cambiarCantidadSubtotal({
        id: this.producto.dataModal.dataProducto.id,
        cantidad: this.producto.dataModal.cantidadProductos,
        subTotal: subtotal,
      });
    },
  },
  mounted() {
    // console.log("Producto", this.producto);
  },
};
</script>

<style lang="scss" scoped></style>
