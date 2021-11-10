<template>
  <div>
    <hr />
    <div class="row">
      <div class="col-12">
        <b>Nombre Producto:</b
        ><span>{{ producto.dataModal.dataProducto.name }}</span>
      </div>
    </div>
    <div class="row flex-row">
      <div class="col-3">
        <b>Precio:</b>
        <span> ${{ producto.dataModal.dataProducto.price }} </span>
      </div>
      <div class="col-4">
        <div class="d-flex mb-2">
          <button @click="minus">
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
          />
          <button @click="plus">
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
    },
    plus() {
      this.producto.dataModal.cantidadProductos++;
      this.subTotalResult();
    },
    subTotalResult() {
      this.subTotalData =
        this.producto.dataModal.cantidadProductos *
        this.producto.dataModal.dataProducto.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
