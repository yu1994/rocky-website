<template>
  <div class="home" id="home">
    <section class="dynamicChunk">
      <img src="../assets/home/dynamic_blue.gif" class="img-responsive" />
      <div class="dynamicSign">
        <p class="zh">{{$t('homePage.banner.text_1')}}</p>
        <p class="zh">{{$t('homePage.banner.text_2')}}</p>
        <p class="en" style="font-size: 28px">{{$t('homePage.banner.text_3')}}</p>

        <!-- <p class="en big">Global Digital Economy</p>-->
        <!--<p>成为全球新经济平台领跑者</p>-->
<!--
        <p class="en">{{$t('homePage.banner.text_3')}}</p>
-->
      </div>
    </section>
    <section class="container operateChunk">
      <div class="">
        <div class="head">
          <h4>{{$t('homePage.operate.title')}}</h4>
          <p>
            自定义的模型，根据条件筛选出目标用户并分析所在时间段内的消费行为轨迹。可评估运营活动效果，持续后续活动优化，提高活动转化率
          </p>
        </div>
        <ul class="list">
          <li
            class="col-md-3 col-xs-6"
            v-for="(item, key) in $t('homePage.operate.list')"
            :key="key"
          >
            <div class="icon_box">
              <img :src="item.url" />
              <!--<i></i>-->
            </div>
            <strong>{{ item.name }}</strong>
            <p>{{ item.remark }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="map">
      <div class="title">
        <h2>{{ $t("homePage.globalMap.title") }}</h2>
      </div>
      <div>
        <!--<echarts-map></echarts-map>-->
        <global-map></global-map>
        <!--
        <img src="../assets/home/map_bg.png" class="img-responsive" />
-->
      </div>
    </section>
    <!-- 轮播-->
    <section class="carouselChapter">
      <div class="title">
        <h2>{{$t('homePage.tierCarousel.title')}}</h2>
      </div>
      <carousel :translateXNumber="260" class="container">
        <swiper-slide
          v-for="(item, key) in $t('homePage.tierCarousel.list')"
          :key="key"
          ><img :src="item.url" class="img-responsive" />
          <div class="explain" data-swiper-parallax="-300">
            <h3>{{ item.time }}</h3>
            <div class="explain_box">
              <i class="linear"></i><span class="caret"></span
              ><i class="arrows"></i>
              <p>{{ item.intro }}</p>
            </div>
          </div></swiper-slide>
      </carousel>
    </section>
    <section class="globalBg">
      <div>
        <img class="img-responsive" src="../assets/home/up_bg.png" />
      </div>
      <div class="start">
        <p>{{$t('homePage.economy.title')}}</p>
        <button @click="startHandler">{{$t('homePage.economy.btnText')}}</button>
      </div>
    </section>
    <section v-if="introShow" class="intro">
      <img src="../assets/home/animate_2.5.gif" class="img-responsive" />
    </section>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import EchartsMap from "../components/echartsMap";
import globalMap from "../components/globalMap";
export default {
  name: "home",
  data() {
    return {
      introShow: true
    };
  },
  mounted() {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      this.introShow = false;
    }, 5500);
  },
  methods: {
    startHandler() {
      this.$router.push({name : "product"})
    }
  },
  components: { EchartsMap, carousel, globalMap }
};
</script>
<style scoped lang="stylus">
/*@import "../font/font.css"*/
.home
  .dynamicChunk
    position relative
    .dynamicSign
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      p
        font-size 16px
        font-weight:400;
        color:rgba(255,255,255,1);
      .en
        font-family Constantia
      .big
        font-size 50px
      .zh
        font-size 30px
  .map
    position relative
    .title
      position absolute
      left 50%
      top 56px
      z-index 99
      transform translateX(-50%)
      h2
        font-size:26px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        color:rgba(255,255,255,1);
        margin 0
  .operateChunk
    padding 56px 0 96px
    .head
      h4
        margin 0 auto 13px
        font-size 26px
        font-weight:bold
        color:rgba(51,51,51,1)
      p
        margin 0 auto
        max-width 660px
        font-size:16px
        color:rgba(114,114,114,1)
    .list
      margin 44px auto 0
      li
        cursor pointer
        margin-bottom 10px
        .icon_box
          position relative
          width 121px
          height 140px
          margin 0 auto 34px
          background-image url("../assets/home/border_01.png")
          background-repeat no-repeat
          background-size 100% 100%
          img
            position absolute
            left 50%
            top 50%
            transform translate(-50%,-50%)
          i
            display block
            background-size 100% 100%
        &:hover
          .icon_box
            background-image url("../assets/home/border_02.png")
        strong
          font-size:24px;
          font-family:MicrosoftYaHei;
          color:rgba(18,18,18,1);
        p
          margin 19px auto 0
          max-width 204px
          text-align center
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(147,147,147,1);
  .carouselChapter
    padding 52px 0 65px
    background-color #F7F7F7
    .title
      h2
        margin 0 0 43px 0
        font-size:30px;
        color:rgba(70,70,70,1);
    .swiper-slide
      display block
      max-width 539px
  .globalBg
    position relative
    .start
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      font-size:45px;
      color:rgba(247,247,247,1);
      button
        width 200px
        height 45px
        font-size 30px
        color:rgba(247,247,247,1);
        background-color transparent
        border 1px solid rgba(247,247,247,1)
  .intro
    position absolute
    left 0
    top 0
    z-index 9999
#app
  @media (max-width 768px){
    h1 {
      font-size 24px ;
      margin 5px 0;
    }
    h2 {
      font-size 20px;
    }
    h4 {
      font-size 16px;
    }
    .num {
      font-size 24px;
    }
    .num p{
      padding 0
    }
  }
</style>
