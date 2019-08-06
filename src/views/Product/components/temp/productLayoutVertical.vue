<template>
  <div class="productLayoutVertical">
    <div class="productLayoutVertical-box" :style="styles.box">
        <slot name="left"></slot>
        <slot name="right"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "productLayoutVertical",
    props: {
      styles: {
          type: Object,
          default: function () {
            return {
              box: {
                backgroundColor: "rgba(244,244,244,1)"
              }
            }
          }
        }
      }
  }
</script>

<style scoped lang="stylus">
.productLayoutVertical
  display table
  width 100%
  height:507px;
  margin-bottom 68px
  .productLayoutVertical-box
    position relative
    display table-cell
    vertical-align middle
    background-color #CEEBF4 !important
    .left
      display inline-block
    .right
      display inline-block
</style>
