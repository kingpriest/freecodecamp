// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueLazyload from 'vue-lazyload'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import data from './datajson.js'
Vue.prototype.$datajson = data
Vue.use(BootstrapVue);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'static/img/timg.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
