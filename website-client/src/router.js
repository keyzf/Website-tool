import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const notFound = {
  path: '*',
  redirect: '/'
}
const defaultPage = {
  path: '/',
  redirect: {
    name: ''
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/edit',
      component: () => import(/* webpackChunkName: 'home' */'@/App.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import(/* webpackChunkName: 'templete' */'@/pages/edit/index.vue')
    },
    {
      path: '/pageList',
      name: 'pageList'
    },
    notFound,
    defaultPage
  ]
});

export default router
