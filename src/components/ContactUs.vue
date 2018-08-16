<template>
<div class="bg-grey-lighter">
  <div class="relative bg-black flex items-center justify-center" style="min-height:350px;">
    <div class="absolute h-full w-full z-10 bg-cover bg-center opacity-25" style="backgroundImage:url(https://images.pexels.com/photos/6343/village-hotel-building-countryside-6343.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"></div>
    <div class="relative z-20 flex items-center container justify-center">
        <h1 style="font-size: 3.25rem;line-height:1.6" class="main-title text-white inline p-2 px-6 text-center">Contact us</h1>
    </div>
  </div>
  <div class="container py-12 mx-auto flex flex-wrap px-4">
      <div class="w-full md:w-1/2 pr-0 md:pr-32  pb-8">
        <h2>Get in touch</h2>
        <p>Congratulations on taking a step towards securing your financial future! Please fill out the form below and one of our representatives will be in touch with you in the near future.</p>
        <div class="mb-6">
            <label class="font-sans uppercase text-xs text-grey-darker" for="">Email</label><br>
            <input class=" rounded p-3 text-xl text-grey-darkest" type="text">
        </div>
        <div class="mb-6">
            <label class="font-sans uppercase text-xs text-grey-darker" for="">Message</label><br>
            <textarea class=" rounded p-3 text-xl text-grey-darkest w-full" rows="5"></textarea>
        </div>
        <button class="btn">Send message</button>
      </div>
      <div class="w-full md:w-1/2">
        <div class="shadow-light-lg w-full rounded overflow-hidden flex bg-white mb-8">
            <div class="w-1/2 flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.944996048314!2d172.61200961594676!3d-43.50348298813725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318ba56c9a8789%3A0xe58cf352078b5310!2s370+Papanui+Rd%2C+Strowan%2C+Christchurch+8052!5e0!3m2!1sen!2snz!4v1534382702918" width="100%" height="280" frameborder="0" style="border:0" allowfullscreen></iframe></div>
            <div class="w-1/2 p-4">
                <h2>Christchurch Office</h2>
                <p class="text-base m-0 text-grey-darker">370 Papanui Road</p>
                <p class="text-base m-0 text-grey-darker">Strowan</p>
                <p class="text-base m-0 text-grey-darker">New Zealand</p>
                <p class="text-base mt-8 mb-0"><i class="fas fa-phone"></i> +64 (0) 3 375 9014</p>
            </div>
        </div>
        <div class="shadow-light-lg w-full rounded overflow-hidden flex bg-white mb-8">
            <div class="w-1/2 flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.944996048314!2d172.61200961594676!3d-43.50348298813725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318ba56c9a8789%3A0xe58cf352078b5310!2s370+Papanui+Rd%2C+Strowan%2C+Christchurch+8052!5e0!3m2!1sen!2snz!4v1534382702918" width="100%" height="280" frameborder="0" style="border:0" allowfullscreen></iframe></div>
            <div class="w-1/2 p-4">
                <h2>Christchurch Office</h2>
                <p class="text-base m-0 text-grey-darker">370 Papanui Road</p>
                <p class="text-base m-0 text-grey-darker">Strowan</p>
                <p class="text-base m-0 text-grey-darker">New Zealand</p>
                <p class="text-base mt-8 mb-0"><i class="fas fa-phone"></i> +64 (0) 3 375 9014</p>
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
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #mapid { height: 180px; }
</style>
