<template>
  <div class="container">
    <product-title :styles = "readIP.pro_1.styles" :content="readIP.pro_1.content"></product-title>
    <product-layout-left :styles="readIP.pro_2.styles" :content="readIP.pro_2.content"></product-layout-left>
    <product-layout-center :styles="readIP.pro_3.styles" :content="readIP.pro_3.content"></product-layout-center>
    <product-layout-vertical class="readIPChunk_4">
      <div slot="left" class="left">
        <div class="left-title">
          <h5>{{readIP.pro_4.content.title}}</h5>
        </div>
        <div class="left-remark">
          <p>{{readIP.pro_4.content.remark}}</p>
        </div>
      </div>
      <div slot="right" class="right">
        <div class="img">
          <img v-lazy="readIP.pro_4.styles.url" />
        </div>
      </div>
      <div class="sign">
        <i></i>
      </div>
    </product-layout-vertical>
    <product-carousel :carouselList="readIP.pro_5.readCarouselList" :styles="readIP.pro_5.styles"></product-carousel>
  </div>
</template>
<script>
import ProductTitle from "./temp/productTitle";
import ProductLayoutLeft from "./temp/productLayoutLeft";
import ProductLayoutCenter from "./temp/productLayoutCenter";
import ProductCarousel from "./temp/productCarousel";
import ProductLayoutVertical from "./temp/productLayoutVertical";
const color = "#F8A81C";
export default {
  name: "readIpChunk",
  data() {
    return {
      readIP: {
        pro_1: {
          content: {
            title: this.$t('productPage.readIPChunk.pro_1.title'),
            remark: this.$t('productPage.readIPChunk.pro_1.remark'),
          },
          styles: {
            url: require("../../../assets/product/readIP/pro_1.png"),
            remark: {
              left:'197px',
              width: '445px'
            },
            title: {
              backgroundColor: color
            }
          }
        },
        pro_2: {
          content: {
            title: this.$t('productPage.readIPChunk.pro_2.title'),
            remark: this.$t('productPage.readIPChunk.pro_2.remark')
          },
          styles: {
            url: require("../../../assets/product/readIP/pro_02_img.png"),
            title: {
              backgroundColor: color
            },
            imgBox: {
              width: '531px'
            },
            content: {
              width: '364px'
            }
          }
        },
        pro_3: {
          content: {
            title: this.$t('productPage.readIPChunk.pro_3.title'),
            remark: this.$t('productPage.readIPChunk.pro_3.remark')
          },
          styles: {
            url: require("../../../assets/product/readIP/Rectangle.png"),
            title: {
              backgroundColor: color
            },
            remark: {
              left: '540px',
              maxWidth: '427px'
            }
          }
        },
        pro_4: {
          content: {
            title: this.$t('productPage.readIPChunk.pro_4.title'),
            remark: this.$t('productPage.readIPChunk.pro_4.remark'),
          },
          styles: {
            url: require("../../../assets/product/readIP/pro_4.png"),
          }
        },
        pro_5: {
          readCarouselList: [
            {url: require("../../../assets/product/readIP/carousel1.png")},
            {url: require("../../../assets/product/readIP/carousel2.png")},
            {url: require("../../../assets/product/readIP/carousel3.png")},
            {url: require("../../../assets/product/readIP/carousel4.png")},
            {url: require("../../../assets/product/readIP/carousel5.png")},
            // {url: require("../../../assets/product/readIP/c1.png")},
            // {url: require("../../../assets/product/readIP/c2.png")},
            // {url: require("../../../assets/product/readIP/c3.png")},
            // {url: require("../../../assets/product/readIP/c4.png")},
            // {url: require("../../../assets/product/readIP/c5.png")},
          ],
          styles: {
            url: require("../../../assets/product/carouselBg.png")
          }
        }
      }
    };
  },
  components: {ProductLayoutVertical, ProductCarousel, ProductLayoutCenter, ProductLayoutLeft, ProductTitle }
};
</script>

<style scoped lang="stylus">
.readIPChunk_4
  .left
    display inline-block
    vertical-align middle
    margin 0 40px 0 186px
    width 332px
    text-align left
    .left-title
      margin-bottom 54px
      h5
        width 134px
        height 35px
        line-height @height
        background-color #F8A81C
        color #ffffff
        margin 0
        text-align center
    .left-remark
      color:rgba(0,0,0,1);
      line-height 35px
  .right
    display inline-block
    vertical-align middle
  .sign
    position absolute
    top 110px
    left -26px
    i
      display block
      width 202px
      height 61px
      background-image url("../../../assets/product/readIP/novel.png")
  img
    max-width 470px
  p
    margin-bottom 0
</style>
