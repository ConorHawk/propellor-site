<template>
<div>
  <div class="relative bg-black flex items-center justify-center" style="min-height:600px;">
    <div class="absolute h-full w-full z-10 bg-cover bg-center opacity-25" style="backgroundImage:url(https://images.pexels.com/photos/32870/pexels-photo.jpg?cs=srgb&dl=backyard-house-lights-32870.jpg&fm=jpg)"></div>
    <div class="relative z-20 flex items-center container">
      <div class="w-1/2">
        <h1 style="font-size: 3.25rem;line-height:1.6" class="main-title text-white inline p-2">Discover how we can <span class="text-orange">start</span> or help you <span class="text-orange">grow</span> your property portfolio!</h1>
      </div>
      <div class="w-1/2">
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
      <router-link class="btn" tag="button" to="/investments">Find Out More</router-link>
    </div>
  </div>
  <div class="bg-grey-lighter">
    <div class="container mx-auto py-12 mt-12">
      <div class="flex">
        <div class="w-1/2 p-6" v-for="property in properties" :key="property.name">
          <div class="shadow-dark-lg rounded-md overflow-hidden bg-white h-full">
            <div class="h-48 bg-center bg-cover" :style="{'backgroundImage': `url(${property.image})`}"></div>
            <div class="p-4">
              <h2>{{property.name}}</h2>
              <h3 class="text-sm font-semibold">{{property.location}}</h3>
              <p class="text-base text-grey-darker">{{property.description}}</p>
              <hr>
              <p class="font-semibold text-lg">Price: <span class="font-normal">{{property.price}}</span></p>
              <p class="font-semibold text-lg">Appraised Rental Return: <span class="font-normal">{{property.return}}</span></p>
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
          name: 'Thackeray Street',
          location: 'Hamilton',
          description: 'Thackeray Street features ten premium terraced homes, each with three double bedrooms, two and a half bathrooms and a single garage with internal access and additional parking. With open planliving, designer kitchen and private outdoor living these properties are sure to appeal to a wide range of tenants. Built with a mix of concrete and linea cladding.',
          price: 'From $599,000',
          return: '$480 - $500 per week unfurnished or $560 - $580 per week furnished',
          image: 'https://www.propellorproperties.co.nz/images/stories/image4.JPG'
        }, {
          name: 'Awatea Green - Home and Income',
          location: 'Christchurch',
          description: 'With a masterplan that has been shaped to combine a real sense of community, Awatea Green incorporates a thoughtful mix of housing options for a wide variety of investors and homeowners. Shared greenspaces, playground and meandering pathways and cycleways make Awatea Green a great place to invest. Connections to neighbouring communities couldn\'t be easier with local schools, shopping, cafes and restaurants just minutes away',
          price: '$609,000',
          return: '$750 - $790 per week',
          image: 'https://www.propellorproperties.co.nz/images/stories/image4.JPG'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1.main-title {
    background-color: #22292f;
    box-shadow: -.2em -.0em 0 #22292f,
    .2em -.0em 0 #22292f,
    -.2em .0em 0 #22292f,
    .2em .0em 0 #22292f;
  }
</style>
