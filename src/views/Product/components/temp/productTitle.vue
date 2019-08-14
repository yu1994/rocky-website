<template>
  <div class="productTitle">
    <div class="productTitle-box" :style="{ backgroundImage:'url(' + styles.url + ')' }">
      <div class="title" :style="styles.title">
        <h5>{{content.title}}</h5>
      </div>
      <div class="remark" :style="styles.remark">
        <p class="wow fadeInUp">{{content.remark}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "productTitle",
    props: {
      styles: {
        type: Object,
        default: function () {
          return {

          }
        }
      },
      content: {
        type: Object,
        default: function () {
          return {

          }
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
.productTitle
  margin-bottom $productChunkMarginBottom
  p
    margin 0
  .productTitle-box
    position relative
    width 100%
    height 320px
    background-size 100% 100%
    .title
      position absolute
      top 10%
      width 100px
      height 36px
      right -2.71%
      h5
        height @height
        line-height @height
        text-align center
        margin 0
        color rgb(255,255,255)
    .remark
      position absolute
      bottom 0
      padding 15px
      color:rgba(0,0,0,1);
      line-height:35px;
      font-size 18px
      text-align left
      background-color #ffffff
      box-sizing border-box
</style>
<style scoped lang="stylus">
  @media (max-width:768px){
    #app{
      .productTitle{
        margin-bottom $productChunkMarginBottom-small
        .productTitle-box{
          height 160px
          .title{
            width 50px
            height 18px
            h5{
              height 18px
              line-height 18px
            }
          }
          .remark{
            padding 8px
            font-size 14px
            line-height:18px;
          }
        }
      }
    }
  }
</style>
