<template>
<div class="container mt-12 mx-auto">
  <h1>A real estate investment strategy to fit your needs</h1>
  <p>Propellor helps facilitate your investment by introducing you to a team of independent professionals including lawyers, accountants, mortgage brokers and the team at Metropolis Real Estate. Propellor works tirelessly with your advisors and other third parties to ensure you have a property investment strategy that meets your goals. We:</p>
  <div class="flex flex-wrap justify-center py-4">
    <div class="p-2 w-full sm:w-1/3 md:w-1/4" v-for="service in services" :key="service">
    <div class="p-4 shadow-light-lg h-full">
      <div class="text-center my-4">
        <i class="fa fa-magic text-orange text-2xl"></i>
      </div>
      <p class="text-base">{{service}}</p>
    </div>
    </div>
  </div>
  <br>
  <div class="flex justify-center">
    <p class="text-red italic">We do not charge for our mentoring services or your investment development strategy</p>
  </div>
  <br>
  <h2>Property management for rental properties</h2>
  <p>We also coordinate the rental of the property on settlement through independent rental property management companies in that area, or we can introduce you to our sister company that manages property. You can Often receive rental guarantees until the property is tenanted – so you have an income from that settlement date!</p>
  <br>
  <h2>Taking the guesswork out of real estate and property investment</h2>
  <p>Propellor’s system takes the guesswork out of property purchasing. Eliminating potential pitfalls in property investments, we minimise the usual risks associated with real estate investments.</p>
  <br>
  <h2>Property investment: a portfolio of assets that work for you</h2>
  <p>Based on your long-term financial needs and short-term challenges, a tailored investment strategy is prepared for you that provides you with conservative ten-year property projections showing expected outgoings, income and tax savings.</p>
  <p>Propellor Property Investments doesn’t believe in shoe-horning an investor into a property. Rather, our objective is for you to find the best solution to suit your earnings and outgoings—and then ensuring you have the right financial and legal structures in place.</p>
  <br>
  <div class="flex justify-center">
    <p class="text-red italic">We do not charge for our mentoring services or your investment development strategy</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        'Provide examples of properties that your financial analysis suggests you can afford',
        'Compile a property pack based on information conveyed to us by developers for each investment property that we consider could help achieve your investment strategy',
        'Assist in ensuring that you and your advisers have a comprehensive due-diligence process on any houses that meet your criteria',
        'Real estate research to ensure your property investment is sound',
        'Research and identify the most desirable property investment locations',
        'Including research on real estate location demographics and forecasted growth',
        'Identify any future developments in the local area that could affect tour chosen property’s value',
        'Liaise and coordinate with your team of professionals to ensure the property sale and purchase agreement is fair to our clients',
        'Liaise and coordinate with your property professionals to ensure that they have all the information necessary to be able to advise you and make the process as stress-free as possible'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
