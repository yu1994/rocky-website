<template>
  <div
          class="article layoutLeft"
          :style="stylus_box"
          v-if="imgPlace !== 'right'"
  >
    <div class="container article_box">
      <div class="article_text_mobile  visible-sm visible-xs">
        <div>
          <div class="title">
            <p class="cover">{{ content.titleCover }}</p>
            <h2 class="wow fadeInUp">{{ content.title }}</h2>
          </div>
          <p class="remark wow fadeInUp">{{ content.remark }}</p>
        </div>
      </div>
      <div class="article_img clearfix">
        <img class="wow zoomIn" v-lazy="content.url"/>
      </div>
      <div class="article_text   visible-lg visible-md">
        <div class="article_text_box">
          <div class="title">
            <p class="cover">{{ content.titleCover }}</p>
            <h2 class="wow fadeInUp">{{ content.title }}</h2>
          </div>
          <p class="remark wow fadeInUp">{{ content.remark }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="article layoutRight" :style="stylus_box">
    <div class="container article_box">
      <div class="article_text  visible-lg visible-md">
        <div class="article_text_box">
          <div class="title">
            <p class="cover">{{ content.titleCover }}</p>
            <h2 class="wow fadeInUp">{{ content.title }}</h2>
          </div>
          <p class="remark wow fadeInUp">{{ content.remark }}</p>
        </div>
      </div>
      <div class="article_text_mobile  visible-sm visible-xs">
        <div>
          <div class="title">
            <p class="cover">{{ content.titleCover }}</p>
            <h2 class="wow fadeInUp">{{ content.title }}</h2>
          </div>
          <p class="remark wow fadeInUp">{{ content.remark }}</p>
        </div>
      </div>
      <div class="article_img clearfix">
        <img v-if="content.url" class="wow zoomIn" v-lazy="content.url"/>
        <slot name="other"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "proLayoutLeft",
    props: {
      content: {
        type: Object,
        default: function () {
          return {};
        }
      },
      stylus_box: {
        type: Object,
        default: function () {
          return {};
        }
      },
      imgPlace: {
        type: String,
        default: "left"
      },
      paddingNum: {
        type: Number,
        default: 98
      }
    }
  };
</script>

<style scoped lang="stylus">
  $img-width = 516px
  .article
    width 100%
    background-repeat no-repeat
    background-position center
    background-size cover
    .article_img
      img
        width 100%
        max-width $img-width
    .title
      position relative
      margin-bottom 23px
      h2
        position relative
        /*font-family: "Microsoft YaHei UI";
        font-weight: bold;*/
        margin 0
        text-align left
        color: rgba(51, 51, 51, 1);
      .cover
        position absolute
        left 0
        top 0
        font-size: 75px;
        font-family: "Microsoft YaHei UI";
        font-weight: bold;
        line-height 0
        color: rgba(223, 223, 223, 1);
    .remark
     /* font-size: 20px;*/
      /*font-weight: bold;*/
      color: rgba(51, 51, 51, 1);
      margin 0
      text-align left
     /* line-height: 30px;*/
  .article_text_box
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)

  .layoutLeft
    .article_box
      position relative
    .article_img
      float left

  .article_text
    position absolute
    right 0
    bottom 0
    top 0
    left $img-width

  .layoutRight
    .article_box
      position relative
    .article_img
      float right
    .article_text
      position absolute
      left 0
      bottom 0
      top 0
      right $img-width
      text-align center
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .article{
        padding 30px 0 !important;
        .cover{
          font-size $coverEnSize
        }
      }
    }
  }
  @media (max-width:992px){
    #app{
      .article_img{
        float none
      }
    }
  }
</style>
