<template>
<div>
  <div class="bg-orange-dark text-white relative">
    <div class="absolute pin-t pin-r px-2 py-1">
      <button class="text-white">
        <span class="fa fa-times"></span>
      </button>
    </div>
    <div class="container mx-auto flex p-2 justify-between">
      <div class="flex items-center">
        <div>
          <i class="fas fa-calendar text-4xl"></i>
        </div>
        <div class="px-4">
          <h3 class="text-base">Event or Special</h3>
          <p class="text-sm font-sans my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="flex-none flex items-center">
        <button class="btn hollow text-sm">Read more</button>
      </div>
    </div>
  </div>
  <div class="relative bg-black flex items-center justify-center h-128">
    <div class="absolute h-full w-full z-10 bg-cover bg-center opacity-25" style="backgroundImage:url(https://images.pexels.com/photos/32870/pexels-photo.jpg?cs=srgb&dl=backyard-house-lights-32870.jpg&fm=jpg)"></div>
    <div class="relative z-20 flex items-center container flex-wrap p-4">
      <div class="w-full md:w-1/2 py-4">
        <h1 style="line-height:1.6" class="main-title text-white inline p-2 text-2xl md:text-6xl">Discover how we can <span class="text-orange">start</span> or help you <span class="text-orange">grow</span> your property portfolio!</h1>
        <button class="btn mt-4">How can we help you?</button>
      </div>
      <div class="w-full md:w-1/2">
          <div class='embed-container'><iframe :src='`https://www.youtube.com/embed/H4h6ZvtAeFc?rel=0&amp;showinfo=0`' frameborder='0' allowfullscreen></iframe></div>
      </div>
    </div>
  </div>
  <div class="py-12 my-12">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold">Smarter Property Investment</h2>
      <p>A credible service for smarter property investment in New Zealand, Propellor Properties is set to inject renewed confidence into the New Zealand property investment market.</p>
      <p>We work with trusted professionals who create a tailor-made investment strategy for you. This strategy gives private property investors an opportunity to draw on a level of industry knowledge not normally at their disposal. We cover multiple regions of New Zealand with a focus on helping you achieve better returns with Christchurch, Hamilton and Auckland property investment.</p>
      <p>We do not charge for our mentoring services or your investment development strategy</p>
      <p>Whether you are searching for one investment property - or want to build a property investment portfolio, in conjunction with our wide range of trusted professionals - we can help you learn how to invest in real estate successfully.</p>
      <router-link class="btn mt-8" tag="button" to="/investments">Find Out More</router-link>
    </div>
  </div>
  <div>
    <div class="container mx-auto py-12">
      <h2 class="text-center mb-8">Charities</h2>
      <div class="flex flex-col md:flex-row flex-wrap">
        <div class="p-8 flex items-center justify-center flex-1">
          <img style="max-width:250px" src="/static/images/charities/lgfb_grey.png" alt="">
        </div>
        <div class="p-8 flex items-center justify-center flex-1">
          <img style="max-width:250px" src="/static/images/charities/habitat_grey.png" alt="">
        </div>
        <div class="p-8 flex items-center justify-center flex-1">
          <img style="max-width:250px" src="/static/images/charities/canterbury_grey.png" alt="">
        </div>
        <div class="p-8 flex items-center justify-center flex-1">
          <img style="max-width:250px" src="/static/images/charities/RMHSI_grey.png" alt="">
        </div>
      </div>
    </div>
  </div>

  <div class="bg-grey-lightest">
    <div class="container mx-auto flex flex-wrap items-center py-12">
      <div class="w-full md:w-2/3 p-4">
        <img class="w-full" src="https://placeimg.com/1000/610/arch" alt="">
      </div>
      <div class="w-full md:w-1/3 flex items-center p-4">
        <div>
          <h2>Layout 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          <button class="btn mt-4">Button</button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="container mx-auto flex flex-wrap items-center py-12">
      <div class="w-full md:w-1/3 p-4">
        <img class="w-full" src="https://placeimg.com/1000/610/arch" alt="">
      </div>
      <div class="w-full md:w-2/3 flex items-center p-4">
        <div>
          <h2>Layout 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          <button class="btn mt-4">Button</button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-grey-darkest text-white">
    <div class="container mx-auto flex flex-wrap items-center py-12">
      <div class="w-full md:w-1/3 p-4">
        <img class="w-full" src="https://placeimg.com/1000/610/arch" alt="">
      </div>
      <div class="w-full md:w-2/3 flex items-center p-4">
        <div>
          <h2>Layout 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          <button class="btn mt-4">Button</button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-grey-lighter">
    <div class="container mx-auto flex flex-wrap items-center py-12">
      <div class="w-full md:w-2/3 flex items-center p-4">
        <div>
          <h2>Layout 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          <button class="btn mt-4">Button</button>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <img class="w-full" src="https://placeimg.com/1000/610/arch" alt="">
      </div>
    </div>
  </div>

  <div class="bg-grey-lightest">
    <div class="container mx-auto flex flex-wrap items-center py-12">
      <div class="w-full md:w-1/3 flex items-center p-4">
        <div>
          <h2>Layout 5</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          <button class="btn mt-4">Button</button>
        </div>
      </div>
      <div class="w-full md:w-2/3 p-4">
        <img class="w-full" src="https://placeimg.com/1000/610/arch" alt="">
      </div>
    </div>
  </div>

  <div class="bg-black relative">
    <div class="absolute h-full w-full z-10 bg-cover bg-center opacity-25" style="backgroundImage:url(https://images.pexels.com/photos/32870/pexels-photo.jpg?cs=srgb&dl=backyard-house-lights-32870.jpg&fm=jpg)"></div>
    <div class="container mx-auto flex flex-wrap items-center py-2 text-white relative z-20">
      <div class="w-full flex items-center p-4">
        <div class="flex items-center" >
          <div>
            <h2>Layout 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          </div>
          <div>
            <button class="btn mt-4">Button</button>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="container mx-auto flex flex-wrap items-center py-6">
      <div class="w-full md:w-1/4 p-4">
        <img class="w-full" src="https://placeimg.com/1000/610/arch" alt="">
      </div>
      <div class="w-full md:w-3/4 flex items-center p-4">
        <div>
          <h2 class="text-lg">Layout 7</h2>
          <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eveniet doloremque similique? Neque nemo illo quaerat, tempore voluptates sequi iure, perferendis repellendus numquam iste excepturi, eos quod minima at dicta.</p>
          <button class="btn mt-2 text-sm">Button</button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-grey-lighter">
    <div class="container mx-auto py-12 mb-12">
      <div class="flex">
        <div class="w-1/2 p-6" v-for="property in properties" :key="property.name">
          <div class="shadow-dark-lg rounded-md overflow-hidden bg-white h-full">
            <div class="h-48 bg-center bg-cover" :style="{'backgroundImage': `url(${property.image})`}"></div>
            <div class="p-4">
              <h2 class="text-4xl">{{property.name}}</h2>
              <p class="font-semibold text-xl text-orange mb-2 mt-0 font-sans font-bold"> <span class="text-grey-darker text-base font-normal">From only <br> </span>{{property.price}}</p>
              <h3 class="text-sm font-semibold">{{property.location}}</h3>
              <p class="text-base text-grey-darker mt-4">{{property.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center py-8">
        <router-link class="btn" tag="button" to="/contact-us">Make An Enquiry</router-link>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      properties: [
        {
          name: 'Kea Mews',
          description: 'Kea Mews is brought to you by the developer of St Martins Green, The Virtue group. This 24 unit development will consist of two bedroom terrace and standalone properties with a mix of land sizes and they will all come with their own private outdoor area. The cleverly designed single level turn-key townhouses have all the makings of an easy low maintenance investment property with the potential of great returns!',
          price: '$375,000 plus furniture pack',
          furniturePack: true,
          image: 'https://www.propellorproperties.co.nz/images/Olliviers_Rd_Entrance.jpg'
        }, {
          name: 'Verdant Lane',
          description: 'Extensive landscaping, walkways and open spaces complement the village environment of just 50 residences. The residences have been designed with emphasis on functional style and interaction with the natural environment. Verdant Lane represents contemporary design and quality construction consisting of durable concrete, extensive glass and superior fixtures and fittings. The quality of the build begins with the choice of architect: Brent Hulena, an award-winning Auckland-based architect known for creating well-formed and functional modern living spaces.',
          price: '$589,000!!!',
          furniturePack: false,
          image: 'https://www.propellorproperties.co.nz/images/Renders_exterior_Page_2.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
