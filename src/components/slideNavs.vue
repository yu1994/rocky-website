<template>
  <div class="slideNavPanel">
    <swiper :options="navSwiperOption">
      <slot></slot>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "slideNavs",
    data() {
      return {
        navSwiperOption: {
          freeMode: true,
          freeModeMomentumRatio: 0.5,
          slidesPerView: 'auto',
        }
      }
    }
  }
</script>

<style lang="stylus">
  .slideNavPanel
    /*height 50px*/
    border-bottom 1px solid rgba(145,145,145,1)
    .swiper-wrapper
      justify-content center
    .swiper-slide
      width 190px
    li
      width 100%
    a
      position relative
      display block
      margin 0
      text-decoration none
      padding 10px 0
      white-space nowrap
      color:#828282
      font-size 32px
      background-color transparent !important
      h2
        margin 0
        color:#828282;
      i
        position absolute
        width 100%
        left: 50%
        bottom 0
        height 1px
        opacity: 0;
        transition: all 0.6s ease;
        background transparent
    .active
      color #121212
      i
        left 0
        width 100%
        opacity 1
        background-color: #333333
      a
        color #121212 !important
</style>
<style lang="stylus">
  .slideNavPanel .swiper-wrapper{
    margin: 0 auto;
    text-align: center;
    justify-content: left;
  }
  @media (max-width:768px){
    #app{
      .slideNavPanel{
        .swiper-wrapper{
          justify-content: left;
        }
        .swiper-slide{
          width 90px;
          a{
            font-size 18px
          }
        }
      }

    }
  }
  @media (min-width:1200px){
    #app{
      .slideNavPanel{
        .swiper-wrapper{
          justify-content: center;
        }
      }

    }
  }
</style>
