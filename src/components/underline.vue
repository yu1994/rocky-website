<template>
  <div class="underline">
    <div class="line"><h2>{{ title }}</h2></div>
    <i></i>
  </div>
</template>

<script>
export default {
  name: "underline",
  props: {
    title: {
      type: String,
      default: '公司介绍'
    }
  }
};
</script>

<style scoped lang="stylus">
.underline
  position relative
  width 100%
  max-width 868px
  margin 0 auto 42px
  .line
    position relative
    display block
    width 100%
    border-bottom 1.5px solid rgba(145,145,145,.5)
    border-radius:50%;
    h2
      position absolute
      left 50%
      top 50%
      margin 0
      color:rgba(18,18,18,1);
      transform translate(-50%,-50%)
      padding 0 10px
      background-color #ffffff

</style>
