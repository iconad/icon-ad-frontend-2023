<template>
  <div class="w-full h-[60vh] sm:h-[70vh] lg:h-[70vh] 3xl:h-[60vh] w-full flex items-center relative text-center md:text-left">
      <div class="w-full space-y-10 lg:space-y-20">

            <div class="home-container">
              <div class="space-y-5 lg:space-y-32">


                <div class="showreel-video relative" v-if="video">

                    <div @click="video = !video" class="absolute z-50 left-[100%] top-0 -mt-36 2xl:-mt-48">
                      <AssetsClose options="w-8 md:w-12 h-8 md:h-12 cursor-pointer text-gray-400 md:text-gray-700 hover:text-theme-red" />
                    </div>

                    <div class="w-full h-auto bg-white overflow-hidden absolute left-0 -top-24 2xl:-top-32 z-10 rounded-2xl overflow-hidden">

                      <client-only>
                        <vimeo-player
                          class="shadow-xl"
                          @ready="onReady"
                          ref="player"
                          :options="options"
                          :video-id="`465010762`"
                        ></vimeo-player>
                      </client-only>

                      <div v-if="!isVideoLoading" class="text-center absolute inset-0 flex items-center justify-center">
                        Loading...
                      </div>

                    </div>
                </div>
                <!-- showreel video -->

                <h1 class="text-[1.8rem] sm:text-[3rem] lg:text-6xl items-center w-full leading-tight italic lg:not-italic md:leading-none font-bold">
                  <transition appear>
                    <span class="inline md:block">Creating Brands</span>

                </transition>
                <transition appear>
                    <span class="inline md:inline-block"> that <span class="font-bold icon-rainbow-text"> Inspire</span></span>

                </transition>
                </h1>




              <div class="w-full flex items-end justify-between">

                <div class="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3">

                  <button class="mx-auto pl-8 pr-8 relative bg-black text-white md:mx-0 h-8 flex items-center justify-center md:justify-start md:space-x-4 rounded-full" @click="video = !video">
                    <div class="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-b from-theme-purple to-theme-sky flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span v-if="video"> Loading... </span>
                    <span v-else> Watch showreel </span>
                  </button>

                  <nuxt-link to="/branding/services" class="rainbow-border rounded-full p-[2px] group overflow-hidden inline-block">
                    <span class="inline-block bg-white text-black rounded-full h-7 w-48 group-hover:text-white group-hover:bg-transparent flex items-center justify-center">Services</span>
                  </nuxt-link>              



                </div>

                <div class="w-1/3 ml-auto">
                  <p class="text-black font-medium">We are changing the way brands act, exist, and communicate with their target audience, we are building relevant brands that are future-ready.</p>
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
