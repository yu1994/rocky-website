<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import "../styl/swiper_style.css";
import "../styl/flow.css";
import { Swiper } from "../utils/swiper.2.7.6";
export default {
  name: "myswiper",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      loop: true,
      calculateHeight: true,
      // autoplay : 1000,
      tdFlow: {
        rotate : 10,
        stretch :-50,
        depth: 400,
        // rotate: 20,
        // stretch: 120,
        // depth: 200,
        modifier: 1,
        shadows: false
      },
      onSlideChangeStart: function(swiper){
        if (swiper.slides[0].querySelector(".explain")) {
          for (let i = 0, len = swiper.slides.length; i < len; i++) {
            swiper.slides[i].querySelector(".explain").style.display = "none";
          }
          let activeNode = swiper.slides[swiper.activeIndex+1];
          activeNode.querySelector(".explain").style.display = "block";
        } else return false;
      }
      // onSlideChangeEnd: function(swiper){
      //   // for (let i = 0; i < swiper.slides.length; i++) {
      //   //   var slide = swiper.slides.eq(i);
      //   //  console.log(slide)
      //   // }
      //   // let activeNode = swiper.slides[swiper.activeIndex+1];
      //   // activeNode.style.width = 500+'px';
      //   // console.log(activeNode)
      //   // console.log(swiper)
      // }
    });
  }
};
</script>
