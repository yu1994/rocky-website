<template>
  <div class="detail">
    <section class="container">
      <div class="navigation col-md-2">
        <div class="list-group">
          <!--<a href="#" class="list-group-item active">
            Cras justo odio
          </a>-->
          <a :class="{active: page.type === item.id}" v-for="(item, key) in $t('mediaPage.reportList')" href="javascript:void 0" @click="skipNewsHandler(item.id)" class="list-group-item" :key="key">{{item.title}}</a>
        </div>
      </div>
      <div class="col-md-10">
        <breadcrumb
                :essay="
          news.title.length > 20 ? news.title.slice(0, 20) + '...' : news.title
        "
        ></breadcrumb>
        <div class="chapter">
          <div class="title">
            <h2>{{ news.title }}</h2>
            <p class="date">{{ news.createdTime }}</p>
          </div>
          <div class="content" v-html="news.content"></div>
        </div>
        <div class="article">
          <p v-if="up.show">
            <a href="javascript:void 0" @click="getNewsDetailApi(up.id)"
            >上一篇：{{ up.title }}</a
            >
          </p>
          <p v-if="blow.show">
            <a href="javascript:void 0" @click="getNewsDetailApi(blow.id)"
            >下一篇：{{ blow.title }}</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import { newsDetailApi, newsListApi } from "../api/mediaAPI";
import { cliceTime } from "../utils/index";
import vm from '../utils/events'
export default {
  name: "newsDetail",
  data() {
    return {
      up: {
        show: false
      },
      blow: {
        show: false
      },
      news: {
        title: ""
      },
      newsList: [],
      page: {}
    };
  },
  watch: {
    page(val, oldVal) {
      if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
        this.getNewsListApi(this.$route.query);
      }
    }
  },
  methods: {
    getNewsDetailApi(id) {
      newsDetailApi(id).then(res => {
        this.news = res.data;
        this.news.createdTime
          ? (this.news.createdTime = cliceTime(this.news.createdTime))
          : "";
        this.recommend(id);
      });
    },
    getNewsListApi(page) {
      newsListApi(page).then(res => {
        this.newsList = res.data.list;
        this.recommend(this.$route.params.id);
      });
    },
    recommend(id) {
      for (let i = 0, len = this.newsList.length; i < len; i++) {
        if (this.newsList[i].id == id) {
          if (this.newsList[i - 1]) {
            this.up.show = true;
            this.up.title = this.newsList[i - 1].title;
            this.up.id = this.newsList[i - 1].id;
          } else this.up.show = false;
          if (this.newsList[i + 1]) {
            this.blow.show = true;
            this.blow.title = this.newsList[i + 1].title;
            this.blow.id = this.newsList[i + 1].id;
          } else this.blow.show = false;
          break;
        } else {
          this.up.show = false;
          this.blow.show = false;
        }
      }
    },
    skipNewsHandler(id) {
      this.$router.push({name: 'media'});
      vm.$emit("newsTypeToggle", id);
    }
  },
  components: { breadcrumb },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (JSON.stringify(to.query) !== "{}") {
        vm.page = to.query;
      }
      vm.getNewsDetailApi(to.params.id);
    });
  }
};
</script>
<style>
.content img {
  width: 100%;
}
.content video {
  width: 100%;
}
.content strong > span,
.content strong > a,
.content strong > p,
.content strong > b {
  font-weight: 700;
}
</style>
<style scoped lang="stylus">
    @import "../styl/variable.styl"
.detail
    background-color #F7F7F7
    padding-top $distanceHead
    .navigation
      margin-top 38px
    .chapter
        font-size 16px
        font-family Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol
        padding 18px 38px
        border-radius 2px
        background:rgba(255,255,255,1)
        /*box-shadow 5px 5px 1px rgba(0,0,0,.1)*/
        .title
            text-align left
            h2
                font-size:24px;
                font-weight:bold;
                color:rgba(51,51,51,1);
            .date
                font-size:16px;
                text-indent 1em
                margin 20px 0
                color:rgba(130,130,130,1);
        .img
            margin 0 auto
        .content
          margin-top 20px
          text-align left
    .article
        margin 30px 0
        p
            margin 0
            text-align left
            font-size:16px;
            line-height:30px;
            a
                font-weight:bold;
                text-decoration none
                color:rgba(51,51,51,1);
    .navigation
      a
        font-size 16px
        &:hover
          color #5695f2
      .active
        background-color #5695f2
        &:hover
          color #ffffff
</style>
