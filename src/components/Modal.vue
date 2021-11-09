<template>
  <div class="d-flex">
    <b-modal id="modal-1" title="Producto agregado" hide-footer>
      <div>
        <b-card
          title=""
          :img-src="dataModal.dataProducto.photo"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 centrarCard"
        >
          <b-card-text>
            <ul>
              {{
                dataModal.dataProducto.name
              }}
              <li><b>Nombre Producto:</b> {{ dataModal.dataProducto.name }}</li>
              <li><b>Código Producto:</b> {{ dataModal.dataProducto.code }}</li>
              <li>
                <b>Precio Producto:</b> ${{ dataModal.dataProducto.price }}.
              </li>
              <li>
                <div>
                  <div class="d-flex mb-2">
                    <b class="margenCantidad">Cantidad:</b>
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
                      v-model="dataModal.cantidadProductos"
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
              </li>
              <li>
                <b>SubTotal: </b>
                <span>$734687.</span>
              </li>
              <li class="mt-2">
                <b>Descripción del producto:</b>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, illo?
                </p>
              </li>
            </ul>
          </b-card-text>
        </b-card>
        <div class="d-flex justify-content-between w-75 centrarCard">
          <b-button class="mt-3" block @click="$bvModal.hide('modal-1')"
            >Seguir comprando</b-button
          >
          <b-button
            class="mt-3"
            block
            @click="$bvModal.hide('modal-1')"
            variant="success"
            >Agregar a carro</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      dataModal: "dataModalGet",
    }),
  },
};
</script>

<style lang="css" scoped>
.centrarCard {
  margin-left: auto;
  margin-right: auto;
}
.margenCantidad {
  margin-right: 10px;
}
</style>
