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
            <div class="discover clearfix">
              <div class="discover_text">
                <p class="zh"><strong>田宁</strong>盘石创始人，董事长兼CEO</p>
                <p class="en clearfix">
                  <strong>Tom</strong>
                <span>Panshi Founder, Chairman and CEO</span>
                </p>
              </div>
            <!--  <li class="en">
                <strong>Tom</strong>Panshi Founder, Chairman and CEO
              </li>-->
            </div>
            <div>
              <p>
                田宁，盘石集团董事长，RockyMobi董事会主席，毕业于浙江大学。2004年创立盘石集团，并担任董事长，RockyMobi为盘石集团的全资子公司。盘石集团致力于以大数据、人工智能技术为核心驱动的全球新经济建设与发展。田宁被世界经济论坛(WEF)授予
                "全球青年领袖"，同时担任浙商全球总会互联网委员会主席,
                中国移动通信联合会副会长，杭州电子商务协会理事长。田宁多次受邀出席世界互联网大会、G20峰会、金砖峰会、达沃斯论坛等活动并发表演讲，为全球经济发展建言献策。
              </p>
              <div  v-html="$t('aboutPage.description.en.introduce')">
             <!--   {{$t('aboutPage.description.en.introduce')}}-->
              </div>
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
          <swiper-slide
            v-for="(item, key) in $t('aboutPage.carouselList')"
            :key="key"
            ><img :src="item.url" width="100%" />
            <div class="explain" data-swiper-parallax="-300">
              <div class="explain_box">
                <p>{{ item.intro }}</p>
              </div>
            </div></swiper-slide
          >
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
    <section class="developChunk container" >
      <div>
        <underline :title="'发展历程'"></underline>
      </div>
      <div>
        <row-carousel :is-button="false" :navigation="{}" :isProgress="isProgress" :autoplay="false" :loop="false" :slides-per-view="5" :centered-slides="false" :breakpoints="developBreakpoints">
          <swiper-slide
            class="swiper-slide"
            v-for="(item, key) in $t('aboutPage.developList')"
            :key="key"
          >
            <div class="carousel_img"><img :src="item.url" class="img-responsive" /> <div class="developLine"><i></i></div></div>
            <div class="carousel_sign">
              <strong>{{item.year}}</strong>
              <p>{{item.sign}}</p>
            </div>
          </swiper-slide>
        </row-carousel>
      </div>
    </section>
    <section class="destiny">
      <div><underline :title="'使命与愿景'"></underline></div>
      <div class="destiny_bg">
        <img src="../assets/about/destiny.png" width="100%" />
        <div v-show="destinySlogan" class="slogan container">
          <div class="left col-lg-5">
            <p>使命</p>
            <p>让世界没有落后的经济!</p>
          </div>
          <div class=" sloganClose col-lg-2 hidden-xs">
            <i @click="close">&</i>
          </div>
          <div class="right col-lg-5">
            <p>愿景</p>
            <p>成为全球数字娱乐服务的领跑者</p>
          </div>
        </div>
      </div>
    </section>
    <section class="swordChunk container">
      <div><underline :title="'七剑文化'"></underline></div>
      <div class="sword_bg">
        <ul class="clearfix ">
          <li class="col-lg-4 col-sm-6 big">
            <img src="../assets/about/sword.png" width="99%" />
          </li>
          <li
            class="col-lg-4  col-sm-6"
            v-for="(item, key) in $t('aboutPage.cultureList')"
            :key="key"
          >
            <div class="cover">
              <img :src="item.url" width="100%" />
              <div class="wish">
                <div class="wish_box">
                  <p class="title">{{ item.title }}</p>
                  <p>{{ item.remark }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="influenceChunk container">
      <div>
        <div><underline :title="'全球影响力'"></underline></div>
        <div>
          <news
            :router-url="''"
            :news-list="$t('aboutPage.influenceList')"
            :config-page="configPage"
            :img-height="'auto'"
          ></news>
        </div>
      </div>
    </section>
    <section class="missionChunk container">
      <div>
        <div><underline :title="'公益使命'"></underline></div>
      </div>
      <div>
        <row-carousel>
          <swiper-slide
            class="swiper-slide"
            v-for="(item, key) in $t('aboutPage.missionList')"
            :key="key"
          >
            <img :src="item.url" class="img-responsive"/>
            <p>{{item.sign}}</p>
          </swiper-slide>
        </row-carousel>
      </div>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb";
import underline from "@/components/underline";
import carousel from "@/components/carousel";
import News from "../components/news";
import RowCarousel from "../components/rowCarousel";
// import Myswiper from "../components/myswiper";
export default {
  name: "About",
  data() {
    return {
      isProgress: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize:400
      },
      developBreakpoints: {
        1200: {
          slidesPerView: 5
        },
        992: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        }
      },
      configPage: {},
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
  components: { RowCarousel, News, breadcrumb, underline, carousel }
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
          margin-bottom 43px
          .discover_text
            float left
            p
              margin 0 auto
          .zh
            border-bottom 1px solid rgba(51,51,51,1)
            font-size:20px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            padding-bottom 18px
            text-align right
            strong
              text-align left
              padding-right 9px
              font-size 38px
              font-weight:bold;
              color:rgba(51,51,51,1);
          .en
            padding-top 18px
            font-size 16px
            font-weight:bold
            strong
              float left
              text-align left
            span
              font-weight:bold
              float right
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
  .developChunk
    margin-bottom 60px
    .carousel_img
      img
        padding 0 15px
    .swiper-slide:last-child
      .developLine
        padding-right -15px
        box-sizing border-box
    .carousel_sign
      margin 18px auto 50px
      strong
        font-size:20px;
        font-weight:bold;
        color:rgba(86,149,242,1);
      p
        padding  0 15px
        margin 16px 0 0 0
        font-size:16px;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:23px;
    .developLine
      position relative
      width 100%
      display block
      margin-top 26px
      padding-right 30px
      border-bottom:1px solid rgba(220,220,220,1)
      i
        position absolute
        left 50%
        top 50%
        width:14px;
        height:14px;
        margin -7px 0 0 -7px
        background:rgba(220,220,220,1);
        border-radius:50%;
  .destiny
    .destiny_bg
      position relative
      .slogan
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        color #ffffff
        font-size 34px
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

  .swordChunk
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
  .influenceChunk
    margin-bottom 80px
  .missionChunk
    margin-bottom 44px
    .swiper-slide
      padding: 0 15px
      p
        font-size:12px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        overflow hidden
        color:rgba(51,51,51,1);
        margin 12px auto 0
</style>
