import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/views/login'
import main from '@/components/views/main/main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
