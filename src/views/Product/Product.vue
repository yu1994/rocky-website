<template>
  <div class="product">
    <section class="productHead">
      <div ref="productHeadImg">
        <above-bg>
          <img slot="bg" src="../../assets/product/above.png" class="img-responsive" />
          <div slot="sign">
            <h2>产品介绍</h2>
          </div>
        </above-bg>
      </div>
    </section>
    <nav
      v-show="navShow"
      class="navbar navbar-default navbar-expand-xl navbar-fixed-top hidden-xs hidden-sm">
      <div class="container">
        <div class="navbar-header" >
          <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div
                class="collapse navbar-collapse navbar-right"
                id="bs-example-navbar-collapse-1"
        >
          <ul class="nav navbar-nav">
            <li
                v-for="(item, key) in $t('productPage.productNav')" :key="key"
                v-if="key !== 0"
            >
              <router-link :to="{ path: '/product/'+item.route }"
              >{{ item.sign }} <i class="underline"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import NormalCarousel from "../../components/normalCarousel";
import NumGameChunk from "./components/numGameChunk";
import StudyChunk from "./components/studyChunk";
import RecreationChunk from "./components/recreationChunk";
import ReadIpChunk from "./components/readIpChunk";
import AboveBg from "../../components/aboveBg";
import SlideNavs from "../../components/slideNavs";
import ProductItemTitle from "./components/temp/productItemTitle";
import ProductMore from "./components/temp/productMore";
import ProductCarousel from "./components/temp/productCarousel";
export default {
  name: "product",
  data() {
    return {
      navSwiperOption: {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
      },
      navShow: false,
      barFixed: false,
      navList: [
        {},
        "read",
        "game",
        "video",
        "study",
        "recreation"
      ]
    };
  },
  mounted: function () {
    this.WOW.init();
    this.proHeadChunk = this.$refs.proHeadChunk;
    this.proHeadImg = this.$refs.productHeadImg;
   // window.proHeadImgHeight = this.$refs.productContent.offsetTop;
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
    }
  },
  components: {
    ProductCarousel,
    ProductMore,
    ProductItemTitle,
    SlideNavs,
    AboveBg,
    ReadIpChunk,
    RecreationChunk,
    StudyChunk,
    NumGameChunk,
    NormalCarousel
  }
};
</script>
<style lang="stylus">
  .product
    .productHead
      margin-bottom 58px
    nav
      background-color: #5695F2;
      border: none;
      top 100px
      li>a
        position: relative;
        padding: 20px;
        font-size 16px
        color #fff !important
        i, .dropdown-line
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          opacity: 0;
          transition: all 0.6s ease;
          background-color: rgba(255, 255, 255, 1);
        &:hover .underline
          opacity: 1;
          width: 100%;
          left: 0
        .router-link-active
          i
            left 0
            width 100%
            opacity 1
            background-color: rgba(255, 255, 255, 1);
      .navbar-default

        border: none;
</style>

