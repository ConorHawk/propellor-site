<template>
  <nav class="w-full p-2 bg-black">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="flex items-center no-underline">
        <p class="m-0 ml-4 text-orange font-sans font-bold">PROPELLOR <span class="text-white">PROPERTY INVESTMENTS</span></p>
      </router-link>
      
      <div>
        <ul class="list-reset flex">
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/investments">Investments</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/services">Services</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/charity">Charity</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/showcase2">Showcase</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/testimonials">Testimonials</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/events">Events</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/about-us">About</router-link></li>
          <li class="mx-2"><router-link class="text-white text-base no-underline font-sans" to="/contact-us">Contact</router-link></li>
        </ul>
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
