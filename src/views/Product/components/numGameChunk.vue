<template>
  <div class="numGameChunk_box">
    <div>
      <pro-detail :lang="'productPage.numGameChunk.article'"></pro-detail>
      <pro-layout-left
        :content="numGame.pro_1"
        :stylus_box="numGame.pro_1.style_box"
        :img-place="'right'"
      ></pro-layout-left>
      <pro-layout-center
        :content="numGame.pro_2"
        :stylus_box="numGame.pro_2.style_box"
      ></pro-layout-center>
      <pro-layout-left
              :content="numGame.pro_5"
              :stylus_box="numGame.pro_5.style_box"
              :img-place="'right'"
      ></pro-layout-left>
      <pro-layout-center
        :content="numGame.pro_3"
        :stylus_box="numGame.pro_3.style_box"
      >
        <div slot="other" class="occupation">
          <ul class="clearfix visible-lg visible-md">
            <li class="col-md-4" v-for="(item, key) in $t('productPage.numGameChunk.pro_3.occupationList.list_1')" :key="key" :style="{textAlign: item.position}">
              <div class="occupation_box">
                <img v-lazy="item.url" class="wow zoomIn" />
                <p>{{item.slogan}}</p>
              </div>
            </li>
          </ul>
          <ul class="clearfix visible-lg visible-md">
            <li class="col-md-6" v-for="(item, key) in $t('productPage.numGameChunk.pro_3.occupationList.list_2')" :key="key" :style="{textAlign: item.position}">
              <div class="occupation_box">
                <img v-lazy="item.url" class="wow zoomIn" />
                <p>{{item.slogan}}</p>
              </div>
            </li>
          </ul>
          <ul class="clearfix visible-lg visible-md">
            <li class="col-md-4" v-for="(item, key) in $t('productPage.numGameChunk.pro_3.occupationList.list_3')" :key="key" :style="{textAlign: item.position}">
              <div class="occupation_box">
                <img v-lazy="item.url" class="wow zoomIn" />
                <p>{{item.slogan}}</p>
              </div>
            </li>
          </ul>
          <ul class="clearfix visible-xs visible-sm">
            <li class="col-xs-6" v-for="(item, key) in numGame.pro_3.occupationList.all" :key="key" :style="{textAlign: 'center',marginBottom: '15px'}">
              <div class="occupation_box">
                <img v-lazy="item.url" class="wow zoomIn" />
                <p>{{item.slogan}}</p>
              </div>
            </li>
          </ul>
        </div>
      </pro-layout-center>
    </div>
    <normal-carousel :id="'gameCarousel'" :controls="true">
      <ol class="carousel-indicators" slot="indicators">
        <li
                data-target="#gameCarousel"
                :data-slide-to="key"
                :class="{active: key == 0}"
                v-for="(item, key) in $t('productPage.numGameChunk.carouselList')" :key="key+'indicators'"
        ></li>
      </ol>
      <div class="carousel-inner" slot="listBox">
        <div class="item" :class="{active: key == 0}" v-for="(item, key) in $t('productPage.numGameChunk.carouselList')" :key="key">
          <a :href="item.href">
            <img
                    class="img-responsive"
                    src="../../../assets/product/gameBanner1.png"
            />
            <div class="carousel-caption carousel-caption_thousand">
              <!--wow fadeInUp-->
              <div class="slide_left">
                <h5>{{item.title}}</h5>
                <p>
                  {{item.slogan}}
                </p>
                <div class="slide_left_img hidden-sm hidden-xs">
                  <img :src="item.url_01" />
                </div>
              </div>
              <div class="slide_right hidden-xs">
                <img :src="item.url_02" />
              </div>
            </div>
          </a>
          <!--<div class="carousel-caption  hidden-sm">
            <h1>Global Digital Economy</h1>
            <p>Become the leader of the global new economic platform</p>
          </div>-->
        </div>
      </div>
    </normal-carousel>
  </div>
</template>

<script>
import ProLayoutLeft from "./temp/proLayoutLeft";
import ProLayoutCenter from "./temp/proLayoutCenter";
import ProDetail from "./temp/proDetail";
import NormalCarousel from "../../../components/normalCarousel";
export default {
  name: "numGameChunk",
  components: {NormalCarousel, ProDetail, ProLayoutCenter, ProLayoutLeft },
  data() {
    return {
      numGame: {
        pro_1: {
          title: this.$t('productPage.numGameChunk.pro_1.title'),
          titleCover: this.$t('productPage.numGameChunk.pro_1.titleCover'),
          url: require("../../../assets/product/NumberGame/pro_01.png"),
          remark: this.$t('productPage.numGameChunk.pro_1.remark'),
          style_box: {
            backgroundColor: "#F7F7F7",
            padding: "100px 0"
          }
        },
        pro_2: {
          title: this.$t('productPage.numGameChunk.pro_2.title'),
          titleCover: this.$t('productPage.numGameChunk.pro_2.titleCover'),
          url: require("../../../assets/product/NumberGame/pro_02.png"),
          remark: this.$t('productPage.numGameChunk.pro_2.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/NumberGame/pro_bg_02.png") +
              ")",
            backgroundSize: "100%,100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "92px",
            paddingBottom: "27px"
          },
          imgMaxWidth: "645px"
        },
        pro_3: {
          title: this.$t('productPage.numGameChunk.pro_3.title'),
          titleCover: this.$t('productPage.numGameChunk.pro_3.titleCover'),
          remark: this.$t('productPage.numGameChunk.pro_3.remark'),
          style_box: {
            paddingTop: "102px",
            paddingBottom: "102px"
          },
          occupationList:{
            list_1: this.$t('productPage.numGameChunk.pro_3.occupationList.list_1'),
            list_2: this.$t('productPage.numGameChunk.pro_3.occupationList.list_2'),
            list_3: this.$t('productPage.numGameChunk.pro_3.occupationList.list_3'),
            all: []
          },
        },
        pro_4: {
          title: "独家版权",
          titleCover: "Only",
          url: require("../../../assets/product/NumberGame/pro_04.png"),
          remark: "有独家海外版权的1000余种游戏内容",
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/NumberGame/pro_bg_04.png") +
              ")",
            backgroundSize: "100%,100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "74px",
            paddingBottom: "37px"
          },
          imgMaxWidth: "865px"
        },
        pro_5: {
          title: this.$t('productPage.numGameChunk.pro_5.title'),
          titleCover: this.$t('productPage.numGameChunk.pro_5.titleCover'),
          url: require("../../../assets/product/NumberGame/pro_05.png"),
          remark:
            this.$t('productPage.numGameChunk.pro_5.remark'),
          style_box: {
            backgroundImage:
              "url(" +
              require("../../../assets/product/NumberGame/pro_bg_01.png") +
              ")",
            backgroundSize: "100%,100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "146px",
            paddingBottom: "146px"
          },
          imgMaxWidth: "865px"
        }
      }
    };
  },
  created() {
    const occupationList = this.numGame.pro_3.occupationList;
    occupationList.all = occupationList.all.concat(occupationList.list_1,occupationList.list_2,occupationList.list_3)
  }
};
</script>
<style lang="stylus" scoped>
  .numGameChunk_box
    .occupation
      ul
        margin-bottom 0
        .occupation_box
          display inline-block
          width auto
          cursor pointer
          &:hover
            img
              transform scale(1.2)
          img
            width 143px
          p
            /*font-size:20px;*/
            color:rgba(51,51,51,1);
            text-align center
            margin 15px auto 0
</style>
