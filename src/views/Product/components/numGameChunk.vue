<template>
  <div class="container">
    <product-title :styles = "numGame.pro_1.styles" :content="numGame.pro_1.content"></product-title>
    <product-layout-stock :styles = "numGame.pro_2.styles" :content="numGame.pro_2.content"></product-layout-stock>
    <product-layout-center :styles = "numGame.pro_3.styles" :content="numGame.pro_3.content"></product-layout-center>
    <product-layout-vertical class="numGameChunk_pro4" :styles="numGame.pro_4.styles">
      <div slot="left" class="left">
        <div class="img">
          <img v-lazy="numGame.pro_4.styles.url" />
        </div>
      </div>
      <div slot="right" class="right">
        <div class="r-img">
          <img v-lazy="numGame.pro_4.content.url" />
        </div>
        <div class="r-title">
          <h5>{{numGame.pro_4.content.title}}</h5>
        </div>
        <div class="r-remark">
          <p>{{numGame.pro_4.content.remark}}</p>
        </div>
      </div>
      <div class="sign">
        <i></i>
      </div>
    </product-layout-vertical>
    <product-carousel :carouselList="numGame.pro_5.carouselList" :styles="numGame.pro_5.styles"></product-carousel>
  </div>
</template>
<script>
import ProductTitle from "./temp/productTitle";
import ProductLayoutStock from "./temp/productLayoutStock";
import ProductLayoutCenter from "./temp/productLayoutCenter";
import ProductLayoutVertical from "./temp/productLayoutVertical";
import ProductCarousel from "./temp/productCarousel";
const color = "#E84237";
export default {
  name: "numGameChunk",
  components: {
    ProductCarousel,
    ProductLayoutVertical, ProductLayoutCenter, ProductLayoutStock, ProductTitle },
  data() {
    return {
      numGame: {
        pro_1: {
          content: {
            title: this.$t('productPage.numGameChunk.pro_1.title'),
            remark: this.$t('productPage.numGameChunk.pro_1.remark')
          },
          styles: {
            url: require("../../../assets/product/NumberGame/Rectangle.png"),
            title: {
              backgroundColor: color
            },
            remark: {
              left: '186px',
              width: '550px'
            }
          }
        },
        pro_2: {
          content: {
            title: this.$t('productPage.numGameChunk.pro_2.title'),
            remark: this.$t('productPage.numGameChunk.pro_2.remark')
          },
          styles: {
            url: require("../../../assets/product/NumberGame/pro_2.png"),
            title: {
              backgroundColor: color,
              right: "0px",
              top: "0px"
            },
            remark: {
              left: '186px',
              width: '550px'
            },
            content: {
              right: "0px",
              bottom: "50px",
              width: "467px",
              backgroundColor: "#CEEBF4"
            },
            box: {
              padding : "0px",
              border: "4px solid #CEEBF4",
              boxSizing: "border-box"
            },
            imgBox: {
              position: "absolute",
              left: "-4px",
              top: "-4px"
            }
          }
        },
        pro_3: {
          content: {
            title: this.$t('productPage.numGameChunk.pro_3.title'),
            remark: this.$t('productPage.numGameChunk.pro_3.remark')
          },
          styles: {
            url: require("../../../assets/product/NumberGame/pro_03.png"),
            remark: {
              left: '486px',
              maxWidth: '481px'
            },
            title: {
              backgroundColor: color,
            }
          }
        },
        pro_4: {
          content: {
            title: this.$t('productPage.numGameChunk.pro_4.title'),
            remark: this.$t('productPage.numGameChunk.pro_4.remark'),
            url: require("../../../assets/product/NumberGame/pro_4.png")
          },
          styles: {
            url: require("../../../assets/product/NumberGame/pro_4_left.png"),
            box: {
              backgroundColor: "#CEEBF4"
            }
          }
        },
        pro_5: {
          carouselList: [
            {url: require("../../../assets/product/NumberGame/carousel01.png")},
            {url: require("../../../assets/product/NumberGame/carousel02.png")},
            {url: require("../../../assets/product/NumberGame/carousel03.png")},
            {url: require("../../../assets/product/NumberGame/carousel04.png")},
            {url: require("../../../assets/product/NumberGame/carousel05.png")},
          ],
          styles: {
            url: require("../../../assets/product/carouselBg.png")
          }
        }
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
  .numGameChunk_pro4
    p
      margin-bottom 0
    .left
      display inline-block
      vertical-align middle
      margin-left 120px
    .right
      display inline-block
      width 443px
      vertical-align middle
      margin-left 125px
      margin-right 99px
      .r-title
        margin 32px 0 14px
        h5
          width 134px
          height 35px
          line-height @height
          background-color #E84237
          color #ffffff
          margin 0
          text-align center
      .r-remark
        color:rgba(0,0,0,1);
        line-height 35px
        text-align left
    .sign
      position absolute
      bottom 49px
      left -45px
      i
        display block
        width 188px
        height 60px
        background-image url("../../../assets/product/NumberGame/more.png")
</style>
