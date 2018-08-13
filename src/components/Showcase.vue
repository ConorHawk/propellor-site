<template>
<div class="container mt-12 mx-auto">
  <h1>Investment property for sale</h1>
  <p>Propellor does not buy and on-sell any of our own properties nor do we charge you for our services. Our sister company Metropolis Real Estate acts for multiple developers with properties to list that may meet your criteria. This ensures a "deep pool" of potential options for you to choose from. Our sister company Metropolis Real Estate is aware of our 21 point investment criteria and understands, that any sale on behalf of a developer will not occur to one of our clients without meeting those standards.Likewise developers are aware of how we operate. In this way, Propellor has access to a diverse and constantly changing portfolio of investment properties for sale all around New Zealand that we believe gives our clients an excellent investment opportunity.</p>
  <p>An Accountant helps and talks through with you, your personalised investment strategy which contains examples of properties potentially suitable for your circumstance. Conservative ten-year projections on these properties showing expected outgoings, income and tax savings are presented. So you can be assured that the property you choose will suit either your personal or financial circumstances.</p>
  <p>We have also collated comprehensive due diligence information on all the investment properties which may be offered to you. Of course, your lawyer and accountant are free to consider all of this material to assist you. We can also recommend a lawyer and an accountant to advise you independently as well.</p>
  <p>We strive to assist you and your team in finding a property that is a solid build, in a proven growth area with an excellent rental return.</p>
  <br>
  <p class="font-bold">Here is just a small selection of properties in our portfolio which have been offered. Please note that, as all the properties are highly desirable, the stock changes every week…</p>
  <p>The following information on the properties has been obtained by our sister company Metropolis Real Estate who have obtained listings from a number of reputable developers.</p>
  <br>
  <div class="flex">
    <div class="w-1/2 p-2" v-for="property in properties" :key="property.name">
      <div class="shadow-dark-lg rounded overflow-hidden">
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
  <br>
  <p class="italic text-base">*Propellor does not sell property. Propellor, instead, works with their sister company Metropolis Real Estate who provide real estate services, who have authorised us to display their properties.</p>
  <p class="italic text-base">*Disclaimer: While we make every effort to check as to the accuracy of the information provided by us to you, we are in some cases only passing on information that has been conveyed to us by lawyers providing real estate services who have received this information from the respective developers. As such, we cannot guarantee the accuracy of this information. We therefore recommend that you obtain professional advice. 
</p>
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
          description: 'Thackeray Street features ten premium terraced homes, each with three double bedrooms, two and a half bathrooms and a single garage with internal access and additional parking. With open planliving, designer kitchen and private outdoor living these properties are sure to appeal to a wide range of tenants. Built with a mix of concrete and linea cladding, Thackeray Street has all the makings for an easy low maintenance investment property you don\'t want to miss!!',
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
<style>
</style>
