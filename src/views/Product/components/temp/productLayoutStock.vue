<template>
  <div class="productLayoutStock">
    <div class="productLayoutStock-box" :style="styles.box">
      <div class="img" :style="styles.imgBox">
        <img v-lazy="styles.url" />
      </div>
      <div class="content" :style="styles.content">
        <div class="content-title">
          <h5 :style="styles.title">{{content.title}}</h5>
        </div>
        <div class="content-remark">
          <p>{{content.remark}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productLayoutStock",
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
.productLayoutStock
  margin-bottom 68px
  .productLayoutStock-box
    position relative
    width 100%
    height 506px
    /*border 4px solid #CEEBF4
    box-sizing border-box*/
    .img
      /*position absolute
      left -4px
      top -4px*/
      text-align left
    .content
      position absolute
      text-align left
      padding 45px 32px 50px 64px
      box-sizing border-box
      .content-title
        position relative
        width 100%
        height 35px
        margin-bottom 34px
        right 0
        h5
          position absolute
          width 100px
          height 100%
          line-height 35px
          margin 0
          color #ffffff
          text-align center
      .content-remark
        p
          color:rgba(0,0,0,1);
          line-height:35px;
  p
    margin 0
</style>
