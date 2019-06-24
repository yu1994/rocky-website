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
      <div>
        <underline :title="'公司福利'"></underline>
        <carousel class="packing" :translateXNumber="260" :maxWidth="'539px'">
          <swiper-slide class="swiper-slide"
            v-for="(item, key) in $t('talentsPage.nationList')"
            :key="key"
            ><img class="img-responsive" :src="item"
          /></swiper-slide>
        </carousel>
      </div>
      <div class="niceTeam">
        <underline :title="'团队风采'"></underline>
        <div>
          <row-carousel>
            <swiper-slide
              class="swiper-slide"
              v-for="(item, key) in $t('talentsPage.teamList')"
              :key="key"
            >
              <img class="img-responsive" :src="item"/>
            </swiper-slide>
          </row-carousel>
        </div>
      </div>
      <div>
        <underline :title="'全球人才战略'"></underline>
        <div class="globalList">
          <ul class="clearfix">
            <li
              class="col-md-4 col-sm-6"
              v-for="(item, key) in $t('talentsPage.globalList')"
              :key="key"
            >
              <img class="img-responsive" v-lazy="item" />
            </li>
          </ul>
        </div>
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
            </div>
            <div class="requested col-md-5 col-md-offset-2">
              <h5>任职要求:</h5>
              <div v-html="item.jobRequirements"></div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="relationChunk container">
      <underline :title="'人才联系方式'"></underline>
      <div class="EmailWrap">
        <div class="EmailWrap_box">
          <p>如果您符合我们的人才计划，</p>
          <p>或者想加入盘石，</p>
          <p> 那么请发送邮件至：</p>
          <p>  xxxxxxxxxxx@adpanshi.com</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aboveBg from "@/components/aboveBg";
import breadcrumb from "@/components/breadcrumb";
import { talentsListApi } from "../api/talentsAPI";
import Underline from "../components/underline";
import Carousel from "../components/carousel";
import RowCarousel from "../components/rowCarousel";
export default {
  name: "talents",
  data() {
    return {
      configPage: {
        page: 1,
        rows: 100,
        positionId: ""
      },
      inviteList: []
    };
  },
  created() {
    talentsListApi(this.configPage).then(res => {
      this.inviteList = res.data.list;
    });
  },
  components: { RowCarousel, Carousel, Underline, aboveBg, breadcrumb }
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
  .niceTeam
    margin-bottom 80px
    .swiper-slide
      padding 0 15px
  .invite
      margin 0 auto
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
  .relationChunk
    .EmailWrap
      position relative
      margin 0 auto 66px
      width 100%
      height 250px
      background-image url("../assets/talents/relation.png")
      background-repeat no-repeat
      background-size cover
      .EmailWrap_box
        position absolute
        top 50%
        left 86px
        transform translateY(-50%)
        P
          margin 0
          font-size:18px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          text-align left
          line-height:30px;

</style>
