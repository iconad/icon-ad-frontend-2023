<template>
  <div class="bg-black">

    <div class="w-full">
      <div class="home-container relative space-y-10">

        <div class="w-full pt-6 md:pt-16 flex items-center justify-center bg-black md:bg-transparent rounded-2xl overflow-hidden">
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



        <div class="w-full text-white pt-10 py-20">

          <div class="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
              <div class="w-full lg:w-1/2">

                <div class="text-white space-y-5">
                  <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100" class="text-3xl md:text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-pink to-theme-pink">Creativity & Brand <br class="hidden lg:block"> Experience  Reimagined!</h1>
                  <h2 data-aos="fade-in" data-aos-duration="500" data-aos-delay="200" class="text-xl leading-lose">A 360° Integrated Creative, Branding, Marketing and Communications Agency Based in Dubai, UAE.</h2>
                </div>                

              </div>
              <div class="w-full lg:w-1/2">

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" class="w-full space-y-2 lg:ml-auto">
                          <h2 class="text-lg font-semibold">We Actively Listen</h2>        
                          <div class="text-sm">
                              <p>
                                Listening to our clients as well as the target audience, we see conversations as a chance to discover, understand, evaluate, and implement successful projects with results that positively impact the audience’s life our partners' brand perception.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->
                      
                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" class="w-full space-y-2 lg:mr-auto">
                          <h2 class="text-lg font-semibold">We're Creative and Data-driven</h2>        
                          <div class="text-sm">
                              <p>
                                We challenge stereotypes in every aspect of our work, while our creatives seamlessly collaborate with our strategy and planning teams, with the ultimate goal of conceptualizing, executing and delivering award-winning campaigns.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->

                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" class="w-full space-y-2 lg:ml-auto">
                          <h2 class="text-lg font-semibold">We're In It Together</h2>        
                          <div class="text-sm">
                              <p>
                                We’re at our best when we work together, with our clients, partners and colleagues, our work environment is diverse, creative-oriented and most importantly people centric agency.
                              </p>
                          </div>            
                      </div>
                      <!-- #item -->

                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" class="w-full space-y-2 lg:mr-auto">
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
      </div>

      <section id="Clients" class="clients-section py-32 3xl:py-64 bg-[#1A1A1A] text-white relative z-10">
        <AdvertisingClientClientsWhite />
      </section>
      <!-- clients -->

      <div class="home-container">
        
        <div class="pt-10">

          <h3 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100" class="text-3xl pt-10 lg:text-4xl 3xl:text-5xl uppercase text-white text-center font-bold w-5/6 lg:w-auto mx-auto"> our services </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white w-full py-20">

            <nuxt-link to="/advertising" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100" class="block hover:shadow-2xl hover:shadow-theme-red/30 transition-all px-6 py-10 space-y-10 bg-theme-gray-dark rounded-2xl">
              <div class="md:h-10 2xl:h-20 flex items-start justify-center">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/large/public/2023-06/ad.png?itok=ziE4tbWs" class="w-1/3 md:w-1/2 mx-auto" alt="icon advertising">
              </div>
              <span class="block text-center">
                <span class="text-sm md:text-base font-semibold text-center text-theme-red">Advertising & Creative arm of ICON</span>
                <!-- <span class="text-xs">
                  ICON's Advertising division possesses a diverse range of creative abilities in various fields such as advertising, design, content creation, conceptualization, media production, storytelling, and public relations. This broad range of skills enables us to stand out and lead the industry in the MENA region by utilizing our vision, imagination, and creativity along with practical B2C & B2B marketing insights and audience findings.
                </span> -->
              </span>
            </nuxt-link>

            <nuxt-link to="/digital" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100" class="block hover:shadow-2xl hover:shadow-theme-pink/30 transition-all px-6 py-10 space-y-10 bg-theme-gray-dark rounded-2xl">
              <div class="md:h-10 2xl:h-20 flex items-start justify-center">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/large/public/2023-06/digital.png?itok=jFgqlzxo" class="w-1/3 md:w-1/2 mx-auto" alt="icon digital">
              </div>
              <span class="block text-center">
                <span class="text-sm md:text-base font-semibold text-center text-theme-pink">Digital Planning & Marketing</span>
                <!-- <span class="text-xs">
                  ICON's Digital division is equipped with a profound comprehension of the modern-day competitive digital landscape, enabling brands to establish a powerful digital footprint with a complete range of data-driven digital services, from the initial stages such as strategy development, platform management, and design to media buying, engagement, and content creation specifically customized for all industry platforms and committed to staying up to date with the most recent tools and trends and measurable performance.                </span> -->
              </span>
            </nuxt-link>

            <nuxt-link to="/branding" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300" class="block hover:shadow-2xl hover:shadow-theme-purple/30 transition-all px-6 py-10 space-y-10 bg-theme-gray-dark rounded-2xl">
              <div class="md:h-10 2xl:h-20 flex items-start justify-center">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/large/public/2023-06/branding.png?itok=MOYP4UwI" class="w-1/3 md:w-1/2 mx-auto" alt="icon branding">
              </div>
              <span class="block text-center">
                <span class="text-sm md:text-base font-semibold text-center text-theme-purple">Branding & Brand Strategy Solutions </span>
                <!-- <span class="text-xs">
                  ICON's Branding division is committed to helping brands enhance their influence and distinctiveness by differentiating themselves from competitors and offering compelling reasons for their target audience to choose them. We adopt a comprehensive approach to Sonic, motion, and sensory branding, covering everything from creating brand strategies to establishing positioning and propositions. Whether we are developing a new branding concept or designing and launching an integrated branding campaign, our goal is to collaborate with brands to create a lasting impact on their audience.                </span> -->
              </span>
            </nuxt-link>

            <nuxt-link to="/plus" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" class="block hover:shadow-2xl hover:shadow-theme-sky/30 transition-all px-6 py-10 space-y-10 bg-theme-gray-dark rounded-2xl">
              <div class="md:h-10 2xl:h-20 flex items-start justify-center">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/large/public/2023-06/plus.png?itok=Ao979LCP" class="w-1/3 md:w-1/2 mx-auto" alt="plus logo">
              </div>
              <span class="block text-center">
                <span class="text-sm md:text-base font-semibold text-center text-theme-sky">Tech, Metaverse, Web3, VR , AR +</span>
                <!-- <span class="text-xs">
                  ICON's digital transformation division is proficient in UI, UX, web development, web3, platform design, Metaverse, and app integrations, which empowers us to deliver captivating and immersive brand experiences for global brands. By creating engaging and interactive digital experiences, we bring brands to life and establish lasting connections between companies and their target audience. Our expertise extends to designing experiences for various applications, whether it's a mobile app, an augmented reality solution, or a retailer's journey.                </span> -->
              </span>
            </nuxt-link>

          </div>

        </div>
        <!-- services -->
        </div>


        <section class="py-32 3xl:py-64 bg-[#1A1A1A] text-white relative z-10 px-4 lg:px-0">

          <h3 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100" class="text-3xl lg:text-4xl 3xl:text-5xl uppercase text-white text-center font-bold w-5/6 lg:w-auto mx-auto pb-10"> ICON at a Glance </h3>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-center pt-10 w-full lg:w-3/4 2xl:w-2/3 mx-auto">

            <!-- hover:shadow-2xl hover:shadow-theme-red/30 -->
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100" class="w-full transition-all duration-400 md:w-[16rem] mx-auto bg-[#1A1A1A] rounded-lg text-white px-5 py-10 space-y-8 text-left">
              <div class="text-2xl md:text-3xl leading-none">
                <span class="block text-5xl mb-3 font-semibold rainbow-text-more-red">15+</span>
                <span class="block font-semibold">YEARS</span>
                <span class="block font-semibold">EXPERIENCE</span>
              </div>
              <div class="text-lg uppercase hidden">
                <span class="block">Reached with our</span>
                <span class="block">BTL, ATL, & TTL</span>
                <span class="block">campaigns</span>
              </div>
            </div>
            <!-- glance box -->

            <!-- hover:shadow-2xl hover:shadow-theme-sky/30 -->
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200" class="w-full transition-all duration-400 md:w-[16rem] mx-auto bg-[#1A1A1A] rounded-lg text-white px-5 py-10 space-y-8 text-left">
              <div class="text-2xl md:text-3xl leading-none">
                <span class="block text-5xl mb-3 font-semibold rainbow-text-more-red">16+</span>
                <span class="block font-semibold">GLOBAL</span>
                <span class="block font-semibold">BRANDS</span>
              </div>
              <div class="text-lg uppercase hidden">
                <span class="block">Worked with us</span>
                <span class="block">during the the first</span>
                <span class="block">two quarters</span>
              </div>
            </div>
            <!-- glance box -->

            <!-- hover:shadow-2xl hover:shadow-theme-red/30 -->
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300" class="w-full transition-all duration-400 md:w-[16rem] mx-auto bg-[#1A1A1A] rounded-lg text-white px-5 py-10 space-y-8 text-left">
              <div class="text-2xl md:text-3xl leading-none">
                <span class="block text-5xl mb-3 font-semibold rainbow-text-more-red">45+</span>
                <span class="block font-semibold">IN-HOUSE</span>
                <span class="block font-semibold">TEAM</span>
              </div>
              <div class="text-lg uppercase hidden">
                <span class="block">Positively impacted</span>
                <span class="block">by our CTAs</span>
              </div>
            </div>
            <!-- glance box -->

            <!-- hover:shadow-2xl hover:shadow-theme-sky/30 -->
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" class="w-full transition-all duration-400 md:w-[16rem] mx-auto bg-[#1A1A1A] rounded-lg text-white px-5 py-10 space-y-8 text-left">
              <div class="text-2xl md:text-3xl leading-none">
                <span class="block text-5xl mb-3 font-semibold rainbow-text-more-red">500+</span>
                <span class="block font-semibold">CLIENTS</span>
              </div>
              <div class="text-lg uppercase hidden">
                <span class="block">Worked with us</span>
                <span class="block">during the the first</span>
                <span class="block">two quarters</span>
              </div>
            </div>
            <!-- glance box -->

          </div>
        </section>
        <!-- clients -->

      <div class="home-container">

        <section id="projectsSection" class="relative">

          <h3 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100" class="pb-20 lg:pb-0 text-3xl pt-20 lg:text-4xl 3xl:text-5xl uppercase text-white text-center font-bold w-5/6 lg:w-auto mx-auto"> Recent Projects </h3>

          <div class="front-projects px-0 md:px-5 pb-10">
              <AdvertisingProjectProjects page="home" mode="dark" :from="0" :to="8" />
          </div>
        </section>
        <!-- projects -->

      </div>      
    </div>


        <!-- <section 
        data-aos="fade-in" 
        data-aos-delay="500" 
        data-aos-duration="200"
        data-aos-easing="ease-in-out-cubic"
        class="text-white text-5xl">This should fade in</section> -->

    <section id="ContactSection" class="contact-section bg-theme-gray-dark bg-opacity-50 text-white py-32">
       <div class="theme-container">
         <FormsContactUsBlack type="home page"
          :data="{
            title: 'have an',
            title2: 'impact',
            subtitle: '',
            subtitle2: ''
         }"
          />
       </div>
    </section>
    <!-- contact section end -->

    <section class="pb-20 bg-theme-gray-dark bg-opacity-50 text-white">
      <div class="home-container">

        <h3 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100" class="text-3xl pb-20 lg:text-4xl 3xl:text-5xl uppercase text-white text-center font-bold w-5/6 lg:w-auto mx-auto"> Blogs </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 w-full">
          <div class="border border-theme-gray-dark hover:bg-transparent transition-all bg-theme-gray-dark rounded-xl overflow-hidden w-full" v-for="(blog, i) in blogs" :key="i" data-aos="zoom-in" data-aos-duration="500" :data-aos-delay="i*150" >
            <AdvertisingBlogBlockFeatured :blog="blog"/>
          </div>
        </div>
        <!-- grid -->
      </div>
  </section>


  </div>
</template>

<script>

import setupSplits from '~/utils/setupSplits'

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

    const blogs = await $axios.$get(`/blogs/featured?_format=json&page=0`)
    const projects = await $axios.$get(`/projects/homefeatured`)
    const clients = await $axios.$get(`/all-clients`)

      store.commit('project/setFeaturedProjects', projects)


      return {
        blogs,
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
