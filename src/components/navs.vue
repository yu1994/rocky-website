<template>
  <transition name="slide-fade">
    <nav
      v-show="navShow"
      class="navbar navbar-default navbar-expand-xl navbar-fixed-top"
    >
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
            <img alt="Brand" src="./img/logo.png" />
          </router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div
          class="collapse navbar-collapse navbar-right"
          id="bs-example-navbar-collapse-1"
        >
          <ul class="nav navbar-nav">
            <li>
              <router-link :to="{ name: 'home' }"
                >{{ $t("nav.home") }} <i class="underline"></i
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about' }"
                >{{ $t("nav.about") }} <i class="underline"></i
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'product' }" class="dropdown-toggle" data-toggle="dropdown"
                >{{ $t("nav.product") }} <i class="underline"></i
              ></router-link>
              <ul class="dropdown-menu">
                <li v-for="(item, key) in navList" :key="key">
                  <a href="javascript:void 0" @click="skipHandler(item)">{{
                    $t("productPage.chunkHead." + item)
                    }} <i class="dropdown-line"></i
                ></a></li>

               <!-- <li><a href="#contact">互动社交 <i class="dropdown-line"></i
                ></a></li>
                <li><a href="#study">知识学习圈 <i class="dropdown-line"></i
                ></a></li>
                <li><a href="#recreation">轻娱乐 <i class="dropdown-line"></i
                ></a></li>
                <li><a href="#culture">东方文化 <i class="dropdown-line"></i
                ></a></li>
                <li><a href="#readIP">阅读IP <i class="dropdown-line"></i
                ></a></li>-->
              </ul>
            </li>
            <li>
              <router-link :to="{ name: 'investment' }"
                >{{ $t("nav.investment") }} <i class="underline"></i
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'media' }"
                >{{ $t("nav.media") }} <i class="underline"></i
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'talents' }"
                >{{ $t("nav.talents") }} <i class="underline"></i
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contact' }"
                >{{ $t("nav.contact") }} <i class="underline"></i
              ></router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </nav>
  </transition>
</template>

<script>
import vm from "../utils/events";
export default {
  name: "navs",
  data() {
    return {
      navList: [
        "numGame",
        "contact",
        "study",
        "recreation",
        "culture",
        "readIP"
      ],
      navShow: true
    };
  },
  mounted() {
    vm.$on("navScrollFixed", arg => {
      this.navShow = !arg;
    });
  },
  methods: {
    skipHandler(id) {
      document.getElementById(id).scrollIntoView();
    }
  }
};
</script>

<style scoped lang="stylus">
.nav>li
    a
      position: relative;
      padding: 20px;
      i,.dropdown-line
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transition: all 0.6s ease;
        background-color: rgba(255,255,255,1);
    &:hover .underline
        opacity: 1;
        width: 100%;
        left: 0
    .router-link-exact-active
        i
            left 0
            width 100%
            opacity 1
            background-color: rgba(255,255,255,1);
.navbar-default{
    background-color: rgba(0,0,0,0.5);
    border: none;
}
.navbar-brand{
    padding: 20px;
}
.dropdown-menu
  font-size 16px
  background-color rgba(0,0,0,.5)
  li
    position relative
    a
      font-size 16px
      &:hover .dropdown-line
       opacity: 1;
       width: 100%;
       left: 0
.navbar-default .navbar-nav>.open>a:hover
  background-color transparent
.slide-fade-leave-active
  transition: all .3s ease
.slide-fade-enter-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(-60px);
  opacity: 0
.nav .open>a, .nav .open>a:focus, .nav .open>a:hover,.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover
  background-color transparent !important
.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover
  background-color transparent !important
</style>
