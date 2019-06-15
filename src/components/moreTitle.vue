<template>
  <div class="more clearfix">
    <div class="title">
      <p>{{ title }}</p>
    </div>
    <div class="link">
      <router-link v-if="url != ''"  :to="{name:url}">Learn more <i></i></router-link>
      <span v-else style="opacity: 0">a</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "moreTitle",
  props: {
    title: {
      type: String
    },
    url: {
      type: String,
      default: ''
    }
  }
};
</script>
<style scoped lang="stylus">
.more
    height 40px
    line-height 40px
    margin-bottom 15px
    padding-bottom 10px
  .title
      float left
      text-align left
      min-width 120px
      font-size:24px;
      font-weight:400;
      color:rgba(18,18,18,1);
      p
        margin 0
        border-bottom 1px solid #333333
  .link
    text-align right
    margin-left 120px
    min-height 10px
    border-bottom 1px solid #919191
    i
        display inline-block
        width 13px
        height 5px
        vertical-align middle
        background url("../assets/investment/next.png") no-repeat

</style>
