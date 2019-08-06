<template>
  <div id="app">
    <transition leave-active-class="animated rollOut">
      <div v-if="introShow" class="progressIntro">
        <img src="./assets/home/animate_2.5.gif" class="img-responsive" />
      </div>
    </transition>
    <div id="nav" v-if="!introShow">
      <navs></navs>
    </div>
    <div class="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <div id="footer">
      <Footer/>
    </div>
    <div class="upward hidden-md hidden-lg" v-show="upwardShow" v-on:click="upwardHandler(0,0)">
      <i class="glyphicon glyphicon-chevron-up"></i>
    </div>
    <!-- 产品里面需要-->
    <div class="upward hidden-xs hidden-sm" v-show="productUpwardShow" v-on:click="upwardHandler(0,0)">
      <i class="glyphicon glyphicon-chevron-up"></i>
    </div>
  </div>
</template>
<script>
  import navs from '@/components/navs'
  import Footer from '@/components/footer'
  export default {
    data() {
      return {
        introShow: false,
        upwardShow: false,
        productUpwardShow: false
      }
    },
    created() {
      if (this.$route.name === 'home') {
        this.introShow = true;
        let timer = setTimeout(() => {
          this.introShow = false;
          clearTimeout(timer);
          timer = null;
        }, 5500);
      }
    },
    mounted() {
      const self = this;
      window.addEventListener('scroll', function () {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        if (self.$route && self.$route.fullPath.indexOf("product") > -1){
          if (scrollTop >= Math.abs(h/2)){
            self.productUpwardShow = true
          } else{
            self.productUpwardShow = false;
          }
        } else {
          self.productUpwardShow = false;
        }

        if (scrollTop >= Math.abs(h/2)){
          self.upwardShow = true
        } else{
          self.upwardShow = false;
        }
      })
    },
    methods:{
      upwardHandler(x,y) {
        window.scrollTo(x,y)
      }
    },
    components:{ navs, Footer }
  }
</script>
<style lang="stylus">
#app
  position relative
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  .main
    padding-top 0
  .upward
    display flex
    position fixed
    top 80%
    right 30px
    width 48px
    height 48px
    z-index 99988
    border-radius 50%
    background-color #5695f2
    i
      margin auto
      /*font-size 24px*/
      color #ffffff
#nav
  a
    color: rgba(255, 255, 255, 1);
.progressIntro
  position absolute
  width 100%
  overflow-x hidden
  left 0
  top 0
  z-index 9999
</style>
