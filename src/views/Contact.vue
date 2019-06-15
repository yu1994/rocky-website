<template>
  <div class="contact">
    <section class="aboveBg">
      <above-bg>
        <img slot="bg" src="../assets/contact/aboveBg.png" width="100%" />
        <div slot="sign">
          <p>关于我们</p>
          <p class="en">About us</p>
        </div>
      </above-bg>
      <above-bg />
    </section>
    <section class="addressBg container">
        <breadcrumb></breadcrumb>
      <div class="bg">
        <img src="../assets/contact/addressBgblog.png" width="100%" />
        <div class="cover">
          <div class="text">
            <h4>
              全球移动杭州总部
            </h4>
            <p>
              浙江杭州市拱墅区祥园路45号北部软件园
            </p>
            <p>
              电话：400-100-1110；400-100-1110
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="addressDetail container">
      <ul class="list">
        <li class="col-md-5" v-for="(item, key) in list" :key="key" :class="{'col-md-offset-2': key%2!= 0}">
          <div>
            <h4>{{item.name}}</h4>
            <p>{{item.address}}</p>
            <p>{{item.mobile}}</p>
            <p>{{item.workTime}}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
/**
 * 1170px
 * */
import aboveBg from "@/components/aboveBg";
import breadcrumb from "@/components/breadcrumb";
export default {
  name: "contact",
  data() {
    return {
      list: [
        {
          name: "浙江盘石信息技术股份有限公司",
          address: "浙江杭州市拱墅区祥园路45号北部软件园",
          mobile: "电话：400-100-1110，0571-87755099，0571-89987406",
          workTime: "工作时间：周一 至 周五 9:00-11:30,13:30-17:00"
        },
      /*  {
          name: "北京盘石征信管理服务中心",
          address: "浙江杭州市拱墅区祥园路45号北部软件园",
          mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "北京盘石征信管理服务中心",
          address: "浙江杭州市拱墅区祥园路45号北部软件园",
          mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "北京盘石征信管理服务中心",
          address: "浙江杭州市拱墅区祥园路45号北部软件园",
          mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "北京盘石征信管理服务中心",
          address: "浙江杭州市拱墅区祥园路45号北部软件园",
          mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "北京盘石征信管理服务中心",
          address: "浙江杭州市拱墅区祥园路45号北部软件园",
          mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        }*/
      ]
    };
  },
  components: { aboveBg, breadcrumb }
};
</script>

<style scoped lang="stylus">
.addressBg
    .bg
      position relative
      .cover
        position absolute
        left 0
        bottom 0
        width 100%
        height 110px
        text-align left
        background url("../assets/contact/coerBlog.png") no-repeat
        color red
        .text
          position absolute
          left 18px
          top 50%
          color #ffffff
          transform translateY(-50%)
          p
            margin-bottom 0
            font-size 15px
.addressDetail
  margin 29px auto 76px
  text-align left
  .list
    li
      padding 25px 0 42px
      border-bottom 1px solid rgba(145,145,145,1)
      h4
        font-size:18px;
        font-weight:bold;
        margin 0 0 19px 0
        color:rgba(51,51,51,1);
      p
        font-size 15px
        color:rgba(51,51,51,1);
        margin-bottom 2px
</style>
