<template>
  <div class="container">
    <product-title :styles = "recreation.pro_1.styles" :content="recreation.pro_1.content"></product-title>
    <product-layout-left :styles="recreation.pro_2.styles" :content="recreation.pro_2.content"></product-layout-left>
    <product-layout-center :styles="recreation.pro_3.styles" :content="recreation.pro_3.content"></product-layout-center>
    <product-layout-vertical class="recreationChunk_pro4" :styles="recreation.pro_4.styles">
      <div slot="left" class="left">
        <div class="img">
          <img v-lazy="recreation.pro_4.styles.url" />
        </div>
      </div>
      <div slot="right" class="right">
        <div class="r-title">
          <h5>{{recreation.pro_4.content.title}}</h5>
        </div>
        <div class="r-remark">
          <p>{{recreation.pro_4.content.remark}}</p>
        </div>
      </div>
      <div class="sign">
        <i></i>
      </div>
    </product-layout-vertical>
  </div>
</template>

<script>
import ProductTitle from "./temp/productTitle";
import ProductLayoutCenter from "./temp/productLayoutCenter";
import ProductLayoutVertical from "./temp/productLayoutVertical";
import ProductLayoutLeft from "./temp/productLayoutLeft";
const color = "#FFB071";
export default {
  name: "recreationChunk",
  components: {ProductLayoutLeft, ProductLayoutVertical, ProductLayoutCenter, ProductTitle },
  data() {
    return {
      recreation: {
        pro_1: {
          content: {
            title: this.$t('productPage.recreationChunk.pro_1.title'),
            remark: this.$t('productPage.recreationChunk.pro_1.remark'),
          },
          styles: {
            url: require("../../../assets/product/recreation/pro_1.png"),
            remark: {
              left:'340px',
              width: '548px'
            },
            title: {
              backgroundColor: color
            }
          }
        },
        pro_2: {
          content: {
            title: this.$t('productPage.recreationChunk.pro_2.title'),
            remark: this.$t('productPage.recreationChunk.pro_2.remark')
          },
          styles: {
            url: require("../../../assets/product/recreation/pro_2.png"),
            title: {
              backgroundColor: color
            }
          }
        },
        pro_3: {
          content: {
            title: this.$t('productPage.recreationChunk.pro_3.title'),
            remark: this.$t('productPage.recreationChunk.pro_3.remark')
          },
          styles: {
            url: require("../../../assets/product/recreation/pro_3.png"),
            title: {
              backgroundColor: color,
              left: "442px",
              top: "53px"
            },
            remark: {
              left: '494px',
              maxWidth: '473px'
            }
          }
        },
        pro_4: {
          content: {
            title: this.$t('productPage.recreationChunk.pro_4.title'),
            remark: this.$t('productPage.recreationChunk.pro_4.remark')
          },
          styles: {
            url: require("../../../assets/product/recreation/pro_4.png"),
            box: {
              backgroundColor: "rgb(244,244,244)"
            }
          }
        }
      }
    };
  }
};
</script>

<style scoped lang="stylus">
  .recreationChunk_pro4
    p
      margin-bottom 0
    .left
      display inline-block
      vertical-align middle
      margin-left 257px
    .right
      display inline-block
      width 452px
      vertical-align middle
      margin-left 46px
      margin-right 83px
      .r-title
        margin-bottom 42px
        h5
          width 134px
          height 35px
          line-height @height
          background-color #FFB071
          color #ffffff
          margin 0
          text-align center
      .r-remark
        color:rgba(0,0,0,1);
        line-height 35px
        text-align left
    .sign
      position absolute
      top 221px
      left -41px
      i
        display block
        width 423px
        height 60px
        background-image url("../../../assets/product/recreation/convenient.png")
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
    }
  }

</style>
