<template>
  <div class="bg-gray-50">

    <BrandingFrontCover />

    <div class="relative">
    <section class="brand-projects theme-container relative z-[3]">

      <div class="grid cols-1 gap-8">
        <div v-for="(project, i) in projects" :key="i">
          <nuxt-link :to="`/branding/projects${project.slug}`">
            <UtilsProjectImage options="bg-gray-100 w-full h-auto md:h-[40rem] object-cover rounded-2xl overflow-hidden" :mini="project.image_mini" :image="project.large_thumb" />
          </nuxt-link>
        </div>
      </div>


    </section>
    <!-- brand projects -->

    <div class="absolute w-full h-96 pointer-events-none bg-gradient-to-t from-white to-transparent bottom-0 left-0"></div>

    </div>

    <section id="creativityUnlock" class="bg-white creativity-unlock overflow-hidden relative section-screen-height section-screen-height_100 flex items-center justify-center">

      <div class="absolute w-full h-32 bg-gradient-to-b from-white to-transparent top-0 left-0 z-[3]"></div>
      <div class="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 left-0 z-[3]"></div>

      <img src="~assets/images/rainbowlines.svg" alt="image" id="rainbowlines" class="w-full absolute top-[1rem] lg:inset-0 left-[36rem] lg:left-32 2xl:left-10 h-full transform scale-x-[3.8] scale-y-[4.8] lg:scale-125 2xl:scale-150 ">

      <div class="theme-container unloak-creativity relative z-1 text-black text-center space-y-20">
          <div class="lock-icon flex justify-center">
            <AssetsLock options="w-10 h-10 transform text-black hover:scale-125 transition-all duration-300" />
          </div>
          <!-- icon -->
          <div class="space-y-3">
            <h3 class="text-4xl 2xl:text-6xl uppercase font-bold"> Unlock Creativity </h3>
            <p class="2xl:text-xl">
              <span class="block-span">Check more projects, unlock full case studies, and</span>
              <span class="block-span">showcase how we tackle projects</span>
            </p>
          </div>
          <div>
            <nuxt-link to="/branding/projects" class="text-white bg-black uppercase font-medium rounded-full px-16 py-4 border-2 border-transparent hover:bg-white hover:border-black hover:text-black hover:font-bold"> our work </nuxt-link>
          </div>
      </div>
      <!-- unloak the creativity -->

      </section>
      <!-- creativity section end -->

    <section id="digitalExperie" class="bg-black">
      <BrandingExpertiseExpertises :expertise="expertise" />
    </section>
    <!-- our digital experience -->


    <section id="Clients" class="clients-section py-32 3xl:py-64 space-y-16">

        <BrandingClientClients :clients="clients" />

    </section>
    <!-- expertises section end -->

    <section id="ContactSection" class="contact-section text-white pb-32">
       <div class="theme-container">
         <div class="bg-gray-100 rounded-2xl overflow-hidden px-10 lg:px-0 py-32">
          <FormsContactUs
            :data="{
              title: 'have an',
              title2: 'impact',
              subtitle: 'Join the most powerful',
              subtitle2: 'brands in the world.'
          }"
            />
         </div>
       </div>
    </section>
    <!-- contact section end -->



  </div>
</template>

<script>
  export default {

    name: 'BrandingHome',
    layout: 'branding',

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
    const expertise = await $axios.$get(`/home-brand-expertises`)
    const clients = await $axios.$get(`/clients-brand`)

      return {
        projects,
        expertise,
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
