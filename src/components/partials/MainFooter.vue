<template>
  <nav class="w-full p-8 bg-black">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <router-link to="/" class="flex items-center no-underline">
          <div style="width:50px">
            <svg class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve" width="512px" height="512px">
            <g>
              <circle cx="227.5" cy="285.982" r="44.538" fill="#FFFFFF"/>
              <path d="M227.5,211.445c9.11,0,17.84,1.65,25.917,4.655c5.783-26.133,9.468-58.797,9.468-89.663   c0-41.037-5.271-68.672-12.779-84.851c-3.956-8.525-12.588-14.441-22.605-14.441s-18.649,5.916-22.605,14.441   c-7.508,16.179-12.779,43.813-12.779,84.851c0,30.866,3.685,63.531,9.468,89.663C209.66,213.094,218.39,211.445,227.5,211.445z" fill="#FFFFFF"/>
              <path d="M154.03,298.477c-25.525,8.058-55.659,21.2-82.393,36.635c-35.539,20.519-56.836,38.9-67.094,53.492   c-5.405,7.689-6.213,18.122-1.204,26.797c5.009,8.675,14.447,13.192,23.809,12.356c17.766-1.587,44.333-10.84,79.872-31.358   c26.742-15.439,53.199-34.972,72.941-53.053C166.525,332.191,157.071,316.412,154.03,298.477z" fill="#FFFFFF"/>
              <path d="M450.457,388.604c-10.257-14.592-31.554-32.974-67.094-53.492c-26.734-15.435-56.869-28.577-82.393-36.635   c-3.041,17.935-12.495,33.715-25.932,44.869c19.742,18.081,46.199,37.614,72.941,53.053c35.539,20.519,62.107,29.771,79.872,31.358   c9.362,0.836,18.8-3.681,23.809-12.356C456.669,406.726,455.862,396.293,450.457,388.604z" fill="#FFFFFF"/>
            </g>
            </svg>
          </div>
          <p class="m-0 ml-4 text-orange font-sans font-bold">PROPELLOR <span class="text-white">PROPERTY INVESTMENTS</span></p>
        </router-link>
        
        <div>
          <ul class="list-reset">
            <li class="mt-2"><router-link class="text-white hover:text-orange focus:text-orange text-base no-underline font-sans" to="/investments">Investments</router-link></li>
            <li class="mt-2"><router-link class="text-white hover:text-orange focus:text-orange text-base no-underline font-sans" to="/services">Services</router-link></li>
            <li class="mt-2"><router-link class="text-white hover:text-orange focus:text-orange text-base no-underline font-sans" to="/showcase">Showcase</router-link></li>
            <li class="mt-2"><router-link class="text-white hover:text-orange focus:text-orange text-base no-underline font-sans" to="/testimonials">Testimonials</router-link></li>
            <li class="mt-2"><router-link class="text-white hover:text-orange focus:text-orange text-base no-underline font-sans" to="/events">Events</router-link></li>
            <li class="mt-2"><router-link class="text-white hover:text-orange focus:text-orange text-base no-underline font-sans" to="/about-us">About</router-link></li>
          </ul>
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
