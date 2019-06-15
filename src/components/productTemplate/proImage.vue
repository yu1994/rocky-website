<template>
  <div class="article" v-if="imgPlace !== 'right'">
    <div class="article_img" :class="{ imgPlace: imgPlace === 'right' }">
      <slot name="img"></slot>
    </div>
    <div
      class="article_text wow fadeInUp"
      :style="{ paddingLeft: paddingNum + 'px' }"
    >
      <slot name="text"></slot>
    </div>
  </div>
  <div class="article article_right" v-else>
    <div
      class="article_text wow fadeInUp"
      :style="{ paddingRight: paddingNum + 'px' }"
    >
      <slot name="text"></slot>
    </div>
    <div class="article_img" :class="{ imgPlace: imgPlace === 'right' }">
      <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "proImage",
  props: {
    imgPlace: {
      type: String,
      default: "left"
    },
    paddingNum: {
      type: Number,
      default: 10
    },
    setStyle: {
      imgPlace: "right"
    }
  }
};
</script>

<style scoped lang="stylus">
  $img-width = 499px
.article
    display table
    width 100%
    margin-bottom 50px
    .article_img
        text-align left
        img
          width $img-width
    .article_text
        display table-cell
        vertical-align middle
        text-align left
        p
            font-size:20px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:30px;
            margin 0
.article_right
  .article_text
    text-align right
    padding-left 70px
  .article_img
    float right
.liveVideo
    text-align right
    .liveVideo_text
        padding 15px 70px
@media (max-width 768px){
    .liveVideo,.article{
        text-align center
        display block
    }
  .article_text{
    padding 15px 0 !important
  }
  .article_img img{
    margin 0 auto
  }
  .article_right .article_img{
    float none
  }
}
</style>
