<template>
  <div class="productCarousel">
    <div class="productCarousel-box" v-if="carouselList.length > 0" :style="{ backgroundImage:'url(' + styles.url + ')' }">
      <carousel :carousel-button="false" :translateXNumber="320" :modify="1.45">
        <swiper-slide
                v-for="(item, key) in carouselList"
                :key="key"
        ><div class="img-box">
          <img :src="item.url" />
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
  margin 0 auto 19px
  .productCarousel-box
    position relative
    width 100%
    height 507px
    background-color #333
    .img-box
      width 307px
      padding 0 50px
      box-sizing border-box
      background-color rgba(0,0,0,.3)
      background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.7) , rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.1) )
      /*background-color rgba(0,0,0,.1)*/
    .certify
      position absolute
      width 100%
      left 0
      top 50%
      transform translateY(-50%)
      .swiper-slide
        width 307px
</style>
