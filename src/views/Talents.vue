<template>
  <div class="talents">
    <section class="aboveBg">
      <above-bg>
        <img slot="bg" src="../assets/talents/aboveBG.png" width="100%" />
        <div slot="sign">
          <p>投资关系</p>
          <p class="en">Investment relationship</p>
        </div>
      </above-bg>
    </section>
    <section class="container nationChunk">
      <breadcrumb></breadcrumb>
      <underline :title="'公司福利'"></underline>
      <carousel class="packing" :translateXNumber="260" :maxWidth="'539px'">
        <swiper-slide
        ><img class="img-responsive" src="../assets/talents/welfare01.jpg"
        /></swiper-slide>
        <swiper-slide
        ><img class="img-responsive" src="../assets/talents/welfare02.jpg"
        /></swiper-slide>
        <swiper-slide
        ><img class="img-responsive" src="../assets/talents/welfare03.jpg"
        /></swiper-slide>
        <swiper-slide
        ><img class="img-responsive" src="../assets/talents/welfare04.jpg"
        /></swiper-slide>
        <swiper-slide
        ><img class="img-responsive" src="../assets/talents/welfare05.jpg"
        /></swiper-slide>
      </carousel>
      <underline :title="'全球人才战略'"></underline>
      <div class="globalList">
        <ul class="clearfix">
          <li class="col-md-4 col-sm-6" v-for="(item, key) in globalList" :key="key">
            <img class="img-responsive" v-lazy="item" />
          </li>
        </ul>
      </div>
    </section>
    <section class="invite container">
      <underline :title="'全球人才战略'"></underline>
      <ul class="invite_list row clearfix">
        <li
          class="list col-lg-offset-1 col-lg-10 clearfix"
          v-for="(item, index) in inviteList"
          :key="index"
        >
          <div class="title clearfix" style="width: 100%">
            <div class="col-md-5 line">
              <h4>{{ item.jobPost }}</h4>
              <p>{{ item.jobPlace }}</p>
            </div>
          </div>
          <div class="detail clearfix">
            <div class="remark col-md-5">
              <h5>职位描述:</h5>
              <div v-html="item.jobDescription"></div>
              <!--{{item.jobDescription}}-->
              <!--<ol>
                <li v-for="(val, key) in item.remark" :key="key">
                  {{ val }}
                </li>
              </ol>-->
            </div>
            <div class="requested col-md-5 col-md-offset-2">
              <h5>任职要求:</h5>
              <div v-html="item.jobRequirements"></div>
              <!--<ol>
                <li v-for="(val, key) in item.requested" :key="key">
                  {{ val }}
                </li>
              </ol>-->
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import aboveBg from "@/components/aboveBg";
import breadcrumb from "@/components/breadcrumb";
import { talentsListApi } from "../api/talentsAPI";
import Underline from "../components/underline";
import Carousel from "../components/carousel";
export default {
  name: "talents",
  data() {
    return {
      configPage: {
        page: 1,
        rows: 8,
        positionId: ""
      },
      globalList: [
        require("../assets/talents/yd.png"),
        require("../assets/talents/flb.png"),
        require("../assets/talents/mjl.png"),
        require("../assets/talents/jpz.png"),
        require("../assets/talents/tg.png"),
        require("../assets/talents/nbe.png"),
        require("../assets/talents/md.png"),
        require("../assets/talents/ydnxy.png"),
        require("../assets/talents/more.png")
      ],
      inviteList: []
    };
  },
  created() {
    talentsListApi(this.configPage).then(res => {
      this.inviteList = res.data.list;
    });
  },
  components: {Carousel, Underline, aboveBg, breadcrumb }
};
</script>

<style scoped lang="stylus">
.talents
  .nationChunk
    margin-bottom 80px
    .packing
      margin-bottom 88px
      .swiper-slide
        max-width 539px
    .globalList
      ul
        margin 0 auto
        li
          margin-bottom 16px
  .invite
      margin 0 auto 87px
      .invite_list
        li
          margin-bottom 60px
        .list
          text-align left
          .title
            font-size:18px;
            color:rgba(51,51,51,1);
            .line
              padding 0
              border-bottom 1px solid rgba(51,51,51,1);
            h4
              font-size:29px;
              font-weight:bold;
            p
              font-weight:bold;
          .detail
            h5
              font-weight bold
            .remark
              padding 0
            .requested
              padding 0
</style>
