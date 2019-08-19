<template>
  <div class="container">
    <div class="readIpChunk">
      <layout-article-title :styles="{backgroundColor: themeColor}" :content="readIP.articleTitle"></layout-article-title>
      <layout-photo-center :backgrounds="readIP.pro_1.backgrounds" :content="readIP.pro_1.content"></layout-photo-center>
      <!--IP 共创-->
      <div class="IPCreateChunk">
        <layout-module-title :content="readIP.pro_2.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <div class="img-1">
            <img v-lazy="readIP.pro_2.path.url_1" class="img-responsive" />
          </div>
          <div class="img-line">
            <img v-lazy="readIP.pro_2.path.url_2" class="img-responsive" />

          </div>
          <ul class="img-line-sign">
            <li v-for="(item, key) in $t('productPage.readIPChunk.pro_2.signList')" :key="key"><span>{{item}}</span></li>
          </ul>
          <div class="text">
            <p>{{$t('productPage.readIPChunk.pro_2.remark')}}</p>
          </div>
        </div>
      </div>
      <!--优质内容-->
      <div class="qualityContentChunk">
        <layout-module-title :content="readIP.pro_3.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <img v-lazy="readIP.pro_3.path.url_1" class="img-responsive">
          <div class="text_1 text">
            <p>{{$t('productPage.readIPChunk.pro_3.remark_1')}}</p>
          </div>
          <div class="text_2 text">
            <p>{{$t('productPage.readIPChunk.pro_3.remark_2')}}</p>
          </div>
        </div>
      </div>
      <!-- 诗人定制-->
      <div class="tailorChunk">
        <layout-module-title :content="readIP.pro_4.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <img v-lazy="readIP.pro_4.path.url_1" class="img-responsive"/>
          <div class="text">
            <p>{{$t('productPage.readIPChunk.pro_4.remark')}}</p>
          </div>
          <div class="kind">
            <ul>
              <li v-for="(item, key) in $t('productPage.readIPChunk.pro_4.signList')" :key="key">
                <p v-html="item"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LayoutArticleTitle from "./temp/layoutArticleTitle";
import LayoutPhotoCenter from "./temp/layoutPhotoCenter";
import LayoutModuleTitle from "./temp/layoutModuleTitle";
export default {
  name: "readIpChunk",
  data() {
    return {
      themeColor: '#E28D33',
      readIP: {
        articleTitle: {
          title: this.$t('productPage.readIPChunk.article.title'),
          sign: this.$t('productPage.readIPChunk.article.sign')
        },
        pro_1: {
          content: {
            title: this.$t('productPage.readIPChunk.pro_1.title'),
            sign: this.$t('productPage.readIPChunk.pro_1.sign'),
            remark: this.$t('productPage.readIPChunk.pro_1.remark'),
          },
          backgrounds: {
            url: require('../../../assets/product/readIP/read_1.png')
          }
        },
        pro_2: {
          title: {
            title: this.$t('productPage.readIPChunk.pro_2.title'),
            sign: this.$t('productPage.readIPChunk.pro_2.sign')
          },
          path: {
            url_1: require('../../../assets/product/readIP/pro_2_1.png'),
            url_2: require('../../../assets/product/readIP/pro_2_2.png'),
          }
        },
        pro_3: {
          title: {
            title: this.$t('productPage.readIPChunk.pro_3.title'),
            sign: this.$t('productPage.readIPChunk.pro_3.sign')
          },
          path: {
            url_1: require("../../../assets/product/readIP/pro_03_1.png"),
          }
        },
        pro_4: {
          title: {
            title: this.$t('productPage.readIPChunk.pro_4.title'),
            sign: this.$t('productPage.readIPChunk.pro_4.sign')
          },
          path: {
            url_1: require("../../../assets/product/readIP/pro_4_1.png"),
          }
        }
      }
    };
  },
  components: {LayoutModuleTitle, LayoutPhotoCenter, LayoutArticleTitle }
};
</script>

<style scoped lang="stylus">
$ipH = 607px
.readIpChunk
  margin-bottom 50px
  .IPCreateChunk
    .content
      position relative
      width 100%
      height $ipH
      .img-1
        position absolute
        width 46.75%
        height 87.8%
        left 0
        top 74px
      .img-line
        position absolute
        left 31.228%
        top 0
        width (482/$main_w*100)%
        height (557/$ipH*100)%
        z-index 2
      .img-line-sign
        margin 0
        li
          position absolute
          white-space nowrap
          &::before
            content: ''
            display inline-block
            width 15px
            height 15px
            border-radius: 100%;
            padding 1.5px
            vertical-align middle
            box-sizing content-box
            background: #ffff;
            background url("../../../assets/product/readIP/circle.png") no-repeat center
            border 1px solid #F8A81C
          span
            display inline-block
            vertical-align middle
            margin-left 25px
        & li:nth-child(1)
          left (408/$main_w*100)%
          top (61/$ipH*100)%
        & li:nth-child(2)
          left ((163+356)/$main_w*100 )%
          top (188/$ipH*100)%
        & li:nth-child(3)
          left ((282+356)/$main_w*100 )%
          top (328/$ipH*100)%
        & li:nth-child(4)
          left ((398+356)/$main_w*100 )%
          top (461/$ipH*100)%
      .text
        position absolute
        top: 28px
        right 0
        z-index 3
        text-align right
        max-width (500/$main_w*100)%
  .qualityContentChunk
    position relative
    width 100%
    .content
      position relative
      p
        margin-bottom 0
      img
        width 32.10%
        margin 0 auto
      .text
        position absolute
        width (450/$main_w*100)%
        color #999999
      .text_1
        top 50%
        left 0
        transform translateY(8%)
        p
          max-width 317px
          margin 13px auto 0
        p::before
          content ""
          position absolute
          left 0
          top 0
          width 100%
          background url("../../../assets/product/readIP/line.png") no-repeat
          height 2px
          background-size 100% auto
      .text_2
        top 50%
        right 0
        transform translateY(-94%)
        p
          max-width 317px
          margin 0 auto 13px
        p::after
            content ""
            position absolute
            right  0
            bottom 0
            width 100%
            background url("../../../assets/product/readIP/line.png") no-repeat
            height 2px
            background-size 100% auto


  .tailorChunk
    position relative
    width 100%
    .content
      position relative
      width 100%
      .text
        position absolute
        top 0
        right 0
        width (319/$main_w*100)%
        text-align right
        color #999999
      .kind
        position absolute
        left (295/$main_w*100)%
        top 50%
        width (766/$main_w*100)%
        height (218/399*100)%
        transform translateY(-50%)
        padding 15px
        background rgba(54,54,54,.5)
        ul
          display flex
          align-items center
          width 100%
          height 100%
          margin 0
          border 2px solid #fff
          li
            display inline-block
            width (100/3)%
            color #fff
            border-right 2px solid #fff
          & li:last-child
            border-right none
          p
            margin 0
</style>
