<template>
  <div>
    <div>
      <pro-detail :lang="'productPage.cultureChunk.article'"></pro-detail>
      <pro-layout-left
              :content="culture.pro_1"
              :stylus_box="culture.pro_1.style_box"
              :img-place="'right'"
      >
        <div slot="other" class="cultureCarousel" >
          <carousel :carousel-button="false" :translateXNumber="382" :scaleImg="'scaleX'">
            <swiper-slide
                    v-for="(item, key) in $t('productPage.cultureChunk.pro_1.cultureCarouselList')"
                    :key="key"
            ><img :src="item.url"/>
              <div></div>
              <div class="explain" data-swiper-parallax="-300">
                <div class="explain_box">
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </swiper-slide>
          </carousel>
        </div>
      </pro-layout-left>

      <div class="digital" v-lazy:background-image="$t('productPage.cultureChunk.pro_2.platformBg')">
        <div class="container">
          <div class="titleBar">
            <title-bar
                    :color-style="{title: '#ffffff',remark: '#ffffff',cover: 'rgba(223,223,223,0.2)'}"
                    :lang-string="'productPage.cultureChunk.pro_2.head'"></title-bar>
          </div>
          <div class="digitalList">
            <ul class="clearfix">
              <li class="col-md-3 col-xs-6" v-for="(item, key) in $t('productPage.cultureChunk.pro_2.digitalList')">
                <i v-lazy:background-image="item.url">{{item.sign}}</i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="platform container">
        <div class="titleBar">
          <title-bar :lang-string="'productPage.cultureChunk.pro_3.head'"></title-bar>
        </div>
        <ul class="clearfix">
          <li class="col-md-4" v-for="(item, key) in $t('productPage.cultureChunk.pro_3.platformList')">
            <i v-lazy:background-image="item.url"></i>
            <h5>{{ item.title }}</h5>
            <p class="remark">{{ item.remark }}</p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import TitleBar from "./temp/titleBar";
  import ProDetail from "./temp/proDetail";
  import ProLayoutLeft from "./temp/proLayoutLeft";
  import Carousel from "../../../components/carousel";

  export default {
    name: "cultureChunk",
    data() {
      return {
        culture: {
          article: {
            title: "东方文化",
            bgUrl: require("../../../assets/product/culture/culture_bg.png"),
            remark:
              "东方文化是RockyMobi创建的中国传统文化在线分享体验平台。平台为用户提供海量中国传统文化课程分享。让用户能够近距离深刻的感受中国传统文化的独特的魅力，让用户怀一颗赤子之心走近、感悟和践行中国传统文化。"
          },
          pro_1: {
            title: this.$t('productPage.cultureChunk.pro_1.title'),
            titleCover: this.$t('productPage.cultureChunk.pro_1.titleCover'),
            remark: this.$t('productPage.cultureChunk.pro_1.remark'),
            style_box: {
              backgroundColor: '#F7F7F7',
              padding: "127px 0 104px 0"
            }
          }
        }
      };
    },
    components: {Carousel, ProLayoutLeft, ProDetail, TitleBar}
  };
</script>

<style scoped lang="stylus">
  .cultureCarousel
    margin 0 auto
    max-width 516px
    overflow hidden
    img
      width 150px;
    .explain
      position absolute
      width 150px
      height 36px
      line-height 36px
      left 50%
      bottom 0
      margin-left 0px
      background-color  #000000
    .explain_box
      span
        font-family:"MicrosoftYaHei";
        font-weight:400;
        font-size 20px
        color:rgba(255,255,255,1);
  .digital
    position relative
    padding 141px 0 260px
    background-size cover
    background-position center
    .digitalList
      ul
        padding 50px 0
        margin-bottom 0
        li
          i
            display block
            margin 0 auto
            width 180px
            height 180px
            line-height @height
            font-family "MicrosoftYaHei"
            font-style normal
            font-size 24px
            font-weight bold
            color #71C8DA
            background-repeat no-repeat
            background-size 100% 100%
  .platform
    padding 96px 0
    ul
      margin-bottom 0
      li
        i
          display block
          margin 0 auto 14px
          width 81px
          height 81px
          background-size 100% 100%
        h5
          /*font-size:20px;*/
          /*font-weight:bold;*/
          margin 0 0 13px
          color:rgba(51,51,51,1);
        .remark
          text-align left
          /*font-weight:bold;*/
          color:rgba(122,127,136,1);
          margin-bottom 0
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .digital{
        padding 50px 0 30px
        .digitalList ul{
          padding 20px 0
          i{
            font-size 16px;
            width 120px
            height 120px
            line-height @height
          }
        }
      }
      .platform{
        padding 30px 0
      }
    }
  }
</style>
