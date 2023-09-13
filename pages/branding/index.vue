<template>
  <div>

    <BrandingFrontCover />


    <section id="projectsSection" class="relative bg-black rounded-2xl overflow-hidden py-32">
      <div class="front-projects home-container">
          <Projects columns="1" :from="0" :to="4" height="h-[30rem]" />
      </div>
    </section>
    <!-- projects section -->




    <section id="creativityUnlock" class="bg-white py-32">

      <div class="home-container">

        <div class="flex flex-col md:flex-row items-center space-y-10">
          <div class="w-full md:-space-y-3">
            
            <div class="text-[4.5rem] md:text-[120px] lg:text-[150px] font-semibold -space-y-3 md:-space-y-8 flex flex-col w-full md:w-[95%] -ml-3">
              <span class="leading-none icon-rainbow-text inline-block -tracking-[4px] md:-tracking-[7px]">Unlock</span>
              <span class="leading-none icon-rainbow-text inline-block -tracking-[4px] md:-tracking-[7px] pb-3">Creativity</span>
            </div>
            <p class="font-medium font-[18px]">
              Check more projects, unlock full case studies, and <br class="hidden md:block"> showcase how we tackle projects
            </p>

          </div>

          <div class="w-4/5 mx-auto md:w-[40rem]">
            <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692278795/head_gsr0yv.png" alt="Unlock creativity">
          </div>

        </div>


          
        <div class="w-full expertises-section icon-rainbow-bg mt-16 md:mt-0">
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
  export default {

    name: 'BrandingHome',
    // layout: 'branding',

    head: {
      title: 'Trusted Clients of ICON Advertising',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: `Build a strong brand identity with ICON's branding services. From logo design to brand strategy, we help businesses leave a lasting impression on their audience.`
        } 
      ],
    },

    methods: {

      goTo (value) {
        this.$router.push({path: `${value}`});
      },

      breakText (text) {
        return text.split('#');
      }

    },

    async asyncData({ $axios, store }) {

      const projects = await $axios.$get(`/projects/brand-home`)
      const expertises = await $axios.$get(`/home-brand-expertises`)
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

<style>
  .social-columns-grid {
    columns: 2;
  }
</style>
