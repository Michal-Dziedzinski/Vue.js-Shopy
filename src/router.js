import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
    // {
    //   path: '/rooms/:id/show',
    //   name: 'ShowDetailsRoom',
    //   component: About,
    // },
  ],
});
