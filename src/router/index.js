import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/AboutUs'
import Achievements from '@/components/Achievements'
import Contributors from '@/components/Contributors'
import Cooperatives from '@/components/Co-operatives'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    },
    {
      path: '/contributors',
      name: 'Contributors',
      component: Contributors
    },
    {
      path: '/cooperatives',
      name: 'Cooperatives',
      component: Cooperatives
    }
  ]
})
