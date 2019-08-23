<template>
  <div class="certify">
    <div >
      <swiper :options="swiperOption" ref="mySwiper">
        <slot></slot>
      </swiper>
      <div
        v-if="carouselButton"
        class="carousel-button-prev  hidden-sm hidden-xs"
        slot="button-prev"
      ></div>
      <div
        v-if="carouselButton"
        class="carousel-button-next  hidden-sm hidden-xs"
        slot="button-next"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
  name: "carousel",
  props: {
    translateXNumber: {
      type: Number,
      default: 260
    },
    scaleImg: {
      type: String,
      default: 'scale'
    },
    carouselButton: {
      type: Boolean,
      default: true
    },
    modify: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      ie: 10,
      swiperOption: {
        notNextTick: true,
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loopedSlides: 5,
        loop: true,
        // autoplay: 3000,
        autoplayDisableOnInteraction: false,
        prevButton: '.carousel-button-prev',
        nextButton: '.carousel-button-next',
          onTransitionStart:(swiper) =>{
            if (swiper.slides[0].querySelector(".explain")) {
              for (let i = 0, len = swiper.slides.length; i < len; i++) {
                swiper.slides[i].querySelector(".explain").style.display = "none";
              }
              let activeNode = swiper.slides[swiper.activeIndex];
              activeNode.querySelector(".explain").style.display = "block";
            } else if (swiper.slides[0].querySelector('.img-cover')) {
              for (let i = 0, len = swiper.slides.length; i < len; i++) {
                let node = swiper.slides[i].querySelector(".img-cover");
                if (i < swiper.activeIndex){
                  this.gradient(node, 'left');
                } else {
                  this.gradient(node, 'right');
                }
              }
              let activeNode = swiper.slides[swiper.activeIndex];
              activeNode.querySelector(".img-cover").style.background = "transparent";
            } else {
              return false;
            }
          },
          onProgress:(swiper)=> {
            for (let i = 0; i < swiper.slides.length; i++) {
              var slide = swiper.slides.eq(i);
              var slideProgress = swiper.slides[i].progress;
               let modify = this.modify;
              if (Math.abs(slideProgress) > 2) {
                modify = (Math.abs(slideProgress) - 1) * 0.5 + 1;
              }
              let translate =
                slideProgress * modify * this.translateXNumber + "px";
              let scale = 1 - Math.abs(slideProgress) / 8;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ")" +this.scaleImg+"(" + scale + ")"
              );
              slide[0].style.zIndex = zIndex;
              slide[0].style.opacity = 1;
              if (Math.abs(slideProgress) > 3) {
                slide[0].style.opacity = 0.5;
              }
            }
          },
          onSetTransition(swiper, transition) {
            for (var i = 0; i < swiper.slides.length; i++) {
              var slide = swiper.slides.eq(i);
              slide.transition(transition);
            }
          }
        }
    };
  },
  methods: {
    gradient(node, direction) {
      node.style.background = "-webkit-linear-gradient(to "+direction+", rgba(0,0,0,0),rgba(51,51,51,0.9), rgba(19,19,19,1))";
      node.style.background = "-o-linear-gradient("+direction+", rgba(0,0,0,0),rgba(51,51,51,0.9), rgba(19,19,19,1))";
      node.style.background = "-moz-linear-gradient("+direction+", rgba(0,0,0,0),rgba(51,51,51,0.9), rgba(19,19,19,1))";
      node.style.background = "linear-gradient(to "+direction+", rgba(0,0,0,0),rgba(51,51,51,0.9), rgba(19,19,19,1))";
    }
  }
};
</script>

<style>
.certify {
  position: relative;
}
.certify .swiper-slide{
  display: block;
  max-width: 680px;
}

.certify .swiper-slide {
  background-color: transparent;
  /*max-width: 520px;
  height: 408px;*/
}
.certify .swiper-slide img {
  min-height: 360px;
}
@media (max-width:768px){
  .certify .swiper-slide img {
    min-height: auto;
  }
}
.explain {
  display: block;
  width: 180%;
  margin-left: 50%;
  max-width: 906px;
  transform: translateX(-50%);
}
@media (max-width: 992px) {
  .explain {
    width: 130%;
  }
}
@media (max-width: 768px) {
  .explain {
    width: 100%;
  }
}
.explain_box p {
  padding: 30px;
  text-align: left;
  min-height: 160px;
  background-color: #ffffff;
  margin: 0;
  box-shadow: 0 8px 30px #ddd;
  /*font-size: 18px;*/
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  /*line-height: 23px;*/
}
.explain p .arrows {
  display: block;
  width: 30px;
}
.explain .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid;
  border-right: 18px solid transparent;
  border-left: 18px solid transparent;
  border-top: 0;
  border-bottom: 18px dashed;
  color: #ffffff;
}

.explain h1 {
  margin: 26px 0 16px;
  color: rgba(98, 145, 238, 1);
  background-color: transparent;
}
.explain .linear {
  display: block;
  width: 100%;
  height: 14px;
  margin: 0 auto;
  background-size: 100% 100%;
  background: url("../assets/home/linear.png") no-repeat center;
}
/*.certify .swiper-slide p {
  padding-top: 0;
  text-align: center;
  color: #636363;
  margin: 0;
}*/

.certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

.certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

.certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}
.certify .swiper-button-prev:hover {
  background-position: 0 -46px;
  background-size: 100%;
}
.certify .swiper-button-next:hover {
  background-position: 0 -139px;
  background-size: 100%;
}
</style>
<style scoped lang="stylus">
.certify
  .carousel-button-prev,.carousel-button-next
    position: absolute;
    top: 50%;
    z-index: 10;
    width 44px
    height 44px
    background-repeat no-repeat
    background-size 100% 100%
    &:focus
      outline none
      border none
  .carousel-button-prev
    left -50px
    background-image url("img/prev.png")
    &:hover
      background-image url("img/prev_active.png")
  .carousel-button-next
    right -50px
    background-image url("img/next.png")
    &:hover
      background-image url("img/next_active.png")
</style>
