<template>
  <div class="layoutTheme">
    <div class="layoutTheme-box">
      <div class="content">
        <h4>{{content.title}}</h4>
        <i :style="{backgroundColor:color}"></i>
        <p class="sign">{{content.sign}}</p>
        <p class="remark">{{content.remark}}</p>
      </div>
      <div class="img">
        <img :src="content.url" class="img-responsive" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layoutTheme",
    props: {
      color: {
        type: String,
        default: '#fff'
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
.layoutTheme
  .layoutTheme-box
    position relative
    .content
      float left
      max-width 483px
      h4
        margin-top 0
      i
        display block
        width 96px
        height 2px
        margin 0 auto
      .remark
        margin-bottom 0
        text-align left
      .sign
        margin-bottom 37px
        color #666666
    .img
      float right
      max-width 635px
</style>
