// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import Mock from './mock'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/assets/css/main.scss'

Vue.use(Router)
Vue.use(ElementUI)
// Mock.bootstrap()
Vue.prototype.$catchError = (err) => {
  if(err.code === 'ECONNABORTED') {
    ElementUI.Message('服务器响应超时')
    return;
  }
  if(!err.data) {
    ElementUI.Message('服务器响应错误')
    return;
  }
  if(err.data.code) {
    ElementUI.Message(err.data.message)
  } else {
    ElementUI.Message('请求失败请重试')
  }
}
Vue.prototype.$kefu = null
Vue.config.productionTip = false
const router = new Router({
	routes
})
axios.interceptors.request.use(config => {
  return config;
}, error => { 
  return Promise.reject(error)
})
axios.interceptors.response.use(res => {
  if (res.data.code === '0000') {
    router.push('/login')
    // return Promise.reject(res)
  } 
  return res;
}, err => {
  return Promise.reject(err)
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
