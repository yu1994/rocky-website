<template>
  <div class="recreationChunk">
    <div class="globalChunk">
      <div class="container">
        <layout-article-title :styles="{backgroundColor: themeColor}" :content="recreation.articleTitle"></layout-article-title>
        <div class="content">
          <div class="bg-img">
            <img :src="recreation.pro_1.path.url_1"  class="img-responsive"/>
            <div class="img_1">
              <img :src="recreation.pro_1.path.url_2" class="img-responsive" />
            </div>
            <div class="text">
              <h4>{{recreation.pro_1.content.title}}</h4>
              <i :style="{backgroundColor:themeColor}"></i>
              <p class="sign">{{recreation.pro_1.content.sign}}</p>
              <p class="remark">{{recreation.pro_1.content.remark}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platformChunk">
      <div class="container">
        <layout-module-title :content="recreation.pro_2.title" :border-color="themeColor"></layout-module-title>
      </div>
      <div class="content">
        <div class="bg-img">
          <img v-lazy="recreation.pro_2.path.url_1" class="img-responsive" />
          <ul>
            <li v-for="(item, key) in $t('productPage.recreationChunk.pro_2.kindList')" :key="key">
              <img v-lazy="item.url" class="img-responsive"/>
              <p>{{item.sign}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rapidChunk">
      <div class="container">
        <layout-module-title :content="recreation.pro_3.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <div class="bg-img">
            <img v-lazy="recreation.pro_3.path.url" class="img-responsive" />
            <div class="remark">
              <p v-html="$t('productPage.recreationChunk.pro_3.remark')"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="deviceChunk">
      <div class="container">
        <layout-module-title :content="recreation.pro_4.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <img v-lazy="recreation.pro_4.path.url" class="img-responsive" />
          <div class="bg-img">
            <img v-lazy="recreation.pro_4.path.url_1" class="img-responsive" />
            <ul>
              <li v-for="(item, key) in $t('productPage.recreationChunk.pro_4.kindList')" :key="key">
               <p v-html="item"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="lifeChunk">
      <div class="container">
        <layout-module-title :content="recreation.pro_5.title" :border-color="themeColor"></layout-module-title>
        <layout-photo-center :is-line="false" :backgrounds="recreation.pro_5.backgrounds" :content="recreation.pro_5.content"></layout-photo-center>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutArticleTitle from "./temp/layoutArticleTitle";
import LayoutModuleTitle from "./temp/layoutModuleTitle";
import LayoutPhotoCenter from "./temp/layoutPhotoCenter";
export default {
  name: "recreationChunk",
  components: {LayoutPhotoCenter, LayoutModuleTitle, LayoutArticleTitle },
  data() {
    return {
      themeColor: '#D25F46',
      recreation: {
        articleTitle: {
          title: this.$t('productPage.recreationChunk.article.title'),
          sign: this.$t('productPage.recreationChunk.article.sign')
        },
        pro_1: {
          content: {
            title: this.$t('productPage.recreationChunk.pro_1.title'),
            sign:  this.$t('productPage.recreationChunk.pro_1.sign'),
            remark: this.$t('productPage.recreationChunk.pro_1.remark'),
            url: require("../../../assets/product/study/pro_1.png")
          },
          path: {
            url_1: require("../../../assets/product/recreation/pro_1_1.png"),
            url_2: require("../../../assets/product/recreation/pro_1_2.png"),
          }
        },
        pro_2: {
          title: {
            title: this.$t('productPage.recreationChunk.pro_2.title'),
            sign: this.$t('productPage.recreationChunk.pro_2.sign')
          },
          path: {
            url_1: require("../../../assets/product/recreation/pro_2.png"),
          }
        },
        pro_3: {
          title: {
            title: this.$t('productPage.recreationChunk.pro_3.title'),
            sign: this.$t('productPage.recreationChunk.pro_3.sign')
          },
          path: {
            url: require("../../../assets/product/study/pro_6.png")
          }
        },
        pro_4: {
          title: {
            title: this.$t('productPage.recreationChunk.pro_4.title'),
            sign: this.$t('productPage.recreationChunk.pro_4.sign')
          },
          path: {
            url: require("../../../assets/product/recreation/pro_4.png"),
            url_1: require("../../../assets/product/recreation/pro_4_1.png"),
          }
        },
        pro_5: {
          title: {
            title: this.$t('productPage.recreationChunk.pro_5.title'),
            sign: this.$t('productPage.recreationChunk.pro_5.sign')
          },
          content: {
            remark: this.$t('productPage.recreationChunk.pro_5.remark')
          },
          backgrounds: {
            url: require('../../../assets/product/recreation/pro_5.png')
          }
        }
      }
    };
  }
};
</script>

<style scoped lang="stylus">
  .recreationChunk
    margin-bottom $productChunkBottom
    .globalChunk
      .content
        padding-bottom 163px
        .bg-img
          position relative
          .img_1
            position absolute
            width 42.10%
            top 5.06%
            left (152/$main_w*100)%
            img
              width 100%
          .text
            position absolute
            top 0
            left (664/$main_w*100)%
            h4
              margin-top 0
            i
              display block
              width 96px
              height 2px
              margin 0 auto
            .remark
              margin-bottom 0
              text-align left
            .sign
              margin-bottom 37px
              color #666666
    .platformChunk
      .content
        padding-bottom 50px
        .bg-img
          position relative
          ul
            margin-bottom 0
            li
              position absolute
              p
                margin 26px 0 0 0
                color #666666
            & li:nth-child(1)
              top 35.35%
              left (362/1920*100)%
            & li:nth-child(2)
              top -4.54%
              left (577/1920*100)%
            & li:nth-child(3)
              top -12.62%
              left (807/1920*100)%
            & li:nth-child(4)
              top 41.41%
              left (1022/1920*100)%
            & li:nth-child(5)
              top 1.98%
              left (1260/1920*100)%
            & li:nth-child(6)
              top -16.16%
              left (1453/1920*100)%
    .rapidChunk
      .content
        position relative
        .bg-img
          display inline-block
          position relative
          vertical-align top
          .remark
            position absolute
            left 50%
            top 0
            height 100%
            width (498/$main_w*100)%
            transform translateX(-50%)
            background-color rgba(0,0,0,.6)
            p
              position absolute
              left 50%
              top 50%
              transform translate(-50%,-50%)
              max-width 250px
              color #fff
              margin-bottom 0
    .deviceChunk
      .content
        .bg-img
          position relative
          display inline-block
          ul
            margin-bottom 0
            li
              position absolute
            & li:nth-child(1)
              left (68/$main_w*100)%
              top 27.47%
            & li:nth-child(2)
              left (244/$main_w*100)%
              top 47.61%
            & li:nth-child(3)
              left (438/$main_w*100)%
              top 27.47%
            & li:nth-child(4)
              left (616/$main_w*100)%
              top 42.85%
            & li:nth-child(5)
              left (817/$main_w*100)%
              top 27.47%
            & li:nth-child(6)
              left (975/$main_w*100)%
              top  42.85%
            p
              margin-bottom 0
              color #666666
    .bg
      background-color #5bbaff
</style>

