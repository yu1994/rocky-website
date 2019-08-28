<template>
  <div class="productAllDetail" ref="productContent">
    <!-- 导航 -->
    <transition name="slide">
      <nav
              v-show="navShow"
              class="navbar navbar-default navbar-expand-xl navbar-fixed-top  ">
        <div class="container">
          <div class="navbar-header">
            <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" :to="{name:'home'}">
              <img alt="Brand" src="../../../components/img/logo.png" data-toggle="collapse"
                   data-target="#bs-example-navbar-collapse-1"/>
            </router-link>
          </div>
          <div
                  class="collapse navbar-collapse navbar-right"
                  id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav">
              <li
                      v-for="(item, key) in $t('productPage.productNav')" :key="key"
                      v-if="key !== 0"
              >
                <router-link :to="{name: 'productDetail',hash: '#'+item.route}"
                >{{ item.sign }} <i class="underline"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </transition>
    <!-- 阅读IP -->
    <section id="read" class="readIpChunk">
      <div class="container">
        <layout-article-title :styles="{backgroundColor: readIP.themeColor}" :content="readIP.articleTitle"></layout-article-title>
        <layout-photo-center :backgrounds="readIP.pro_1.backgrounds" :content="readIP.pro_1.content"></layout-photo-center>
        <!--IP 共创-->
        <div class="IPCreateChunk">
          <layout-module-title :content="readIP.pro_2.title" :border-color="readIP.themeColor"></layout-module-title>
          <div class="content">
            <div class="img-1">
              <img v-lazy="readIP.pro_2.path.url_1" class="img-responsive wow bounceInLeft"/>
            </div>
            <div class="img-line">
              <img v-lazy="readIP.pro_2.path.url_2" class="img-responsive wow bounceInLeft" data-wow-delay="0.5s"/>
            </div>
            <ul class="img-line-sign">
              <li class="wow bounceInLeft" data-wow-delay="1s" v-for="(item, key) in $t('productPage.readIPChunk.pro_2.signList')"
                  :key="key"><span>{{item}}</span></li>
            </ul>
            <div class="text wow bounceInLeft" data-wow-delay="1.5s">
              <p>{{$t('productPage.readIPChunk.pro_2.remark')}}</p>
            </div>
          </div>
        </div>
        <!--优质内容-->
        <div class="qualityContentChunk">
          <layout-module-title :content="readIP.pro_3.title" :border-color="readIP.themeColor"></layout-module-title>
          <div class="content">
            <img v-lazy="readIP.pro_3.path.url_1" class="img-responsive wow zoomIn">
            <div class="text_1 text">
              <p class="wow fadeIn" data-wow-delay="1s">{{$t('productPage.readIPChunk.pro_3.remark_1')}}</p>
            </div>
            <div class="text_2 text">
              <p class="wow fadeIn" data-wow-delay="1s">{{$t('productPage.readIPChunk.pro_3.remark_2')}}</p>
            </div>
          </div>
        </div>
        <!-- 诗人定制-->
        <div class="tailorChunk">
          <layout-module-title :content="readIP.pro_4.title" :border-color="readIP.themeColor"></layout-module-title>
          <div class="content">
            <img v-lazy="readIP.pro_4.path.url_1" class="img-responsive wow zoomIn"/>
            <div class="text wow bounceInLeft" data-wow-delay="1s">
              <p>{{$t('productPage.readIPChunk.pro_4.remark')}}</p>
            </div>
            <div class="kind wow fadeIn">
              <ul>
                <li v-for="(item, key) in $t('productPage.readIPChunk.pro_4.signList')" :key="key">
                  <p v-html="item"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--相关产品-->
        <div class="aboutProductChunk">
          <layout-module-title :content="readIP.pro_5.title" :border-color="readIP.themeColor"></layout-module-title>
          <div class="content">
            <div class="content-shadow">
              <product-carousel :carouselList="readIP.pro_5.path"></product-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 游戏 -->
    <section id="game" class="gameChunk">
      <div class="container">
        <layout-article-title :styles="{backgroundColor: numGame.themeColor}" :content="numGame.articleTitle"></layout-article-title>
        <layout-photo-center :backgrounds="numGame.pro_1.backgrounds" :content="numGame.pro_1.content"></layout-photo-center>
      </div>
      <!--经典游戏-->
      <div class="classicChunk">
        <div class="container">
          <layout-module-title :content="numGame.pro_2.title" :border-color="numGame.themeColor"></layout-module-title>
          <div class="content">
            <ul class="classic_1 clearfix row">
              <li class="col-sm-4" v-for="(item, key) in numGame.pro_2.path" :key="key">
                <img v-lazy="item.url" class="img-responsive wow zoomIn" :data-wow-delay="(key*0.3)+'s'"/>
                <p class="bounceInLeft wow" :data-wow-delay="(key*0.3)+'s'">{{item.sign}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--海量游戏-->
      <div class="massiveChunk">
        <div class="container">
          <layout-module-title :content="numGame.pro_3.title" :border-color="numGame.themeColor"></layout-module-title>
        </div>
        <div class="content" v-lazy:background-image="numGame.pro_3.path.url_1">
          <div class="gameKind-img">
            <img v-lazy="numGame.pro_3.path.url_2" class="img-responsive"/>
            <ul>
              <li v-for="(item, key) in $t('productPage.numGameChunk.pro_3.kindList')" :key="key">
                <p class="wow bounceInDown">{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--算法推送 -->
      <div class="container">
        <div class="pushChunk">
          <layout-module-title :content="numGame.pro_4.title" :border-color="numGame.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="numGame.pro_4.path.url_1" class="img-responsive wow zoomIn"/>
            </div>
            <ul>
              <li v-for="(item, key) in $t('productPage.numGameChunk.pro_4.kindList')" :key="key">
                <p class="bounceInRight wow" :data-wow-delay="(key*0.5)+'s'">{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--互动社交-->
      <div class="container">
        <div class="interactionChunk">
          <layout-module-title :content="numGame.pro_5.title" :border-color="numGame.themeColor"></layout-module-title>
          <div class="content">
            <ul>
              <li>
                <img v-lazy="numGame.pro_5.path.url_1"/>
              </li>
              <li>
                <p class="wow bounceInDown">{{$t('productPage.numGameChunk.pro_5.kindList[0]')}}</p>
                <img v-lazy="numGame.pro_5.path.url_2"/>
              </li>
              <li>
                <img v-lazy="numGame.pro_5.path.url_3"/>
                <p class="wow bounceInDown">{{$t('productPage.numGameChunk.pro_5.kindList[1]')}}</p>
              </li>
              <li>
                <p class="wow bounceInDown"> {{$t('productPage.numGameChunk.pro_5.kindList[2]')}}</p>
                <img v-lazy="numGame.pro_5.path.url_4"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--玩家 社区 -->
      <div class="container">
        <div class="communityChunk">
          <layout-module-title :content="numGame.pro_6.title" :border-color="numGame.themeColor"></layout-module-title>
          <div class="content">
            <div class="wove-img">
              <img :src="numGame.pro_6.path.url_1" class="img-responsive"/>
              <ul>
                <li class="wow zoomIn" v-for="(item, key) in $t('productPage.numGameChunk.pro_6.kindList')" :key="key">
                  <p v-html="item"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--相关产品-->
      <div class="container">
        <div class="aboutProductChunk">
          <layout-module-title :content="numGame.pro_7.title" :border-color="numGame.themeColor"></layout-module-title>
          <div class="content">
            <ul class="clearfix" style="margin-bottom: 0">
              <li class="" v-for="(item, key) in numGame.pro_7.path" :key="key" style="display: inline-block">
                <img v-lazy="item" class="img-responsive wow rollIn" :data-wow-delay="(key*0.3)+'s'"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 视频 -->
    <section id="video" class="videoChunk">
      <div class="container">
        <layout-article-title :styles="{backgroundColor: video.themeColor}" :content="video.articleTitle"></layout-article-title>
        <div class="clearfix">
          <layout-theme :content="video.pro_1.content" :color="video.themeColor"></layout-theme>
        </div>
        <div class="tvChunk">
          <layout-module-title :content="video.pro_2.title" :border-color="video.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="video.pro_2.path.url_1" class="img-responsive"/>
              <ul>
                <li v-for="(item, key) in $t('productPage.videoChunk.pro_2.kindList')" :key="key">
                  <img class="wow zoomIn" v-if="item.url" v-lazy="item.url"/>
                  <p class="zoomIn wow">{{item.sign}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="shortChunk">
          <layout-module-title :content="video.pro_3.title" :border-color="video.themeColor"></layout-module-title>
          <div class="content">
            <img v-lazy="video.pro_3.path.url" class="img-responsive wow zoomIn"/>
            <ul>
              <li v-for="(item, key) in $t('productPage.videoChunk.pro_3.kindList')" :key="key">
                <p class="wow zoomIn">{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="featureChunk">
          <layout-module-title :content="video.pro_4.title" :border-color="video.themeColor"></layout-module-title>
          <div class="content clearfix">
            <ul class="row">
              <li class="col-xs-6 col-sm-6 col-md-3" v-for="(item, key) in $t('productPage.videoChunk.pro_4.kindList')" :key="key">
                <img v-lazy="item.url" class="img-responsive wow zoomIn"/>
                <p class="wow bounceInLeft" :data-wow-delay="(key*0.5)+'s'">{{item.sign}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="aboutProductChunk">
          <layout-module-title :content="video.pro_5.title" :border-color="video.themeColor"></layout-module-title>
          <div class="content">
            <div class="content-shadow">
              <product-carousel :carouselList="video.pro_5.path"></product-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--学习 -->
    <section id="study" class="studyChunk">
      <div class="container">
        <layout-article-title :styles="{backgroundColor: study.themeColor}" :content="study.articleTitle"></layout-article-title>
        <div class="clearfix">
          <layout-theme :content="study.pro_1.content" :color="study.themeColor"></layout-theme>
        </div>
        <!--知识星球-->
        <div class="knowledgeChunk">
          <layout-module-title :content="study.pro_2.title" :border-color="study.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="study.pro_2.path.url" class="img-responsive wow zoomIn"/>
              <p class="sign" v-html="$t('productPage.studyChunk.pro_2.content.sign')">
              </p>
              <ul class="zoomIn wow" v-lazy:background-image="study.pro_2.path.url_1">
                <li v-for="(item, key) in $t('productPage.studyChunk.pro_2.kindList')" :key="key">
                  <p>{{item}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dataChunk">
          <layout-module-title :content="study.pro_3.title" :border-color="study.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="study.pro_3.path.url" class="img-responsive"/>
              <div class="content-box">
                <div class="c-color">
                  <img v-for="(item, key) in study.pro_3.rectList" v-lazy="item" :key="key" class="img-responsive"/>
                </div>
                <ul class="c-line">
                  <li v-for="(item, key) in study.pro_3.onlinePath" :key="key">
                    <img v-lazy="item"/>
                  </li>
                </ul>
                <div class="c-text">
                  <p v-for="(item, key) in $t('productPage.studyChunk.pro_3.kindList')" :key="key">{{item}}</p>
                </div>
                <div class="c-remark">
                  <i></i>
                  <p class="wow lightSpeedIn" data-wow-delay="1s">{{$t('productPage.studyChunk.pro_3.remark')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="learningChunk">
          <layout-module-title :content="study.pro_4.title" :border-color="study.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="study.pro_4.path.url" class="img-responsive"/>
              <ul>
                <li v-for="(item, key) in $t('productPage.studyChunk.pro_4.kindList')" :key="key"
                    :style="{backgroundColor: item? '#fff' : 'transparent'}">
                  <p class="wow zoomIn">{{item}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="intelligentChunk">
          <layout-module-title :content="study.pro_5.title" :border-color="study.themeColor"></layout-module-title>
          <div class="content">
            <ul>
              <li class="wow fadeInLeft" :data-wow-delay="(key*0.4)+'s'" v-for="(item, key) in $t('productPage.studyChunk.pro_5.kindList')"
                  :key="key" :style="{left: (key*(166/1140*100))+'%', zIndex: (99-key)}">
                <img v-lazy="study.pro_5.path.url_1" class="img-responsive"/>
                <p>{{item}}</p>
              </li>
              <li class="upLine_1">
                <img class="wow zoomIn" data-wow-delay="1.5s" v-lazy="study.pro_5.path.url_2"/>
              </li>
              <li class="upLine_2">
                <img class="wow zoomIn" data-wow-delay="3s" v-lazy="study.pro_5.path.url_2"/>
              </li>
              <li class="below_1">
                <img class="wow zoomIn" data-wow-delay="1s" v-lazy="study.pro_5.path.url_3"/>
              </li>
              <li class="below_2">
                <img class="wow zoomIn" data-wow-delay="2s" v-lazy="study.pro_5.path.url_3"/>
              </li>
              <li class="below_3">
                <img class="wow zoomIn" data-wow-delay="3.5s" v-lazy="study.pro_5.path.url_3"/>
              </li>
            </ul>
          </div>
        </div>
        <div class="sharingChunk">
          <layout-module-title :content="study.pro_6.title" :border-color="study.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="study.pro_6.path.url" class="img-responsive wow zoomIn"/>
              <div class="remark wow zoomIn">
                <p v-html="$t('productPage.studyChunk.pro_6.remark')"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="productAboutChunk">
          <layout-module-title :content="study.pro_7.title" :border-color="study.themeColor"></layout-module-title>
          <div class="content">
            <ul class="clearfix" style="margin-bottom: 0">
              <li class="" v-for="(item, key) in study.pro_7.path" :key="key" style="display: inline-block">
                <img v-lazy="item" class="img-responsive wow rollIn" :data-wow-delay="(key*0.3)+'s'"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--娱乐-->
    <section id="recreation" class="recreationChunk">
      <div class="globalChunk">
        <div class="container">
          <layout-article-title :styles="{backgroundColor: recreation.themeColor}"
                                :content="recreation.articleTitle"></layout-article-title>
          <div class="content">
            <div class="bg-img">
              <img :src="recreation.pro_1.path.url_1" class="img-responsive"/>
              <div class="img_1">
                <img :src="recreation.pro_1.path.url_2" class="img-responsive"/>
              </div>
              <div class="text wow bounceInDown">
                <h4>{{recreation.pro_1.content.title}}</h4>
                <i :style="{backgroundColor:recreation.themeColor}"></i>
                <p class="sign">{{recreation.pro_1.content.sign}}</p>
                <p class="remark">{{recreation.pro_1.content.remark}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="platformChunk">
        <div class="container">
          <layout-module-title :content="recreation.pro_2.title" :border-color="recreation.themeColor"></layout-module-title>
        </div>
        <div class="content">
          <div class="bg-img">
            <img v-lazy="recreation.pro_2.path.url_1" class="img-responsive"/>
            <ul>
              <li class="wow zoomIn" :wow-data-delay="(Math.random()*key)+'s'" v-for="(item, key) in $t('productPage.recreationChunk.pro_2.kindList')" :key="key">
                <img v-lazy="item.url" class="img-responsive"/>
                <p>{{item.sign}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rapidChunk">
        <div class="container">
          <layout-module-title :content="recreation.pro_3.title" :border-color="recreation.themeColor"></layout-module-title>
          <div class="content">
            <div class="bg-img">
              <img v-lazy="recreation.pro_3.path.url" class="img-responsive wow zoomIn"/>
              <div class="remark wow zoomIn">
                <p v-html="$t('productPage.recreationChunk.pro_3.remark')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="deviceChunk">
        <div class="container">
          <layout-module-title :content="recreation.pro_4.title" :border-color="recreation.themeColor"></layout-module-title>
          <div class="content">
            <img v-lazy="recreation.pro_4.path.url" class="img-responsive wow zoomIn"/>
            <div class="bg-img">
              <img v-lazy="recreation.pro_4.path.url_1" class="img-responsive wow zoomIn" data-wow-delay="0.5s"/>
              <ul>
                <li v-for="(item, key) in $t('productPage.recreationChunk.pro_4.kindList')" :key="key">
                  <p v-html="item" class="wow bounceInLeft" :data-wow-delay="(key*0.4)+'s'"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="lifeChunk">
        <div class="container">
          <layout-module-title :content="recreation.pro_5.title" :border-color="recreation.themeColor"></layout-module-title>
          <layout-photo-center :is-line="false" :backgrounds="recreation.pro_5.backgrounds"
                               :content="recreation.pro_5.content"></layout-photo-center>
        </div>
      </div>
      <div class="productAboutChunk">
        <div class="container">
          <layout-module-title :content="recreation.pro_6.title" :border-color="recreation.themeColor"></layout-module-title>
          <div class="content">
            <div class="content-shadow">
              <product-carousel :carouselList="recreation.pro_6.path"></product-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import LayoutArticleTitle from "./temp/layoutArticleTitle";
  import LayoutPhotoCenter from "./temp/layoutPhotoCenter";
  import LayoutModuleTitle from "./temp/layoutModuleTitle";
  import LayoutTheme from "./layoutTheme";
  import ProductCarousel from "./temp/productCarousel";
  import { WOW } from 'wowjs'
  export default {
    name: "productAllDetail",
    data() {
      return {
        navShow: false,
        readIP: {
          themeColor: '#E28D33',
          articleTitle: {
            title: this.$t('productPage.readIPChunk.article.title'),
            sign: this.$t('productPage.readIPChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.readIPChunk.pro_1.title'),
              sign: this.$t('productPage.readIPChunk.pro_1.sign'),
              remark: this.$t('productPage.readIPChunk.pro_1.remark'),
            },
            backgrounds: {
              url: require('../../../assets/product/readIP/read_1.png')
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.readIPChunk.pro_2.title'),
              sign: this.$t('productPage.readIPChunk.pro_2.sign')
            },
            path: {
              url_1: require('../../../assets/product/readIP/pro_2_1.png'),
              url_2: require('../../../assets/product/readIP/pro_2_2.png'),
            }
          },
          pro_3: {
            title: {
              title: this.$t('productPage.readIPChunk.pro_3.title'),
              sign: this.$t('productPage.readIPChunk.pro_3.sign')
            },
            path: {
              url_1: require("../../../assets/product/readIP/pro_03_1.png"),
            }
          },
          pro_4: {
            title: {
              title: this.$t('productPage.readIPChunk.pro_4.title'),
              sign: this.$t('productPage.readIPChunk.pro_4.sign')
            },
            path: {
              url_1: require("../../../assets/product/readIP/pro_4_1.png"),
            }
          },
          pro_5: {
              title: {
                  title: this.$t('productPage.readIPChunk.pro_5.title'),
                  sign: this.$t('productPage.readIPChunk.pro_5.sign')
              },
              path: [
                  {url: require("../../../assets/product/readIP/carousel1.png")},
                  {url: require("../../../assets/product/readIP/carousel2.png")},
                  {url: require("../../../assets/product/readIP/carousel3.png")},
                  {url: require("../../../assets/product/readIP/carousel4.png")},
                  {url: require("../../../assets/product/readIP/carousel5.png")},
              ]
          }
        },
        numGame: {
          themeColor: '#5695F2',
          articleTitle: {
            title: this.$t('productPage.numGameChunk.article.title'),
            sign: this.$t('productPage.numGameChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.numGameChunk.pro_1.title'),
              sign: this.$t('productPage.numGameChunk.pro_1.sign'),
              remark: this.$t('productPage.numGameChunk.pro_1.remark'),
            },
            backgrounds: {
              url: require('../../../assets/product/NumberGame/pro_01_1.png'),
              contentStyles: {
                backgroundColor: 'rgba(255,255,255,.8)',
                color: '#333333'
              },
              lineColor: {
                backgroundColor: '#5695F2'
              },
              signColor: {
                color: '#666666'
              }
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.numGameChunk.pro_2.title'),
              sign: this.$t('productPage.numGameChunk.pro_2.sign')
            },
            path: [
                {
                    sign: this.$t('productPage.numGameChunk.pro_2.classicText.text_1'),
                    url: require("../../../assets/product/NumberGame/classic_1.png"),
                },
                {
                    sign: this.$t('productPage.numGameChunk.pro_2.classicText.text_2'),
                    url: require("../../../assets/product/NumberGame/classic_2.png"),
                },
                {
                    sign: this.$t('productPage.numGameChunk.pro_2.classicText.text_3'),
                    url: require("../../../assets/product/NumberGame/classic_3.png"),
                }
            ]
          },
          pro_3: {
            title: {
              title: this.$t('productPage.numGameChunk.pro_3.title'),
              sign: this.$t('productPage.numGameChunk.pro_3.sign')
            },
            path: {
              url_1: require('../../../assets/product/NumberGame/pro_3.png'),
              url_2: require('../../../assets/product/NumberGame/pro_3_1.png'),
            }
          },
          pro_4: {
            title: {
              title: this.$t('productPage.numGameChunk.pro_4.title'),
              sign: this.$t('productPage.numGameChunk.pro_4.sign')
            },
            path: {
              url_1: require('../../../assets/product/NumberGame/pro_4.png')
            }
          },
          pro_5: {
            title: {
              title: this.$t('productPage.numGameChunk.pro_5.title'),
              sign: this.$t('productPage.numGameChunk.pro_5.sign')
            },
            path: {
              url_1: require('../../../assets/product/NumberGame/pro_5_1.png'),
              url_2: require('../../../assets/product/NumberGame/pro_5_2.png'),
              url_3: require('../../../assets/product/NumberGame/pro_5_3.png'),
              url_4: require('../../../assets/product/NumberGame/pro_5_4.png'),
            }
          },
          pro_6: {
            title: {
              title: this.$t('productPage.numGameChunk.pro_6.title'),
              sign: this.$t('productPage.numGameChunk.pro_6.sign')
            },
            path: {
              url_1: require('../../../assets/product/NumberGame/wave.png')
            }
          },
          pro_7: {
            title: {
                title: this.$t('productPage.numGameChunk.pro_7.title'),
                sign: this.$t('productPage.numGameChunk.pro_7.sign')
            },
            path:[
                require("../../../assets/product/NumberGame/about_1.png"),
                require("../../../assets/product/NumberGame/about_2.png"),
                require("../../../assets/product/NumberGame/about_3.png")
            ]
          }
        },
        video: {
          themeColor: '#8EC6A5',
          articleTitle: {
            title: this.$t('productPage.videoChunk.article.title'),
            sign: this.$t('productPage.videoChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.videoChunk.pro_1.title'),
              sign: this.$t('productPage.videoChunk.pro_1.sign'),
              remark: this.$t('productPage.videoChunk.pro_1.remark'),
              url: require("../../../assets/product/video/pro_1.png")
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.videoChunk.pro_2.title'),
              sign: this.$t('productPage.videoChunk.pro_2.sign')
            },
            content: {
              title: this.$t('productPage.videoChunk.pro_2.title'),
              remark: this.$t('productPage.videoChunk.pro_2.remark')
            },
            path: {
              url_1: require("../../../assets/product/video/bg_line.png")
            }
          },
          pro_3: {
            title: {
              title: this.$t('productPage.videoChunk.pro_3.title'),
              sign: this.$t('productPage.videoChunk.pro_3.sign')
            },
            path: {
              url: require('../../../assets/product/video/pro_3.png')
            }
          },
          pro_4: {
            title: {
              title: this.$t('productPage.videoChunk.pro_4.title'),
              sign: this.$t('productPage.videoChunk.pro_4.sign')
            },
          },
          pro_5: {
            title: {
              title: this.$t('productPage.videoChunk.pro_5.title'),
              sign: this.$t('productPage.videoChunk.pro_5.sign')
            },
            path: [
              {url: require("../../../assets/product/video/carouse_1.png")},
              {url: require("../../../assets/product/video/carouse_2.png")},
              {url: require("../../../assets/product/video/carouse_3.png")},
              {url: require("../../../assets/product/video/carouse_4.png")},
              {url: require("../../../assets/product/video/carouse_5.png")}
            ]
          }
        },
        study: {
          themeColor: '#9985D6',
          articleTitle: {
            title: this.$t('productPage.studyChunk.article.title'),
            sign: this.$t('productPage.studyChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.studyChunk.pro_1.title'),
              sign: this.$t('productPage.studyChunk.pro_1.sign'),
              remark: this.$t('productPage.studyChunk.pro_1.remark'),
              url: require("../../../assets/product/study/pro_1.png")
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.studyChunk.pro_2.title'),
              sign: this.$t('productPage.studyChunk.pro_2.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_2.png"),
              url_1: require("../../../assets/product/study/pro_2_1.png"),
            }
          },
          pro_3: {
            title: {
              title: this.$t('productPage.studyChunk.pro_3.title'),
              sign: this.$t('productPage.studyChunk.pro_3.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_3.png"),
              url_1: require("../../../assets/product/study/line_5.png")
            },
            onlinePath: [
              require("../../../assets/product/study/line_1.png"),
              require("../../../assets/product/study/line_2.png"),
              require("../../../assets/product/study/line_3.png"),
              require("../../../assets/product/study/line_4.png"),
            ],
            rectList:[
              require("../../../assets/product/study/rect1.png"),
              require("../../../assets/product/study/rect2.png"),
              require("../../../assets/product/study/rect3.png"),
              require("../../../assets/product/study/rect4.png"),
              require("../../../assets/product/study/rect5.png"),
              require("../../../assets/product/study/rect6.png"),
              require("../../../assets/product/study/rect7.png"),
            ]
          },
          pro_4: {
            title: {
              title: this.$t('productPage.studyChunk.pro_4.title'),
              sign: this.$t('productPage.studyChunk.pro_4.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_4.png")
            }
          },
          pro_5: {
            title: {
              title: this.$t('productPage.studyChunk.pro_5.title'),
              sign: this.$t('productPage.studyChunk.pro_5.sign')
            },
            path: {
              url_1: require("../../../assets/product/study/pro_5_1.png"),
              url_2: require("../../../assets/product/study/pro_5_2.png"),
              url_3: require("../../../assets/product/study/pro_5_3.png"),
            }

          },
          pro_6: {
            title: {
              title: this.$t('productPage.studyChunk.pro_6.title'),
              sign: this.$t('productPage.studyChunk.pro_6.sign'),
            },
            path: {
              url: require("../../../assets/product/study/pro_6.png")
            }
          },
          pro_7: {
            title: {
              title: this.$t('productPage.studyChunk.pro_7.title'),
              sign: this.$t('productPage.studyChunk.pro_7.sign'),
            },
            path:[
              require("../../../assets/product/study/pro_6_1.png"),
              require("../../../assets/product/study/pro_6_2.png"),
              require("../../../assets/product/study/pro_6_3.png")
            ]
          }
        },
        recreation: {
          themeColor: '#D25F46',
          articleTitle: {
            title: this.$t('productPage.recreationChunk.article.title'),
            sign: this.$t('productPage.recreationChunk.article.sign')
          },
          pro_1: {
            content: {
              title: this.$t('productPage.recreationChunk.pro_1.title'),
              sign: this.$t('productPage.recreationChunk.pro_1.sign'),
              remark: this.$t('productPage.recreationChunk.pro_1.remark'),
              url: require("../../../assets/product/study/pro_1.png")
            },
            path: {
              url_1: require("../../../assets/product/recreation/pro_1_1.png"),
              url_2: require("../../../assets/product/recreation/pro_1_2.png"),
            }
          },
          pro_2: {
            title: {
              title: this.$t('productPage.recreationChunk.pro_2.title'),
              sign: this.$t('productPage.recreationChunk.pro_2.sign')
            },
            path: {
              url_1: require("../../../assets/product/recreation/pro_2.png"),
            }
          },
          pro_3: {
            title: {
              title: this.$t('productPage.recreationChunk.pro_3.title'),
              sign: this.$t('productPage.recreationChunk.pro_3.sign')
            },
            path: {
              url: require("../../../assets/product/study/pro_6.png")
            }
          },
          pro_4: {
            title: {
              title: this.$t('productPage.recreationChunk.pro_4.title'),
              sign: this.$t('productPage.recreationChunk.pro_4.sign')
            },
            path: {
              url: require("../../../assets/product/recreation/pro_4.png"),
              url_1: require("../../../assets/product/recreation/pro_4_1.png"),
            }
          },
          pro_5: {
            title: {
              title: this.$t('productPage.recreationChunk.pro_5.title'),
              sign: this.$t('productPage.recreationChunk.pro_5.sign')
            },
            content: {
              remark: this.$t('productPage.recreationChunk.pro_5.remark')
            },
            backgrounds: {
              url: require('../../../assets/product/recreation/pro_5.png')
            }
          },
          pro_6: {
            title: {
              title: this.$t('productPage.recreationChunk.pro_6.title'),
              sign: this.$t('productPage.recreationChunk.pro_6.sign')
            },
            path: [
              {url: require("../../../assets/product/recreation/carousel_1.png")},
              {url: require("../../../assets/product/recreation/carousel_2.png")},
              {url: require("../../../assets/product/recreation/carousel_3.png")},
              {url: require("../../../assets/product/recreation/carousel_4.png")},
              {url: require("../../../assets/product/recreation/carousel_5.png")}
            ]
          }
        }
      }
    },
    mounted() {
      this.wow = new WOW();
      this.wow.init();
      this.$nextTick(() => {
        this.productContentH = this.$refs.productContent.offsetTop
      })
    },
    methods: {
      throttle(func, wait) {
        let timeout, context, args;
        let previous = 0;

        let later = function () {
          previous = +new Date();
          timeout = null;
          func.apply(context, args);
        };

        this.throttled = function () {
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
        if (scrollTop > this.productContentH * 2) {
          this.navShow = true
        } else {
          this.navShow = false;
        }
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (vm.wow){
          vm.wow.init()
        } else vm.wow = new WOW();
        window.addEventListener("scroll", vm.throttle(vm.handleScroll, 1000));
      });
    },
    beforeRouteLeave(to, from, next) {
      this.navShow = false;
      window.removeEventListener("scroll", this.throttled);
      next();
    },
    components: {ProductCarousel, LayoutModuleTitle, LayoutPhotoCenter, LayoutArticleTitle, LayoutTheme}
  }
</script>
<style scoped lang="stylus">
  .productAllDetail
    overflow-x hidden
  .slide-enter-active, .slide-leave-active
    transition all .8s ease;

  .slide-enter
    transform translateY(100%)

  .slide-leave-to
    transform translateY(-100%)
</style>
<!-- 阅读IP-->
<style scoped lang="stylus">
  $ipH = 607px
  .readIpChunk
    margin-bottom $productChunkBottom
    .IPCreateChunk
      .content
        position relative
        width 100%
        height $ipH
        .img-1
          position absolute
          width 46.75%
          height 87.8%
          left 0
          top 74px
        .img-line
          position absolute
          left 31.228%
          top 0
          width (482 /$main_w * 100) %
          height (557 /$ipH * 100) %
          z-index 2
        .img-line-sign
          margin 0
          li
            position absolute
            z-index 9
            white-space nowrap
            &::before
              content: ''
              display inline-block
              width 15px
              height 15px
              border-radius: 100%;
              padding 1.5px
              vertical-align middle
              box-sizing content-box
              background: #ffff;
              background url("../../../assets/product/readIP/circle.png") no-repeat center
              border 1px solid #F8A81C
            span
              display inline-block
              vertical-align middle
              margin-left 25px
          & li:nth-child(1)
            left (408 /$main_w * 100) %
            top (61 /$ipH * 100) %
          & li:nth-child(2)
            left ((163 + 356) /$main_w * 100 ) %
            top (188 /$ipH * 100) %
          & li:nth-child(3)
            left ((282 + 356) /$main_w * 100 ) %
            top (328 /$ipH * 100) %
          & li:nth-child(4)
            left ((398 + 356) /$main_w * 100 ) %
            top (461 /$ipH * 100) %
        .text
          position absolute
          top: 28px
          right 0
          z-index 3
          text-align right
          max-width (500 /$main_w * 100) %
    .qualityContentChunk
      position relative
      width 100%
      .content
        position relative
        p
          margin-bottom 0
        img
          width 32.10%
          margin 0 auto
        .text
          position absolute
          width (450 /$main_w * 100) %
          color #999999
        .text_1
          top 50%
          left 0
          transform translateY(8%)
          p
            max-width 317px
            margin 13px auto 0
          p:
          :before
            content ""
            position absolute
            left 0
            top 0
            width 100%
            background url("../../../assets/product/readIP/line.png") no-repeat
            height 2px
            background-size 100% auto
        .text_2
          top 50%
          right 0
          transform translateY(-94%)
          p
            max-width 317px
            margin 0 auto 13px
          p:
          :after
            content ""
            position absolute
            right 0
            bottom 0
            width 100%
            background url("../../../assets/product/readIP/line.png") no-repeat
            height 2px
            background-size 100% auto
    .tailorChunk
      position relative
      width 100%
      .content
        position relative
        width 100%
        .text
          position absolute
          top 0
          left (295 /$main_w * 100) %
          width (766 /$main_w * 100) %
          text-align right
          color #999999
          p
            float right
            max-width 319px
            margin-bottom 0
        .kind
          position absolute
          left (295 /$main_w * 100) %
          top 50%
          width (766 /$main_w * 100) %
          height (218 / 399 * 100) %
          transform translateY(-50%)
          padding 15px
          background rgba(54, 54, 54, .5)
          ul
            display flex
            align-items center
            width 100%
            height 100%
            margin 0
            border 2px solid #fff
            li
              display inline-block
              width (100 / 3) %
              color #fff
              border-right 2px solid #fff
            & li:last-child
              border-right none
            p
              margin 0

</style>
<!-- 游戏 -->
<style scoped lang="stylus">
  .gameChunk
    margin-bottom $productChunkBottom
    .classicChunk
      .content
        ul
          padding-top 20px
          padding-bottom 20px
          box-shadow 0 0 20px rgba(0,0,0,.6)
          margin-bottom 0
          p
            width 100%
            max-width 239px
            color #fff
            background-color #5695F2
            padding 10px 0
            margin 0 auto

    .massiveChunk
      .content
        padding 30px 0
        background-repeat no-repeat
        background-position center
        .gameKind-img
          position relative
          display inline-block
          height 100%
          img
            margin 0 auto
          ul
            margin 0
            li
              position absolute
              color #999999
              p
                font-size 24px
                margin-bottom 0
            & li:nth-child(1)
              top 30.805%
              left (582 / 1284 * 100) %
              color #F73D3D
            & li:nth-child(2)
              top 16.11%
              left (440 / 1284 * 100) %
            & li:nth-child(3)
              top 15.48%
              left (806 / 1284 * 100) %
            & li:nth-child(4)
              top 46.12%
              left (428 / 1284 * 100) %
            & li:nth-child(5)
              top 46.12%
              left (800 / 1284 * 100) %
            & li:nth-child(6)
              top 61.92%
              left (266 / 1284 * 100) %
            & li:nth-child(7)
              top 61.92%
              left (961 / 1284 * 100) %
            & li:nth-child(8)
              top 76.77%
              left (105 / 1284 * 100) %
            & li:nth-child(9)
              top 76.77%
              left (430 / 1284 * 100) %
            & li:nth-child(10)
              top 76.77%
              left (804 / 1284 * 100) %
            & li:nth-child(11)
              top 76.77%
              left (1135 / 1284 * 100) %
    .pushChunk
      .content
        position relative
        p, ul
          margin-bottom 0
        ul
          position absolute
          top 0
          right 0
          bottom 0
          width 100%
          max-width 365px

          height 100%
          li
            display flex
            align-items center
            position relative
            height 25%
            p
              display flex
              width 100%
              max-width 365px
              padding-left 30px
              box-sizing border-box
              justify-content start
              height 100%
              align-items center
              max-height 60px
              color #FFFFFF
              background-color rgba(86, 149, 242, 1)
              box-shadow 0 0 10px rgba(0, 0, 0, .5)
    .interactionChunk
      .content
        position relative
        ul
          margin-bottom 0
          li
            display inline-block
            vertical-align top
            height 349px
            p
              margin-bottom 0
              color #666666
          & li:nth-child(1)
            position relative
            border-top 2px solid #679FF3
            &::before
              content ""
              position absolute
              top 0
              left -138px
              width 140px
              height 50%
              border-right 2px solid #679FF3
              border-bottom 2px solid #679FF3
          & li:nth-child(2)
            border 2px solid #679FF3
            border-top none
          & li:nth-child(3)
            border 2px solid #679FF3
            border-left none
            border-bottom none
          & li:nth-child(4)
            position relative
            border-bottom 2px solid #679FF3
            &::before
              content "为用户提供全面的丰富的娱乐生活"
              position absolute
              bottom 0
              right -138px
              width 140px
              height 50%
              color #666666
              padding-top 20px
              border-left 2px solid #679FF3
              border-top 2px solid #679FF3
    .communityChunk
      .content
        position relative
        ul, p
          margin-bottom 0
      .wove-img
        position relative
        display inline-block
        img
          margin 0 auto
        ul
          li
            position absolute
            width 200px
            height 200px
            border-radius 50%
            background-color #5695F2
            box-shadow 0 0 20px rgba(0, 0, 0, .5)
            color #FFFFFF
            p
              position absolute
              width 100%
              left 0
              top 50%
              transform translateY(-50%)
              text-align center
          & li:nth-child(1)
            left 0
            transform translateX(-50%)
            top 200px
          & li:nth-child(2)
            left 55%
            top 50%
            transform translate(-50%, -50%)
          & li:nth-child(3)
            right 0
            bottom 33px
            transform translate(50%)
</style>
<!--视频 -->
<style scoped lang="stylus">
  .videoChunk
    margin-bottom $productChunkBottom
    .tvChunk
      .content
        position relative
        padding 99px 0
        .bg-img
          position relative
        ul
          margin 0
          li
            position absolute
            z-index 99
            background-color #fff
            p
              position absolute
              margin-bottom 0
              color #666666
          & li:nth-child(1)
            left (-62 /$main_w * 100) %
            top 0
            transform translate(0, -50%)
            p
              right 0
              top 50%
              transform translate(100%, -50%)
          & li:nth-child(2)
            left (119 /$main_w * 100) %
            top 60.29%
            transform translate(0, -50%)
            p
              left 50%
              transform translateX(-50%)
              white-space nowrap
          & li:nth-child(3)
            left 50%
            bottom 0
            transform translate(-50%, 50%)
            p
              left 50%
              transform translateX(-50%)
              white-space nowrap
          & li:nth-child(4)
            right (88 /$main_w * 100) %
            top 60.29%
            transform translate(0, -50%)
            white-space nowrap
            p
              left 50%
              transform translateX(-50%)
          & li:nth-child(5)
            right (-62 /$main_w * 100) %
            top 0
            transform translate(0, -50%)
            p
              left 0
              top 50%
              transform translate(-100%, -50%)
          & li:nth-child(6)
            left 50%
            top 50%
            transform translate(-50%, -50%)
            p
              position relative
              max-width 375px
              padding 40px 10px
              border 1px dashed #8EC6A5
    .shortChunk
      position relative
      .content
        display inline-block
        position relative
        img
          margin 0 auto
        ul
          margin-bottom 0
          li
            position absolute
          & li:nth-child(1)
            left 0
            top 7.539%
          & li:nth-child(2)
            right 6.81%
            top 7.539%
          & li:nth-child(3)
            right -10px
            top 55.291%
          & li:nth-child(4)
            right 0
            top 82.01%
          & li:nth-child(5)
            left 0
            top 82.01%
          & li:nth-child(6)
            left -14.431%
            top 55.291%
          p
            color #666666
            margin-bottom 0
    .featureChunk
      .content
        position relative
        ul
          margin-bottom 0
          li
            height 100%
            img
              margin 0 auto
          p
            color #666666
            margin-top 33px
            margin-bottom 0
</style>
<!--学习-->
<style scoped lang="stylus">
  .studyChunk
    margin-bottom $productChunkBottom
    .knowledgeChunk
      padding-bottom 50px
      .content
        ul, p
          margin-bottom 0
        .bg-img
          position relative
          display inline-block
          .sign
            position absolute
            left 50%
            top 50%
            font-size 30px
            transform translate(-50%, -50%)
            color #ffffff
          img
            margin 0 auto
          ul
            position absolute
            width (1000/1140*100)%
            height 29.629%
            left 50%
            transform translateX(-50%)
            bottom -(8.888)%
            background-repeat no-repeat
            li
              display inline-block
              margin-top 14.1%
              width 20%
              white-space nowrap
              p
                font-size 16px
                color #fff
            & li:nth-child(even)
              p
                color #666666
    .dataChunk
      .content
        .bg-img
          position relative
          display inline-block
          img
            width 100%
          .content-box
            display flex
            align-items center
            position absolute
            bottom 0
            left 50%
            width (1078 /$main_w * 100) %
            height 66.90%
            transform translateX(-50%)
            background-color #fff
            padding 0 28px
            box-sizing border-box
            vertical-align middle
            .c-color
              display inline-block
              vertical-align middle
              width 38.91%
              /*height 79.54%*/
              /*background: linear-gradient(#C6C1D6, #B6ABD6, #A696D6, #9985D6, #866BD6, #7656D6, #6640D6)*/
            .c-line
              display inline-block
              vertical-align middle
              margin 0 0 0 22px
              width 20.74%
              img
                width 100%
              & li:nth-child(2)
                max-width 93.39%
                margin 20px 0 62px 0
              & li:nth-child(3)
                max-width 93.39%
                margin-bottom 20px
            .c-text
              position relative
              display inline-block
              vertical-align middle
              margin-bottom 0
              margin-left 14px
              width 11.50%
              height 28.40%
              p
                display flex
                align-items center
                justify-content center
                position absolute
                left 0
                width 100%
                height 30.4%
                margin-bottom 0
                line-height @height
                color #666666
                background-color #E6E678
              & p:nth-child(1)
                top
              & p:nth-child(2)
                bottom 0
            .c-remark
              display inline-block
              i
                display inline-block
                width 50%
                height 2px
                vertical-align middle
                background url("../../../assets/product/study/line_5.png") no-repeat center
              p
                display inline-block
                width 50%
                text-align left
                vertical-align middle
                color #666666
                margin-bottom 0
    .learningChunk
      .content
        position relative
        ul
          position absolute
          left 0
          top 0
          width 100%
          height 100%
        ul, p
          margin-bottom 0
        li
          position relative
          width 20%
          height 50%
          float left
          p
            position absolute
            width 100%
            top 50%
            color #666666
            transform translateY(-50%)
    .intelligentChunk
      .content
        min-height 136px
        ul
          position relative
          width 90%
          min-height 136px
          margin 0 auto
          li
            position absolute
            left 0
          .upLine_1
            left: (291 /$main_w * 100) %
            transform translateY(-100%)
          .upLine_2
            left: (624 /$main_w * 100) %
            transform translateY(-100%)
          .below_1
            left: (126 /$main_w * 100) %
            bottom 0
            transform translateY(100%)
          .below_2
            left: (457 /$main_w * 100) %
            bottom 0
            transform translateY(100%)
          .below_3
            left: (792 /$main_w * 100) %
            bottom 0
            transform translateY(100%)
        p
          position absolute
          width 100%
          text-align center
          top 50%
          transform translateY(-50%)
          margin-bottom 0
          color #666666
    .sharingChunk
      .content
        position relative
        .bg-img
          display inline-block
          position relative
          vertical-align top
          .remark
            position absolute
            left 50%
            top 0
            height 100%
            width (498 /$main_w * 100) %
            transform translateX(-50%)
            background-color rgba(0, 0, 0, .6)
            p
              position absolute
              left 50%
              top 50%
              transform translate(-50%, -50%)
              max-width 250px
              color #fff
              margin-bottom 0
</style>
<!--娱乐-->
<style scoped lang="stylus">
  .recreationChunk
    margin-bottom $productChunkBottom
    .globalChunk
      .content
        padding-bottom 163px
        .bg-img
          position relative
          .img_1
            position absolute
            width 42.10%
            top 5.06%
            left (152 /$main_w * 100) %
            img
              width 100%
          .text
            position absolute
            bottom 23px
            left (664 /$main_w * 100) %
            h4
              margin-top 0
            i
              display block
              width 96px
              height 2px
              margin 0 auto
            .remark
              margin-bottom 0
              text-align left
            .sign
              margin-bottom 37px
              color #666666
    .platformChunk
      .content
        padding-bottom 50px
        .bg-img
          position relative
          ul
            margin-bottom 0
            li
              position absolute
              p
                margin 26px 0 0 0
                color #666666
            & li:nth-child(1)
              top 35.35%
              left (362 / 1920 * 100) %
            & li:nth-child(2)
              top -4.54%
              left (577 / 1920 * 100) %
            & li:nth-child(3)
              top -12.62%
              left (807 / 1920 * 100) %
            & li:nth-child(4)
              top 41.41%
              left (1022 / 1920 * 100) %
            & li:nth-child(5)
              top 1.98%
              left (1260 / 1920 * 100) %
            & li:nth-child(6)
              top -16.16%
              left (1453 / 1920 * 100) %
    .rapidChunk
      .content
        position relative
        .bg-img
          display inline-block
          position relative
          vertical-align top
          .remark
            position absolute
            left 50%
            top 0
            height 100%
            width (498 /$main_w * 100) %
            transform translateX(-50%)
            background-color rgba(0, 0, 0, .6)
            p
              position absolute
              left 50%
              top 50%
              transform translate(-50%, -50%)
              max-width 250px
              color #fff
              margin-bottom 0
    .deviceChunk
      .content
        .bg-img
          position relative
          display inline-block
          ul
            margin-bottom 0
            li
              position absolute
            & li:nth-child(1)
              left (68 /$main_w * 100) %
              top 27.47%
            & li:nth-child(2)
              left (244 /$main_w * 100) %
              top 47.61%
            & li:nth-child(3)
              left (438 /$main_w * 100) %
              top 27.47%
            & li:nth-child(4)
              left (616 /$main_w * 100) %
              top 42.85%
            & li:nth-child(5)
              left (817 /$main_w * 100) %
              top 27.47%
            & li:nth-child(6)
              left (975 /$main_w * 100) %
              top 42.85%
            p
              margin-bottom 0
              color #666666
    .bg
      background-color #5bbaff
</style>
