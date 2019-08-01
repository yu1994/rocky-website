<template>
  <div :id="id" class=" carousel normalCarousel slide" data-ride="carousel">
    <!-- Indicators -->
    <slot name="indicators"></slot>
    <!-- Wrapper for slides -->
    <slot name="listBox"></slot>
    <!-- Controls -->
    <a
            v-if="controls"
            class="left carousel-control"
            :href="'#' + id"
            role="button"
            data-slide="prev"
    >
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
            v-if="controls"
            class="right carousel-control"
            :href="'#' + id"
            role="button"
            data-slide="next"
    >
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "normalCarousel",
    props: {
      id: {
        type: String,
        default: "carousel-example-sign"
      },
      controls: {
        type: Boolean,
        default: true
      }
    }
  };
</script>
<style lang="stylus" scoped>
  .slide_left
    h5
      margin 0
      color #333;
    p
      color #333;
</style>
<style scoped lang="stylus">
  $img-width = 236px
  $text-width = 378px
  .normalCarousel
    .item
      a
        display block
  .carousel-caption_thousand
    width 635px
    height 100%
    padding 0
    left 50%
    right 0
    bottom 0
    transform translateX(-50%)
    .slide_left
      left 0
      bottom 0
      .slide_left_img
        text-align right
      img
        width $img-width
      p
        width $text-width
      @media (max-width 768px) {
        p, h5 {
          width 60%
          margin 0 auto
        }
      }

  .slide_right, .slide_left
    position absolute
    text-align left
    img
      max-width 100%

  .slide_right
    width $img-width
    right 0
    top 50%
    transform translateY(-50%)

  .left_img
    left 0

  .right_text
    right 0

  @media (max-width: 992px) {
    .slide_left {
      top 50%
      transform translateY(-50%)
    }
  }
  .carousel-indicators
    li
      width 8px
      height 8px
      border-radius 8px
      margin 0 10px
      ackground: rgba(255, 255, 255, 1);
      opacity: 0.6;
    .active
      width 32px
      height 8px
      opacity: 1
      border-radius 8px
</style>
<style scoped lang="stylus">
  $text-width = 378px
  .carousel-caption_simple
    width 710px
    height 100%
    padding 0
    left 50%
    right 0
    bottom 0
    transform translateX(-50%)

  @media (max-width: 992px) {
    .carousel-caption_simple {
      width 80%
    }
  }

  .slide_left
    position absolute
    top 50%
    transform translateY(-50%)
</style>
