<template>
  <div class="about">
    <section class="boss container">
      <breadcrumb></breadcrumb>
      <div class="introduce clearfix">
        <div style="display: table;text-align: center">
          <div class="photo">
            <div id="boss-photo" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li
                  data-target="#boss-photo"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#boss-photo" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <img src="../assets/about/slider1.png" />
                </div>
                <div class="item">
                  <img src="../assets/about/slider1.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="detail">
            <ul class="discover clearfix">
              <li class="zh"><strong>田宁</strong>盘石创始人，董事长兼CEO</li>
              <li class="en">
                <strong>Tom</strong>Panshi Founder, Chairman and CEO
              </li>
            </ul>
            <div>
              <p>
                央视财经频道（CCTV-2）5月26日讯
                2019中国国际大数据产业博览会在贵州省贵阳开幕，国家主席习近平向会议致贺信，习近平指出，当前以互联网、大数据、人工智能为代表的新一代信息技术蓬勃发展，对各国经济发展、社会进步、人民生活带来重大而深远的影响。
              </p>
              <p>
                Panshi Founder, Chairman and CEOPanshi Founder, Chairman and
                CEOPanshi Founder, Chairman and CEOPanshi Founder, Chairman and
                CEOPanshi Founder, Chairman and CEOPanshi Founder, Chairman and
                CEOPanshi Founder, Chairman and CEOPanshi Founder, Chairman and
                CEOPanshi Founder, Chairman and CEO
              </p>
            </div>
          </div>
          <div class="icon hidden-md hidden-xs hidden-sm">
            <img src="../assets/about/small.png" />
          </div>
        </div>
      </div>
    </section>
    <section class="company container">
      <div>
        <underline :title="'公司介绍'"></underline>
      </div>
      <div class="carousel">
          <carousel :translateXNumber="260">
          <swiper-slide v-for="(item,key) in $t('aboutPage.carouselList')" :key="key"><img :src="item.url" width="100%"/><div class="explain" data-swiper-parallax="-300"><div class="explain_box"><p>{{item.intro}}</p></div></div></swiper-slide>
         </carousel>
        <!--<myswiper>
          <div
            class="swiper-slide"
            v-for="(item, key) in $t('aboutPage.carouselList')"
            :key="key"
          >
            <img :src="item.url" width="100%" />
            <div class="explain" data-swiper-parallax="-300">
              <div class="explain_box">
                <p>{{ item.intro }}</p>
              </div>
            </div>
          </div>
        </myswiper>-->
      </div>
    </section>
    <section class="destiny">
      <div><underline :title="'使命与愿景'"></underline></div>
      <div class="destiny_bg">
        <img src="../assets/about/destiny.png" width="100%" />
        <div v-show="destinySlogan" class="slogan container">
          <div class="left col-lg-5">
            <p>使命</p>
            <p>让全球共享数字科技带来的极致体验</p>
          </div>
          <div class=" sloganClose col-lg-2 hidden-xs">
            <i @click="close"></i>
          </div>
          <div class="right col-lg-5">
            <p>愿景</p>
            <p>成为全球数字娱乐服务的领跑者</p>
          </div>
        </div>
      </div>
    </section>
    <section class="sword defineContainer container">
      <div><underline :title="'七剑文化'"></underline></div>
      <div class="sword_bg">
        <ul class="clearfix ">
          <li class="col-lg-4 col-sm-6 big">
            <img src="../assets/about/sword.png" width="99%" />
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword1.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">莫问剑</p>
                  <p>一切以结果为导向，客户是衣食父母</p>
                </div>
              </div>
            </div>
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword2.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">竞星剑</p>
                  <p>共享共担，坚持团队集体奋斗</p>
                </div>
              </div>
            </div>
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword3.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">天瀑剑</p>
                  <p>随时迎接变化，敢于创新</p>
                </div>
              </div>
            </div>
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword4.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">日月剑</p>
                  <p>积极乐观，永不放弃</p>
                </div>
              </div>
            </div>
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword5.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">青干剑</p>
                  <p>不断超越，天道酬勤</p>
                </div>
              </div>
            </div>
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword6.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">游龙剑</p>
                  <p>正直诚信，言出必践</p>
                </div>
              </div>
            </div>
          </li>
          <li class="col-lg-4  col-sm-6">
            <div class="cover">
              <img src="../assets/about/sword7.png" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">舍神剑</p>
                  <p>敬业担责，担当责任，为自己和家人的幸福而不懈努力</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb";
import underline from "@/components/underline";
import carousel from "@/components/carousel";
 // import Myswiper from "../components/myswiper";
export default {
  name: "About",
  data() {
    return {
      destinySlogan: true
    };
  },
  mounted() {
    this.WOW.init();
    //new WOW().init();
  },
  methods: {
    close() {
      this.destinySlogan = false;
    }
  },
  components: {  breadcrumb, underline, carousel }
};
</script>
<style lang="stylus" scoped>
.about
  padding-top 60px
  .boss
    position relative
    padding-bottom 73px
    .introduce
      padding 0
      text-align left
      .photo
        float left
        width 390px
        height 446px
        vertical-align middle
        .carousel-indicators
          left 70%
          bottom 11px
          li
            width 8px
            height 8px
            border-radius 8px
            margin 0 10px
            background:rgba(255,255,255,1);
            opacity:0.6;
          .active
            width 32px
            height 8px
            opacity:1
            border-radius 8px
      .detail
        display table-cell
        vertical-align middle
        padding 0 20px
        margin 0 236px 0 390px
        font-size 14px
        text-align left
        .discover
          text-align left
          .zh
            float left
            border-bottom 1px solid rgba(51,51,51,1)
            font-size:19px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            strong
              padding-right 15px
              font-size 30px
              font-weight:bold;
              color:rgba(51,51,51,1);
          .en
            width 100%
            float left
            font-size 15px
            font-weight:bold;
            margin 17px 0 35px
            strong
              padding-right 26px
        p
          font-weight:bold;
          font-size 15px
      @media (max-width: 768px){
        .photo {
          float none
          margin 0 auto
          text-align center
          width auto
          height auto
          max-width 390px
          max-height 446px
        }
        .detail {
          display block
          margin 0
        }
      }
      .icon
        float right
        transform translateY(-70%)
        max-width 236px
        width 236px

  .company
    margin-bottom 85px
    .carousel
      .swiper-slide
        max-width 539px
        .explain_box
          min-height 150px
          p
            box-shadow none
  .destiny
    .destiny_bg
      position relative
      .slogan
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        color #ffffff
        font-size 30px
      @media (max-width 768px) {
        .slogan{
          font-size 16px;
        }
      }
      .sloganClose
        margin-top 23px
        cursor pointer
        i
          display block
          margin 0 auto
          width 34px
          height 34px
          background-image url("../assets/about/vs.png")

  .sword /*defineContainer*/
    margin 64px auto 22px
    .sword_bg
      /*max-width 980px*/
      margin 0 auto
      text-align center
      ul
        /*margin 0 auto*/
        text-align center

        li
          position relative
          margin-bottom 9px
          overflow hidden
          .cover
            position relative
            margin 0 auto
            text-align center
            .wish
              position absolute
              width 100%
              height 100%
              left -500px
              top 0
              transform translateX(-50%)
              transition all .6s ease
              .wish_box
                position absolute
                left 50%
                top 50%
                width 100%
                padding 0 30px;
                box-sizing border-box
                transform translate(-50%,-50%)
                p
                  font-size:23px;
                  font-weight:400;
                  color:rgba(255,255,255,1);
                .title
                  font-size 40px
                  text-align left
          &:hover .wish
            left 50%
            background-color #6291EE
</style>
