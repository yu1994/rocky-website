<template>
  <div class="bg">
    <slot name="bg"></slot>
    <div class="sign">
      <slot name="sign"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboveBg"
};
</script>

<style scoped lang="stylus">
.bg
    position relative
    .sign
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        font-size:24px;
        font-family:Constantia;
        font-weight:400;
        color:rgba(255,255,255,1);
        .en
          font-size 28px
</style>
