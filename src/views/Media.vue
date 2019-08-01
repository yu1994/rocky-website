<template>
  <div class="mediaReport">
    <section class="container">
      <breadcrumb></breadcrumb>
      <carousel class="packing">
          <swiper-slide v-for="(item, key) in $t('mediaPage.carouselList')"
            ><img :src="item.url" class="img-responsive"
          />
            <div class="MediaExplain">
              <p>{{item.remark}}</p>
            </div>
          </swiper-slide>
          <!--<swiper-slide
            ><img src="../assets/media/banner4.jpg" class="img-responsive"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/media/banner5.jpg" class="img-responsive"
          /></swiper-slide>-->
        </carousel>
    </section>
    <section class="report container">
      <div class="reportNav" ref="mediaType">
      <!--  <ul class="clearfix reportNav-packing" ref="mediaType">
          <li v-for="(item, key) in $t('mediaPage.reportList')" :key="key">
            <a
                    href="javascript:void 0"
                    @click="getNewsListApi(item.id)"
                    :class="{ linkActive: configPage.type === item.id }"
            ><h2>{{ item.title }}</h2><i></i
            ></a>
          </li>
        </ul>-->
        <slide-navs>
          <swiper-slide v-for="(item, key) in $t('mediaPage.reportList')" :key="key">
            <a
                    href="javascript:void 0"
                    @click="getNewsListApi(item.id)"
                    :class="{ active: configPage.type === item.id }"
            >{{ item.title }}<i></i
            ></a>
          </swiper-slide>
        </slide-navs>
          <!--<swiper :options="navSwiperOption" >
            <swiper-slide v-for="(item, key) in $t('mediaPage.reportList')" :key="key">
              <a
                      href="javascript:void 0"
                      @click="getNewsListApi(item.id)"
                      :class="{ linkActive: configPage.type === item.id }"
              ><h2>{{ item.title }}</h2><i></i
              ></a>
            </swiper-slide>
          </swiper>-->
      </div>
      <div class="list" v-show="show">
        <news
          :router-url="'/media/detail/'"
          :news-list="newsList"
          :config-page="configPage"
          :is-show-date ="isShowDate"
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
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import carousel from "@/components/carousel";
import news from "@/components/news";
import navigation from "@/components/navigation";
import { newsListApi } from "../api/mediaAPI";
import Underline from "../components/underline";
import vm from "../utils/events";
import SlideNavs from "../components/slideNavs";
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
      newsList: [],
      isShowDate: true, // 因为 视频需要把下面时间去掉
      navSwiperOption: {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
      }
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
      type === 4 ? this.isShowDate = false : this.isShowDate = true;
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
  components: {SlideNavs, Underline, breadcrumb, carousel, news, navigation }
};
</script>

<style scoped lang="stylus">
.mediaReport
  padding-top 60px
  .packing
    .MediaExplain
      position absolute
      left 0
      bottom 0
      width 100%
      height 50px
      line-height @height
      padding 0 20px
      text-align left
      background-color rgba(0,0,0,.3)
      p
        color #ffffff
  .report
    margin-top 69px
    .reportNav
      margin-bottom 15px
  .videoChunk
    margin-top 20px
</style>
<style lang="stylus">
  .mediaReport .reportNav .swiper-wrapper{
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }
  @media (max-width:768px){
    #app{
      .mediaReport{
        .report{
          margin-top 30px
        }
        .reportNav{
          .swiper-slide{
            width 90px;
          }
          .swiper-wrapper{
            justify-content: left;
          }
        }
      }

    }
  }
</style>
