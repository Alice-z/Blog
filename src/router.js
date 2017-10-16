import Vue from 'vue'
import Rourer from 'vue-router'
Vue.use(Rourer)

export default new Rourer({
 mode: 'history',
 linkActiveClass: 'active',
 routes: [
  // { path: '/', component:_=> import( './View/HomePage'), },
  {	path: '/', component:_=> import( './View/Blog'), },
  { path: '/life', component:_=> import( './View/Life') }
 ]
})