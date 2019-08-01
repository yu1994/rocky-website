<template>
  <div class="contactChunk_box">
    <div>
      <pro-detail :lang="'productPage.contactChunk.article'"></pro-detail>
      <pro-layout-left
        :content="contact.pro_1"
        :stylus_box="contact.pro_1.style_box"
        :img-place="'right'"
      ></pro-layout-left>
      <div class="share">
        <div>
          <img
            class="img-responsive"
            v-lazy="$t('productPage.contactChunk.pro_2.url')"
          />
          <div class="article_text">
            <title-bar
                    :lang-string="'productPage.contactChunk.pro_2'"
                    :color-style="{title: '#ffffff',remark: '#ffffff',cover: 'rgba(223,223,223,.4)'}"
            ></title-bar>
          </div>
        </div>
      </div>
      <pro-layout-left
        :content="contact.pro_3"
        :stylus_box="contact.pro_3.style_box"
      ></pro-layout-left>
      <div class="feature ">
        <div class="article_text">
          <title-bar
                  :remark-show="false"
                  :lang-string="'productPage.contactChunk.pro_4'"
                  :color-style="{title: 'rgba(51,51,51,1)',remark: '#ffffff',cover: '(223,223,223,1)'}"
          ></title-bar>
        </div>
        <div class=" container">
          <ul class="clearfix">
            <li class="col-md-6" v-for="(item, key) in $t('productPage.contactChunk.pro_4.featureList')" :key="key">
              <div class="feature_box">
                <div class="media">
                  <div class="media-left media-middle">
                    <img  v-lazy="item.url" class="media-object" width="65px" height="65px">
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading wow fadeInUp">{{item.title}}</h5>
                    <p class="wow fadeInUp">{{item.remark}}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProLayoutLeft from "./temp/proLayoutLeft";
import ProDetail from "./temp/proDetail";
import TitleBar from "./temp/titleBar";
export default {
  name: "contactChunk",
  data() {
    return {
      contact: {
        pro_1: {
          title: this.$t('productPage.contactChunk.pro_1.title'),
          titleCover: this.$t('productPage.contactChunk.pro_1.titleCover'),
          url: require("../../../assets/product/contact/pro_01.png"),
          remark: this.$t('productPage.contactChunk.pro_1.remark'),
          style_box: {
            backgroundColor: "rgba(247,247,247,1)",
            padding: "73px 0 88px"
          }
        },
        pro_3: {
          title: this.$t('productPage.contactChunk.pro_3.title'),
          titleCover: this.$t('productPage.contactChunk.pro_3.titleCover'),
          url: require("../../../assets/product/contact/pro_03.png"),
          remark: this.$t('productPage.contactChunk.pro_3.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/contact/pro_bg_03.png") +
              ")",
            padding: "89px 0"
          }
        }
      }
    };
  },
  components: {TitleBar, ProDetail, ProLayoutLeft }
};
</script>

<style scoped lang="stylus">
.share,.feature
  position relative
  width 100%
  .article_text
    position absolute
    width 100%
    top 94px
    left 0
.feature
  position relative
  background-color #f7f7f7
  padding-bottom 83px
  ul
    margin-bottom 0
  .article_text
    position relative
    top 0
    left 0
    padding 49px 0
  li
    vertical-align middle
    margin-bottom 20px
    padding 0 10px
    .media-left
      padding-right 33px
    .feature_box
      width 100%
      height 100%
      padding 54px 15px
      background-color #ffffff
    h5
      font-size:20px;
      /*font-weight:bold;*/
      margin 0 0 15px
      text-align left
      color:rgba(51,51,51,1);
    p
      max-width 323px
      margin 0
      text-align left
      color:rgba(122,127,136,1);
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .share{
        .article_text{
          top 30px
         .cover{
           font-size $coverEnSize
         }
        }
      }
      .feature{
        padding-bottom 30px;
        .article_text{
          padding 30px 0 !important;
          .cover{
            font-size $coverEnSize
          }
        }
        .feature_box{
          padding 30px 15px
        }
      }
    }
  }
</style>
