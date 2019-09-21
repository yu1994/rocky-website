<template>
  <div class="rowCarousel">
    <div v-if="ie > 9">
      <swiper :options="swiperOption" ref="mySwiper">
        <slot></slot>
      </swiper>
      <div
        v-if="isButton"
        class="swiper-button-prev  hidden-sm hidden-xs"
        slot="button-prev"
      ></div>
      <div
        v-if="isButton"
        class="swiper-button-next  hidden-sm hidden-xs"
        slot="button-next"
      ></div>
      <div v-if="isProgress.el" class="swiper-scrollbar" slot="scrollbar"></div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { isIE } from "../utils";
export default {
  name: "rowCarousel",
  props: {
    isButton: {
      type: Boolean,
      default: true
    },
    isProgress: {
      type: Object,
      default: function () {
        return {}
      }
    },
    autoplay: {
      default:function () {
        return {
          delay: 3500,
          disableOnInteraction: false
        };
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    slidesPerView: {
      type: Number,
      default : 3
    },
    centeredSlides: {
      type: Boolean,
      default: true
    },
    breakpoints: {
      type: Object,
      default:function () {
        return {
          1200: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          }
        }
      }
    },
    navigation: {
      type: Object,
      default:function () {
        return {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        };
      }
    }
  },
  created() {
    this.ie = isIE();
  },
  data() {
    return {
      ie: 10,
      swiperOption: {
        centeredSlides: this.centeredSlides,
        loop: this.loop,
        slidesPerColumnFill: "row",
        loopedSlides: 8,
        slidesPerView: this.slidesPerView,
        spaceBetween: 0,
        slidesPerColumn: 1,
        autoplay: this.autoplay,
        breakpoints: this.breakpoints,
        navigation: this.navigation,
        scrollbar:this.isProgress
      }
    };
  }
};
</script>

<style scoped lang="stylus">
.rowCarousel
    position relative
    .swiper-button-prev,.swiper-button-next
        width 44px
        height 44px
        background-repeat no-repeat
        background-size 100% 100%
        &:focus
            outline none
            border none
  .swiper-button-prev
      left -14-(44/2)px
      background-image url("img/prev.png")
      &:focus
          background-image url("img/prev_active.png")
  .swiper-button-next
        right -14-(44/2)px
        background-image url("img/next.png")
        &:focus
            background-image url("img/next_active.png")
  .swiper-scrollbar
    height 4px
    background-color #DCDCDC
.swiper-scrollbar-drag
  height 9px
  background red !important
</style>
<style>
.swiper-scrollbar-drag {
  height: 8px;
  background: rgba(86, 149, 242, 1);
  top: -2px;
  border-radius: 0;
}
</style>
