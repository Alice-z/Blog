// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue' 
import router from './router'
import mixin from './mixins'
Vue.config.productionTip =  false
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

SyntaxHighlighter.all()

Vue.mixin(mixin)

/* eslint-disable no-new */
new Vue({ 
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
