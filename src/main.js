// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import VeeValidate from 'vee-validate';
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import zhCNValidate from 'vee-validate/dist/locale/zh_CN'

import App from './App'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_CN',zhCNValidate)

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)

axios.defaults.withCredentials = true  // 存在cookie里数据

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/* 全局前置守卫 Global Before Guards */ 

router.beforeEach((to, from, next) => {
  console.log('to:',to,'from:',from,'next:',next)
  if (to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check` // 验证用户API
    axios.post(api).then((response) => {
        console.log('验证用户API',response.data)
        if(response.data.success){ 
            next()
        }else{
            console.log('这里需要验证')
            next({
              path: '/login',
            })
        }
    })
  }else{
    next()
  }
  // ...
})
