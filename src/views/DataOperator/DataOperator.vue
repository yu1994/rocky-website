<template>
  <div class="dataOperator">
    <section>
      <above-bg>
        <img
          slot="bg"
          src="../../assets/operator/operator_bg.png"
          class="img-responsive"
        />
        <div slot="sign">
          <h2>大数据时代，精细化运营</h2>
<!--
          <p class="en">The Age of Big Data, Fine Operations</p>
-->
        </div>
      </above-bg>
    </section>
    <section class="container">
      <breadcrumb></breadcrumb>
    </section>
    <section class="capacityChunk">
      <div class="container">
        <title-decorate
          :lang="'operatorPage.capacityChunk.headDecorate'"
        ></title-decorate>
        <ul class="capacityList clearfix">
          <li
            class="col-md-3 col-xs-6"
            v-for="(item, key) in $t('operatorPage.capacityChunk.capacityList')"
            :key="key"
          >
            <div class="cover">
              <img v-lazy="item.url" class="img-responsive" />
              <p class="cover_title">{{item.title}}</p>
              <div class="wish">
                <div class="wish_box">
                  <h5>{{item.title}}</h5>
                  <p>{{item.remark}}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="exquisiteChunk">
      <div class="container">
        <title-decorate
          :lang="'operatorPage.exquisiteChunk.headDecorate'"
        ></title-decorate>
        <div class="kind kind_1">
          <p>全平台渠道监控</p>
        </div>
        <div class="channelList">
          <ul>
            <li
              v-for="(item, key) in $t(
                'operatorPage.exquisiteChunk.channelNameList'
              )"
              :key="key"
              :style="item.position"
              :class="{}"
            >
              <span
                :style="{ fontSize: item.size, opacity: item.normalOpacity }"
                >{{ item.name }}</span
              >
            </li>
          </ul>
        </div>
        <div class="online"></div>
        <div class="kind kind_1">
          <p>科学的流程转化</p>
        </div>
        <div class="flow">
          <img src="../../assets/operator/flow.png" class="img-responsive" />
        </div>
        <div class="online"></div>
        <div class="kind kind_2">
          <p>精准的用户数据</p>
        </div>
        <div class="dataUsernameImg">
          <img
            src="../../assets/operator/exquisite_bg.png"
            class="img-responsive"
          />
          <!--v-lazy="'../../assets/operator/capacity_01.png'"-->
        </div>
        <div class="online"></div>
        <div class="kind kind_3">
          <p>活动定制化运营</p>
        </div>
        <div class="">
          <img
            src="../../assets/operator/activity_bg.png"
            class="img-responsive"
          />
        </div>
      </div>
    </section>
    <section class="memberChunk">
      <div class="container">
        <title-decorate
          :lang="'operatorPage.memberChunk.headDecorate'"
        ></title-decorate>
        <div class="kind kind_1"><p>会员类型</p></div>
        <div class="memberList">
          <ul class="clearfix">
            <li
              class="col-xs-6 col-md-3"
              v-for="(item, key) in $t('operatorPage.memberChunk.memberList')"
              :key="key"
            >
              <div class="memberList_box">
                <i :style="{ backgroundImage: 'url(' + item.icon + ')' }"></i>
                <p :style="{ color: item.color }">{{ item.slogan }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="online"></div>
        <div class="kind kind_2">
          <p>会员制优势</p>
        </div>
        <div class="benefitList">
          <ul class="clearfix">
            <li
              class="col-md-6 benefitList_li"
              v-for="(list, key) in $t('operatorPage.benefitChunk.benefitList')"
              :key="key"
            >
              <div class="benefitList_box">
                <div class="benefitList_box_node">
                  <h5>{{ list.title }}</h5>
                  <ol>
                    <li v-for="(item, key) in list.list" :key="key">
                      <p>{{ item }}</p>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../../components/breadcrumb";
import AboveBg from "../../components/aboveBg";
import TitleDecorate from "./components/titleDecorate";
export default {
  name: "DataOperator",
  components: { TitleDecorate, AboveBg, Breadcrumb }
};
</script>

<style scoped lang="stylus">
@-webkit-keyframes channelAnimation
  0%,100% {
    -webkit-transform: translateY(0)
  }
  50% {
    -webkit-transform: translateY(5px)
  }
@keyframes channelAnimation
  0%,100%   {
    transform translateY(0)
    -webkit-transform: translateY(0)
  }
  50%  {
    transform translateY(5px)
    -webkit-transform: translateY(5px)
  }
.dataOperator
  overflow hidden
  background-color #F7F7F7
  .capacityChunk
    background-color #F7F7F7
    .capacityList
      margin 37px auto 43px
      li
        min-height 271px
        .cover
          position relative
          overflow hidden
          img
            width 100%
            margin 0 auto
          .cover_title
            position absolute
            width 100%
            left 50%
            bottom 38px
            margin-bottom 0
            font-weight:400;
            color:rgba(255,255,255,1);
            transform translateX(-50%)
          .wish
            position absolute
            left 0
            bottom -110%
            width 100%
            height 100%
            z-index 2
            background:rgba(8,94,183,.4);
            font-size 16px
            transition all .6s ease
            .wish_box
              position absolute
              width 100%
              left 50%
              top 50%
              transform translate(-50%,-50%)
              text-align center
              p
                width 80%
                margin 0 auto
                color:rgba(255,255,255,1);
                font-size 16px
              h5
                color #ffffff
                font-weight normal
                margin-bottom 24px
          &:hover
            .cover_title
              display none
            .wish
              bottom 0
  .exquisiteChunk
    padding 44px 0 60px
    background-color #FFFFFF
    .channelList
      position relative
      width 100%
      max-width 730px
      margin 0 auto 25px
      height 206px
      ul
        position relative
        li
          position absolute
          cursor pointer
          animation: channelAnimation 1.4s infinite ease-in-out
          span
            font-weight:500;
            color:rgba(86,149,242,1)
            transition all .6s ease
            white-space nowrap
          &:hover
            z-index 99
            span
              opacity 1 !important
              font-size 56px !important
    .flow
      margin-bottom 50px
    .dataUsernameImg
      margin-bottom 56px
    .kind_1
      margin 31px auto 54px
    .kind_2
      margin 51px auto 36px
    .kind_3
      margin 59px auto 61px
  .memberChunk
    padding 53px 0 49px
    .kind_1
      margin 56px auto 37px
    .kind_2
      margin 38px auto 39px
    .memberList
      margin-bottom 49px
      ul
        margin-bottom 0
        li
          margin-bottom 15px
      .memberList_box
        width 100%
        height 109px
        line-height @height
        border-radius 10px
        background-color #CDD9E9
        i
          display inline-block
          width 32px
          height 32px
          vertical-align middle
          background-size 100% 100%
          background-repeat no-repeat
        p
          display inline-block
          margin 0 0 0 11px
          vertical-align middle
          color:rgba(92,110,137,1);
      & li:nth-child(1)
        .memberList_box
          background linear-gradient(to bottom right, #CDD9E9 , #AFBED7)
      & li:nth-child(2)
        .memberList_box
          background linear-gradient(to bottom right, #F1DEBB , #E1C28E)
      & li:nth-child(3)
        .memberList_box
          background linear-gradient(to bottom right, #C2E1F6 , #9CCAEE)
      & li:nth-child(4)
        .memberList_box
          background linear-gradient(to bottom right, #C8C8C8 , #B4B5B5)
    .benefitList
      .benefitList_box
        position relative
        height 201px
        background:rgba(255,255,255,1);
        border-radius:4px;
        font-size 16px
        line-height:25px;
        .benefitList_box_node
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)

        h5
          margin 0 auto 16px
          font-weight:400;
          color:rgba(18,18,18,1);
          text-align left
        p
          color:rgba(102,102,102,1);
          margin-bottom 0
          text-align left
      ul
        margin-bottom 0
        /*li
          background:rgba(255,255,255,1);
          border-radius:4px;
          font-size 16px*/
</style>
<style scoped lang="stylus">
.kind
  width:206px;
  margin 0 auto
  border:1px solid rgba(153,153,153,1)
  border-radius:18px;
  p
    height 35px
    line-height 35px
    font-size:16px;
    margin 0
    color:rgba(18,18,18,1);
.online
  max-width 336px
  height 16px
  margin 0 auto
  background-image url("../../assets/operator/online.png")
  background-repeat no-repeat
  background-size 100% 100%
@media (max-width:768px){
  #app{
    .dataOperator{
      .kind{
        margin 30px auto
      }
      .capacityChunk{
        .capacityList{
          margin-bottom 0
          li{
            min-height auto
            margin-bottom 30px
          }
        }
      }
      .exquisiteChunk{
        padding 30px 0
      }
      .memberChunk{
        padding 30px 0
        .benefitList{
          li{
            margin-bottom 15px
            .benefitList_box{
              height 250px
              .benefitList_box_node{
                width 100%
                padding 15px
                box-sizing border-box
              }
            }
          }
        }
        .memberList{
          li{
            padding 0 4px
          }
          .memberList_box{
            height 60px
            line-height 60px
            p{
              /*font-size 12px*/
            }
          }
        }

      }
    }
  }
}
</style>
