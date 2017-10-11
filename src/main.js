// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import VueMaterial from 'vue-material'
import 'element-ui/lib/theme-default/index.css'
import 'vue-material/dist/vue-material.css'
import '@/assets/css/main.scss'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueMaterial)
// Vue.use(VueMaterial.MdCore) 
// Vue.use(VueMaterial.MdButton)
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'white',
  warn: 'orange',
  background: 'grey'
})
Vue.config.productionTip = false
const router = new Router({
	routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
