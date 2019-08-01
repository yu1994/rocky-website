<template>
  <div class=" container">
    <div class="proDetail">
      <div class="decorateLine">
        <h2>{{ $t(lang + ".title") }}</h2>
      </div>
      <p class="slogan">{{ $t(lang + ".slogan") }}</p>
      <p class="remark">{{$t(lang + ".remark")}}</p>
      <div class="img">
        <img v-lazy="$t(lang + '.url')" class="img-responsive wow zoomIn"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "proDetail",
    props: {
      lang: {
        type: String
      }
    }
  }
</script>

<style scoped lang="stylus">
  .proDetail
    padding 0 0 40px 0

  .decorateLine
    position relative
    width 100%
    max-width 504px
    height 13px
    margin 0 auto
    background-image url("../../../../assets/operator/titleDecorate.png")
    background-repeat no-repeat
    background-size 100% 100%
    margin-bottom 43px
    h2
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      margin 0
      color: rgba(18, 18, 18, 1);
      /*font-family "Microsoft YaHei UI"
      font-weight: bold;*/

  .slogan
    text-align center
    margin 19px auto 40px
    /*font-size: 20px;*/
    font-weight: 400;
    color: rgba(51, 51, 51, 1);

  .remark
    text-indent 2em
    max-width 900px
    margin 0 auto
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    /*font-size: 20px;
    line-height: 29px;*/
    text-align left

  .img
    max-width 374px
    margin 58px auto 0
</style>
