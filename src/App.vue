<template>
  <div id="app">
    <div id="nav">
      <navs></navs>
    </div>
   <!-- <router-view />-->
    <keep-alive>
      <router-view />
    </keep-alive>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>
<script>
  import navs from '@/components/navs'
  import Footer from '@/components/footer'
  export default {
    components:{ navs, Footer }
  }
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  a
    color: rgba(255, 255, 255, 1);
</style>
