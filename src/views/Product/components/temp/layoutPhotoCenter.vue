<template>
  <div class="layoutPhotoCenter">
    <div class="layoutPhotoCenter-box">
      <img v-lazy="backgrounds.url" style="width: 100%"/>
      <div class="content">
          <h4>{{content.title}}</h4>
          <i v-if="isLine"></i>
          <p>{{content.sign}}</p>
          <p class="remark">{{content.remark}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layoutPhotoCenter",
    props: {
      backgrounds: {
        type: Object,
        default: function () {
          return {

          }
        }
      },
      isLine: {
        type: Boolean,
        default: true
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
.layoutPhotoCenter
  .layoutPhotoCenter-box
    position relative
    .content
      position absolute
      left 50%
      top 50%
      width (640/$main_w*100)%
      transform translate(-50%,-50%)
      padding 24px 13px 30px
      color #fff
      background rgba(54,54,54,.8)
      h4
        margin-top 0
      i
        display block
        width 96px
        height 2px
        margin 0 auto
        background-color #E28D33
      .remark
        margin-bottom 0
        text-align left
</style>
