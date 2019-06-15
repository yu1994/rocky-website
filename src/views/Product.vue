<template>
  <div class="product">
    <section class="aboveBgChunk">
      <div>
        <img src="../assets/product/above.png" width="100%" />
      </div>
      <div class="slogan">
        <p>
          Digital Entertainment New Opportunities, Global New Economy
        </p>
      </div>
    </section>
    <section class="proHeadChunk" ref="proHeadChunk">
      <div class="title container">
        <breadcrumb></breadcrumb>
      </div>
      <div class="gameNav " id="navbar-example" :class="{ barFixed: barFixed }">
        <div class="container">
          <ul class="nav  nav-pills bs-js-navbar-scrollspy">
            <li
              class="col-md-2"
              v-for="(item, key) in navList"
              :key="key"
              v-on:click="scrollTop($event)"
            >
              <a :href="'#' + item">{{
                $t("productPage.chunkHead." + item)
              }}</a>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div data-spy="scroll" data-target="#navbar-example" data-offset="0">
      <!-- 数字游戏 -->
      <section id="numGame" class="numGameChunk">
        <pro-type :supply="numGame.article"></pro-type>
        <coverage :list="numGame.list" :remark="numGame.remark"></coverage>
        <div>
          <normal-carousel :id="'gameCarousel'" :controls="true">
            <ol class="carousel-indicators" slot="indicators">
              <li
                data-target="#gameCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#gameCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" slot="listBox">
              <div class="item active">
                <img
                  class="img-responsive"
                  src="../assets/product/gameBanner1.png"
                />
                <!-- data-src="../assets/product/gameBanner1.png"-->
                <div class="carousel-caption carousel-caption_thousand">
                  <!--wow fadeInUp-->
                  <div class="slide_left">
                    <h5>Game</h5>
                    <p>
                      my era, and draws a panoramic view of data science and
                      wisdom culture from a grand perspective, expounds the
                      historical process of digital economic development, how
                      China lays
                    </p>
                    <div class="slide_left_img hidden-sm hidden-xs">
                      <img src="../assets/product/game_01.png" />
                    </div>
                  </div>
                  <div class="slide_right hidden-xs">
                    <img src="../assets/product/game_02.png" />
                  </div>
                </div>
              </div>
              <div class="item">
                <img
                  class="img-responsive"
                  src="../assets/product/gameBanner1.png"
                />
                <div class="carousel-caption  hidden-sm">
                  <!-- <h4>全球数字化经济</h4>-->
                  <h1>Global Digital Economy</h1>
                  <!-- <p>成为全球新经济平台领跑者</p>-->
                  <p>Become the leader of the global new economic platform</p>
                </div>
              </div>
            </div>
          </normal-carousel>
        </div>
      </section>
      <!-- 互动社交 -->
      <section id="contact" class="contactChunk">
        <div class="container">
          <chunk-head :content="contact.head"></chunk-head>
          <div>
            <pro-image>
              <img
                slot="img"
                class="wow zoomIn img-responsive"
                v-lazy="contact.proImage_1.url"
              />
              <slot slot="text">
                <p>{{contact.proImage_1.text_1}}</p>
                <p>{{contact.proImage_1.text_2}}</p>
              </slot>
            </pro-image>
            <pro-image :img-place="'right'" :padding-num="70">
              <img
                slot="img"
                class="wow zoomIn img-responsive"
                v-lazy="contact.proImage_2.url"
              />
              <slot slot="text">
                <p>{{contact.proImage_2.text_1}}</p>
              </slot>
            </pro-image>
          </div>
        </div>
        <normal-carousel :id="'contactCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#contactCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#contactCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../assets/product/contact_banner_1.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_simple">
                <!--wow fadeInUp-->
                <div class="slide_left col-md-7">
                  <h5>Social</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                </div>
                <div class="slide_right col-md-5  hidden-xs hidden-sm">
                  <img src="../assets/product/contact_slide_01.png" />
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
      <!--学习 -->
      <section id="study" class="studyChunk">
        <pro-type :supply="study.article" :place="'right'"></pro-type>
        <coverage :list="study.list" :remark="study.remark"></coverage>
        <normal-carousel :id="'mediaCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#mediaCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#mediaCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../assets/product/gameBanner1.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_simple">
                <!--wow fadeInUp-->
                <div class="slide_right col-md-6  hidden-xs hidden-sm left_img">
                  <img
                    src="../assets/product/study_slide_01.png"
                    width="372px"
                  />
                </div>
                <div class="slide_left col-md-6 right_text">
                  <h5>Social</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
      <!--娱乐生活 -->
      <section id="recreation" class="recreationChunk">
        <div class="container">
          <chunk-head :content="recreation.head"></chunk-head>
          <div>
            <pro-image>
              <img
                slot="img"
                class="wow zoomIn img-responsive"
                v-lazy="recreation.proImage_1.url"
              />
              <slot slot="text">
                <p>{{recreation.proImage_1.text_1}}</p>
                <p>{{recreation.proImage_1.text_2}}</p>
              </slot>
            </pro-image>
            <pro-image :img-place="'right'" :padding-num="70">
              <img
                slot="img"
                class="wow zoomIn img-responsive"
                v-lazy="recreation.proImage_2.url"
              />
              <slot slot="text">
                <p>{{recreation.proImage_2.text_1}}</p>
              </slot>
            </pro-image>
          </div>
        </div>
        <normal-carousel :id="'recreationCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#recreationCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#recreationCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../assets/product/recreation_banner_01.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_simple">
                <!--wow fadeInUp-->
                <div class="slide_left col-md-7">
                  <h5>Social</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                </div>
                <div class="slide_right col-md-5  hidden-xs hidden-sm">
                  <img src="../assets/product/recreation_slide_01.png" />
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
      <!-- 东方的力量 -->
      <section id="culture" class="cultureChunk">
        <pro-type :supply="culture.article"></pro-type>
        <coverage :list="culture.list" :remark="culture.remark"></coverage>
        <normal-carousel :id="'cultureCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#cultureCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#cultureCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../assets/product/culture_banner_01.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_thousand">
                <!--wow fadeInUp-->
                <div class="slide_left">
                  <h5>Game</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                  <div class="slide_left_img hidden-sm hidden-xs">
                    <img src="../assets/product/culture_slide_02.png" />
                  </div>
                </div>
                <div class="slide_right hidden-xs">
                  <img src="../assets/product/culture_slide_01.png" />
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
      <!-- 阅读 -->
      <section id="readIP" class="readChunk">
        <div class="container">
          <chunk-head :content="readIP.head"></chunk-head>
          <div>
            <pro-image>
              <img
                slot="img"
                class="wow zoomIn img-responsive"
                v-lazy="readIP.proImage_1.url"
              />
              <slot slot="text">
                <p>{{readIP.proImage_1.text_1}}</p>
                <p>{{readIP.proImage_1.text_2}}</p>
              </slot>
            </pro-image>
            <pro-image :img-place="'right'" :padding-num="70">
              <img
                slot="img"
                class="wow zoomIn img-responsive"
                v-lazy="readIP.proImage_2.url"
              />
              <slot slot="text">
                <p>{{readIP.proImage_2.text_1}}</p>
              </slot>
            </pro-image>
          </div>
        </div>
        <normal-carousel :id="'readCarousel'" :controls="true">
          <ol class="carousel-indicators" slot="indicators">
            <li
              data-target="#readCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#readCarousel" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" slot="listBox">
            <div class="item active">
              <img
                class="img-responsive"
                src="../assets/product/readIP_banner_01.png"
                width="100%"
              />
              <div class="carousel-caption carousel-caption_simple">
                <!--wow fadeInUp-->
                <div class="slide_left col-md-7">
                  <h5>Social</h5>
                  <p>
                    my era, and draws a panoramic view of data science and
                    wisdom culture from a grand perspective, expounds the
                    historical process of digital economic development, how
                    China lays
                  </p>
                </div>
                <div class="slide_right col-md-5  hidden-xs hidden-sm">
                  <img src="../assets/product/game_02.png" />
                </div>
              </div>
            </div>
            <div class="item">
              <img
                class="img-responsive"
                src="../assets/product/gameBanner1.png"
              />
              <div class="carousel-caption  hidden-sm">
                <!-- <h4>全球数字化经济</h4>-->
                <h1>Global Digital Economy</h1>
                <!-- <p>成为全球新经济平台领跑者</p>-->
                <p>Become the leader of the global new economic platform</p>
              </div>
            </div>
          </div>
        </normal-carousel>
      </section>
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import NormalCarousel from "../components/normalCarousel";
import ProType from "../components/productTemplate/proType";
import ProImage from "../components/productTemplate/proImage";
import Coverage from "../components/productTemplate/coverage";
import ChunkHead from "../components/productTemplate/chunkHead";
import vm from "../utils/events";
export default {
  name: "product",
  data() {
    return {
      barFixed: false,
      navList: [
        "numGame",
        "contact",
        "study",
        "recreation",
        "culture",
        "readIP"
      ],
      numGame: {
        article: {
          title: "数字游戏时代",
          sign: "Digital game era",
          content:
            "500+ 内容提供商,（content provider） 3000+ 游戏产品，广泛的游戏种类服务于不同玩家。The main content begins with the rise of the digital economy era, and draws a panoramic view of data science and wisdom culture from a grand perspective, expounds the historical process of digital economic development, how China lays out the digital economy, and how the digital economy and the country.",
          iconSign:
            "<p>500+内容提供商,(content provider) 3000+游戏产品，广泛的游戏种类服务于不同玩家</p>",
          imgUrl: require("../assets/product/action-blur-close-up.png")
        },
        list: [
          require("../assets/product/coverage1@2x.png"),
          require("../assets/product/coverage2@2x.png"),
          require("../assets/product/coverage1@2x.png"),
          require("../assets/product/coverage2@2x.png"),
          require("../assets/product/coverage1@2x.png"),
          require("../assets/product/coverage2@2x.png")
        ],
        remark: "有独家海外版权的1000余种游戏内容，各种分类的游戏"
      },
      contact: {
        head: {
          title: "互动社交平台",
          mark: "Interactive social platform",
          sign:
            "互动社交基于人们之间的交往沟通产生，面对热闹非凡的线上交流平台，以用户交流和关注点为基本，从个人在社交媒体中的信息足迹和人际关系链出发，将产品和服务巧妙融入社交互动这个无形推手中\n"
        },
        proImage_1: {
          url: require("../assets/product/shortVideo.png"),
          text_1: "短视频互动平台",
          text_2: "视频随机互动，以兴趣爱好为切入点，营造UGC良好氛围。"
        },
        proImage_2: {
          url: require("../assets/product/beautiful.png"),
          text_1: "直播社交流媒体，打造素人KOL"
        }
      },
      study: {
        article: {
          title: "知识学习圈",
          sign: "Knowledge learning circle",
          content:
            "基于移动互联网的在线教育平台通过共同知识的需学习，去解决个人学习过程中遇到的各种问题。 从小学校教育、到只技能培训、到专业能力学校都有专业课程帮你解答一切问题，并为其他用户提供帮助，让你的知识更有价值。",
          iconSign:
            "<p>学龄前教育</p><p>幼儿基础兴趣点培养，将娱乐与学习有机结合</p>",
          imgUrl: require("../assets/product/contactImage.png")
        },
        list: [
          require("../assets/product/play1.png"),
          require("../assets/product/play2.png"),
          require("../assets/product/play3.png")
        ],
        remark: "专业健身教练，线上指导健身要领"
      },
      recreation: {
        head: {
          title: "轻娱乐生活",
          mark: "Light entertainment life",
          sign:
            "不占用大量时间，不做重度用户沉淀，小而美的应用让用户在碎片化的时间，获得更多轻松娱乐的内容。"
        },
        proImage_1: {
          url: require("../assets/product/media_chunk_1.png"),
          text_1: "壁纸软件",
          text_2: "让媒体的生活随着更新一张手机壁纸开始吧。"
        },
        proImage_2: {
          url: require("../assets/product/media_chunk_2.png"),
          text_1: "个性化彩铃，让等待的时间变得美妙"
        }
      },
      culture: {
        article: {
          title: "神秘的东方文化",
          sign: "Mysterious oriental culture",
          content:
            "在揭开神秘东方文化面纱的那一刹那，你会知道，那绵延五千年的瑰丽年化，是多么吸引人。",
          iconSign:
            "<p>中国茶艺</p>" +
            "<p>茶艺是一门艺术，一种文化，中国茶艺，带你领略另样风情。</p>",
          imgUrl: require("../assets/product/culture_bg.png")
        },
        list: [
          require("../assets/product/culture_1.png"),
          require("../assets/product/culture_2.png"),
          require("../assets/product/culture_3.png")
        ],
        remark: "中国功夫、中国柔术、中国化妆术，中国语言，没有一样会让你失望"
      },
      readIP: {
        head: {
          title: "打造全球阅读IP",
          mark: "Create a global reading IP",
          sign:
            "让文字的魅力发挥到极致，打造全球化IP经济，覆盖小说、漫画、游戏、影视剧等，让创造，让文学在世界更加流行。"
        },
        proImage_1: {
          url: require("../assets/product/read_02.png"),
          text_1: "小说阅读",
          text_2: "打造符合当地文化的时尚流行小说。"
        },
        proImage_2: {
          url: require("../assets/product/read_01.png"),
          text_1: "多语言多平台的支持与发行，让现象称为趋势"
        }
      }
    };
  },
  mounted() {
    this.WOW.init();
    this.proHeadChunk = this.$refs.proHeadChunk;
  },
  methods: {
    throttle(func, wait) {
      let timeout, context, args;
      let previous = 0;

      let later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args);
      };

      this.throttled = function() {
        let now = +new Date();
        //下次触发 func 剩余的时间
        let remaining = wait - (now - previous);
        context = this;
        args = arguments;
        // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          func.apply(context, args);
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
      };
      return this.throttled;
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const offsetTop = this.proHeadChunk.offsetTop;
      if (scrollTop > offsetTop) {
        this.barFixed = true;
        vm.$emit("navScrollFixed", true);
      } else {
        this.barFixed = false;
        vm.$emit("navScrollFixed", false);
      }
    },
    scrollTop(event) {
      const e = event || window.event;
      $("html, body").animate(
        { scrollTop: $($(e.target).attr("href")).offset().top - 66 + "px" },
        300
      );
    }
  },
  beforeRouteEnter(to,from,next){
    next(vm => {
      window.addEventListener("scroll", vm.throttle(vm.handleScroll, 1000));
    });
  },
  beforeRouteLeave (to,from,next) {
    window.removeEventListener("scroll", this.throttled);
    next();
  },
  components: {
    ChunkHead,
    Coverage,
    ProImage,
    ProType,
    NormalCarousel,
    breadcrumb
  }
};
</script>

<style scoped lang="stylus">
  $chunk_bottom = 70px
.product
  overflow-x hidden
  .aboveBgChunk
    position relative
    .slogan
      position absolute
      font-family Constantia
      font-size 38px
      left 50%
      top 50%
      max-width 608px
      color:rgba(255,255,255,1)
      transform translate(-50%,-50%)
  .proHeadChunk
    .gameNav
      position relative
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
    .barFixed
      position fixed
      width 100%
      top 0
      background-color rgba(255,255,255,1)
      margin 0 auto
      z-index 99
  .numGameChunk
    padding 42px 0 $chunk_bottom
    text-align left
  .contactChunk,.studyChunk,.recreationChunk,.cultureChunk
    padding-bottom $chunk_bottom
  .studyChunk
    .carousel-caption_simple
      width 820px
    .slide_right
      width 372px
</style>
