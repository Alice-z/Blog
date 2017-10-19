import Vue from 'vue'
import Rourer from 'vue-router'
// import blog from './blog'
Vue.use(Rourer)

export default new Rourer({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: _ => import('./components/navbar') },
    { path: '/life', component: _ => import('./View/Editor') },
    {
      path: '/blog', component: _ => import('./View/Blog'), children: [
        { path: '/', component: _ => import('./blog/article_list') },
        { path: '/article',name:'article', component: _ => import('./blog/article_info') }
      ]
    },
  ] 
})