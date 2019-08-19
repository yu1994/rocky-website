<template>
  <div class="container">
    <div class="studyChunk">
     <layout-article-title :styles="{backgroundColor: themeColor}" :content="study.articleTitle"></layout-article-title>
      <div class="clearfix">
        <layout-theme :content="study.pro_1.content" :color="themeColor"></layout-theme>
      </div>
      <div class="knowledgeChunk">
        <layout-module-title :content="study.pro_2.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <div class="bg-img">
            <img v-lazy="study.pro_2.path.url" class="img-responsive"/>
            <ul>
              <li v-for="(item, key) in $t('productPage.studyChunk.pro_2.kindList')" :key="key">
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="dataChunk">
        <layout-module-title :content="study.pro_3.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <div class="bg-img">
            <img v-lazy="study.pro_3.path.url" class="img-responsive" />
            <div class="content-box">
                <div class="c-color"></div>
                <ul class="c-line">
                  <li v-for="(item, key) in study.pro_3.onlinePath" :key="key">
                    <img v-lazy="item" />
                  </li>
                </ul>
                <div class="c-text">
                    <p v-for="(item, key) in $t('productPage.studyChunk.pro_3.kindList')" :key="key">{{item}}</p>
                </div>
                <div class="c-remark">
                  <i></i>
                  <p>{{$t('productPage.studyChunk.pro_3.remark')}}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="learningChunk">
        <layout-module-title :content="study.pro_4.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <div class="bg-img">
            <img v-lazy="study.pro_4.path.url" class="img-responsive" />
            <ul>
              <li v-for="(item, key) in $t('productPage.studyChunk.pro_4.kindList')" :key="key" :style="{backgroundColor: item? '#fff' : 'transparent'}">
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="intelligentChunk">
        <layout-module-title :content="study.pro_5.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <ul>
            <li v-for="(item, key) in $t('productPage.studyChunk.pro_5.kindList')" :key="key" :style="{left: (key*(166/1140*100))+'%', zIndex: (99-key)}">
              <img v-lazy="study.pro_5.path.url_1"  class="img-responsive"/>
              <p>{{item}}</p>
            </li>
            <li class="upLine_1">
              <img v-lazy="study.pro_5.path.url_2" />
            </li>
            <li class="upLine_2">
              <img v-lazy="study.pro_5.path.url_2" />
            </li>
            <li class="below_1">
              <img v-lazy="study.pro_5.path.url_3" />
            </li>
            <li class="below_2">
              <img v-lazy="study.pro_5.path.url_3" />
            </li>
            <li class="below_3">
              <img v-lazy="study.pro_5.path.url_3" />
            </li>
          </ul>
        </div>
      </div>
      <div class="sharingChunk">
        <layout-module-title :content="study.pro_4.title" :border-color="themeColor"></layout-module-title>
        <div class="content">
          <div class="bg-img">
            <img v-lazy="study.pro_6.path.url" class="img-responsive" />
            <div class="remark">
              <p v-html="$t('productPage.studyChunk.pro_6.remark')"></p>
            </div>
          </div>
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
    name: "studyChunk",
    data() {
      return {
        themeColor: '#9985D6',
        study: {
          articleTitle: {
            title: this.$t('productPage.recreationChunk.article.title'),
            sign: this.$t('productPage.recreationChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.studyChunk.pro_1.title'),
              sign:  this.$t('productPage.studyChunk.pro_1.sign'),
              remark: this.$t('productPage.studyChunk.pro_1.remark'),
              url: require("../../../assets/product/study/pro_1.png")
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.studyChunk.pro_2.title'),
              sign: this.$t('productPage.studyChunk.pro_2.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_2.png")
            }
          },
          pro_3: {
            title: {
              title: this.$t('productPage.studyChunk.pro_3.title'),
              sign: this.$t('productPage.studyChunk.pro_3.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_3.png"),
              url_1: require("../../../assets/product/study/line_5.png")
            },
            onlinePath: [
              require("../../../assets/product/study/line_1.png"),
              require("../../../assets/product/study/line_2.png"),
              require("../../../assets/product/study/line_3.png"),
              require("../../../assets/product/study/line_4.png"),
            ]
          },
          pro_4: {
            title: {
              title: this.$t('productPage.studyChunk.pro_4.title'),
              sign: this.$t('productPage.studyChunk.pro_4.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_4.png")
            }
          },
          pro_5: {
            title: {
              title: this.$t('productPage.studyChunk.pro_5.title'),
              sign: this.$t('productPage.studyChunk.pro_5.sign')
            },
            path: {
              url_1: require("../../../assets/product/study/pro_5_1.png"),
              url_2: require("../../../assets/product/study/pro_5_2.png"),
              url_3: require("../../../assets/product/study/pro_5_3.png"),
            }

          },
          pro_6: {
            title: {
              title: this.$t('productPage.studyChunk.pro_6.title'),
              sign: this.$t('productPage.studyChunk.pro_6.sign'),
            },
            path: {
              url: require("../../../assets/product/study/pro_6.png")
            }
          },
        }
      };
    },
    components: {LayoutModuleTitle, LayoutTheme, LayoutArticleTitle }
  };
</script>

<style scoped lang="stylus">
  .studyChunk
    margin-bottom $productChunkBottom
    .knowledgeChunk
      .content
        ul, p
          margin-bottom 0
        .bg-img
          position relative
          display inline-block
          img
            margin 0 auto
        ul
          li
            position absolute
            white-space nowrap
            p
              color #666666
          & li:nth-child(1)
            left -3.068%
            top 14.86%
          & li:nth-child(2)
            right -3.068%
            top 14.86%
          & li:nth-child(3)
            left 93.72%
            top 82.17%
          & li:nth-child(4)
            left 83.403%
            bottom  -4.54%
          & li:nth-child(5)
            left 46.861%
            bottom  -4.54%
          & li:nth-child(6)
            left 14.086%
            bottom  -4.54%
          & li:nth-child(7)
            left -2.09%
            top 82.17%
    .dataChunk
      .content
        .bg-img
          position relative
          display inline-block
          img
            width 100%
          .content-box
            display flex
            align-items center
            position absolute
            bottom 0
            left 50%
            width  (1078/$main_w*100)%
            height 66.90%
            transform translateX(-50%)
            background-color #fff
            padding 0 28px
            box-sizing border-box
            vertical-align middle
            .c-color
              display inline-block
              vertical-align middle
              width 30.91%
              height 79.54%
              background-color rebeccapurple
            .c-line
              display inline-block
              vertical-align middle
              margin 0 0 0 22px
              width 20.74%
              img
                width 100%
              & li:nth-child(2)
                max-width 93.39%
                margin 20px 0 62px 0
              & li:nth-child(3)
                max-width 93.39%
                margin-bottom  20px
            .c-text
              position relative
              display inline-block
              vertical-align middle
              margin-bottom 0
              margin-left 14px
              width 11.50%
              height 28.40%
              p
                display flex
                align-items center
                justify-content center
                position absolute
                left 0
                width 100%
                height 30.4%
                margin-bottom 0
                line-height @height
                color #666666
                background-color #E6E678
              & p:nth-child(1)
                top
              & p:nth-child(2)
                bottom 0


            .c-remark
              display inline-block
              i
                display inline-block
                width 50%
                height 2px
                vertical-align middle
                background url("../../../assets/product/study/line_5.png") no-repeat center
              p
                display inline-block
                width 50%
                text-align left
                vertical-align middle
                margin-bottom 0

    .learningChunk
      .content
        position relative
        ul
          position absolute
          left 0
          top 0
          width 100%
          height 100%
        ul,p
          margin-bottom 0
        li
          position relative
          width 20%
          height 50%
          float left
          p
            position absolute
            width 100%
            top 50%
            transform translateY(-50%)
    .intelligentChunk
      .content
        min-height 136px
        ul
          position relative
          width 90%
          min-height 136px
          margin 0 auto
          li
            position absolute
            left 0
          .upLine_1
            left: (291/$main_w*100)%
            transform translateY(-100%)
          .upLine_2
            left: (624/$main_w*100)%
            transform translateY(-100%)
          .below_1
            left: (126/$main_w*100)%
            bottom 0
            transform translateY(100%)
          .below_2
            left: (457/$main_w*100)%
            bottom 0
            transform translateY(100%)
          .below_3
            left: (792/$main_w*100)%
            bottom 0
            transform translateY(100%)
        p
          position absolute
          width 100%
          text-align center
          top 50%
          transform translateY(-50%)
          margin-bottom 0
          color #666666
    .sharingChunk
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
</style>
