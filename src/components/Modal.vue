<template>
  <div class="d-flex">
    <b-modal id="modal-1" title="Producto agregado" hide-footer size="lg">
      <div>
        <b-card
          title=""
          :img-src="dataModal.dataProducto.photo"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 80%"
          class="mb-2 centrarCard"
          img-left
        >
          <b-card-text>
            <ul>
              <li><b>Nombre Producto:</b> {{ dataModal.dataProducto.name }}</li>
              <li><b>Código Producto:</b> {{ dataModal.dataProducto.code }}</li>
              <li>
                <b>Precio Producto:</b> ${{ dataModal.dataProducto.price }}.
              </li>
              <li>
                <div>
                  <div class="d-flex mb-2">
                    <b class="margenCantidad">Cantidad:</b>
                    <button @click="minus">
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
                    <button @click="plus">
                      <b-iconstack font-scale="1">
                        <b-icon stacked icon="cart-plus" variant=""></b-icon>
                      </b-iconstack>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <b>SubTotal: </b>
                <span>{{ resultadoSubTotal }}</span>
              </li>
              <li class="mt-2">
                <b>Descripción del producto:</b>
                <p>
                  {{ dataModal.dataProducto.abstract }}
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
    return {
      subTotal: 0,
    };
  },
  computed: {
    ...mapGetters("Modal", {
      dataModal: "dataModalGet",
    }),
  },
  methods: {
    minus() {
      this.dataModal.cantidadProductos--;
      if (this.dataModal.cantidadProductos < 0) {
        this.dataModal.cantidadProductos = 0;
      }
    },
    plus() {
      this.dataModal.cantidadProductos++;
    },
  },
};
</script>

<style lang="css" scoped>
.centrarCard {
  margin-left: auto;
  margin-right: auto;
}
.card-img-top {
  max-width: 25rem;
  max-height: 25rem;
}
.margenCantidad {
  margin-right: 10px;
}
</style>
