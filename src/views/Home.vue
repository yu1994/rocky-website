<template>
  <div class="home" id="home">
    <section class="global">
      <normal-carousel :id="'homeBgCarousel'">
        <ol class="carousel-indicators" slot="indicators">
          <li
            data-target="#homeBgCarousel"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#homeBgCarousel" data-slide-to="1"></li>
          <li data-target="#homeBgCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" slot="listBox">
          <div class="item" v-for="(item, key) in bannerBgList" :key="key" :class="{'active': key === 0}">
            <router-link :to="{name:item.skipUrl}">
              <img :src="item.bgUrl" class="img-responsive" />
            </router-link>
          </div>
          <!--<div class="item active">
            <img src="../assets/home/banner01.png" class="img-responsive" />
            &lt;!&ndash;<div class="carousel-caption">
              &lt;!&ndash; <h4>全球数字化经济</h4>&ndash;&gt;
              <h1>Global Digital Economy</h1>
              &lt;!&ndash; <p>成为全球新经济平台领跑者</p>&ndash;&gt;
              <p>Become the leader of the global new economic platform</p>
            </div>&ndash;&gt;
          </div>
          <div class="item">
            <img src="../assets/home/banner02.png" class="img-responsive" />
            &lt;!&ndash;<div class="carousel-caption">
              &lt;!&ndash; <h4>全球数字化经济</h4>&ndash;&gt;
              <h1>Global Digital Economy</h1>
              &lt;!&ndash; <p>成为全球新经济平台领跑者</p>&ndash;&gt;
              <p>Become the leader of the global new economic platform</p>
            </div>&ndash;&gt;
          </div>
          <div class="item">
            <img src="../assets/home/banner03.png" class="img-responsive" />
          </div>-->
        </div>
      </normal-carousel>
    </section>
    <section class="map">
      <div class="title">
        <h2>{{ $t("homePage.mapTitle") }}</h2>
      </div>
      <div><img src="../assets/home/map_bg.png" width="100%" /></div>
    </section>
    <section class="numChapter">
      <div>
        <img src="../assets/home/number_bg.png" width="100%" />
      </div>
      <div class="num">
        <p>数字改变时代</p>
        <p>娱乐改变生活</p>
      </div>
    </section>
    <!-- 轮播-->
    <section class="carouselChapter">
      <div class="title">
        <h2>共赢，书写出海新篇章</h2>
      </div>
      <carousel :translateXNumber="260">
        <swiper-slide
          v-for="(item, key) in $t('homePage.carouselList')"
          :key="key"
          ><img :src="item.url" width="100%" />
          <div class="explain" data-swiper-parallax="-300">
            <h3>{{ item.time }}</h3>
            <div class="explain_box">
              <i class="linear"></i><span class="caret"></span
              ><i class="arrows"></i>
              <p>{{ item.intro }}</p>
            </div>
          </div></swiper-slide
        >

        <!--
        <swiper-slide><img src="../assets/home/carousel1.jpg" width="100%"/><div class="explain" data-swiper-parallax="-300"><h3>11.08</h3><div class="explain_box"><i class="linear"></i><span class="caret"></span><i class="arrows"></i><p>{{text}}</p></div></div></swiper-slide>
        <swiper-slide><img src="../assets/home/carousel2.jpg" width="100%"/><div class="explain" data-swiper-parallax="-300"><h3>5.26</h3><div class="explain_box"><i class="linear"></i><span class="caret"></span><i class="arrows"></i><p>{{text}}</p></div></div></swiper-slide>
        <swiper-slide><img src="../assets/home/carousel3.jpg" width="100%"/><div class="explain" data-swiper-parallax="-300"><h3>5.08</h3><div class="explain_box"><i class="linear"></i><span class="caret"></span><i class="arrows"></i><p>{{text}}</p></div></div></swiper-slide>
        <swiper-slide><img src="../assets/home/carousel4.jpg" width="100%"/><div class="explain" data-swiper-parallax="-300"><h3>9.20</h3><div class="explain_box"><i class="linear"></i><span class="caret"></span><i class="arrows"></i><p>{{text}}</p></div></div></swiper-slide>
-->
      </carousel>
    </section>
    <section class="globalBg">
      <div>
        <img
          src="../assets/home/up_bg.png"
          width="100%"
          style="display: block"
        />
      </div>
      <button class="start hidden-xs">start T</button>
    </section>
    <section v-if="introShow" class="intro">
      <img src="../assets/home/animate_2.5.gif" alt="" width="100%" />
    </section>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import NormalCarousel from "../components/normalCarousel";
export default {
  name: "home",
  data() {
    return {
      bannerBgList: [
        {
          bgUrl: require("../assets/home/banner01.png"),
          skipUrl: "product"
        },
        {
          bgUrl: require("../assets/home/banner02.png"),
          skipUrl: ""
        },
        {
          bgUrl: require("../assets/home/banner03.png"),
          skipUrl: "partner"
        }
      ],
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
  components: { NormalCarousel, carousel }
};
</script>
<style scoped lang="stylus">
/*@import "../font/font.css"*/
.home
  .global
    .carousel-caption
      padding 0
      top 50%
      bottom auto
      transform translateY(-50%)
      h1
        font-size:40px;
        font-family:Constantia;
        font-weight:400;
      h4
        font-size:25px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      p
        font-size:16px;
        font-family:Constantia;
        font-weight:400;
    .carousel-indicators
      li
        width 8px
        height 8px
        border-radius 8px
        margin 0 10px
        ackground:rgba(255,255,255,1);
        opacity:0.6;
      .active
        width 32px
        height 8px
        opacity:1
        border-radius 8px
  .map
    .title
      h2
        font-size 30px
        color:rgba(70,70,70,1);
        margin 44px 0 0 0
  .numChapter
    position relative
    .num
      position absolute
      left 50%
      top 50%
      font-size:43px;
      /*font-family 'define'*/
      /*font-family:PangMenZhengDao-Cu;*/
      font-weight:400;
      color:rgba(255,255,255,1)
      transform translate(-50%,-50%)
      p
        padding-right 120px
        margin 0
      & :last-child
        margin-top 43px
        padding-left 120px
        padding-right 0
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
      bottom 50px
      width 160px
      height 36px
      margin-left -(@width /2)px
      background-color transparent
      font-size:24px;
      color:rgba(247,247,247,1);
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
