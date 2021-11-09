<template>
  <div class="mt-5 carrito" v-show="visible">
    <h3>info Carrito</h3>
    <ul>
      <li>Info</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="css" scoped>
.carrito {
  position: absolute;
  left: 65%;
  top: -8%;
  z-index: 1;
  border: 1px solid black;
  width: 35%;
  height: 55%;
  background-color: white;
}
</style>
