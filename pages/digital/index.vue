<template>
  <div class="bg-gray-50">

    <section>
      <DigitalFrontCover />
    </section>

    <section id="projectsSection" class="relative bg-black rounded-2xl overflow-hidden py-32">
      <div class="front-projects home-container">
          <Projects height="h-80" columns="2" :from="0" :to="12" />
      </div>
    </section>
    <!-- projects section -->

    <section id="creativityUnlock" class="bg-white py-16 md:py-32">

      <div class="home-container">

        <div class="flex flex-col lg:flex-row items-start lg:space-x-24 space-y-12 lg:space-y-0">
          <div class="w-full space-y-3">
            
            <div class="text-[90px] md:text-[140px] font-semibold leading-[35px] md:leading-[55px] lg:leading-[110px] py-7 pr-4 icon-rainbow-text">
              <span class="inline-block -tracking-[5px]">Our</span>
              <br class="block lg:hidden">
              <span class="inline-block -tracking-[5px]">Results</span>
            </div>

          </div>

          <div class="w-full space-y-16 pt-5">

            <p class="font-bold text-[21px] leading-tight">We deliver results through a combination of industry expertise, data-driven strategies and a keen focus on achieving measurable outcomes.</p>


            <div class="space-y-16">
              <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center lg:items-end justify-between w-full pb-16 relative">

                <div class="-space-x-[38px] text-[8rem] lg:text-[9rem] leading-[7rem] font-semibold flex items-center text-center lg:text-left icon-rainbow-text w-full whitespace-nowrap pr-2">
                  <span class="inline-block"> + </span>
                  <span class="inline-block -tracking-[4px]"> 18 </span>
                  <span class="inline-block"> % </span>
                </div>

                <div class="font-bold text-[21px] w-auto whitespace-nowrap -tracking-[0.8px]">Growth Rate</div>

                <div class="absolute bottom-0 left-0 h-px w-full icon-rainbow-bg"></div>

                </div>
                <!-- number -->

                <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center lg:items-end justify-between w-full pb-16 relative">

                <div class="-space-x-[38px] text-[8rem] lg:text-[9rem] leading-[7rem] font-semibold flex items-center text-center lg:text-left icon-rainbow-text w-full whitespace-nowrap pr-2">
                  <span class="inline-block"> + </span>
                  <span class="inline-block -tracking-[4px]"> 25 </span>
                  <span class="inline-block"> % </span>
                </div>

                <div class="font-bold text-[21px] w-auto whitespace-nowrap -tracking-[0.8px]">Conversation Rate</div>
                <div class="absolute bottom-0 left-0 h-px w-full icon-rainbow-bg"></div>


                </div>
                <!-- number -->

                <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center lg:items-end justify-between w-full">

                <div class="-space-x-[38px] text-[8rem] lg:text-[9rem] leading-[7rem] font-semibold flex items-center text-center lg:text-left icon-rainbow-text w-full whitespace-nowrap pr-2">
                  <span class="inline-block"> 8 </span>
                  <span class="inline-block"> % </span>
                </div>

                <div class="font-bold text-[21px] w-auto whitespace-nowrap -tracking-[0.8px]">Less Cost Per Lead</div>

                </div>
                <!-- number -->
            </div>


          </div>

        </div>



          
        <div class="mt-32 md:mt-56 w-full expertises-section icon-rainbow-bg">
            <AdvertisingExpertiseExpertises :expertises="expertises" />
        </div>
        <!-- expertises section end -->          
          
      </div>
      <!-- Container -->

    </section>
    <!-- creativity section end -->



    <section class="clients-section bg-black text-white py-20 md:py-48">

      <div class="home-container">
        <HomeFeaturedClients />
      </div>
      <!-- container -->

    </section>
    <!-- clients -->


    <section class="pt-[15vh] space-y-[10vh]">

      <div class="translate-x-[50rem] text-[9rem] h-[12rem] font-bold icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more-1 whitespace-nowrap -tracking-[5px]">Building brands for more tha 15</div>

      <div class="home-container">
        <div class="pb-[15vh] flex items-end justify-end">
          <div class="w-full md:w-1/3">
            <p>We are a creative user (consumer, human beings) experience agency with 360 marketing services, providing high-end data-driven advertising campaigns, strategies, and storytelling that impact today’s consumers and different target audiences in a great level of understanding across the globe and MENA region.</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

import setupSplits from '~/utils/setupSplits'
import Atos from '~/utils/Atos'

export default {

  // layout: 'advertising',

  head: {
    title: 'Effective Advertising Services in Dubai | ICON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `ICON Digital offers enhanced advertising solutions in Metavers for future advertising to amplify your brand's reach. Benefit from our expertise in driving  campaigns.`
      } 
    ],
  },

  data() {
    return {
      projectsLimit: 4
    }
  },

  mounted() {

    const elements = this.gsap.utils.toArray('.atos');
    Atos(this.gsap, elements)


    let q = this.gsap.utils.selector(this.$el);

    const pathsvg = q(".pathsvg")
    const creativityUnlock = q("#creativityUnlock")
    const splitTextOnScroll = q("#ourClientTitle")

    setupSplits(this.gsap, this.splitText, splitTextOnScroll)

    this.gsap.from(pathsvg, {
      scrollTrigger: {
        trigger: creativityUnlock,
        start:'top 80%',
        end:'bottom 20%',
        scrub: 0.5,
      },
      drawSVG: "0%"
    });


  },

  methods: {

    // setupSplits(element)

  },


  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/digital/featured`)
    const expertises = await $axios.$get(`/home-digital-expertises`)
    const clients = await $axios.$get(`/clients`)

      store.commit('project/setFeaturedProjects', projects)


      return {
        projects,
        expertises,
        clients
      }
    }

}

</script>



<style scoped>
svg {
  stroke-dasharray: 300;
  /* stroke-dashoffset: 300; */
  transition: all .8s ease-in-out;
}
</style>
