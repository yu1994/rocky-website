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
      meta: { name: "nav.about" },
      component: () => import("./views/About.vue")
    },
    {
      path: "/product",
      name: "product",
      meta: { name: "nav.product" },
      redirect: "/product/catalog",
      component: () => import("./views/Product/Product.vue"),
      children: [
        {
          path: '/product/catalog',
          name: 'catalog',
          component: () => import("./views/Product/components/catalogChunk.vue")
        },
        {
          path: '/product/detail',
          name: 'productDetail',
          component: () => import("./views/Product/components/productAllDetail.vue")
        }
      ]
    },
    {
      path: "/investment",
      name: "investment",
      redirect: "/investment/main",
      meta: { name: "nav.investment" },
      children: [
        {
          path: "/investment/main",
          name: "main",
          component: () => import("./views/Investment/index.vue")
        },
        {
          path: "/investment/governance",
          meta: { name: "nav.governance" },
          name: "governance",
          component: () => import("./views/Investment/governance.vue")
        },
        {
          path: "/investment/newsList",
          meta: { name: "nav.newsList" },
          name: "newsList",
          component: () => import("./views/Investment/newsList.vue")
        },
        {
          path: "/investment/finance",
          meta: { name: "nav.finance" },
          name: "financeList",
          component: () => import("./views/Investment/finance.vue")
        }
      ],
      component: () => import("./views/Investment/template.vue")
    },
    {
      path: "/media",
      name: "media",
      meta: { name: "nav.media" },
      component: () => import("./views/Media.vue")
    },
    {
      path: "/media/:id",
      redirect: "/media"
    },
    {
      path: "/media/detail/:id",
      name: "newsDetail",
      meta: { name: "nav.media" },
      component: () => import("./views/NewsDetail.vue")
    },
    {
      path: "/talents",
      name: "talents",
      meta: { name: "nav.talents" },
      component: () => import("./views/Talents.vue")
    },
    {
      path: "/contact",
      name: "contact",
      meta: { name: "nav.contact" },
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/partner",
      name: "partner",
      meta: { name: "nav.partner" },
      component: () => import("./views/Partner.vue")
    },
    {
      path: "/operator",
      name: "operator",
      meta: { name: "nav.operator" },
      component: () => import("./views/DataOperator/DataOperator.vue")
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});
