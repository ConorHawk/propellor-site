<template>
<div>
    <div class="relative bg-black flex items-center justify-center" style="min-height:350px;">
        <div class="absolute h-full w-full z-10 bg-cover bg-center opacity-25" style="backgroundImage:url(https://images.pexels.com/photos/6343/village-hotel-building-countryside-6343.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"></div>
        <div class="relative z-20 flex items-center container justify-center">
            <h1 style="font-size: 3.25rem;line-height:1.6" class="main-title text-white inline p-2 px-6 text-center">Properties</h1>
        </div>
    </div>
    <div class="container mt-8 mx-auto">
    <div class="mb-6">
        <div class="flex flex-col md:flex-row py-4">
            <div class="flex-1 px-4">
                <label class="font-sans uppercase text-xs font-grey-darker font-semibold" for="name">Name</label><br>
                <input class="text-grey-darkest bg-grey-lighter rounded-sm p-2 shadow-inner w-full font-sans" id="name" type="text">
            </div>
            <div class="flex-1 px-4">
                <label class="font-sans uppercase text-xs font-grey-darker font-semibold" for="price">Price</label>
                <div class="flex items-center">
                    <select class="appearance-none text-grey-darkest bg-grey-lighter rounded-sm p-2 shadow-inner w-full font-sans" name="" id="price">
                        <option disabled selected value=""></option>
                        <option value="">$100,000</option>
                        <option value="">$200,000</option>
                        <option value="">$300,000</option>
                    </select>
                    <span class="px-3 font-sans uppercase text-xs font-grey-darker">to</span>
                    <select class="appearance-none text-grey-darkest bg-grey-lighter rounded-sm p-2 shadow-inner w-full font-sans" name="" id="">
                        <option disabled selected value=""></option>
                        <option value="">$100,000</option>
                        <option value="">$200,000</option>
                        <option value="">$300,000</option>
                    </select>
                </div>
            </div>
            <div class="flex-1 px-4">
                <label class="font-sans uppercase text-xs font-grey-darker font-semibold" for="appraisedPrice">APPRAISED RENTAL RETURN</label>
                <div class="flex items-center">
                    <select class="appearance-none text-grey-darkest bg-grey-lighter rounded-sm p-2 shadow-inner w-full font-sans" name="" id="appraisedPrice">
                        <option disabled selected value=""></option>
                        <option value="">$100,000</option>
                        <option value="">$200,000</option>
                        <option value="">$300,000</option>
                    </select>
                    <span class="px-3 font-sans uppercase text-xs font-grey-darker">to</span>
                    <select class="appearance-none text-grey-darkest bg-grey-lighter rounded-sm p-2 shadow-inner w-full font-sans" name="" id="">
                        <option disabled selected value=""></option>
                        <option value="">$100,000</option>
                        <option value="">$200,000</option>
                        <option value="">$300,000</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <div class="text-right px-4">
                <button class="btn text-sm"><i class="fas fa-search"></i> Search</button>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap">
        <div class="w-full sm:w-full md:w-1/3 p-2" v-for="property in properties" :key="property.name">
        <div class="shadow-dark-lg rounded-lg overflow-hidden h-full flex flex-col">
            <div class="h-48 bg-center bg-cover" :style="{'backgroundImage': `url(${property.image})`}"></div>
                <div class="flex-1 flex flex-col justify-between">
                    <div class="p-6">
                        <h3 class="font-normal text-base text-grey-darker">{{property.name}}</h3>
                        <h2 class="text-grey-darkest">{{property.price}}</h2>
                        <h3 class="text-sm font-semibold text-grey-darker"><i class="fas fa-map-marker-alt"></i> {{property.location}}</h3>
                        <p class="text-base text-grey-darker mt-6">{{property.description}}</p>
                    </div>
                    <div class="px-6 py-4 bg-grey-lighter">
                        <p class="font-sans uppercase text-xs font-semibold text-grey-darker mb-1">Appraised Rental Return: <span class="font-normal"></span></p>
                        <h2 class="font-bold text-xl">{{property.return}}<span class="text-sm font-normal"> / week</span></h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <br>
        <p class="italic text-base">*Propellor does not sell property. Propellor, instead, works with their sister company Metropolis Real Estate who provide real estate services, who have authorised us to display their properties.</p>
        <p class="italic text-base">*Disclaimer: While we make every effort to check as to the accuracy of the information provided by us to you, we are in some cases only passing on information that has been conveyed to us by lawyers providing real estate services who have received this information from the respective developers. As such, we cannot guarantee the accuracy of this information. We therefore recommend that you obtain professional advice. 
        </p>
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
          description: 'Thackeray Street features ten premium terraced homes, each with three double bedrooms, two and a half bathrooms and a single garage with internal access and additional parking. With open planliving, designer kitchen and private outdoor living these properties are sure to appeal to a wide range of tenants. Built with a mix of concrete and linea cladding, Thackeray Street has all the makings for an easy low maintenance investment property you don\'t want to miss!!',
          price: 'From $599,000',
          return: '$480 - $500',
          image: 'https://www.propellorproperties.co.nz/images/stories/image4.JPG'
        }, {
          name: 'Awatea Green - Home and Income',
          location: 'Christchurch',
          description: 'With a masterplan that has been shaped to combine a real sense of community, Awatea Green incorporates a thoughtful mix of housing options for a wide variety of investors and homeowners. Shared greenspaces, playground and meandering pathways and cycleways make Awatea Green a great place to invest. Connections to neighbouring communities couldn\'t be easier with local schools, shopping, cafes and restaurants just minutes away',
          price: 'From $609,000',
          return: '$750 - $790',
          image: 'https://www.propellorproperties.co.nz/images/stories/image4.JPG'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    select:not([multiple]) {
    background-image: url('/static/images/caret-down-solid.svg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 15% 40%;
    padding-right: 30px;
    }
</style>
