<template>
  <div>
    <div class="decorateLine">
    <!--  <p>{{ $t(lang + ".title") }}</p>-->
      <h2>{{ $t(lang + ".title") }}</h2>
    </div>
    <p class="slogan">{{ $t(lang + ".slogan") }}</p>
  </div>
</template>

<script>
  export default {
    name: "titleDecorate",
    props: {
      lang: {
        type: String
      }
    }
  };
</script>

<style scoped lang="stylus">
  .decorateLine
    width 100%
    max-width 504px
    height 13px
    line-height @height
    margin 0 auto
    background-image url("../../../assets/operator/titleDecorate.png")
    background-repeat no-repeat
    background-size 100% 100%
    margin-bottom 43px
    h2
      line-height @height
      margin 0
      color: rgba(18, 18, 18, 1);

  .slogan
    max-width 900px
    margin 0 auto
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    font-size 16px
</style>
