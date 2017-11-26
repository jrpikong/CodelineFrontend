// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

Vue.use(VueResource)
Vue.use(VueMoment)

/*
setting global end point API
*/
Vue.http.options.root = 'http://codelineapi.dev/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
