<template>
  <div>
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
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="" scoped></style>
