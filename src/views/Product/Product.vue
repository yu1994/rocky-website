<template>
  <div class="product">
    <section class="productHead">
      <div ref="productHeadImg">
        <above-bg>
          <img slot="bg" src="../../assets/product/above.png" class="img-responsive" ref="productImg"/>
          <div slot="sign">
            <h2> 全球数字娱乐平台<br>
              让生活充满无限乐趣</h2>
          </div>
        </above-bg>
      </div>
    </section>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import NormalCarousel from "../../components/normalCarousel";
import AboveBg from "../../components/aboveBg";
import SlideNavs from "../../components/slideNavs";
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
  },
  components: {
    ProductCarousel,
    ProductMore,
    SlideNavs,
    AboveBg,
    NormalCarousel
  }
};
</script>
<style lang="stylus">
  .product
    .productHead
      margin-bottom 0
    nav
      background-color: #5695F2;
      border: none;
      a
        padding: 20px;
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
