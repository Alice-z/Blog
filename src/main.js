// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue' 
import router from './router.js'
import mixin from './mixins'
Vue.config.productionTip =  false
import './mixins/rem'
import '../static/ueditor/ueditor.config.js' 
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

SyntaxHighlighter.all()

Vue.mixin(mixin)
 
/* eslint-disable no-new */
new Vue({ 
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
