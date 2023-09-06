<template>
  <div>
    
    <section class="first-section bg-white py-12 md:py-32">
      <div class="home-container">
        <div class="flex flex-col">
          
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="w-full space-y-3">

              <p class="text-sm font-medium">We are not just a 360 Integrated Marketing, <br class="block md:hidden"> Branding and Communications Agency</p>

              <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -tracking-[1px] md:-tracking-[3px] md:flex flex-col -space-y-4">
                <span class="block md:h-[77px]">We are a Creative</span>
                <span class="icon-rainbow-text md:h-[77px] whitespace-nowrap">Consumer-Experience</span>
                <span class="icon-rainbow-text md:h-[77px]">Agency!</span>
              </h1> 

            </div>

            <div class="w-1/2 h-full hidden md:block">
              <div class="h-full"></div>
            </div> 

          </div>

          <div class="flex flex-wrap md:flex-nowrap items-end justify-between h-[10vh] md:h-[30vh]">

            <div class="flex items-center justify-start space-x-1 mt-10">
              <AssetsAnimatedButtonOne 
                  text="22 Years in Numbers" 
                  target="projects" 
                  backgroundcolor="bg-gray-900" 
                  backgroundcoloronhover="transparent" 
                  textcolor="text-gray-900"
                  textcoloronhover="text-gray-900"
                  bordercolor="border-gray-900" />
            </div>

            <span class="block bg-black w-7 h-7 rounded-full text-white hover:text-black flex items-center justify-center cursor-pointer hover:bg-transparent border-2 border-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </div>

        </div>
      </div>
      <!-- cover container -->
    </section>
    <!--  cover  -->


    <section class="md:pb-32">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1693299696/about-shape_c1gdyn.png" alt="cover">
    </section>


    <section>
      <div class="home-container">
        <div class="flex flex-col leading-none mt-32 md:mt-56">
            <div class="relative">

              <div class="w-full absolute left-0 -top-[55%] md:-top-[50%] flex items-center justify-center">
                <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1693306521/image6_israot.png" alt="world" class="globe w-2/3 md:w-1/2 mx-auto">
              </div>
              
              <span class="absolute bottom-[100%] left-5 md:left-0 text-xl md:text-3xl text-black tracking-none font-semibold">From the</span>

              <span class="md:-ml-12 text-[50vw] md:text-[38vw] font-bold icon-rainbow-text flex items-center md:leading-[29vw] -tracking-[35px] md:-tracking-[40px]">
                UAE
              </span>

              <span class="absolute top-[100%] right-0 w-4/5 lg:w-1/2 space-y-4 pt-5">
                <span class="block text-xl md:text-3xl text-black tracking-none font-semibold">To the world</span>
                <span class="block leading-normal font-medium text-gray-800 text-sm md:text-base">ICON has worked with some of the biggest mega brands in the world, and we successfully established a very strong relationship between our clients and our team which lasted for more than 15 years of creating, designing, implementing, and innovating a variety of successful projects with our global strategic partners and exclusive marketing tools, that made us one of the leading creative agencies in UAE and MENA Region.</span>
              </span>

            </div>
          </div>
      </div>
    </section>


    <section class="mt-[45vh] md:mt-[40vh]">
      <div class="home-container">
        <div class="text-3xl md:text-4xl font-bold">
          <span class="block">How ICON Reimagined</span>
          <span class="black icon-rainbow-text">Creativity & Brand Experience?</span>
        </div>
      </div>

        <div class="mt-10 ml-[5%] md:ml-[10%]" id="carousel-about-features">
          <AboutFourBlocks />
        </div>
    </section>
    <!-- how reimagined -->


    <section class="py-32 my-32 bg-black rounded-2xl overflow-hidden text-white">
      <div class="home-container">
        <div class="md:flex items-end md:space-x-10 space-y-2 md:space-y-0">
          <span class="text-3xl md:text-4xl block font-semibold">2022 at a Glance</span>
          <p class="text-sm">Creativity & Brand Experience <br class="block md:hidden"> our clients and people statics based on the first two quarters of 2022!</p>
        </div>

        <div class="flex mt-20">
          <div class="w-full md:w-2/3 ml-auto space-y-32">

            <div class="flex items-end border-b border-gray-300 pb-10">
              <!-- <div class="w-32">
                <img src="https://icon-ad.com/assets/speaker.svg" alt="speaker" class="w-12">
              </div> -->
              <!-- icon -->
              <div>
                <span class="text-8xl md:text-9xl font-bold icon-rainbow-text-3-stops icon-rainbow-text -space-x-7">
                  <span>401</span>
                  <span>+</span>
                </span>
                <span class="flex items-end space-x-5">
                  <span class="text-3xl font-semibold flex items-center space-x-3">millon people</span>
                  <span class="">Reached with our BTL, ATL & TTL campaigns </span>
                </span>
              </div>
            </div>
            <!-- number -->


            <div class="flex items-end border-b border-gray-300 pb-10">
              <!-- <div class="w-32">
                <img src="https://icon-ad.com/assets/globe.svg" alt="speaker" class="w-12">
              </div> -->
              <!-- icon -->
              <div>
                <span class="flex items-center text-8xl md:text-9xl font-bold icon-rainbow-text-3-stops icon-rainbow-text -space-x-7">
                  <span>16</span>
                  <span>+</span>
                </span>
                <span class="flex items-end space-x-5">
                  <span class="text-3xl font-semibold flex items-center space-x-3">global brands</span>
                  <span class="">worked with us during the first two quarters </span>
                </span>
              </div>
            </div>
            <!-- number -->


            <div class="flex items-end">
              <!-- <div class="w-32">
                <img src="https://icon-ad.com/assets/click.svg" alt="speaker" class="w-12">
              </div> -->
              <!-- icon -->
              <div>
                <span class="flex items-center text-8xl md:text-9xl font-bold icon-rainbow-text-3-stops icon-rainbow-text -space-x-7">
                  <span>50</span>
                  <span>+</span>
                </span>
                <span class="flex items-end space-x-5">
                  <span class="text-3xl font-semibold flex items-center space-x-3">millon people</span>
                  <span class="">positively impacted by our ctas </span>
                </span>
              </div>
            </div>
            <!-- number -->

          </div>
        </div>
        
      </div>
    </section>
    <!-- numbers -->


    <section class="h-[45vh] md:h-[80vh] md:py-0 relative bg-white">
        <div class="flex flex-wrap md:flex-nowrap items-center absolute inset-0 overflow-hidden select-none">
          <div class="order-2 md:order-1 w-full md:w-1/2 flex self-start pt-10 md:pt-40">
            <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1693306590/image5_pzofqx.png" alt="image" class="select-none">
          </div>
          <div class="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:block">
              <div class="space-y-5">
                <div class="text-4xl md:text-3xl md:text-6xl font-bold icon-text icon-rainbow-text -space-y-3 md:-space-y-1">
                  <span class="h-12 md:h-14 block">Embrace the</span> 
                  <span class="h-12 md:h-16 block">Digital Era with Us</span>
                </div>

                <div class="flex items-center space-x-5">
                  <AssetsAnimatedButtonsmOne 
                  text="More About Us" 
                  target="projects" 
                  backgroundcolor="bg-gray-900" 
                  backgroundcoloronhover="transparent" 
                  textcolor="text-gray-900"
                  textcoloronhover="text-gray-900"
                  bordercolor="border-gray-900" />


                  <nuxt-link to="/contact" class="rainbow-border rounded-full p-[2px] group overflow-hidden inline-block">
                    <span class="inline-block bg-white text-black rounded-full px-8 md:px-12 py-2 group-hover:text-white group-hover:bg-transparent">Contact Us</span>
                  </nuxt-link> 
                </div>  

              </div>
          </div>
        </div>
    </section>


  </div>
</template>


<script>

export default {


  head: {
    title: 'About ICON Advertising Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Learn about ICON Advertising agency and our commitment to delivering innovative marketing solutions. Discover our expertise, values, and client-centric approach.`
      }
    ],
  },

  mounted() {

    let q = this.gsap.utils.selector(this.$el);
    const globe = q(".globe");

    this.gsap.to(globe, {
      rotation: 360,
      ease: "none",
      repeat: -1, 
      duration: 200,
    });
  }


  // async asyncData({ $axios, store }) {

    // const expertise = await $axios.$get(`/expertises`)

    // console.log(expertise)

      // return {
      //   expertise
      // }
    // }

}

</script>
