import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WeatherWoeid from '@/components/WeatherWoeid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weather/:woeid',
      name: 'WeatherWoeid',
      component: WeatherWoeid
    }
  ]
})
