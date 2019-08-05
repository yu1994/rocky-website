<template>
  <div class="productLayoutRight">
    <div class="productLayoutRight-box">
      <div class="content">

      </div>
      <div class="img">
        <img v-lazy="styles.url"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productLayoutRight",
    props: {
      styles: {
        type: Object,
        default: function () {
          return {

          }
        }
      },
      content: {
        type: Object,
        default: function () {
          return {

          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.productLayoutRight
  width 100%
  margin-bottom 68px
  background-color #F4F4F4
  .productLayoutRight-box
    display flex
    min-height 507px
    justify-content space-between
    align-items center
    text-align left
  .content
    display inline-block /* ie 9*/
    max-width 390px   /* ie 10 不设置的话有问题*/
    margin-left 84px
  .img
    display inline-block /* ie 9*/

</style>
