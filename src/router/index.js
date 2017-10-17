import Vue from 'vue'
import Rourer from 'vue-router'
// import blog from './blog'
Vue.use(Rourer)

export default new Rourer({
 mode: 'history',
 linkActiveClass: 'active',
 routes: [
  { path: '/life', component:_=> import( '../View/Life') },
  {	path: '/', component:_=> import( '../View/Blog') },  
 ]
})