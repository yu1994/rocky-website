<template>
  <div class="contact">
    <section class="aboveBg">
      <above-bg>
        <img slot="bg" src="../assets/contact/aboveBg.png" width="100%" />
        <div slot="sign">
          <h2>联系我们</h2>
        </div>
      </above-bg>
    </section>
    <section class="addressBg container">
        <breadcrumb></breadcrumb>
      <div class="bg">
        <img src="../assets/contact/addressBgblog.jpg" class="img-responsive" />
        <div class="cover">
          <div class="text">
            <h5>
              全球移动杭州总部
            </h5>
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
            <h5>{{item.name}}</h5>
            <p v-if="item.address">{{item.address}}</p>
            <p v-if="item.mobile">{{item.mobile}}</p>
            <p>{{item.workTime}}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb";
import AboveBg from "../components/aboveBg";
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
        {
          name: "RockyPlay Nepal private limited",
          address: "Durbar Marg-1, Kathmandu, Nepal",
          //mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "RockyPlay Myanmar Corporation Ltd",
          address: "Room 6, Building 232, QUARTER 6, YANKIN. YANGON",
        //  mobile: "电话：959964480636",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "RockyPlay International Technology INC",
          address: "4TH Floor PCCI corporate center 118L.P.LEVISTE BEL-AIR CITY OF MARKTI FOURTH DISTRICT,PHILIPPINES",
          //mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "PT. RockyPlay Information Technology Indonesia",
          address: "30th Floor,Sampoerna Strategic Square, South Tower,JL.Jend Sudirman KAV 45-48 RT 003 RW 004,Karet Semanggi Setiabudi.Jakarta Selatan, DKI Jakarta 12930",
        //  mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        },
        {
          name: "Panshi (India) Information Technology Private Limited ",
          address: "Unit Nos 16-006 on 16th Floor,Palms Spring Plaza,Golf Course Road,Sector 54 Gurgaon, Haryna",
        //  mobile: "电话：400-100-1110；400-100-1110",
          workTime: "工作时间：周一 至 周六 9:00-11:30,13:30-17:00"
        }
      ]
    };
  },
  components: {AboveBg, breadcrumb }
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
        .text
          position absolute
          left 18px
          top 50%
          color #ffffff
          transform translateY(-50%)
          p
            margin-bottom 0
.addressDetail
  margin 29px auto 76px
  text-align left
  .list
    li
      height 190px
      padding 25px 0 42px
      border-bottom 1px solid rgba(145,145,145,1)
      h5
        margin 0 0 19px 0
        color:rgba(51,51,51,1);
      p
        color:rgba(51,51,51,1);
        margin-bottom 5px
@media (max-width:768px){
  #app{
    .addressDetail{
      li{
        height auto
        padding 30px 0
      }
    }
  }
}
</style>
