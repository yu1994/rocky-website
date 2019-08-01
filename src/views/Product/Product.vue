<template>
  <div class="product">
    <section class="aboveBg">
      <above-bg>
        <img slot="bg" src="../../assets/product/above.png" class="img-responsive" />
        <div slot="sign">
          <h2>数娱新机会，全球新经济</h2>
        </div>
      </above-bg>
    </section>
    <section class="proHeadChunk" ref="proHeadChunk">
      <div class="title container">
        <breadcrumb></breadcrumb>
      </div>
      <div style="height: 60px;">
        <div class="gameNav" id="navbar-example" :class="{ barFixed: barFixed }">
          <div class="container">
            <div class="gameNav-box">
              <!--<ul  class="nav nav-pills bs-js-navbar-scrollspy"  > &lt;!&ndash;nav  nav-pills bs-js-navbar-scrollspy&ndash;&gt;
                <li v-for="(item, key) in navList" :key="key" >
                  <a :href="'#'+item"> &lt;!&ndash;:href="'#' + item" href="javascript:void (0)"&ndash;&gt;
                    {{ $t("productPage.chunkHead." + item) }}
                    &lt;!&ndash; <h2></h2>&ndash;&gt;
                    <i></i>
                  </a>
                </li>
              </ul>-->
              <slide-navs>
                <swiper-slide class="col-md-2 col-sm-3 col-xs-4" v-for="(item, key) in navList" :key="key" >
                  <ul  class="nav nav-pills bs-js-navbar-scrollspy"  > <!--nav  nav-pills bs-js-navbar-scrollspy-->
                    <li v-for="(n) in 1" :key="n" v-on:click="scrollTop($event,item)">
                      <a :href="'#'+item"> <!--:href="'#' + item" href="javascript:void (0)"-->
                        {{ $t("productPage.chunkHead." + item) }}
                       <!-- <h2></h2>-->
                        <i></i>
                      </a>
                    </li>
                  </ul>
                </swiper-slide>
              </slide-navs>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div> <!--data-spy="scroll" data-target="#navbar-example" data-offset="0"-->
      <!-- 阅读 -->
      <section id="readIP" class="readChunk">
        <read-ip-chunk></read-ip-chunk>
      </section>
      <!-- 数字游戏  ok-->
      <section id="numGame" class="numGameChunk">
        <num-game-chunk></num-game-chunk>
      </section>
      <!-- 互动社交 视频社交  -->
      <section id="contact" class="contactChunk">
        <contact-chunk></contact-chunk>
        <div>
          <normal-carousel :id="'contactCarousel'" :controls="true">
            <ol class="carousel-indicators" slot="indicators">
              <li
                data-target="#contactCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#contactCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" slot="listBox">
              <div class="item active">
                <img
                  class="img-responsive"
                  src="../../assets/product/contact_banner_1.png"
                  width="100%"
                />
                <div class="carousel-caption carousel-caption_simple">
                  <!--wow fadeInUp-->
                  <div class="slide_left col-md-7">
                    <h5>Social</h5>
                    <p>
                      my era, and draws a panoramic view of data science and
                      wisdom culture from a grand perspective, expounds the
                      historical process of digital economic development, how
                      China lays
                    </p>
                  </div>
                  <div class="slide_right col-md-5  hidden-xs hidden-sm">
                    <img src="../../assets/product/contact_slide_01.png" />
                  </div>
                </div>
              </div>
              <div class="item">
                <img
                  class="img-responsive"
                  src="../../assets/product/gameBanner1.png"
                />
                <div class="carousel-caption  hidden-sm">
                  <!-- <h4>全球数字化经济</h4>-->
                  <h1>Global Digital Economy</h1>
                  <!-- <p>成为全球新经济平台领跑者</p>-->
                  <p>Become the leader of the global new economic platform</p>
                </div>
              </div>
            </div>
          </normal-carousel>
        </div>
      </section>
      <!--娱乐生活 -->
      <section id="recreation" class="recreationChunk">
        <recreation-chunk></recreation-chunk>
        <normal-carousel :id="'recreationCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
                    data-target="#recreationCarousel"
                    data-slide-to="0"
                    class="active"
            ></li>
            <li data-target="#recreationCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                      class="img-responsive"
                      src="../../assets/product/recreation_banner_01.png"
                      width="100%"
              />
              <div class="carousel-caption carousel-caption_simple">
                <!--wow fadeInUp-->
                <div class="slide_left col-md-7">
                  <h5>Social</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                </div>
                <div class="slide_right col-md-5  hidden-xs hidden-sm">
                  <img src="../../assets/product/recreation_slide_01.png" />
                </div>
              </div>
            </div>
            <div class="item">
              <img
                      class="img-responsive"
                      src="../../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
      <!--学习 -->
      <section id="study" class="studyChunk">
        <study-chunk></study-chunk>
        <normal-carousel :id="'mediaCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#mediaCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#mediaCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../../assets/product/gameBanner1.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_simple">
                <!--wow fadeInUp-->
                <div class="slide_right col-md-6  hidden-xs hidden-sm left_img">
                  <img
                    src="../../assets/product/study_slide_01.png"
                    width="372px"
                  />
                </div>
                <div class="slide_left col-md-6 right_text">
                  <h5>Social</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
      <!-- 东方的力量 -->
      <section id="culture" class="cultureChunk">
        <culture-chunk></culture-chunk>
        <normal-carousel :id="'cultureCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#cultureCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#cultureCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../../assets/product/culture_banner_01.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_thousand">
                <!--wow fadeInUp-->
                <div class="slide_left">
                  <h5>Game</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                  <div class="slide_left_img hidden-sm hidden-xs">
                    <img src="../../assets/product/culture_slide_02.png" />
                  </div>
                </div>
                <div class="slide_right hidden-xs">
                  <img src="../../assets/product/culture_slide_01.png" />
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
    </div>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb";
import NormalCarousel from "../../components/normalCarousel";
import vm from "../../utils/events";
import NumGameChunk from "./components/numGameChunk";
import ContactChunk from "./components/contactChunk";
import StudyChunk from "./components/studyChunk";
import RecreationChunk from "./components/recreationChunk";
import CultureChunk from "./components/cultureChunk";
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
      const offsetTop = this.proHeadChunk.offsetTop;
      if (scrollTop > offsetTop) {
        this.barFixed = true;
        vm.$emit("navScrollFixed", true);
      } else {
        this.barFixed = false;
        vm.$emit("navScrollFixed", false);
      }
    },
    scrollTop(event,id) {
      const e = event || window.event;
      // document.getElementById(id).scrollIntoView({
      //   block: 'start',
      //   behavior: 'smooth'
      // });
      $("html, body").animate(
        { scrollTop: $($(e.target).attr("href")).offset().top + "px" },
        60
      );
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      window.addEventListener("scroll", vm.throttle(vm.handleScroll, 1000));
    });
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener("scroll", this.throttled);
    next();
  },
  components: {
    SlideNavs,
    AboveBg,
    ReadIpChunk,
    CultureChunk,
    RecreationChunk,
    StudyChunk,
    ContactChunk,
    NumGameChunk,
    NormalCarousel,
    breadcrumb
  }
};
</script>
<style scoped lang="stylus">
  $proChunkBottom($num)
    padding-top 80px
    /*padding-bottom $num*/
    @media (max-width:768px)
      padding-top 66px
     /* padding-bottom: 50px*/

.product
  overflow-x hidden
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
</style>

