<template>
  <div class="w-full h-[60vh] sm:h-[70vh] lg:h-[70vh] 3xl:h-[60vh] w-full flex items-center relative text-center md:text-left">
      <div class="w-full space-y-10 lg:space-y-20">

            <div class="home-container">
              <div class="space-y-5 lg:space-y-12">

                <h1 class="text-[1.8rem] sm:text-[3rem] lg:text-6xl items-center w-2/3 leading-tight italic lg:not-italic md:leading-none font-bold">
                  <span class="leading-[52px] inline md:block">Data-Driven Digital Marketing</span>
                  <span class="leading-[52px] inline md:inline-block"> <span class="font-bold icon-rainbow-text"> Grow Your Business with Proven Strategies</span></span>
                </h1>

              <div class="w-full flex items-end justify-between">

                <div class="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3">

                  <nuxt-link to="/advertising/projects" data-back="Our Case Studies" data-front="Our Case Studies" class="btn-flip px-8 w-[180px] pt-[8px] capitalzie text-sm bg-black text-white rounded-full h-7 flex items-center font-medium"> </nuxt-link>         

                </div>

                <div class="w-1/3 ml-auto">
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
