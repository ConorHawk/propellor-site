<template>
  <nav class="w-full p-8 bg-black">
    <div class="container mx-auto">
      <router-link to="/" class="flex items-center no-underline">
          <p class="m-0 text-orange font-sans font-bold">PROPELLOR <span class="text-white">PROPERTY INVESTMENTS</span></p>
        </router-link>
      <div class="flex justify-between">
        <div class="flex-1 p-2">
          <ul class="list-reset">
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/investments">Investments</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/services">Services</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/charity">Charity</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/showcase">Showcase</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/testimonials">Testimonials</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/events">Events</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/about-us">About</router-link></li>
            <li class="mt-1"><router-link class="text-white hover:text-orange focus:text-orange text-sm no-underline font-sans" to="/about-us">Contact</router-link></li>
          </ul>
        </div>
        <div class="flex-1 p-2 px-8">
          <p class="text-sm text-white mb-8">Propellor works alongside banks such as Westpac, The National Bank and The Bank of New Zealand to finance your investment properties</p>
          <img src="https://www.propellorproperties.co.nz/images/stories/footer-car2.png" alt="logo">
        </div>
        <div class="flex-1 p-2 px-8">
          <h3 class="text-white text-base font-normal mb-2">Contact us</h3>
          <div class="mb-2">
            <input class="font-sans rounded-sm p-3 shadow-inner w-full" placeholder="Email" type="text">
          </div>
          <div class="mb-2">
            <textarea class="font-sans rounded-sm p-3 shadow-inner w-full" placeholder="Message" name="" id="" rows="4"></textarea>
          </div>
          <div>
            <button class="btn text-sm">Send Message</button>
          </div>
        </div>
      </div>
      
    </div>
    <!-- <button @click="toggleMenu()" class="text-xl text-white">
      <i class="fas fa-bars"></i>
    </button> -->
  </nav>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'hello',
  props: [],
  data () {
    return {
    }
  },
  methods: {
    toggleMenu: function () {
      EventBus.$emit('toggle-menu')
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
