import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Investments from '@/components/Investments'
import Showcase from '@/components/Showcase'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import Events from '@/components/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/services',
      name: 'Services',
      component: Services
    }, {
      path: '/investments',
      name: 'Investments',
      component: Investments
    }, {
      path: '/showcase',
      name: 'Showcase',
      component: Showcase
    }, {
      path: '/testimonials',
      name: 'Testimonials',
      component: Testimonials
    }, {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    }, {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
