<template>
<div class="homePage">
  <div class="homePage-box">
    <!--图片-->
    <section class="cityPhotoChunk">
      <div class="cityPhotoChunk-box">
        <img v-lazy="cityPhotoData.url" class="img-responsive wow zoomIn" />
      </div>
    </section>
    <!-- 发展历程 -->
    <section class="developChunk">
      <div class="developChunk-box" v-lazy:background-image="developData.bgUrl">
        <ul>
          <li class="clearfix develop_1">
            <div class="col-md-6 left">
              <h4>{{$t('productPage.developChunk.develop_1.title')}}</h4>
              <p class="sign">{{$t('productPage.developChunk.develop_1.sign')}}</p>
            </div>
            <div class="col-md-6 right">
              <p>
                {{$t('productPage.developChunk.develop_1.content')}}
              </p>
            </div>
          </li>
          <li class="clearfix develop_2">
            <div class="col-md-6 left">
              <p>
                {{$t('productPage.developChunk.develop_2.content')}}
              </p>
            </div>
            <div class="col-md-6 right">
              <h4> {{$t('productPage.developChunk.develop_2.title')}}</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!--阅读 -->
    <section class=" chunk readChunk container">
      <product-item-title :content="proData.readChunk"></product-item-title>
      <div class="content">
        <div class="content-shadow">
          <img v-lazy="proData.readChunk.url" class="wow zoomIn img-responsive"/>
        </div>
        <product-more :path="'/product/read'"></product-more>
      </div>
    </section>
    <!-- 游戏 -->
    <section class=" chunk gameChunk container">
      <product-item-title :content="proData.gameChunk"></product-item-title>
      <div class="content">
        <div class="content-shadow">
          <product-carousel :carouselList="proData.gameChunk.list"></product-carousel>
        </div>
        <product-more></product-more>
      </div>
    </section>
    <!-- 视频 -->
    <section class=" chunk videoChunk container">
      <product-item-title :content="proData.videoChunk"></product-item-title>
      <div class="content">
        <div class="content-shadow" v-lazy:background-image="proData.videoChunk.bgUrl">
          <img v-lazy="proData.videoChunk.url" class="wow zoomIn img-responsive"/>
        </div>
        <product-more></product-more>
      </div>
    </section>
    <!-- 学 习 -->
    <section class=" chunk studyChunk container">
      <product-item-title :content="proData.studyChunk"></product-item-title>
      <div class="content">
        <div class="content-shadow">
          <img v-lazy="proData.studyChunk.url" class="wow zoomIn img-responsive"/>
        </div>
        <product-more></product-more>
      </div>
    </section>
    <!--娱乐 生活-->
    <section class=" chunk recreationChunk container">
      <product-item-title :content="proData.recreationChunk"></product-item-title>
      <div class="content">
        <div class="content-shadow">
          <img v-lazy="proData.recreationChunk.url" class="wow zoomIn img-responsive"/>
        </div>
        <product-more></product-more>
      </div>
    </section>
  </div>
</div>
</template>

<script>
  import ProductItemTitle from "./temp/productItemTitle";
  import ProductMore from "./temp/productMore";
  import ProductCarousel from "./temp/productCarousel";
  export default {
    name: "homeChunk",
    data() {
      return {
        cityPhotoData: {
          url: require('../../../assets/product/city.png')
        },
        developData: {
          bgUrl: require('../../../assets/product/develop.png')
        },
        proData: {
          readChunk: {
            title: this.$t('productPage.readIPChunk.article.title'),
            sign: this.$t('productPage.readIPChunk.article.sign'),
            url: require('../../../assets/product/read_shadow.png')
          },
          gameChunk: {
            title: this.$t('productPage.numGameChunk.article.title'),
            sign: this.$t('productPage.numGameChunk.article.sign'),
            url: require('../../../assets/product/read_shadow.png'),
            list: [
              {url: require("../../../assets/product/NumberGame/carousel01.png")},
              {url: require("../../../assets/product/NumberGame/carousel02.png")},
              {url: require("../../../assets/product/NumberGame/carousel03.png")},
              {url: require("../../../assets/product/NumberGame/carousel04.png")},
              {url: require("../../../assets/product/NumberGame/carousel05.png")},
            ],
          },
          videoChunk: {
            title: this.$t('productPage.videoChunk.article.title'),
            sign: this.$t('productPage.videoChunk.article.sign'),
            bgUrl: require('../../../assets/product/carouselBg.png'),
            url: require('../../../assets/product/bitmap.png'),
          },
          studyChunk: {
            title: this.$t('productPage.studyChunk.article.title'),
            sign: this.$t('productPage.studyChunk.article.sign'),
            url: require('../../../assets/product/study.png'),
          },
          recreationChunk: {
            title: this.$t('productPage.recreationChunk.article.title'),
            sign: this.$t('productPage.recreationChunk.article.sign'),
            url: require('../../../assets/product/recreation.png'),
          }
        },
      }
    },
    components: {
      ProductCarousel,
      ProductMore,
      ProductItemTitle,
    }
  }
</script>

<style scoped  lang="stylus">
  .homePage
    /*background-color rgb(240,242,245)*/
    background-color #FFFFFF
    .chunk
      margin-bottom 99px
      .content-shadow
        padding 10px 20px
    .developChunk
      .developChunk-box
        position relative
        width 100%
        height 662px
        background-position center
        ul
          margin 0 auto
          &:after
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            max-height 585px
            height 585px
            background:#9A9A9A;
            width: 1px;
            margin: 0 auto
          p
            margin 0
          .develop_1
            padding-top 100px
            position relative
            h4
              margin 0 0 20px 0
            .left
              text-align right
              padding 0 25px
              .sign
                color #999999
            .right
              padding 0 25px
              text-align left
              p
                max-width 550px
            &:before
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              margin: 0 auto;
              top 100px
              width: 22px;
              height: 22px;
              z-index 999
              /*margin-top -(@height/2)px*/
              border-radius: 100%;
              padding 4px
              box-sizing content-box
              background: #ffff;
              background url("../../../assets/product/circle.png") no-repeat
              background-position center
              border 1px solid #5695F2
          .develop_2
            display flex
            position relative
            align-items center
            margin-top 155px
            .right
              padding 0 25px
              text-align left
              h4
                margin 0
            .left
              padding 0 25px
              text-align justify
              p
                float right
                max-width 420px
            /* position absolute
             top 50%
             right 0
             max-width 420px
             transform translateY(-50%)*/
            &:before
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              margin: 0 auto;
              top 50%
              width: 22px;
              height: 22px;
              z-index 999
              margin-top -(@height/2)px
              padding 4px
              box-sizing content-box
              background: #ffff;
              background url("../../../assets/product/circle.png") no-repeat
              background-position center
              border 1px solid #5695F2
              border-radius: 100%;
    .cityPhotoChunk
      .cityPhotoChunk-box
        margin 0 auto 40px
        img
          margin 0 auto
    .content
      .content-shadow
        width 100%
        box-shadow:  0 0 20px rgba(102,102,102,.6);
      img
        margin 0 auto
</style>
<style lang="stylus">
  @media (max-width:768px){
    #app{
      .product{
        .cityPhotoChunk-box{
          margin 30px auto
        }
      }
    }
  }
</style>
