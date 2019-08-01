import "../src/styl/index.styl";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'animate.css'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { WOW } from 'wowjs'
import VueLazyload from 'vue-lazyload'
import "bootstrap";
import i18n from './lang'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload);
Vue.config.productionTip = false;
Vue.prototype.WOW = new WOW();
router.afterEach(() => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
