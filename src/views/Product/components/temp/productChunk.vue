<template>
  <div class="productChunk">
    <div>
      <product-item-title></product-item-title>
    </div>
  </div>
</template>

<script>
  import ProductItemTitle from "./productItemTitle";
  export default {
    name: "productChunk",
    components: {ProductItemTitle}
  }
</script>

<style scoped>

</style>
