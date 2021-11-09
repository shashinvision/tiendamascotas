<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <ul>
          <li><b>Stock:</b> Disponible</li>
          <li><b>Nombre Producto:</b> Lorem, ipsum dolor.</li>
          <li><b>Precio Producto:</b> $10.000.</li>
        </ul>
      </b-card-text>

      <div class="flexBox">
        <div class="def-number-input number-input border-danger">
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
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  margin-left: -30px;
}
.flexBox {
  flex-direction: row-reverse;
}
</style>
