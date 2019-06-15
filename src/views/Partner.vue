<template>
  <div class="partner">
    <section class="aboveBg">
      <above-bg>
        <img
          slot="bg"
          class="img-responsive"
          src="../assets/partner/partnerBg.png"
        />
      </above-bg>
    </section>
    <section class="contentChunk container">
      <breadcrumb></breadcrumb>
      <div class="partnerNav">
        <ul class="nav  nav-pills bs-js-navbar-scrollspy">
          <li
            class="col-md-3"
            v-for="(item, key) in navList"
            :key="key"
            :class="{ active: active === key }"
          >
            <a href="javascript:void 0" @click="areaHandler(item.id, key)">{{
              item.name
            }}</a>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="partnerImgList">
        <ul class="clearfix">
          <li class="col-md-4 col-sm-6" v-for="(item, key) in list" :key="key">
            <img :src="item" class="img-responsive" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import AboveBg from "../components/aboveBg";
import Breadcrumb from "../components/breadcrumb";
export default {
  name: "Partner",
  data() {
    return {
      active: 0,
      navList: [
        { id: "yz", name: "亚洲" },
        { id: "fz", name: "非洲" },
        { id: "mz", name: "美洲" },
        { id: "oz", name: "欧洲" }
      ],
      imgData: {
        yz: [
          require("../assets/partner/partner_01.png"),
          require("../assets/partner/partner_01.png")
        ],
        fz: [require("../assets/partner/pertner_02.png")],
        mz: [require("../assets/partner/partner_01.png")],
        oz: [require("../assets/partner/pertner_02.png")]
      },
      list: []
    };
  },
  created() {
    this.list = this.imgData[this.navList[0].id];
  },
  methods: {
    areaHandler(id, key) {
      this.active = key;
      this.list = this.imgData[id];
    }
  },
  components: { Breadcrumb, AboveBg }
};
</script>
<style scoped lang="stylus">
.partner
  overflow-x hidden
  .partnerNav
    position relative
    margin-bottom 20px
    ul
      border-bottom 1px solid rgba(145,145,145,1)
      li
        position relative
        margin 0
      a
        margin 0
        font-size:26px;
        font-weight:400;
        color:#828282;
        padding 10px 0
        &:hover
          background-color: transparent;
      @media (max-width 1200px){
        a{
          font-size 16px
        }
      }
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
      .active
        i
          left 0
          width 100%
          opacity 1
          background-color: #333333
        a
          color #121212
          background-color transparent
  .partnerImgList
    li
      margin-bottom 12px
      img
        margin 0 auto
        max-height 270px
        /*max-width 296px*/
</style>
