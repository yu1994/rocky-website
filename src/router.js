import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      meta: { name: 'nav.about' },
      component: () => import("./views/About.vue")
    },
    {
      path: "/product",
      name: "product",
      meta:{ name: 'nav.product' },
      component: () => import("./views/Product.vue")
    },
    {
      path: "/investment",
      name: "investment",
      redirect:'/investment/main',
      meta:{ name: 'nav.investment' },
      children:[
        {path:'main',name:'main', component: () => import("./views/Investment/index.vue")},
        {path:'governance',meta: {name: 'nav.governance'}, name:'governance', component: () => import("./views/Investment/governance.vue")},
        {path:'newsList',meta: {name: 'nav.newsList'}, name:'newsList', component: () => import("./views/Investment/newsList.vue")},
        {path:'finance',meta: {name: 'nav.finance'}, name:'financeList', component: () => import("./views/Investment/finance.vue")},
      ],
      component: () => import("./views/Investment/template.vue")
    },
    {
      path: "/media",
      name: "media",
      /*redirect:'/media/brand',*/
      meta:{ name: 'nav.media' },
      component: () => import("./views/Media.vue")
    },
    {
      path: "/media/detail/:id",
      name: "newsDetail",
      meta: {name: 'nav.media'},
      component: () => import("./views/newsDetail.vue")
    },
    {
      path: '/talents',
      name:'talents',
      meta:{ name: 'nav.talents'},
      component: () => import("./views/Talents.vue")
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { name: 'nav.contact'},
      component: () => import("./views/Contact.vue")
    },
    {
      path:"/partner",
      name: "partner",
      meta: { name: 'nav.partner' },
      component: () => import("./views/Partner.vue")
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});
