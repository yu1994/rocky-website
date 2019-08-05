<template>
  <div class="productLayoutCenter">
    <div class="productLayoutCenter-box" :style="{ backgroundImage:'url(' + styles.url + ')' }">
      <div class="content" :style="styles.remark">
        <div class="content-title" :style="styles.title">
          <h5>{{content.title}}</h5>
        </div>
        <p class="wow fadeInUp">{{content.remark}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productLayoutCenter",
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
.productLayoutCenter
  margin-bottom 68px
  text-align left
  .productLayoutCenter-box
    position relative
    width 100%
    height 320px
    background-size 100% auto
    .content
      position absolute
      bottom 0
      padding 26px 38px 14px 38px
      box-sizing border-box
      background-color rgb(255, 255, 255)
      p
        color:rgba(0,0,0,1);
        line-height:35px;
      .content-title
        position absolute
        left -41px
        top -10px
        width 134px
        height 35px
        h5
          width @width
          height @height
          line-height:@height;
          margin 0
          color:rgba(255,255,255,1)
          text-align center
  p
    margin 0
</style>
