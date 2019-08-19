<template>
    <div class="gameChunk">
      <div class="container">
        <layout-article-title :styles="{backgroundColor: themeColor}" :content="numGame.articleTitle"></layout-article-title>
        <layout-photo-center :backgrounds="numGame.pro_1.backgrounds" :content="numGame.pro_1.content"></layout-photo-center>
        <div class="classicChunk">
          <layout-module-title :content="numGame.pro_2.title" :border-color="themeColor"></layout-module-title>
          <div class="content">
            <ul class="classic_1 clearfix row">
              <li class="col-sm-4">
                <img v-lazy="numGame.pro_2.path.url_1" class="img-responsive"/>
              </li>
              <li class="col-sm-4 classic_text">
                <img v-lazy="numGame.pro_2.path.url_4" class="img-responsive" />
                <p>{{$t('productPage.numGameChunk.pro_2.classicText.text_1')}}</p>
              </li>
              <li class="col-sm-4">
                <img v-lazy="numGame.pro_2.path.url_2" class="img-responsive" />
              </li>
            </ul>
            <ul class="classic_1 clearfix row">
              <li class="col-sm-4 classic_text">
                <img v-lazy="numGame.pro_2.path.url_4" class="img-responsive"/>
                <p>{{$t('productPage.numGameChunk.pro_2.classicText.text_2')}}</p>
              </li>
              <li class="col-sm-4 classic_text">
                <img v-lazy="numGame.pro_2.path.url_3" class="img-responsive" />
              </li>
              <li class="col-sm-4 classic_text">
                <img v-lazy="numGame.pro_2.path.url_4" class="img-responsive" />
                <p>{{$t('productPage.numGameChunk.pro_2.classicText.text_3')}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--海量游戏-->
      <div class="massiveChunk">
        <div class="container">
          <layout-module-title :content="numGame.pro_3.title" :border-color="themeColor"></layout-module-title>
        </div>
        <div class="content" v-lazy:background-image="numGame.pro_3.path.url_1">
          <div class="gameKind-img">
            <img v-lazy="numGame.pro_3.path.url_2" class="img-responsive" />
            <ul>
              <li v-for="(item, key) in $t('productPage.numGameChunk.pro_3.kindList')" :key="key" >
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--算法推送 -->
      <div class="container">
        <div class="pushChunk">
          <layout-module-title :content="numGame.pro_4.title" :border-color="themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="numGame.pro_4.path.url_1" class="img-responsive" />
            </div>
            <ul>
              <li v-for="(item, key) in $t('productPage.numGameChunk.pro_4.kindList')" :key="key">
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--互动社交-->
      <div class="container">
        <div class="interactionChunk">
          <layout-module-title :content="numGame.pro_5.title" :border-color="themeColor"></layout-module-title>
          <div class="content">
            <ul>
              <li>
                <img v-lazy="numGame.pro_5.path.url_1" />
              </li>
              <li>
                <p>{{$t('productPage.numGameChunk.pro_5.kindList[0]')}}</p>
                <img v-lazy="numGame.pro_5.path.url_2" />
              </li>
              <li>
                <img v-lazy="numGame.pro_5.path.url_3" />
                <p>{{$t('productPage.numGameChunk.pro_5.kindList[1]')}}</p>
              </li>
              <li>
                <p>{{$t('productPage.numGameChunk.pro_5.kindList[2]')}}</p>
                <img v-lazy="numGame.pro_5.path.url_4" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--玩家 社区 -->
      <div class="container">
        <div class="communityChunk">
          <layout-module-title :content="numGame.pro_6.title" :border-color="themeColor"></layout-module-title>
          <div class="content">
            <div class="wove-img">
              <img v-lazy="numGame.pro_6.path.url_1" class="img-responsive"/>
              <ul>
                <li v-for="(item, key) in $t('productPage.numGameChunk.pro_6.kindList')" :key="key">
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
  name: "numGameChunk",
  components: {LayoutModuleTitle, LayoutPhotoCenter, LayoutArticleTitle},
  data() {
    return {
      themeColor: '#5695F2',
      numGame: {
        articleTitle: {
          title: this.$t('productPage.numGameChunk.article.title'),
          sign: this.$t('productPage.numGameChunk.article.sign')
        },
        pro_1: {
          content: {
            title: this.$t('productPage.numGameChunk.pro_1.title'),
            sign: this.$t('productPage.numGameChunk.pro_1.sign'),
            remark: this.$t('productPage.numGameChunk.pro_1.remark'),
          },
          backgrounds: {
            url: require('../../../assets/product/NumberGame/pro_01_1.png')
          }
        },
        pro_2: {
          title: {
            title: this.$t('productPage.numGameChunk.pro_2.title'),
            sign: this.$t('productPage.numGameChunk.pro_2.sign')
          },
          path: {
            url_1: require("../../../assets/product/NumberGame/pro_2_1.png"),
            url_2: require("../../../assets/product/NumberGame/pro_2_2.png"),
            url_3: require("../../../assets/product/NumberGame/pro_2_3.png"),
            url_4: require("../../../assets/product/NumberGame/pro_2_4.png"),
          },
          classicText: {
            text_1: this.$t('productPage.numGameChunk.pro_2.classicText.text_1'),
            text_2: this.$t('productPage.numGameChunk.pro_2.classicText.text_2'),
            text_3: this.$t('productPage.numGameChunk.pro_2.classicText.text_3'),
          }
        },
        pro_3: {
          title: {
            title: this.$t('productPage.numGameChunk.pro_3.title'),
            sign: this.$t('productPage.numGameChunk.pro_3.sign')
          },
          path: {
            url_1: require('../../../assets/product/NumberGame/pro_3.png'),
            url_2: require('../../../assets/product/NumberGame/pro_3_1.png'),
          }
        },
        pro_4: {
          title: {
            title: this.$t('productPage.numGameChunk.pro_4.title'),
            sign: this.$t('productPage.numGameChunk.pro_4.sign')
          },
          path: {
            url_1: require('../../../assets/product/NumberGame/pro_4.png')
          }
        },
        pro_5: {
          title: {
            title: this.$t('productPage.numGameChunk.pro_5.title'),
            sign: this.$t('productPage.numGameChunk.pro_5.sign')
          },
          path: {
            url_1: require('../../../assets/product/NumberGame/pro_5_1.png'),
            url_2: require('../../../assets/product/NumberGame/pro_5_2.png'),
            url_3: require('../../../assets/product/NumberGame/pro_5_3.png'),
            url_4: require('../../../assets/product/NumberGame/pro_5_4.png'),
          }
        },
        pro_6: {
          title: {
            title: this.$t('productPage.numGameChunk.pro_6.title'),
            sign: this.$t('productPage.numGameChunk.pro_6.sign')
          },
          path: {
            url_1: require('../../../assets/product/NumberGame/wave.png')
          }
        }
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.gameChunk
  margin-bottom $productChunkBottom
  .classicChunk
    .content
      ul
        display flex
        align-items center
        margin-bottom 0
        .classic_text
          p
            position absolute
            left 50%
            top 50%
            transform translate(-50%,-50%)
            color #fff
            margin-bottom 0
  .massiveChunk
    .content
      padding 30px 0
      background-repeat no-repeat
      background-position center
      .gameKind-img
        position relative
        height 100%
        img
          margin 0 auto
        ul
          margin 0
          li
            position absolute
            color #999999
            transform translateX(-50%)
            p
              margin-bottom 0
          & li:nth-child(1)
            /*top (192/(@height)*100)%*/
            left (582/$main_w*100)%
  .pushChunk
    .content
      position relative
      p,ul
        margin-bottom 0
      ul
        position absolute
        top 0
        right 0
        bottom 0
        width 100%
        max-width 365px

        height 100%
        li
          position relative
          height 25%
          p
            display flex
            position absolute
            top 50%
            width 100%
            max-width 365px
            padding-left 30px
            box-sizing border-box
            justify-content start
            height 100%
            align-items center
            line-height @height
            transform translateY(-50%)
            max-height 60px
            color #FFFFFF
            background-color rgba(86,149,242,1)
            box-shadow 0 0 10px rgba(0,0,0,.5)

  .interactionChunk
    .content
      position relative
      ul
        margin-bottom 0
        li
          display inline-block
          vertical-align top
          height 349px

          p
            margin-bottom 0
            color #666666
        & li:nth-child(1)
          position relative
          border-top 2px solid #679FF3
          &::before
            content ""
            position absolute
            top 0
            left -138px
            width 140px
            height 50%
            border-right 2px solid #679FF3
            border-bottom  2px solid #679FF3

        & li:nth-child(2)
          border 2px solid #679FF3
          border-top none
        & li:nth-child(3)
          border 2px solid #679FF3
          border-left none
          border-bottom none
        & li:nth-child(4)
          position relative
          border-bottom 2px solid #679FF3
          &::before
            content "为用户提供全面的丰富的娱乐生活"
            position absolute
            bottom 0
            right -138px
            width 140px
            height 50%
            color #666666
            padding-top 20px
            border-left 2px solid #679FF3
            border-top  2px solid #679FF3
  .communityChunk
    .content
      position relative
      ul,p
        margin-bottom 0
    .wove-img
      position relative
      display inline-block
      img
        margin 0 auto
      ul
        li
          position absolute
          width 200px
          height 200px

          border-radius 50%
          background-color #5695F2
          box-shadow 0 0 20px rgba(0,0,0,.5)
          color #FFFFFF
          p
            position absolute
            width 100%
            left 0
            top 50%
            transform translateY(-50%)
            text-align center
        & li:nth-child(1)
          left 0
          transform translateX(-50%)
          top 200px
        & li:nth-child(2)
          left 55%
          top 50%
          transform translate(-50%, -50%)
        & li:nth-child(3)
          right 0
          bottom 0
          transform translate(50%)
</style>
