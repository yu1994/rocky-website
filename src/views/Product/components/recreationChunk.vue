<template>
  <div>
    <div>
      <pro-detail :lang="'productPage.recreationChunk.article'"></pro-detail>
      <div>
        <pro-layout-left
          :content="recreation.pro_1"
          :stylus_box="recreation.pro_1.style_box"
          :img-place="'right'"
        ></pro-layout-left>
      </div>
      <div class="crbt">
        <div class="container">
          <div class="titleBar">
            <title-bar
                    :color-style="{title: '#ffffff',remark: '#ffffff',cover: 'rgba(223,223,223,0.2)'}"
                    :lang-string="'productPage.recreationChunk.pro_2'"
            ></title-bar>
          </div>
          <div class="crbtList">
            <ul class="clearfix">
              <li class="col-md-3 col-xs-6" v-for="(item, key) in $t('productPage.recreationChunk.pro_2.crbtList')" :key="key">
                <div class="crbtList_box">
                  <img class="wow fadeInUp" v-lazy="item.url" />
                  <p>{{item.remark}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <pro-layout-left
          :content="recreation.pro_3"
          :stylus_box="recreation.pro_3.style_box"
        ></pro-layout-left>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "./temp/titleBar";
import ProLayoutLeft from "./temp/proLayoutLeft";
import ProDetail from "./temp/proDetail";
import ProLayoutCenter from "./temp/proLayoutCenter";
export default {
  name: "recreationChunk",
  components: {ProLayoutCenter, ProDetail, ProLayoutLeft, TitleBar },
  data() {
    return {
      recreation: {
        pro_1: {
          title: this.$t('productPage.recreationChunk.pro_1.title'),
          titleCover: this.$t('productPage.recreationChunk.pro_1.titleCover'),
          url: require("../../../assets/product/recreation/pro_01.png"),
          remark: this.$t('productPage.recreationChunk.pro_1.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/recreation/pro_bg_01.png") +
              ")",
            padding: "121px 0 98px 0"
          }
        },
        pro_2: {
          title: this.$t('productPage.recreationChunk.pro_2.title'),
          titleCover: this.$t('productPage.recreationChunk.pro_2.titleCover'),
          bgUrl: require("../../../assets/product/recreation/pro_bg_02.png"),
          remark: this.$t('productPage.recreationChunk.pro_2.remark'),
          style_box: {
            padding: "121px 0 98px 0"
          }
        },
        pro_3: {
          title: this.$t('productPage.recreationChunk.pro_3.title'),
          titleCover: this.$t('productPage.recreationChunk.pro_3.titleCover'),
          url: require("../../../assets/product/recreation/pro_03.png"),
          remark: this.$t('productPage.recreationChunk.pro_3.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/recreation/pro_bg_01.png") +
              ")",
            padding: "180px 0 118px 0"
          }
        }
      }
    };
  }
};
</script>

<style scoped lang="stylus">
.crbt
  padding 98px 0 200px
  background-image url("../../../assets/product/recreation/pro_bg_02.png")
  background-position center
  background-size cover
  .crbtList
    li
      margin-bottom 15px
    .crbtList_box
      background-color #ffffff
      box-shadow:0px 0px 13px 0px rgba(90,97,212,0.2)
      padding 47px 0
      img
        width 117px
        height 117px
        cursor pointer
        transition all 2s ease-in
        &:hover
          transform rotate(360deg)
      p
        color:rgba(51,51,51,1);
        margin 50px 0 0 0
  .titleBar
    margin-bottom 80px
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .crbt{
        padding 30px 0 30px
        .titleBar{
          margin-bottom 30px
        }
        .crbtList_box{
          padding 30px 0
          p{
            margin-top 30px
          }
        }
      }
    }
  }

</style>
