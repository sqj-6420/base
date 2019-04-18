import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['./views/home/home.vue'], resolve),
      meta: {
        title: '桂林政务大厅智能办事引导系统',
        topTitle: ''
      }
    }
  ]
})