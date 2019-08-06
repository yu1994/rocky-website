<template>
  <div class="product">
    <section class="productHead">
      <div>
        <above-bg>
          <div class="productVideo" slot="bg" ref="productHeadImg">
            <video autoplay loop width="100%"  muted  ref="courseVideo" >
              <source src="../../assets/product/video.mp4" type="video/mp4" >
              <source src="../../assets/product/video.ogg" type="video/ogg">
              您的浏览器不支持 HTML5 video 标签。
            </video>
            <div class="cover"></div>
          </div>
          <!--<img slot="bg" src="../../assets/product/above.png" class="img-responsive" width="100%" ref="productHeadImg" />-->
        </above-bg>
      </div>
      <div class="productHead-list" ref="proHeadChunk" > <!--:class="{'productHead-list-fixed': barFixed}"-->
        <div class="container">
          <slide-navs>
            <swiper-slide v-for="(item, key) in $t('productPage.productNav')" :key="key" >
              <ul  class="nav nav-pills bs-js-navbar-scrollspy" >
                <li v-for="(n) in 1" :key="n">
                  <!--<router-link :to="{path: item.route}">
                    <h5>{{ item.sign }}</h5>
                  </router-link>-->
                  <router-link :to="{path: item.route}" :style="{ backgroundImage:'url(' + item.url + ')' }">
                    <h5>{{ item.sign }}</h5>
                  </router-link>
                </li>
              </ul>
            </swiper-slide>
          </slide-navs>
        </div>
      </div>
    </section>
    <section class="product-content" ref="productContent">
      <transition enter-active-class="animated bounceInLeft">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb";
import NormalCarousel from "../../components/normalCarousel";
import vm from "../../utils/events";
import NumGameChunk from "./components/numGameChunk";
import StudyChunk from "./components/studyChunk";
import RecreationChunk from "./components/recreationChunk";
import ReadIpChunk from "./components/readIpChunk";
import AboveBg from "../../components/aboveBg";
import SlideNavs from "../../components/slideNavs";
export default {
  name: "product",
  data() {
    return {
      navSwiperOption: {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',

      },
      barFixed: false,
      navList: [
        "readIP",
        "numGame",
        "contact",
        "recreation",
        "study",
        "culture"
      ]
    };
  },
  mounted() {
    this.WOW.init();
    this.proHeadChunk = this.$refs.proHeadChunk;
    this.proHeadImg = this.$refs.productHeadImg;
  //  window.proHeadImgHeight = this.proHeadImg.offsetHeight;
    window.proHeadImgHeight = this.$refs.productContent.offsetTop;

    // this.$refs.productHeadImg.onload = ()=> {
    //   window.proHeadImgHeight = this.proHeadImg.height;
    // }
  },
  methods: {
    throttle(func, wait) {
      let timeout, context, args;
      let previous = 0;

      let later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args);
      };

      this.throttled = function() {
        let now = +new Date();
        //下次触发 func 剩余的时间
        let remaining = wait - (now - previous);
        context = this;
        args = arguments;
        // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          func.apply(context, args);
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
      };
      return this.throttled;
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
     // const offsetTop = this.proHeadChunk.offsetTop;
      const offsetTop = this.proHeadImg.height-50;

      if (scrollTop > offsetTop) {
        this.barFixed = true;
        vm.$emit("navScrollFixed", true);
      } else {
        this.barFixed = false;
        vm.$emit("navScrollFixed", false);
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$refs.courseVideo.play();
   //   window.addEventListener("scroll", vm.throttle(vm.handleScroll, 1000));
    });
  },
  beforeRouteLeave(to, from, next) {
   // window.removeEventListener("scroll", this.throttled);
    next();
  },
  components: {
    SlideNavs,
    AboveBg,
    ReadIpChunk,
    RecreationChunk,
    StudyChunk,
    NumGameChunk,
    NormalCarousel,
    breadcrumb
  }
};
</script>
<style  lang="stylus">
  .product
    background-color rgb(240,242,245)
    overflow-x hidden
    .productHead
      position relative
      .productHead-list
        position absolute
        left 50%
        bottom -84px
        /*bottom 0*/
        transform translate(-50%)
        z-index 99
        .slideNavPanel
          border none
        a
          display block
          width 221px
          /*height 78px*/
          height 271px
          /*padding 0*/
          background-size 100% 100%
          background-repeat no-repeat
          /*background-image url("../../assets/product/nav_bg.png")*/
          h5
            /*height 100%
            line-height 78px
            margin 0 auto*/
            margin 214px 0 0 0
            color:rgba(0,0,0,1)
            font-weight 400
            text-align center
        .router-link-active
          height 281px
          h5
            color #4A90E2
        .slideNavPanel
          .swiper-container
            overflow-y auto
            overflow-x hidden
          .swiper-wrapper
            align-items flex-end
            justify-content space-between !important
      .productHead-list-fixed
        position fixed
        top 0
        height 78px
    .product-content
      margin-top 152px
      /*margin-top 80px*/
    .productVideo
      position relative
      .cover
        position absolute
        left 0
        width 100%
        height 278px
        bottom -(@height/2)px
        background-image url("../../assets/product/Shape.png")
        background-size 100% auto
</style>
<!--<style scoped lang="stylus">
  $proChunkBottom($num)
    padding-top 80px
    /*padding-bottom $num*/
    @media (max-width:768px)
      padding-top 66px
     /* padding-bottom: 50px*/

.product
  .proHeadChunk
    .gameNav
      position relative
    .barFixed
      position fixed
      width 100%
      top 0
      background-color rgba(255,255,255,1)
      margin 0 auto
      z-index 99
  .numGameChunk
    text-align left
  .contactChunk,.studyChunk,.recreationChunk,.cultureChunk,.readChunk,.numGameChunk
    $proChunkBottom(70px)
  .studyChunk
    .carousel-caption_simple
      width 820px
    .slide_right
      width 372px
</style>
<style lang="stylus" scoped>
  @media (max-width:768px){
    #app{
      .gameNav{
        .swiper-slide{
          width 120px;
        }
      }
    }
  }
</style>
<style>
  .gameNav .swiper-wrapper{
    /*justify-content: center;*/
    margin: 0 auto;
    text-align: center;
  }
</style>-->

