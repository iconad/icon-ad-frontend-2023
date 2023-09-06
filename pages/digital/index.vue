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



    <section id="creativityUnlock" class="bg-white py-32">

      <div class="theme-container">

        <div class="flex items-start">
          <div class="w-full space-y-3">
            
            <div class="text-9xl font-bold -space-y-8">
              <span class="block leading-none icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more -tracking-[5px] h-[8.5rem]">Our</span>
              <span class="block leading-none icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more -tracking-[5px] h-[8.5rem]">Results</span>
            </div>

          </div>

          <div class="w-[40rem] space-y-48">

            <p class="font-medium">We deliver results through a combination of industry expertise, data-driven strategies and a keen focus on achieving measurable outcomes.</p>

            <div class="space-x-px text-9xl font-bold flex items-center icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more">
              <span class="block leading-none -tracking-[5px]"> + </span>
              <span class="block leading-none -tracking-[5px]"> 18 </span>
              <span class="block leading-none -tracking-[5px]"> % </span>
            </div>

          </div>

        </div>


          
        <div class="mt-56 w-full md:w-4/5 expertises-section icon-rainbow-bg-3-stops">
            <AdvertisingExpertiseExpertises :expertises="expertises" />
        </div>
        <!-- expertises section end -->          
          
      </div>
      <!-- Container -->

    </section>
    <!-- creativity section end -->



    <section class="clients-section bg-black text-white py-48">

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
