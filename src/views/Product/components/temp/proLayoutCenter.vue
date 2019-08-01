<template>
  <div class="article" :style="stylus_box">
    <div class="container">
      <div class="article_text ">
        <div class="title">
          <p class="cover">{{ content.titleCover }}</p>
          <h2 class="wow fadeInUp">{{ content.title }}</h2>
        </div>
        <p class="wow fadeInUp">{{ content.remark }}</p>
      </div>
      <div class="article_img">
        <img v-if="content.url"
             class="wow zoomIn"
             v-lazy="content.url"
             :style="{ maxWidth: content.imgMaxWidth }"
        />
      </div>
      <div class="other">
        <slot name="other"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "proLayoutCenter",
    props: {
      content: {
        type: Object,
        default: function () {
          return {};
        }
      },
      stylus_box: {
        type: Object,
        default: function () {
          return {};
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  .article
    text-align center
    margin 0 auto

  .article_text
    margin-bottom 28px
    .title
      position relative
      margin-bottom 23px
      h2
        position relative
        margin 0
        color: rgba(51, 51, 51, 1);
        /*font-size: 30px;
        font-family: "Microsoft YaHei UI";
        font-weight: bold;*/
      .cover
        position absolute
        left 50%
        top 0
        transform translateX(-50%)
        font-size: 75px;
        font-family: "Microsoft YaHei UI";
        font-weight: bold;
        line-height 0
        color: rgba(223, 223, 223, 1);
    p
      margin :0;
      color: rgba(51, 51, 51, 1);
     /* font-size: 20px;*/
      /*font-weight: bold;*/
     /* line-height: 30px;*/
  .article_img
    img
      width 100%
      display block
      margin 0 auto
</style>
<style lang="stylus" scoped>
  @media (max-width: 768px) {
    #app {
      .article {
        padding 30px 0 !important;
        .cover {
          font-size $coverEnSize
        }
      }
    }
  }
</style>
