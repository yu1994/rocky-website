<template>
  <div class="mediaReport">
    <section class="swiper container">
      <breadcrumb></breadcrumb>
      <div class="carousel">
        <carousel class="packing" :translateXNumber="260">
          <swiper-slide
            ><img src="../assets/media/banner3.jpg" width="100%"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/media/banner4.jpg" width="100%"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/media/banner5.jpg" width="100%"
          /></swiper-slide>
        </carousel>
        <!--<swiper>
          <div class="swiper-slide">
            <img src="../assets/media/banner3.jpg" class="img-responsive" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/media/banner4.jpg" class="img-responsive" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/media/banner5.jpg" class="img-responsive" />
          </div>
        </swiper>-->
      </div>
    </section>
    <section class="report container">
      <ul class="packing" ref="mediaType">
        <li v-for="(item, key) in $t('mediaPage.reportList')" :key="key">
          <a
            href="javascript:void 0"
            @click="getNewsListApi(item.id)"
            :class="{ linkActive: configPage.type === item.id }"
            >{{ item.title }}<i></i
          ></a>
        </li>
      </ul>
      <div class="list" v-show="show">
        <news
          :router-url="'/media/detail/'"
          :news-list="newsList"
          :config-page="configPage"
        ></news>
        <div class="pageNav">
          <navigation
            :totalPage="totalNumber"
            @clientPage="clientPage"
            :active="configPage.page"
          ></navigation>
        </div>
      </div>
    </section>
    <!--  <section class="container videoChunk">
      <underline :title="'视频媒体'"></underline>
    </section>-->
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import carousel from "@/components/carousel";
// import swiper from "@/components/myswiper";
import news from "@/components/news";
import navigation from "@/components/navigation";
import { newsListApi } from "../api/mediaAPI";
import Underline from "../components/underline";
import vm from "../utils/events";
export default {
  name: "template2",
  data() {
    return {
      show: false,
      totalNumber: 0,
      configPage: {
        page: 1,
        rows: 9,
        status: 1, //正常 新闻 2 推荐
        type: 2
      },
      newsList: []
    };
  },
  created() {
    this.getNewsListApi(2);
    vm.$on("newsTypeToggle", arg => {
      this.getNewsListApi(arg);
      this.$refs.mediaType.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  },
  methods: {
    getNewsListApi(type) {
      this.configPage.type = type;
      newsListApi(this.configPage).then(res => {
        this.show = true;
        this.newsList = res.data.list;
        this.totalNumber = Math.ceil(res.data.total / this.configPage.rows);
      });
    },
    clientPage(client) {
      this.configPage.page = client;
      this.getNewsListApi(this.configPage.type);
    }
  },
  components: { Underline, breadcrumb, carousel, news, navigation }
};
</script>

<style scoped lang="stylus">
.mediaReport
  padding-top 60px
  .swiper
    .packing
      .swiper-slide
        /*max-width 720px*/
        max-width 539px
        height 335px
  .report
    margin-top 69px
    .packing
      border-bottom 1px solid rgba(145,145,145,1);
      li
        display inline-block
        text-align right
        font-weight bold
        a
          position relative
          display block
          height 100%
          text-decoration none
          margin 0 (74/2)px
          font-size:29px;
          font-weight:400;
          color:rgba(130,130,130,1);
          i
            position absolute
            width 100%
            left: 50%
            bottom -1px
            height 1px
            opacity: 0;
            color rebeccapurple
            transition: all 0.6s ease;
            background transparent
        .linkActive
          color #121212
          i
            left 0
            width 100%
            opacity 1
            background-color: #333333;
  .videoChunk
    margin-top 20px
</style>
