<template>
  <div>

    <section id="coverSection">
        <AdvertisingFrontCover />
    </section>
    <!-- cover section -->

    <section id="projectsSection" class="relative bg-black rounded-2xl overflow-hidden py-16 md:py-32">
      <div class="front-projects home-container">
          <Projects height="h-auto md:h-80" columns="2" :from="0" :to="12" />
      </div>
    </section>
    <!-- projects section -->



    <section id="creativityUnlock" class="bg-white py-16 md:py-32">

      <div class="home-container space-y-20">

        <div class="flex flex-col md:flex-row items-center space-y-10">
          <div class="w-full md:-space-y-3">
            
            <div class="text-[4.5rem] md:text-[120px] lg:text-[150px] font-semibold -space-y-3 md:-space-y-7 flex flex-col w-full md:w-[95%] -ml-3">
              <span class="leading-none icon-rainbow-text inline-block -tracking-[4px] md:-tracking-[10px]">Unlock</span>
              <span class="leading-none icon-rainbow-text inline-block -tracking-[4px] md:-tracking-[10px] pb-3">Creativity</span>
            </div>
            <p class="font-medium font-[18px]">
              Check more projects, unlock full case studies, and <br class="hidden md:block"> showcase how we tackle projects
            </p>

          </div>

          <div class="w-4/5 mx-auto md:w-[40rem]">
            <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692278795/head_gsr0yv.png" alt="Unlock creativity">
          </div>

        </div>


          
        <div class="w-full expertises-section icon-rainbow-bg">
            <AdvertisingExpertiseExpertises :expertises="expertises" />
        </div>
        <!-- expertises section end -->          
          
      </div>
      <!-- Container -->

    </section>
    <!-- creativity section end -->



    <section class="clients-section bg-black text-white py-16 md:py-48">

      <div class="home-container">
        <HomeFeaturedClients />
      </div>
      <!-- container -->

    </section>
    <!-- clients -->


    <section class="pt-[15vh] space-y-[10vh]">

      <div class="translate-x-[50rem] text-[160px] pb-2 font-bold icon-rainbow-text whitespace-nowrap -tracking-[10px]">Building brands for more tha 15</div>

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
        content: `ICON Plus offers enhanced advertising solutions in Metavers for future advertising to amplify your brand's reach. Benefit from our expertise in driving  campaigns.`
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

    const projects = await $axios.$get(`/projects/featured`)
    const expertises = await $axios.$get(`/home-expertises`)
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
