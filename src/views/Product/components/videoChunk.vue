<template>
<div class="container">
  <product-title :styles = "video.pro_1.styles" :content="video.pro_1.content"></product-title>
  <product-layout-left :styles="video.pro_2.styles" :content="video.pro_2.content"></product-layout-left>
  <product-layout-center :styles="video.pro_3.styles" :content="video.pro_3.content"></product-layout-center>
  <product-layout-vertical class="videoChunk_4">
    <div slot="left" class="l">
      <div class="l-title">
        <h5>{{video.pro_4.content.title}}</h5>
      </div>
      <div class="l-remark" v-html="video.pro_4.content.remark">
      </div>
    </div>
    <div slot="right" class="r">
      <div class="r-img">
        <img v-lazy="video.pro_4.styles.url" />
      </div>
    </div>
    <div class="sign">
      <i></i>
    </div>
  </product-layout-vertical>
  <div class="videoChunk_5">
    <div class="videoChunk_5-box"v-lazy:background-image="video.pro_5.styles.url" > <!-- -->
      <img  v-lazy="video.pro_5.content.url"  /> <!-- wow zoomIn -->
    </div>
  </div>
</div>
</template>

<script>
  import ProductTitle from "./temp/productTitle";
  import ProductLayoutLeft from "./temp/productLayoutLeft";
  import ProductLayoutCenter from "./temp/productLayoutCenter";
  import ProductLayoutVertical from "./temp/productLayoutVertical";
  import ProductLayoutRight from "./temp/productLayoutRight";
  const color = "#8EC6A5"
  export default {
    name: "videoChunk",
    components: {ProductLayoutRight, ProductLayoutVertical, ProductLayoutCenter, ProductLayoutLeft, ProductTitle},
    data() {
      return {
        video: {
          pro_1: {
            content: {
              title: this.$t('productPage.videoChunk.pro_1.title'),
              remark: this.$t('productPage.videoChunk.pro_1.remark'),
            },
            styles: {
              url: require("../../../assets/product/video/pro_1.png"),
              remark: {
                left:'179px',
                width: '543px'
              },
              title: {
                backgroundColor: color
              }
            }
          },
          pro_2: {
            content: {
              title: this.$t('productPage.videoChunk.pro_2.title'),
              remark: this.$t('productPage.videoChunk.pro_2.remark')
            },
            styles: {
              url: require("../../../assets/product/video/pro_2.png"),
              title: {
                backgroundColor: color
              },
              imgBox: {
                width: '421px'
              },
              img: {
                left: '24px'
              },
              content: {
                width: '434px'
              }
            }
          },
          pro_3: {
            content: {
              title: this.$t('productPage.videoChunk.pro_3.title'),
              remark: this.$t('productPage.videoChunk.pro_3.remark')
            },
            styles: {
              url: require("../../../assets/product/video/pro_3.png"),
              title: {
                backgroundColor: color
              },
              remark: {
                left: '396px',
                maxWidth: '570px'
              }
            }
          },
          pro_4: {
            content: {
              title: this.$t('productPage.videoChunk.pro_4.title'),
              remark: this.$t('productPage.videoChunk.pro_4.remark'),
            },
            styles: {
              url: require("../../../assets/product/video/pro_4.png"),
            }
          },
          pro_5: {
            content: {
              url: require("../../../assets/product/video/pro_5.png")
            },
            styles: {
              url: require("../../../assets/product/video/pro_05_bg.png")
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.videoChunk_4
  .l
    display inline-block
    vertical-align middle
    width 190px
    text-align left
    margin 0 100px 0 439px
    .l-title
      position absolute
      left 0
      h5
        width 134px
        height 35px
        line-height @height
        background-color #8EC6A5
        color #ffffff
        margin 0
        text-align center
    .l-remark
      color:rgba(0,0,0,1);
      line-height 35px
  .r
    display inline-block
    vertical-align middle
    margin-right 133px
  .sign
    position absolute
    top 244px
    left -55px
    i
      display block
      width 280px
      height 60px
      background-image url("../../../assets/product/video/feature.png")
.videoChunk_5
  display table
  width 100%
  height 507px
  margin-bottom 19px
  .videoChunk_5-box
    display table-cell
    width 100%
    height @height
    vertical-align middle
    img
      margin 0 auto
</style>
