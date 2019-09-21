<template>
  <div class="news_box">
    <ul class="list clearfix">
      <li
        class="col-lg-4 col-sm-6"
        v-for="(item, key) in newsList"
        :key="key"
        @click="lookHandler(item.id)"
      >
        <img :src="item.pictureUrl" :height="imgHeight"/>
        <p class="title">{{ item.title }}</p>
        <p class="date" v-if="item.publishTime">
          {{ item.publishTime.slice(0, item.createdTime.indexOf("T")) }}
        </p>
      </li>
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
    }
  },
  methods: {
    lookHandler(id) {
      if (this.routerUrl !== "") {
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
      img
        width 100%
      p
        margin 12px 0 0 0
        text-align left
        font-size 16px
        font-weight:bold;
        overflow hidden
        color:rgba(51,51,51,1);
      .title
        height 45px
        margin-bottom 8px
      .date
        font-weight:bold;
        font-size 12px
        color:rgba(130,130,130,1)
        margin 0 0 10px
</style>
