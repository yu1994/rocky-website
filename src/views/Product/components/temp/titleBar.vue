<template>
  <div class="titleBar_box">
    <div class="title">
      <p class="cover" :style="{color: colorStyle.cover}">
        {{$t(langString+'.titleCover')}}
      </p>
      <h2 class="wow fadeInUp" :style="{color: colorStyle.title}">{{$t(langString+'.title')}}</h2>
    </div>
    <p v-if="remarkShow"  class="remark wow fadeInUp" :style="{color: colorStyle.remark}">
      {{$t(langString+'.remark')}}
    </p>
  </div>
</template>

<script>
export default {
  name: "titleBar",
  props: {
    langString: {
      type: String,
      default: ""
    },
    content: {
      type: Object,
      default: function() {
        return {};
      }
    },
    colorStyle: {
      default: function () {
        return {}
      }
    },
    remarkShow: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="stylus">
.titleBar_box
  position relative
  .title
    position relative
    margin-bottom 23px
    h2
      position relative
      /*font-size:30px;*/
      margin 0
      color:rgba(51,51,51,1);
    .cover
      position absolute
      left 50%
      top 0
      transform translateX(-50%)
      font-size:75px;
      /*font-family: "Microsoft YaHei UI";*/
      font-weight:bold;
      line-height 0
      color:rgba(223,223,223,1);
  .remark
    font-size:20px;
    /*font-weight:bold;*/
    color:rgba(51,51,51,1);
    line-height:30px;
    margin 0
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .titleBar_box{
        .cover{
          font-size $coverEnSize
        }
      }
    }
  }
</style>
