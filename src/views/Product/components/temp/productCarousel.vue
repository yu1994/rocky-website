<template>
  <div class="productCarousel">
    <div class="productCarousel-box" v-if="carouselList.length > 0" :style="{ backgroundImage:'url(' + styles.url + ')' }">
      <carousel  :translateXNumber="320" :modify="1.45">
        <swiper-slide
                v-for="(item, key) in carouselList"
                :key="key"
        ><div class="img-box">
          <img :src="item.url" />
          <div class="img-cover"></div>
        </div>
        </swiper-slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  import Carousel from "../../../../components/carousel";
  export default {
    name: "productCarousel",
    components: {Carousel},
    props: {
      styles: {
        type: Object,
        default: function () {
          return {

          }
        }
      },
      carouselList: {
        type: Array,
        default: function () {
          return [

          ]
        }
      }
    }
  }
</script>

<style lang="stylus">
.productCarousel
  /*width 838px*/
  margin 0 auto
  .productCarousel-box
    position relative
    width 100%
    /*height 507px*/
    background-color #ffffff
    .img-box
      position relative
      width 273px
      img
        width 100%
    .certify
      /*position absolute
      width 100%
      left 0
      top 50%
      transform translateY(-50%)*/
      .swiper-slide
        width 273px
    .img-cover
      position absolute
      width 100%
      height 100%
      top 0
      left 0
    .carousel-button-prev
      left 0 !important
    .carousel-button-next
      right 0 !important
</style>
