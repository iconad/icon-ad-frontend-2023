<template>
  <div class="w-full h-[60vh] sm:h-[70vh] lg:h-screen 3xl:h-[60vh] w-full flex items-center font-black relative text-center md:text-left">
      <div class="px-5 w-full space-y-10 lg:space-y-20">

            <div class="theme-container">
              <div class="space-y-5 lg:space-y-10">


                <h1 class="text-[2rem] sm:text-[3.5rem] lg:text-[5rem] items-center w-full leading-tight italic lg:not-italic md:leading-none">
                  <transition appear>
                    <span class="inline md:block">Creating Brands  <br class="block md:hidden"></span>
                </transition>
                <transition appear>
                    <span class="inline md:inline-block"> that <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red"> Inspire</span></span>

                </transition>
                </h1>

                <p class="hidden md:block text-sm md:text-lg lg:text-2xl font-semibold w-4/5">We are changing the way brands act, exist, and communicate with their target audience, we are building relevant brands that are future-ready.</p>



              <div class="w-full flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-5">

                  <nuxt-link to="/branding/projects" class="mx-auto md:mx-0 border-2 md:border-4 border-black p-1 pr-3 md:pr-5 play-button flex items-center justify-center md:justify-start  md:space-x-4 text-lg lg:text-xl font-medium rounded-full inline-block w-[17rem] lg:w-80" @click="video = !video">
                    <AssetsRightAngleArrowBlack options="w-12 h-6 md:h-[2.8rem] cursor-pointer transform hover:scale-110 transition-all duration-500"/>
                    <span> Read case studies </span>
                  </nuxt-link>

                  <nuxt-link to="/branding/services" class="mx-auto md:mx-0 flex justify-center space-x-4 text-lg lg:text-xl font-medium rounded-full bg-black text-white block w-[17rem] lg:w-64 py-[0.35rem] md:py-[0.85rem] border-2 md:border-4 border-black hover:bg-transparent hover:text-black">
                    <span> Services </span>
                  </nuxt-link>

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
