import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/SalesPages/HomePage.vue'),
      meta: { layout: 'WithCartAndSearch' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/OthersPages/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/OthersPages/ContactPage.vue'),
    },
    {
      path: '/details/:id',
      name: 'itemPage',
      component: () => import('@/pages/SalesPages/ItemPage.vue'),
      props: true,
      meta: { layout: 'WithCart' },
    },
    {
      path: '*',
      name: 'notFoundPage',
      component: () => import('@/pages/OthersPages/NotFoundPage.vue'),
    },
  ],
});
