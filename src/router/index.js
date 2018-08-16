import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Investments from '@/components/Investments'
import Showcase from '@/components/Showcase'
import Showcase2 from '@/components/Showcase2'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import Events from '@/components/Events'
import ContactUs from '@/components/ContactUs'

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
      path: '/showcase2',
      name: 'Showcase2',
      component: Showcase2
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
    }, {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
