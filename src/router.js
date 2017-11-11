import Vue from 'vue'
import Rourer from 'vue-router'
import isDev from './mixins/dev'
Vue.use(Rourer)
export default new Rourer({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      component: _ =>import ('./components/navbar')
    },
    {
      path: '/home',
      component: _ =>import ('./View/home'),
      children: [{
          path: '/',
          name: 'list',
          component: _ =>import ('./blog/article_list')
        },
        {
          path: '/admin',
          component: _ =>isDev?import ('./View/Admin'):import('@c/404.vue')       
         },
        {
          path: '/edit',
          component: _ =>isDev?import ('./View/edit'):import('@c/404.vue')       
         },
        {
          path: '/update',
          component: _ =>isDev?import ('./View/update'):import('@c/404.vue')       
         },
        {
          path: '/article',
          name: 'article',
          component: _ =>import ('./blog/article_info')
        }
      ]
    },
  ]
})
