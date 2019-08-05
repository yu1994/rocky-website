<template>
  <div class="productLayoutLeft">
    <div class="productLayoutLeft-box">
      <div class="img">
        <img class="wow zoomIn" v-lazy="styles.url" />
      </div>
      <div class="content">
        <div class="content-title">
          <h5 :style="styles.title">{{content.title}}</h5>
        </div>
        <div class="content-remark">
        <p class="wow fadeInUp">{{content.remark}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productLayoutLeft",
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
.productLayoutLeft
  width 100%
  padding 0 36px 0 24px
  margin-bottom 68px
  background-color #F4F4F4
  .productLayoutLeft-box
    display flex
    min-height 507px
    justify-content space-between
    align-items center
    text-align left
  .img
    display inline-block /* ie 9*/
  .content
    display inline-block /* ie 9*/
    max-width 390px   /* ie 10 不设置的话有问题*/
    margin-left 84px
    .content-title
      margin-bottom 43px
      word-wrap break-word
       word-break normal
      h5
        width 134px
        height 35px
        line-height @height
        padding-left 7px
        color:rgba(255,255,255,1);
        margin 0
    .content-remark
      p
        line-height 35px
  p
    margin 0
</style>
