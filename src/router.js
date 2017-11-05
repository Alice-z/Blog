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
      path: '/blog',
      component: _ =>import ('./View/Blog'),
      children: [{
          path: '/',
          name: 'list',
          component: _ =>import ('./blog/article_list')
        },
        {
          path: '/life',
          component: _ =>isDev?import ('./View/Editor'):import('@c/404.vue') ,      
        },
        {
          path: '/admin',
          component: _ =>import ('./View/Admin')        },
        {
          path: '/article',
          name: 'article',
          component: _ =>import ('./blog/article_info')
        }
      ]
    },
  ]
})
