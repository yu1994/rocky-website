<template>
<div class="container">
  <div class="videoChunk">
    <layout-article-title :styles="{backgroundColor: themeColor}" :content="video.articleTitle"></layout-article-title>
    <div class="clearfix">
      <layout-theme :content="video.pro_1.content" :color="themeColor"></layout-theme>
    </div>
    <div class="tvChunk">
      <layout-module-title :content="video.pro_2.title" :border-color="themeColor"></layout-module-title>
      <div class="content">
        <div class="bg-img">
          <img v-lazy="video.pro_2.path.url_1"  class="img-responsive"/>
          <ul>
            <li v-for="(item, key) in $t('productPage.videoChunk.pro_2.kindList')" :key="key">
              <img v-if="item.url" v-lazy="item.url" />
              <p>{{item.sign}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shortChunk">
      <layout-module-title :content="video.pro_3.title" :border-color="themeColor"></layout-module-title>
      <div class="content">
        <img v-lazy="video.pro_3.path.url" class="img-responsive"/>
        <ul>
          <li v-for="(item, key) in $t('productPage.videoChunk.pro_3.kindList')" :key="key"><p>{{item}}</p></li>
        </ul>
      </div>
    </div>
    <div class="featureChunk">
      <layout-module-title :content="video.pro_4.title" :border-color="themeColor"></layout-module-title>
      <div class="content clearfix">
        <ul class="row">
          <li class="col-xs-6 col-sm-6 col-md-3" v-for="(item, key) in $t('productPage.videoChunk.pro_4.kindList')" :key="key">
            <img v-lazy="item.url" class="img-responsive" />
            <p>{{item.sign}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import LayoutArticleTitle from "./temp/layoutArticleTitle";
  import LayoutTheme from "./layoutTheme";
  import LayoutModuleTitle from "./temp/layoutModuleTitle";
  export default {
    name: "videoChunk",
    components: {LayoutModuleTitle, LayoutTheme, LayoutArticleTitle},
    data() {
      return {
        themeColor: '#8EC6A5',
        video: {
          articleTitle: {
            title: this.$t('productPage.videoChunk.article.title'),
            sign: this.$t('productPage.videoChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.videoChunk.pro_1.title'),
              sign:  this.$t('productPage.videoChunk.pro_1.sign'),
              remark: this.$t('productPage.videoChunk.pro_1.remark'),
              url: require("../../../assets/product/video/pro_1.png")
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.videoChunk.pro_2.title'),
              sign: this.$t('productPage.videoChunk.pro_2.sign')
            },
            content: {
              title: this.$t('productPage.videoChunk.pro_2.title'),
              remark: this.$t('productPage.videoChunk.pro_2.remark')
            },
            path: {
              url_1: require("../../../assets/product/video/bg_line.png")
            }
          },
          pro_3: {
            title: {
              title: this.$t('productPage.videoChunk.pro_3.title'),
              sign: this.$t('productPage.videoChunk.pro_3.sign')
            },
            path: {
              url: require('../../../assets/product/video/pro_3.png')
            }
          },
          pro_4: {
            title: {
              title: this.$t('productPage.videoChunk.pro_4.title'),
              sign: this.$t('productPage.videoChunk.pro_4.sign')
            },
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.videoChunk
  margin-bottom $productChunkBottom
  .tvChunk
    .content
      position relative
      padding 99px 0
      .bg-img
        position relative
      ul
        margin 0
        li
          position absolute
          z-index 99
          background-color #fff
          p
            position absolute
            margin-bottom 0
            color #666666
        & li:nth-child(1)
          left (-62/$main_w*100)%
          top 0
          transform translate(0,-50%)
          p
            right 0
            top 50%
            transform translate(100%,-50%)
        & li:nth-child(2)
          left (119/$main_w*100)%
          top 60.29%
          transform translate(0,-50%)
          p
            display block
        & li:nth-child(3)
          left 50%
          bottom  0
          transform translate(-50%,50%)
          p
            left 50%
            transform translateX(-50%)
            white-space nowrap
        & li:nth-child(4)
          right  (88/$main_w*100)%
          top 60.29%
          transform translate(0,-50%)
          p
            display block
        & li:nth-child(5)
          right (-62/$main_w*100)%
          top 0
          transform translate(0,-50%)
          p
            left 0
            top 50%
            transform translate(-100%,-50%)
        & li:nth-child(6)
          left 50%
          top 50%
          transform translate(-50%,-50%)
          p
            position relative
            max-width 375px
            padding 40px 10px
            border 1px dashed #8EC6A5
  .shortChunk
    position relative
    .content
      display inline-block
      position relative
      img
        margin 0 auto
      ul
        margin-bottom 0
        li
          position absolute
        & li:nth-child(1)
          left 0
          top 7.539%
        & li:nth-child(2)
          right 6.81%
          top 7.539%
        & li:nth-child(3)
          right -10px
          top 55.291%
        & li:nth-child(4)
          right 0
          top 82.01%
        & li:nth-child(5)
          left 0
          top 82.01%
        & li:nth-child(6)
          left -14.431%
          top 55.291%
        p
          color #666666
          margin-bottom 0
  .featureChunk
    .content
      position relative
      ul
        margin-bottom 0
        li
          height 100%
          img
            margin 0 auto
        p
          color #666666
          margin-top 33px
          margin-bottom 0
</style>
