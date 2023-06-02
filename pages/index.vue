<template>
  <div class="bg-black">

    <div class="w-full">
      <div class="home-container relative space-y-10">

        <div class="text-white pt-32 space-y-5">
          <h1 class="text-7xl font-bold">Creativity & Brand <br class="hidden lg:block"> Experience <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-purple to-theme-pink"> Reimagined!</span></h1>
          <h2 class="text-2xl leading-lose">A 360° Integrated Creative, Branding, Marketing and <br class="hidden lg:block"> Communications Agency Based in Dubai, UAE.</h2>
        </div>


        <div class="w-full flex items-center justify-center bg-black md:bg-transparent rounded-2xl overflow-hidden">
          <div class="w-full h-auto bg-white box-shadow overflow-hidden rounded-2xl overflow-hidden">
            <client-only>
              <vimeo-player
                v-cloak
                @ready="onReady"
                ref="player"
                :options="options"
                :video-id="`766097376`"
              ></vimeo-player>
            </client-only>
          </div>
        </div>
        <!-- video -->


        <div class="w-full text-white py-10">

          <div class="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
              <div class="w-full lg:w-1/4">
                  <div class="space-y-10">
                      <div class="space-y-4 text-xl">
                          <p>Truly global with local reach, our creative, data-driven and strategic approach secures above average ROIs for our partners whilst securing a brighter, better future for our people.</p>
                      </div>
                  </div>

              </div>
              <div class="w-full lg:w-1/2">

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div label="Trumpet" class="w-full space-y-2 lg:ml-auto">
                          <h2 class="text-lg font-semibold">We Actively Listen</h2>        
                          <div class="text-sm">
                              <p>
                                Listening to our clients as well as the target audience, we see conversations as a chance to discover, understand, evaluate, and implement successful projects with results that positively impact the audience’s life our partners' brand perception.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->
                      
                      <div class="w-full space-y-2 lg:mr-auto">
                          <h2 class="text-lg font-semibold">We're Creative and Data-driven</h2>        
                          <div class="text-sm">
                              <p>
                                We challenge stereotypes in every aspect of our work, while our creatives seamlessly collaborate with our strategy and planning teams, with the ultimate goal of conceptualizing, executing and delivering award-winning campaigns.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->

                      <div class="w-full space-y-2 lg:ml-auto">
                          <h2 class="text-lg font-semibold">We're In It Together</h2>        
                          <div class="text-sm">
                              <p>
                                We’re at our best when we work together, with our clients, partners and colleagues, our work environment is diverse, creative-oriented and most importantly people centric agency.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->

                      <div class="w-full space-y-2 lg:mr-auto">
                          <h2 class="text-lg font-semibold">We're Positive</h2>        
                          <div class="text-sm">
                              <p>
                                We seek solutions to problems and always find a way forward, we bring passion and energy to every situation we encounter.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->

                  </div>
              </div>
          </div>

        </div>
        <!-- Profile -->


        <div>

          <div class="grid grid-cols-2 lg:grid-cols-10 gap-x-5 gap-y-2">
            <div v-for="client in clients" :key="client.id">
              <div class="w-full">
                <UtilsProjectImage options="w-full object-contain mx-auto" :mini="client.image_mini_white" :image="client.white_logo" :title="client.title" />
              </div>
            </div>
          </div>

        </div>
        <!-- clients -->

        <div class="pt-10">

          <div class="text-2xl text-white mb-10 tracking-wide">OUR SERVICES</div>
          <div class="text-white w-full space-y-10">

            <a href="/advertising" class="flex items-center justify-between w-full border-b border-gray-100 hover:border-white transition-all py-5">
              <span class="text-7xl block font-sembold capitalize">Advertising</span>
              <span class="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="36" fill="none"><path fill="#fff" d="M35.273 35.417a2.465 2.465 0 0 1-1.612-.571c-.881-.753-.881-2 0-2.753l16.844-14.388L33.66 3.318c-.881-.753-.881-2 0-2.753.882-.753 2.341-.753 3.223 0l18.455 15.764c.881.753.881 2 0 2.753L36.884 34.846a2.465 2.465 0 0 1-1.611.571Z"/><path fill="#fff" d="M52.75 19.868H2.25c-1.23 0-2.25-.979-2.25-2.16 0-1.18 1.02-2.159 2.25-2.159h50.5c1.23 0 2.25.98 2.25 2.16 0 1.18-1.02 2.16-2.25 2.16Z"/></svg>
              </span>
            </a>

            <a href="/advertising" class="flex items-center justify-between w-full border-b border-gray-100 hover:border-white transition-all py-5">
              <span class="text-7xl block font-sembold capitalize">Digital</span>
              <span class="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="36" fill="none"><path fill="#fff" d="M35.273 35.417a2.465 2.465 0 0 1-1.612-.571c-.881-.753-.881-2 0-2.753l16.844-14.388L33.66 3.318c-.881-.753-.881-2 0-2.753.882-.753 2.341-.753 3.223 0l18.455 15.764c.881.753.881 2 0 2.753L36.884 34.846a2.465 2.465 0 0 1-1.611.571Z"/><path fill="#fff" d="M52.75 19.868H2.25c-1.23 0-2.25-.979-2.25-2.16 0-1.18 1.02-2.159 2.25-2.159h50.5c1.23 0 2.25.98 2.25 2.16 0 1.18-1.02 2.16-2.25 2.16Z"/></svg>
              </span>
            </a>

            <a href="/advertising" class="flex items-center justify-between w-full border-b border-gray-100 hover:border-white transition-all py-5">
              <span class="text-7xl block font-sembold capitalize">Branding</span>
              <span class="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="36" fill="none"><path fill="#fff" d="M35.273 35.417a2.465 2.465 0 0 1-1.612-.571c-.881-.753-.881-2 0-2.753l16.844-14.388L33.66 3.318c-.881-.753-.881-2 0-2.753.882-.753 2.341-.753 3.223 0l18.455 15.764c.881.753.881 2 0 2.753L36.884 34.846a2.465 2.465 0 0 1-1.611.571Z"/><path fill="#fff" d="M52.75 19.868H2.25c-1.23 0-2.25-.979-2.25-2.16 0-1.18 1.02-2.159 2.25-2.159h50.5c1.23 0 2.25.98 2.25 2.16 0 1.18-1.02 2.16-2.25 2.16Z"/></svg>
              </span>
            </a>

            <a href="/advertising" class="flex items-center justify-between w-full border-b border-gray-100 hover:border-white transition-all py-5">
              <span class="text-7xl block font-sembold capitalize">ICON Plus</span>
              <span class="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="36" fill="none"><path fill="#fff" d="M35.273 35.417a2.465 2.465 0 0 1-1.612-.571c-.881-.753-.881-2 0-2.753l16.844-14.388L33.66 3.318c-.881-.753-.881-2 0-2.753.882-.753 2.341-.753 3.223 0l18.455 15.764c.881.753.881 2 0 2.753L36.884 34.846a2.465 2.465 0 0 1-1.611.571Z"/><path fill="#fff" d="M52.75 19.868H2.25c-1.23 0-2.25-.979-2.25-2.16 0-1.18 1.02-2.159 2.25-2.159h50.5c1.23 0 2.25.98 2.25 2.16 0 1.18-1.02 2.16-2.25 2.16Z"/></svg>
              </span>
            </a>

          </div>

        </div>
        <!-- services -->


        <section id="projectsSection" class="relative">
          <div class="front-projects theme-container-3xl px-0 md:px-5 pt-16 md:pt-20">
              <AdvertisingProjectProjects page="home" mode="dark" :from="0" :to="8" />
          </div>
        </section>
        <!-- projects -->

      </div>      
    </div>


    <div class="newsletter-section py-20 3xl:py-32 bg-theme-gray-dark relative mt-32">

      <div class="theme-container-3xl">

      <FormsNewsLetter />

      </div>

    </div>
    <!-- new letter section -->      

  </div>
</template>

<script>

import setupSplits from '~/utils/setupSplits'
import Atos from '~/utils/Atos'

export default {

  layout: 'default',

  data() {
    return {
      projectsLimit: 4,
      isVideoLoading: true,
      options: {
        muted: true,
        autoplay:true,
        responsive:true,
        controls:true,
        portrait:false,
        byline:false,
        color:"000000",
        title:false
      },
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

    onReady () {
      this.isVideoLoading = false
    }

    // setupSplits(element)

  },

  computed: {
    video: {
      get: function () {
        return this.$store.state.isCoverVideo
      },
      set: function (value) {
        this.$store.commit('setIsCoverVideo', value)
      }
    }
  },


  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/featured`)
    const clients = await $axios.$get(`/all-clients`)

      store.commit('project/setFeaturedProjects', projects)


      return {
        projects,
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
