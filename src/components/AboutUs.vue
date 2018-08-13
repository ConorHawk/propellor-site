<template>
<div class="container mt-12 mx-auto">
  <h1>About Us</h1>
  <div class="flex flex-wrap">
    <div class="w-3/4">
      <p>Investing in real estate is not an undertaking for the inexperienced. Like any investment or large financial commitment, it is important that property investment is viewed as a business. When looking at property investment you need the right advice and the correct structures implemented.</p>
      <p>We do not charge for our mentoring services or your investment development strategy</p>
      <p>The Director of Propellor Property Investments saw a need for a credible and truly independent company that could help New Zealanders secure a passive income through conservative property investment. We have been working with trusted professionals since 2006. The property investment model we use focuses on customer care and protection and has been very successful. In conjunction with our trusted advisers, Propellor Property Investments draws on this success and expertise, bringing professional property investment strategy into the New Zealand market.</p>
      <p>When dealing with Propellor Property Investments, you will be supported by specialists. These specialists will act as your property ‘business managers’, as we begin the process.</p>
      <p>We co-ordinate the entire process for you from working with our sister company Metropolis Real Estate to finding properties that meet your criteria and arranging due diligence reporting and sourcing professional independent services such as Accountants, Lawyers and Mortgage Brokers. As respected and knowledgeable specialists, the extended Propellor team are able to give you access to the most appropriate property investment stock from houses for sale throughout New Zealand.</p>
      <p>We provide these services for both local and international purchasers.</p>
    </div>
    <div class="w-1/4 px-6">
      <div>
        <div>
          <img class="w-full" src="https://www.propellorproperties.co.nz/images/stories/Propellor_Property_Investments_building.jpg" alt="office">
          <p class="text-base mt-0">Propellor Christchurch office</p>
        </div>
        <div>
          <img class="w-full" src="https://www.propellorproperties.co.nz/images/stories/auckland-office.jpg" alt="">
          <p class="text-base mt-0">Propellor Auckland Office</p>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="mt-12">
    <div class="flex items-center">
      <div>
        <h2 class="text-4xl">Nikki Connors</h2>
        <p class="font-bold font-sans">Senior Property Strategist and Principal of Propellor Property Investments, Registered Financial Advisor</p>
        <p>Known as the Queen of New Zealand property and author of the best-selling book <span class="font-bold">A Fabulous Failure</span>. Her career has spanned over 25 years as board member and Director of many multinational companies both in New Zealand and the UK. In 1999 Nikki was nominated for the Veuve Cliquot UK Businesswoman of the year and shortlisted for the UK Publishing Woman of the year; Finalist in the next magazine businesswoman of the year award 2016. A commentator within the property investment industry, Nikki has been interviewed numerous times by the NZ Herald, Sunday Star Times and Breakfast TV. At various seminars, Nikki has also been a guest speaker alongside the ANZ’s Chief Economist, Cameron Bagrie. Since Nikki's return to New Zealand she has been working with prospective purchasers to assess their financial and social position, their </p>
      </div>
      <div class="p-8">
        <img src="https://www.propellorproperties.co.nz/images/stories/staff/nikki1.jpg" alt="Nikki Connors">
      </div>
    </div>
    <hr>
    <div>
      <h2 class="text-4xl">Propellor's Senior Consultants</h2>
      <div class="flex flex-wrap">
        <div class="w-1/4 p-2" v-for="i in 3" :key="i">
          <div class="p-4 shadow-dark-lg">
            <img class="rounded-full block mx-auto" src="https://www.propellorproperties.co.nz/images/stories/staff/trevorheadshot-small.jpg" alt="">
            <div class="pt-4">
              <h3>Trevor McGrath</h3>
              <p class="text-sm mb-0"><span class="fa fa-phone"></span> +64 (0) 21 348662</p>
              <p class="text-sm mb-0"><span class="fa fa-envelope"></span> <a class="text-orange-dark no-underline" href="mailto:trevor@propellorproperties.co.nz">trevor@propellorproperties.co.nz</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
