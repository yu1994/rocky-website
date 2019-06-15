<template>
  <div class="chunkHead sizeCenter">
    <h4>{{content.title}}</h4>
    <p>{{content.mark}}</p>
    <p class="head_sign">
{{content.sign}}    </p>
  </div>
</template>

<script>
export default {
  name: "chunkHead",
  props:{
    content: {
      type: Object
    }
  }
};
</script>

<style scoped lang="stylus">
.chunkHead
    margin-bottom 37px
    text-align center
    h4
        position relative
        font-size:30px;
        font-weight:bold;
        margin 0
        padding-bottom 12px
        color:rgba(18,18,18,1);
        &:after
            content ""
            position absolute
            left 50%
            bottom 0
            width 80px
            height 1px
            margin-left -40px
            background-color #333333
    p
        margin 12px 0 0 0
        font-size:16px;
        font-weight:bold;
        color:rgba(51,51,51,1)
    .head_sign
        width 100%
        max-width 740px
        margin 10px auto 0
        font-size:16px;
        text-align center
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:23px
</style>
