<template>
  <div class="productItemTitle">
    <div class="productItemTitle-box">
      <div class="box">
        <h4>{{content.title}}</h4>
        <p class="sign">{{content.sign}}</p>
        <i class="next"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productItemTitle",
    props: {
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
.productItemTitle
  margin-bottom 40px
  .productItemTitle-box
    position relative
    width 60px
    height 167px
    border 2px solid #3699FF
    margin 0 auto
    .box
      position absolute
      left 50%
      top 21px
      white-space nowrap
      transform translateX(-50%)
      background-color #ffffff
      h4
        letter-spacing 8px
        margin-bottom 0
      .sign
        margin 18px auto 15px
        color #666666
      .next
        display block
        width 24px
        height 26px
        margin 0 auto
        background-image url("../../../../assets/product/next.png")
        background-repeat no-repeat
        background-position center
</style>
