<template>
<div>
  <div class="relative bg-black flex items-center justify-center" style="min-height:350px;">
    <div class="absolute h-full w-full z-10 bg-cover bg-center opacity-25" style="backgroundImage:url(https://images.pexels.com/photos/6343/village-hotel-building-countryside-6343.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"></div>
    <div class="relative z-20 flex items-center container justify-center">
        <h1 style="font-size: 3.25rem;line-height:1.6" class="main-title text-white inline p-2 px-6 text-center">Testimonials</h1>
    </div>
  </div>
  <div class="container my-12 mx-auto">
  <div class="flex flex-wrap">
    <div v-for="testimonial in videoTestimonials" :key="testimonial.name" class="p-2 w-1/3">
      <div class='embed-container'><iframe :src='`${testimonial.videoEmbed}?rel=0&amp;showinfo=0`' frameborder='0' allowfullscreen></iframe></div>
      <h3 class="mt-2 text-right">- {{testimonial.name}}</h3>
    </div>
  </div>
  <div class="border-t border-grey-lighter pt-10 mt-10 mx-auto" v-for="testimonial in textTestimonials" :key="testimonial.name" style="max-width: 55em">
    <p class="text-lg" v-html="testimonial.content"></p>
    <div class="flex justify-end px-4">
      <h3 class="text-xl">- {{testimonial.name}}</h3>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  data () {
    return {
      videoTestimonials: [
        {
          videoEmbed: 'https://www.youtube.com/embed/WG7VGSrReUY',
          name: 'Lauraine Frampton'
        }, {
          videoEmbed: 'https://www.youtube.com/embed/dJyN7xkKwA0',
          name: 'Fiona Gordon'
        }, {
          videoEmbed: 'https://www.youtube.com/embed/PxA1iO4vZGQ',
          name: 'Steve Vincent'
        }
      ],
      textTestimonials: [
        {
          content: '“I would just like to say how wonderful your team have been to deal with. The contacts you have put me on to Lawyers, accountant etc have also been a breeze to deal with it and made things so simple.”',
          name: 'Aaron Scott'
        }, {
          content: '“(Nikki) I really appreciated speaking with you, and have come away really excited about the future. You are quite an inspiration, which I’m sure you know, but wanted to express...<br><br>Things are underway, and I’m sure I will be well guided, and have confidence in Propellor and the wider crew looking out for my daughter\'s and my own future! Thanks very much, once again!”',
          name: 'Pauline'
        }, {
          content: '“Thank you for your efforts to help us acquire an investment property.<br><br>We had no idea that at our time of life and taking into account our financial situation, an investment property was even remotely possible, until we read the Propeller Properties brochure which prompted a meeting with you; after which we realised property investment plans could also be of great benefit to younger couples wanting to secure their future. <br><br>At our first meetings with both you and John we were very pleased to have everything explained to us so clearly especially the fact that it was possible to set up an investment property, rent it and have it managed without any pressure or hassle for us, but ensuring future gains and security in our senior years by using the equity in our own home. So we agreed to taking the next step which was for you to find properties that match our criteria as determined by a financial analysis. <br><br>We appreciated the trouble you went to in arranging for us to view two properties, also setting up appointments for us with a mortgage broker and an accountant at no expense to us…<br><br>…it has been made very clear to us how your company could help some people in our position or similar circumstances and we would not hesitate to recommend Propeller Properties to friends or relations who were thinking of investing in the property market.”',
          name: 'Ian and Heather Cadwallader'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
