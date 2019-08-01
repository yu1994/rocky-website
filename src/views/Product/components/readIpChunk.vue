<template>
  <div>
    <div>
      <pro-detail :lang="'productPage.readIPChunk.article'"></pro-detail>
      <pro-layout-left
        :content="readIP.pro_1"
        :stylus_box="readIP.pro_1.style_box"
        :img-place="'right'"
      ></pro-layout-left>
      <pro-layout-center
              :content="readIP.pro_2"
              :stylus_box="readIP.pro_2.style_box"
      ></pro-layout-center>
      <pro-layout-left
        :content="readIP.pro_3"
        :stylus_box="readIP.pro_3.style_box"
      ></pro-layout-left>
      <pro-layout-center
              :content="readIP.pro_4"
              :stylus_box="readIP.pro_4.style_box"
      ></pro-layout-center>
      <div class="readIPSlogan">
        <img :src="$t('productPage.readIPChunk.pro_5.url')" class="img-responsive"/>
        <h2>{{$t('productPage.readIPChunk.pro_5.remark')}}</h2>
<!--
        <p class="slogan wow fadeInUp">{{$t('productPage.readIPChunk.pro_5.remark')}}</p>
-->
      </div>
    </div>
  </div>
</template>

<script>
import ProLayoutLeft from "./temp/proLayoutLeft";
import TitleBar from "./temp/titleBar";
import ProDetail from "./temp/proDetail";
import ProLayoutCenter from "./temp/proLayoutCenter";
export default {
  name: "readIpChunk",
  data() {
    return {
      readIP: {
        pro_1: {
          title: this.$t('productPage.readIPChunk.pro_1.title'),
          titleCover: this.$t('productPage.readIPChunk.pro_1.titleCover'),
          url: require("../../../assets/product/readIP/pro_01.png"),
          remark: this.$t('productPage.readIPChunk.pro_1.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/readIP/pro_bg_01.png") +
              ")",
            padding: "91px 0 30px 0"
          }
        },
        pro_2: {
          title: this.$t('productPage.readIPChunk.pro_2.title'),
          titleCover: this.$t('productPage.readIPChunk.pro_2.titleCover'),
          url: require("../../../assets/product/readIP/pro_02.png"),
          remark: this.$t('productPage.readIPChunk.pro_2.remark'),
          style_box: {
            padding: "92px 0 50px 0"
          }
        },
        pro_3: {
          title: this.$t('productPage.readIPChunk.pro_3.title'),
          titleCover: this.$t('productPage.readIPChunk.pro_3.titleCover'),
          url: require("../../../assets/product/readIP/pro_03.png"),
          remark: this.$t('productPage.readIPChunk.pro_3.remark'),
          style_box: {
            backgroundColor: "#F7F7F7",
            padding: "91px 0 30px 0"
          }
        },
        pro_4: {
          title: this.$t('productPage.readIPChunk.pro_4.title'),
          titleCover: this.$t('productPage.readIPChunk.pro_4.titleCover'),
          url: require("../../../assets/product/readIP/pro_04.png"),
          remark: this.$t('productPage.readIPChunk.pro_4.remark'),
          style_box: {
            backgroundColor: "#ffffff",
            padding: "84px 0 60px 0"
          }
        }

      }
    };
  },
  components: {ProLayoutCenter, ProDetail, TitleBar, ProLayoutLeft }
};
</script>

<style scoped lang="stylus">
.cartoon
  margin 92px auto 49px
  .titleBar
    margin-bottom 46px
.readIPSlogan
  position relative
  width 100%
  /*height 375px
  line-height @height
  background-image url("../../../assets/product/readIP/pro_bg_04.png")
  background-repeat no-repeat
  background-size cover
  background-position center*/
  h2
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
    color:rgba(255,255,255,1);
    margin 0
  .slogan
    font-size 30px
    font-family:"MicrosoftYaHei";
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin 0
</style>
