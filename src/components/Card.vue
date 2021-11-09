<template>
  <div>
    <b-card
      title=""
      :img-src="dataProducto.photo"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <ul>
          <li>
            <b>Stock:</b>
            {{ dataProducto.stock ? "Disponible" : "No Disponble" }}
          </li>
          <li><b>Cantidad Stock:</b> {{ dataProducto.stock }}.</li>
          <li><b>Nombre:</b> {{ dataProducto.name }}.</li>
          <li><b>Precio Producto:</b></li>
        </ul>
      </b-card-text>

      <div>
        <div class="d-flex justify-content-center mb-2">
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

        <b-button class="w-100" variant="primary" v-b-modal.modal-1>
          <b-iconstack font-scale="1">
            <b-icon stacked icon="cart-check" variant=""></b-icon> </b-iconstack
        ></b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    dataProducto: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="css">
ul {
  list-style-type: none;
  margin-left: -30px;
}
</style>
