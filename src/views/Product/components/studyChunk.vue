<template>
  <div>
    <div>
      <pro-detail :lang="'productPage.studyChunk.article'"></pro-detail>
      <pro-layout-left
              :content="study.pro_1"
              :stylus_box="study.pro_1.style_box"
              :img-place="'right'"
      >
      </pro-layout-left>
      <div class="language">
        <div class="container">
          <div class="titleBar">
            <title-bar
                    :color-style="{title: '#ffffff',remark: '#ffffff',cover: 'rgba(223,223,223,0.2)'}"
                    :lang-string="'productPage.studyChunk.pro_2'"
            ></title-bar>
          </div>
          <div class="languageList">
            <ul class="clearfix">
              <li class="person"><img src="../../../assets/product/study/icon_head.png" class="img-responsive"/></li>
              <li class="visible-lg language-big" v-for="(item, key) in $t('productPage.studyChunk.pro_2.genreList')"  :style="item.style" v-lazy:background-image="item.bgUrl">
                <p class="wow fadeInUp">{{item.name}}</p>
              </li>
              <li class="language-small hidden-lg col-xs-6" v-for="(item, key) in $t('productPage.studyChunk.pro_2.genreList')"  >
                <p class="wow fadeInUp" :style="{width:item.style.width}"  v-lazy:background-image="item.bgUrl">{{item.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--<pro-layout-left
        :content="study.pro_2"
        :stylus_box="study.pro_2.style_box"
        :img-place="'right'"
      ></pro-layout-left>-->
      <pro-layout-left
        :content="study.pro_3"
        :stylus_box="study.pro_3.style_box"
      ></pro-layout-left>
      <pro-layout-left
        :content="study.pro_4"
        :stylus_box="study.pro_4.style_box"
        :img-place="'right'"
      ></pro-layout-left>
    </div>
  </div>
</template>

<script>
import TitleBar from "./temp/titleBar";
import ProLayoutLeft from "./temp/proLayoutLeft";
import ProDetail from "./temp/proDetail";
export default {
  name: "studyChunk",
  data() {
    return {
      study: {
        pro_1: {
          title: this.$t('productPage.studyChunk.pro_1.title'),
          titleCover: this.$t('productPage.studyChunk.pro_1.titleCover'),
          url: require("../../../assets/product/study/pro_01.png"),
          remark: this.$t('productPage.studyChunk.pro_1.remark'),
          style_box: {
            backgroundColor:'#F7F7F7',
            padding: "100px 0 74px"
          }
        },
        pro_2: {
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/study/pro_bg_02.png") +
              ")",
            padding: "100px 0 74px"
          }
        },
        pro_3: {
          title: this.$t('productPage.studyChunk.pro_3.title'),
          titleCover: this.$t('productPage.studyChunk.pro_3.titleCover'),
          url: require("../../../assets/product/study/pro_03.png"),
          remark: this.$t('productPage.studyChunk.pro_3.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/study/pro_bg_03.png") +
              ")",
            padding: "118px 0 13px"
          }
        },
        pro_4: {
          title: this.$t('productPage.studyChunk.pro_4.title'),
          titleCover: this.$t('productPage.studyChunk.pro_4.titleCover'),
          url: require("../../../assets/product/study/pro_04.png"),
          remark: this.$t('productPage.studyChunk.pro_4.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/study/pro_bg_04.png") +
              ")",
            padding: "94px 0"
          }
        }
      }
    };
  },
  components: {ProDetail, ProLayoutLeft, TitleBar }
};
</script>

<style scoped lang="stylus">
.language
  background-image url("../../../assets/product/study/pro_bg_02.png")
  background-repeat no-repeat
  background-position center
  padding 118px 0 72px
  .languageList
    ul
      position relative
      margin 0
      height 482px
      .person
        position absolute
      .language-small
        background-size 100% 100%
        margin 30px auto 15px
        p
          margin 0 auto
          height 70px
          background-size 100% 100%
      .language-big
        position absolute
        background-size 100% 100%
      p
        width 100%
        margin 0
        font-size 26px
        line-height 70px
        font-weight:400;
        color:rgba(255,255,255,1);
      .person
        width 151px
        height 151px
        left 50%
        top 50%
        transform translate(-50%,-50%)

</style>
<style lang="stylus" scoped>
  @media (max-width:1200px){
    #app{
      .language{
        .languageList ul{
          height auto
        }
      }
    }
  }
  @media (max-width:768px){
    #app{
      .language{
        padding 50px 0 30px
        .languageList ul{
          height auto
          .language-small p{
            width 140px !important;
            height 45px;
            line-height 45px;
          }
        }
      }
    }
  }
</style>
