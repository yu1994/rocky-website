<template>
  <div class="productLayoutLeft">
    <div class="productLayoutLeft-box">
      <div class="img" :style="styles.imgBox">
        <img class="wow zoomIn" v-lazy="styles.url" :style="styles.img"/>
      </div>
      <div class="content" :style="styles.content">
        <div class="content-title">
          <h5 :style="styles.title">{{content.title}}</h5>
        </div>
        <div class="content-remark">
        <p class="wow fadeInUp">{{content.remark}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productLayoutLeft",
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
$boxH = 507px
$boxHSmall = 254px
.productLayoutLeft
  width 100%
  height $boxH
  padding 0 36px 0 0
  margin-bottom $productChunkMarginBottom
  box-sizing border-box
  /*background-image url("../../../../assets/product/border.png")*/
  background-repeat no-repeat
  background-position center
  background-size 100% 100%
  background-color #CEEBF4
  .productLayoutLeft-box
    display flex
    position relative
    height $boxH
    justify-content space-between
    align-items center
    text-align left
  .img
    display inline-block /* ie 9*/
    height 100%
    border 4px solid #CEEBF4
    box-sizing border-box
    background-color rgb(240,242,245)
    img
      position absolute
      left 0
      top 50%
      transform translateY(-50%)
  .content
    display inline-block /* ie 9*/
    /*max-width 390px*/   /* ie 10 不设置的话有问题*/
    margin-left 84px
    .content-title
      margin-bottom 43px
      word-wrap break-word
       word-break normal
      h5
        width 134px
        height 35px
        line-height @height
        padding-left 7px
        color:rgba(255,255,255,1);
        margin 0
    .content-remark
      p
        line-height 35px
  p
    margin 0
</style>
<style scoped lang="stylus">
  $boxH = 507px
  $boxHSmall = 254px;
  @media (max-width:768px){
    #app{
      .productLayoutLeft{
        margin-bottom $productChunkMarginBottom-small
        height $boxHSmall
        padding 0 (36/2)px 0 0
        .productLayoutLeft-box{
          height:$boxHSmall;
        }
        .img{
          img{
            width (302/2)px
            height (201/2)px
          }
        }
      }
    }
  }
</style>
