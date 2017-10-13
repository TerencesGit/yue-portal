// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import Mock from './mock'
import ElementUI from 'element-ui'
import VueMaterial from 'vue-material'
import 'element-ui/lib/theme-default/index.css'
import '@/assets/css/main.scss'

Vue.use(Router)
Vue.use(ElementUI)
Mock.bootstrap()
Vue.config.productionTip = false
const router = new Router({
	routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
