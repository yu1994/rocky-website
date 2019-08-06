<template>
  <div class="home">
    <section class="dynamicChunk">
      <video autoplay loop width="100%"  muted  ref="courseVideo">
        <source src="../assets/home/dynamic.mp4" type="video/mp4" >
        <source src="../assets/home/dynamic.ogg" type="video/ogg">
        您的浏览器不支持 HTML5 video 标签。
      </video>
      <!--<img src="../assets/home/dynamic.gif" class="" width="100%" />-->
      <div class="dynamicSign">
        <h1 >{{ $t("homePage.titleChunk.text_1") }}</h1>
        <h1 >{{ $t("homePage.titleChunk.text_2") }}</h1>
      </div>
    </section>
    <section class="globalChunk" v-on:click="startHandler">
      <div class="container">
        <div class="title">
          <h2>{{$t('homePage.globalChunk.content.title')}}</h2>
          <p>{{$t('homePage.globalChunk.content.slogan')}}</p>
        </div>
        <div class="img">
          <img v-lazy="$t('homePage.globalChunk.url')" class="img-responsive">
        </div>
      </div>
    </section>
    <section class="container operateChunk" @click="operateHandler">
      <div class="operate_text">
        <h2>{{$t('homePage.operateTextChunk.title')}}</h2>
        <p>{{$t('homePage.operateTextChunk.remark')}} <span>{{$t('homePage.operateTextChunk.understand')}}</span></p>
      </div>
      <div class="operate_img">
        <img v-lazy="$t('homePage.operateTextChunk.url')" />
      </div>
    </section>
    <section class="map" v-lazy:background-image="$t('homePage.globalMap.bgUrl')">
      <div class="title">
        <h2>{{ $t("homePage.globalMap.title") }}</h2>
      </div>
      <div>
        <global-map></global-map>
      </div>
    </section>
 <!--   <section class="carouselChapter">
      <div class="title">
        <h2>{{ $t("homePage.tierCarousel.title") }}</h2>
      </div>
      <carousel class="container">
        <swiper-slide
          v-for="(item, key) in $t('homePage.tierCarousel.list')"
          :key="key"
          ><img :src="item.url" class="img-responsive" />
          <div class="explain" >
            <h1>{{ item.time }}</h1>
            <div class="explain_box">
              <i class="linear"></i><span class="caret"></span
              ><i class="arrows"></i>
              <p>{{ item.intro }}</p>
            </div>
          </div>
        </swiper-slide>
      </carousel>
     </section>-->
    <section class="globalBg">
      <div>
        <img class="img-responsive"  v-lazy="$t('homePage.economy.url')" />
      </div>
      <div class="start">
        <h2 class="hidden-xs hidden-sm">{{ $t("homePage.economy.title") }}</h2>
        <button @click="startHandler">
          {{ $t("homePage.economy.btnText") }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import globalMap from "../components/globalMap";
import Carousel from "../components/carousel";
export default {
  name: "home",
  data() {
    return {
      introShow: true
    };
  },
  methods: {
    startHandler() {
      this.$router.push({ name: "product" });
    },
    operateHandler() {
      this.$router.push({ name: "operator" });
    }
  },
  beforeRouteEnter(from,to,next){
    next(vm => {
      vm.$refs.courseVideo.play();
    })
  },
  components: {Carousel, globalMap }
};
</script>
<style scoped lang="stylus">
/*@import "../font/font.css"*/
.home
  overflow-x hidden
  .dynamicChunk
    position relative
    .dynamicSign
      position absolute
      width 100%
      left 50%
      top 50%
      transform translate(-50%,-50%)
      font-weight:400
      color:rgba(255,255,255,1);
  .globalChunk
    padding-top 98px
    cursor pointer
    .title
      h2
        margin 0 auto 29px
      p
        margin-bottom 30px
  .map
    position relative
    background-repeat no-repeat
    background-position center
    .title
      position absolute
      left 50%
      top 56px
      z-index 99
      transform translateX(-50%)
      h2
        color:rgba(255,255,255,1);
        margin 0
  .operateChunk
    display flex
    align-items center
    justify-content space-between
    flex-wrap: wrap
    cursor pointer
    padding 98px 15px 103px
    .operate_text
      margin 0 auto
      text-align left
      h2
        color:rgba(51,51,51,1);
      p
        max-width 423px
        font-weight:400;
        color:rgba(114,114,114,1);
    .operate_img
      margin 0 auto
      img
        width 100%
        max-width 468px
  .carouselChapter
    padding 52px 0 0 0
    background-color #F7F7F7
    .title
      h2
        margin 0 0 43px 0
        color:rgba(70,70,70,1);
  .globalBg
    margin-top 65px
    position relative
    overflow hidden
    .start
      position absolute
      width 100%
      left 50%
      top 50%
      transform translate(-50%,-50%)
      color:rgba(247,247,247,1);
      button
        width 40%
        max-width 200px
        height 45px
        font-size 30px
        color:rgba(247,247,247,1);
        background-color transparent
        border 1px solid rgba(247,247,247,1)
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .globalBg .start button {
        font-size 18px;
      }
      .map{
        .title{
          top 30px
        }
      }
      .operateChunk{
        padding 30px 15px;
      }
      .globalChunk{
        padding-top 30px
      }
      .carouselChapter{
        padding 30px 0;
        h2{
          margin-bottom 30px
        }
      }
    }
  }
</style>
