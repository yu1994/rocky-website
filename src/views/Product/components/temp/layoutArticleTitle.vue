<template>
  <div class="layoutArticleTitle clearfix">
    <div class="layoutArticleTitle-box">
      <div class="box-title">
        <div>
          <i :style="styles"></i><h2>{{content.title}}</h2>
        </div>
        <div>
          <p class="sign">{{content.sign}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layoutArticleTitle",
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
.layoutArticleTitle
  padding-top 72px
  margin-bottom 72px
  .layoutArticleTitle-box
    .box-title
      position relative
      left 50%
      transform translateX(-50%)
      float left
      i
        display inline-block
        width 20px
        height 47px
        vertical-align middle
        background-color #ff82f4
      h2
        display inline-block
        vertical-align middle
        letter-spacing 6px
        margin 0 0 0 10px
      .sign
        text-align center
        color #666666
        margin 10px 0 0 0
</style>
