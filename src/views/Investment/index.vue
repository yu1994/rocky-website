<template>
  <div class="container">
    <section class="governance">
      <breadcrumb></breadcrumb>
      <div class="governance_box clearfix row">
        <div class="bg col-lg-5 col-xs-12 col-md-6">
          <img src="../../assets/investment/photo.png" width="100%"/>
        </div>
        <div class="detail col-lg-6 col-md-6 clearfix">
          <div class="title">
            <h2>公司治理</h2>
           <!-- <p>Corporate Governance</p>-->
          </div>
          <div class="introduce">
            <p>
              央视财经频道（CCTV-2）5月26日讯
              2019中国国际大数据产业博览会在贵州省贵阳开幕，国家主席习近平向会议致贺信，习近平指出，当前以互联网、大数据、人工智能为代表的新一代信息技术蓬勃发展，对各国经济发展、社会进步、人民生活带来重大而深远的影响。
            </p>
            <!--<p>
              Panshi Founder, Chairman and CEOPanshi Founder, Chairman and
              CEOPanshi Founder, Chairman and CEOPanshi Founder, Chairman and
              CEOPanshi Founder, Chairman and CEOPanshi Founder, Chairman and
              CEOPanshi Founder, Chairman and CEOPanshi Founder, Chairman and
              CEOPanshi Founder, Chairman and CEO
            </p>-->
          </div>
          <div class="more">
            <router-link :to="{ name: 'governance' }"
            >learn more <i class="next"></i
            ></router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <div>
        <more-title :title="'投资者新闻'" :url="'newsList'"></more-title>
        <news :router-url="'/media/detail/'" :news-list="newsList" :config-page="newsConfig"></news>
      </div>
    </section>
    <section class="finance">
      <div>
        <more-title :title="'财务报告'" :url="'financeList'"></more-title>
        <finance-temp :finance-config="financeConfig"></finance-temp>
      </div>
    </section>
    <section class="analyze">
      <div class="analyze_box">
        <more-title :title="'分析师列表'"></more-title>
        <table class="table table-striped">
          <thead>
          <tr>
            <td>机构</td>
            <td>分析师</td>
            <td>电话</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, key) in analyzeList" :key="key">
            <td>{{ item.analystMechanism }}</td>
            <td>{{ item.analystName }}</td>
            <td>{{ item.analystMobile }}</td>
          </tr>
          </tbody>
        </table>
        <div class="statement">
          <p class="title">免责声明</p>
          <p>
            盘石股份有限公司由上述分析师负责股票分析。任何关于对盘石公司的分析、评估、预测和推荐谨代表他们的个人意见，不代表盘石公司和管理层的意见。盘石公司不对上述分析师做出的分析、评估、预测和推荐给与任何指导、暗示或提供任何参考意见。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import breadcrumb from "@/components/breadcrumb";
  import moreTitle from "@/components/moreTitle";
 // import financeTemp from "@/components/financeTemp";
  import {newsListApi, analyzeApi} from "../../api/investmentAPI";
  import news from "@/components/news";
  import FinanceTemp from "../../components/financeTemp";

  export default {
    name: "Investment",
    data() {
      return {
        newsList: [],
        analyzeList: [],
        financeList: {},
        financeConfig: {
          status: 1,
          type: 3,
          page: 1,
          rows: 4
        },
        newsConfig: {
          page: 1,
          rows: 9,
          status: 1,
          type: 1
        }
      };
    },
    created() {
      this.getNewsListApi();
      this.getAnalyzeApi();
    },
    methods: {
      getNewsListApi() {
        newsListApi(this.newsConfig).then(res => {
          this.newsList = res.data.list;
        });
      },
      getAnalyzeApi() {
        analyzeApi().then(res => {
          this.analyzeList = res.data;
        });
      }
    },
    components: {FinanceTemp, breadcrumb, moreTitle, news}
  };
</script>

<style scoped lang="stylus">
  .investment
    .governance
      position relative
      padding 0 0 65px
      .governance_box
        .bg
          float left
          img
            max-width 450px
        .detail
          text-align left
          .title
            float left
            h2
              color: rgba(51, 51, 51, 1)
              margin 0 0 17px
              padding 18px 0 15px
              border-bottom 1px solid rgba(51, 51, 51, 1);
           /* p
              font-size: 14px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);*/
          .introduce
            float left
            width 100%
            p
              color: rgba(51, 51, 51, 1);
          .more
            float left
            color rebeccapurple
            i
              display inline-block
              width 13px
              height 5px
              vertical-align middle
              background url("../../assets/investment/next.png") no-repeat
    .news
      margin-bottom 88px
    .finance
      margin-bottom 88px
      ul, ol
        margin-bottom 0
    .analyze
      thead
        font-size: 16px;
        background-color #5695F2
        color #FFFFFF
      tbody
        color #333333
        font-size 16px
        background-color #FFFFFF
        tr:nth-child(2n+2)
          background-color rgba(86, 149, 242, .3)
          td
            border-bottom: 1px solid rgba(86, 149, 242, 1)
            border-top: 1px solid rgba(86, 149, 242, 1)
      .statement
        padding-bottom 33px
        .title
          font-size: 16px;
          /*font-weight: bold;*/
          color: rgba(130, 130, 130, 1);
          line-height: 16px;
          margin-bottom 15px
        p
          margin 0 auto
          text-align center
          font-size: 16px;
          color: rgba(130, 130, 130, 1);
          /*line-height: 16px;*/
          max-width 560px
</style>
