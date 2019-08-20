<template>
  <transition name="slide-fade">
    <nav
            v-show="navShow"
            class="navbar navbar-default navbar-expand-xl navbar-fixed-top"
    >
      <div class="container">
        <div class="navbar-header" >
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
            <img alt="Brand" src="./img/logo.png" data-toggle="collapse"
                 data-target="#bs-example-navbar-collapse-1"/>
          </router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div
                class="collapse navbar-collapse navbar-right"
                id="bs-example-navbar-collapse-1"
        >
          <ul class="nav navbar-nav">
            <li>
              <a href="javascript:void (0)" class="dropdown-toggle" data-toggle="dropdown"
              >{{ $t("nav.product") }} <i class="underline"></i
              ></a>
              <!--<router-link :to="{path: '/product'}" class="dropdown-toggle" data-toggle="dropdown"
              >{{ $t("nav.product") }} <i class="underline"></i
              ></router-link>-->
              <ul class="dropdown-menu">
                <li v-for="(item, key) in $t('productPage.productNav')" :key="key"  >
                  <router-link v-if="item.route!== 'product'" :to="{name: 'productDetail',hash: '#'+item.route}">
                    {{item.sign}}
                    <i class="dropdown-line"></i
                    >
                  </router-link>
                  <router-link v-else :to="{name: item.route }">
                    {{item.sign}}
                    <i class="dropdown-line"></i
                    >
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="hidden-xs hidden-sm"
                v-for="(item, key) in navList" :key="key"
            >
              <router-link :to="{ path: '/'+item }"
              >{{ $t("nav."+item) }} <i class="underline"></i
              ></router-link>
            </li>
            <!-- pc端 加  data-toggle="collapse" 会有抖动问题-->
            <li class="hidden-md hidden-lg"
                v-for="(item, key) in navList" :key="key+'mobile'"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
            >
              <router-link :to="{ path: '/'+item }"
              >{{ $t("nav."+item) }} <i class="underline"></i
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
          'investment',
          'media',
          'talents',
          'about',
          'contact'
        ],
        navShow: true
      };
    },
    mounted() {
      vm.$on("navScrollFixed", arg => {
        this.navShow = !arg;
      });
    }
  };
</script>

<style scoped lang="stylus">
  .nav > li
    a
      position: relative;
      padding: 20px;
      font-size 16px
      i, .dropdown-line
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transition: all 0.6s ease;
        background-color: rgba(255, 255, 255, 1);
    &:hover .underline
      opacity: 1;
      width: 100%;
      left: 0
    .router-link-active
      i
        left 0
        width 100%
        opacity 1
        background-color: rgba(255, 255, 255, 1);

  .navbar-default {
    background-color: #5695F2;
    border: none;
  }

  .navbar-brand {
    padding: 20px;
  }

  .dropdown-menu
    font-size 16px
    background-color rgba(0, 0, 0, .5)
    li
      position relative
      .router-link-exact-active
        i
          left: 50%;
          width: 0;
          opacity 0
      a
        font-size 16px
        &:hover .dropdown-line
          opacity: 1;
          width: 100%;
          left: 0

  .navbar-default .navbar-nav > .open > a:hover
    background-color transparent

  .slide-fade-leave-active
    transition: all .3s ease

  .slide-fade-enter-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateY(-60px);
    opacity: 0

  .nav .open > a, .nav .open > a:focus, .nav .open > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover
    background-color transparent !important

  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover
    background-color transparent !important
</style>
