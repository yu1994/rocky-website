<template>
  <div class="container">
    <product-title :styles="study.pro_1.styles" :content="study.pro_1.content"></product-title>
    <product-layout-stock :styles="study.pro_2.styles" :content="study.pro_2.content"></product-layout-stock>
    <product-layout-center :styles="study.pro_3.styles" :content="study.pro_3.content"></product-layout-center>
    <product-layout-vertical class="studyChunk_4">
      <div slot="left" class="left">
        <div class="left-title">
          <h5>{{study.pro_4.content.title}}</h5>
        </div>
        <div class="left-remark">
          <p>{{study.pro_4.content.remark}}</p>
        </div>
      </div>
      <div slot="right" class="right">
        <div class="img">
          <img v-lazy="study.pro_4.styles.url"/>
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
  import ProductLayoutStock from "./temp/productLayoutStock";
  import ProductLayoutVertical from "./temp/productLayoutVertical";
  const color = "#9985D6";
  export default {
    name: "studyChunk",
    data() {
      return {
        study: {
          pro_1: {
            content: {
              title: this.$t('productPage.studyChunk.pro_1.title'),
              remark: this.$t('productPage.studyChunk.pro_1.remark')
            },
            styles: {
              url: require("../../../assets/product/study/pro_1.png"),
              remark: {
                left: '33px',
                width: '637px'
              },
              title: {
                backgroundColor: color,
                top: "21px",
                right: "-31px"
              }

            }
          },
          pro_2: {
            content: {
              title: this.$t('productPage.studyChunk.pro_2.title'),
              remark: this.$t('productPage.studyChunk.pro_2.remark')
            },
            styles: {
              url: require("../../../assets/product/study/pro_2.png"),
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
                bottom: "126px",
                width: "416px",
                backgroundColor: "#F4F4F4"
              },
              box: {
                padding: "66px 0",
                backgroundColor: "#CEEBF4"
              }
            }
          },
          pro_3: {
            content: {
              title: this.$t('productPage.studyChunk.pro_3.title'),
              remark: this.$t('productPage.studyChunk.pro_3.remark'),
            },
            styles: {
              url: require("../../../assets/product/study/pro_3.png"),
              title: {
                backgroundColor: color,
                top: "58px",
                left: "-109px"
              },
              remark: {
                left: '486px',
                maxWidth: '416px'
              }
            }
          },
          pro_4: {
            content: {
              title: this.$t('productPage.readIPChunk.pro_4.title'),
              remark: this.$t('productPage.readIPChunk.pro_4.remark'),
            },
            styles: {
              url: require("../../../assets/product/study/pro_4.png"),
            }
          }
        }
      };
    },
    components: {ProductLayoutVertical, ProductLayoutStock, ProductLayoutCenter, ProductTitle }
  };
</script>

<style scoped lang="stylus">
  .studyChunk_4
    .left
      display inline-block
      vertical-align middle
      margin 0 82px 0 107px
      width 332px
      text-align left
      .left-title
        margin-bottom 37px
        h5
          width 134px
          height 35px
          line-height @height
          background-color #9985D6
          color #ffffff
          margin 0
          text-align center
      .left-remark
        color: rgba(0, 0, 0, 1);
        line-height 35px
    .right
      display inline-block
      vertical-align middle
      margin-right 30px
    .sign
      position absolute
      bottom 53px
      left -56px
      i
        display block
        width 214px
        height 61px
        background-image url("../../../assets/product/study/share.png")
    img
      max-width 470px
    p
      margin-bottom 0
</style>
<!--<style lang="stylus" scoped>
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
</style>-->
