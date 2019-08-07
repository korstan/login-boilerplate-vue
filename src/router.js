import Vue from 'vue'
import Router from 'vue-router'

import AppLogin from './views/app-login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
  ],
});
