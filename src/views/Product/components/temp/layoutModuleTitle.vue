<template>
  <div class="layoutModuleTitle">
    <div class="layoutModuleTitle-box wow bounceInLeft">
      <h4 :style="{ borderColor }">{{content.title}}</h4>
      <p>{{content.sign}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layoutModuleTitle",
    props: {
      borderColor: {
        type: String,
        default: 'red'
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
.layoutModuleTitle
  margin 98px 0
  .layoutModuleTitle-box
    position relative
    text-align left
    h4
      display inline-block
      padding-right 14px
      border-right 2px solid
      vertical-align middle
      margin 0 14px 0 0
    p
      display inline-block
      vertical-align middle
      color #999999
      margin 0
</style>
