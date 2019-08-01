<template>
  <div class="news_box">
    <ul class="list clearfix">
      <li
        class="col-lg-4 col-sm-6"
        v-for="(item, key) in newsList"
        :key="key"
        @click="lookHandler(item.id)"
      >
        <div class="imgWrap">
          <img :src="item.pictureUrl" :height="imgHeight" />
          <slot v-if="item.id" name="imgSlogan">

          </slot>
        </div>
        <p class="title" :style="{ textAlign: titleTextAlign }">
          {{ item.title }}
        </p>
        <p class="date" v-if="item.publishTime && isShowDate">
          {{ item.publishTime.slice(0, item.createdTime.indexOf("T")) }}
        </p>
      </li>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "news",
  props: {
    routerUrl: {
      type: String,
      default: "/"
    },
    configPage: {
      type: Object
    },
    newsList: {
      type: Array
    },
    imgHeight: {
      type: String,
      default: "230px"
    },
    titleTextAlign: {
      type: String,
      default: "left"
    },
    isShowDate: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    lookHandler(id) {
      if (this.routerUrl !== "" && id) {
        this.$router.push({
          path: this.routerUrl + id,
          query: this.configPage
        }); // -> /user/123 '/media/detail/'+id
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.news_box
  .list
    margin 0 auto
    li
      cursor pointer
      .imgWrap
        position relative
      img
        width 100%
      p
        margin 12px 0 0 0
        text-align left
        font-size 16px
        /*font-weight:bold;*/
        overflow hidden
        color:rgba(51,51,51,1);
      .title
        height 45px
        margin-bottom 8px
      .date
        /*font-weight:bold;*/
        font-size 14px
        color:rgba(130,130,130,1)
        margin 0 0 10px
</style>
