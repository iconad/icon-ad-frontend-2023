<template>
  <div class="w-full h-screen sm:h-[70vh] lg:h-[80vh] 3xl:h-[60vh] w-full flex items-center relative text-center md:text-left">
      <div class="w-full space-y-10 lg:space-y-20">

            <div class="home-container">
              <div class="space-y-5 lg:space-y-12">

                <h1 class="-tracking-[4px] text-[1.8rem] sm:text-[3rem] lg:text-[70px] items-center font-bold -space-y-1 md:-space-y-5">
                  <span class="leading-[28px] md:leading-[60px] inline-block" >Data-Driven Digital <br class="hidden md:block"> Marketing</span>
                  <span class="leading-[28px] md:leading-[60px] inline-block"> <span class="font-bold icon-rainbow-text pb-2 md:pb-4"> Grow Your Business with <br class="hidden md:block"> Proven Strategies</span></span>
                </h1>

              <div class="w-full flex flex-col md:flex-row md:flex-wrap items-center md:items-end justify-between space-y-10 md:space-y-0 space-y-reverse">

                <div class="order-2 md:order-1 flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3 w-4/5 md:w-auto">

                  <button class="mx-auto w-full md:w-auto pl-8 pr-8 relative bg-black text-white md:mx-0 h-11 flex items-center justify-center md:justify-start md:space-x-4 rounded-full" @click="video = !video">
                    <div class="absolute left-0 top-0 w-11 h-11 rounded-full bg-gradient-to-b from-theme-purple to-theme-sky flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span v-if="video"> Loading... </span>
                    <span v-else> Watch showreel </span>
                  </button>

                  <nuxt-link to="/contact" class="rainbow-border rounded-full p-[2px] group overflow-hidden inline-block">
                    <span class="inline-block bg-white text-black rounded-full w-full md:w-auto md:px-12 py-2 group-hover:text-white group-hover:bg-transparent">Contact Us</span>
                  </nuxt-link>        

                </div>

                <div class="order-1 md:order-2 w-full md:w-1/3 ml-auto">
                  <p class="text-black font-medium">At Icon, we believe in the synergy between creativity and strategy in digital marketing producing impactful results. Together, we will breathe life into your brand's narrative and digital presence, making a lasting impression in the dynamic realm of digital marketing.</p>
                </div>                    

              </div>

            </div>

          </div>

      </div>

  </div>
  <!-- screen height -->
</template>

<script>

import gsap from 'gsap'

export default {
data() {
  return {
    isVideoLoading: false,
    options: {
      muted: false,
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
    this.isVideoLoading = true
  },
  beforeEnterMinusX (el) {
    el.style.transform = 'translateX(-30px)'
    el.style.opacity = 0
  },
  enterMinusX (el) {
    gsap.to(el, {
      duration: 1,
      x: 0,
      opacity: 1
    })
  },
  beforeEnterPlusX (el) {
    el.style.transform = 'translateX(30px)'
    el.style.opacity = 0
  },
  enterPlusX (el) {
    gsap.to(el, {
      duration: 1,
      x: 0,
      opacity: 1
    })
  },
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
}
}
</script>
