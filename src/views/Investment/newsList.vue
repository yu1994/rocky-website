<template>
  <section class="newsList">
    <div class="container">
      <breadcrumb></breadcrumb>
      <div class="dynamic">
        <more-title :title="'新闻动态'">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
            >
              时间 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">2019</a></li>
              <li><a href="#">2018</a></li>
              <li><a href="#">2017</a></li>
              <li><a href="#">2016</a></li>
              <li><a href="#">2015</a></li>
              <!--<li role="separator" class="divider"></li>
                          <li><a href="#">Separated link</a></li>-->
            </ul>
          </div>
        </more-title>
        <ul class="list">
          <li
            v-for="(item, key) in newsList"
            :key="key"
            @click="newsDetail(item.id)"
          >
            <div class="img col-lg-5">
              <img :src="item.pictureUrl" width="100%" />
            </div>
            <div class="col-lg-6 text">
              <h4>{{ item.title }}</h4>
              <div v-html="item.description"></div>
              <p>2018-10-17</p>
            </div>
          </li>
        </ul>
        <navigation
          :totalPage="totalNumber"
          @clientPage="clientPage"
          :active="newsConfig.page"
        ></navigation>
      </div>
    </div>
  </section>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import moreTitle from "@/components/moreTitle";
import navigation from "@/components/navigation";
import { cliceTime } from "../../utils/index";
import { newsListApi } from "../../api/investmentAPI";
export default {
  name: "newsList",
  data() {
    return {
      newsList: [],
      totalNumber: 0,
      newsConfig: {
        page: 1,
        rows: 9,
        status: 1, //传1查正常新闻列表，传2查推荐新闻列表
        type: 1
      }
    };
  },
  created() {
    this.getNewsListApi();
  },
  methods: {
    getNewsListApi() {
      newsListApi(this.newsConfig).then(res => {
        this.newsList = res.data.list;
        this.totalNumber = Math.ceil(res.data.total / this.newsConfig.rows);
        this.newsList.createdTime
          ? (this.news.createdTime = cliceTime(this.news.createdTime))
          : "";
      });
    },
    clientPage(client) {
      this.newsConfig.page = client;
      this.getNewsListApi();
    },
    newsDetail(id) {
      this.$router.push({
        path: "/media/detail/" + id,
        query: this.newsConfig
      });
    }
  },
  components: { breadcrumb, moreTitle, navigation }
};
</script>

<style scoped lang="stylus">
.newsList
    background-color  #F7F7F7
    .dynamic
        .btn-group
            button
                border none
                background-color transparent
                text-decoration none
                font-size:16px;
                border-radius 0
                font-weight:bold;
                box-shadow inset 0 3px 5px transparent
                color:rgba(86,149,242,1);
            .dropdown-menu
                a
                    font-size:16px;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:23px;
            .dropdown-menu
                min-width auto
        .list
            font-size 16px
            margin-bottom 0
            li
                display flex
                align-items center
                cursor pointer
                margin-bottom 20px
                padding 20px 0
                background-color #ffffff
            & li:last-child
                margin-bottom 0
            .text
                text-align left
                h4
                  font-weight:bold;
                  color:rgba(51,51,51,1);
</style>
