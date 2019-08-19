<template>
  <div class="productMore">
    <div class="productMore-box">
      <router-link :to="{path}">查看更多</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productMore",
    props: {
      path: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style lang="stylus" scoped>
.productMore
  margin-top 40px
  .productMore-box
    width 199px
    height 48px
    line-height 48px
    margin 0 auto
    box-sizing content-box
    border:2px solid #AAAAAA
    a
      display block
      color:rgba(170,170,170,1);
      text-align center
      text-decoration none
</style>
