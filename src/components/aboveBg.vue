<template>
  <div class="bgPanel">
    <div class="bgPanel-box">
      <slot name="bg"></slot>
      <div class="sign">
        <slot name="sign"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aboveBg"
  };
</script>

<style scoped lang="stylus">
  .bgPanel
    padding-top 60px
    .bgPanel-box
      position relative
      .sign
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        font-size: 32px;
        font-family: Constantia;
        font-weight: 400;
        color: rgba(255, 255, 255, 1)
        h2
          margin 0 auto
        p
          margin-bottom 0
</style>
