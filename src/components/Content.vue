<template>
  <div style="position: relative">
    <div class="row mt-5 pt-5">
      <div class="col-12">
        <h2>Categoría 1</h2>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <Card></Card>
      </div>
      <div class="col">
        <Card></Card>
      </div>
      <div class="col">
        <Card></Card>
      </div>
      <div class="col">
        <Card></Card>
      </div>
    </div>
    <Modal></Modal>
    <Carrito></Carrito>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import Carrito from "@/components/Carrito.vue";

export default {
  components: {
    Card,
    Modal,
    Carrito,
  },
};
</script>

<style lang="" scoped></style>
