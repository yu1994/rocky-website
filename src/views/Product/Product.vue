<template>
  <div class="product">
    <section class="productHead">
      <div>
        <above-bg>
          <img slot="bg" src="../../assets/product/above.png" class="img-responsive" />
          <div slot="sign">
            <h2>产品介绍</h2>
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

<style scoped lang="stylus">
  .product
    .productHead
      margin-bottom 58px
</style>

