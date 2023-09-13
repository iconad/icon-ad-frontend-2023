<template>

    <div class="w-full pt-16 md:pt-32 pb-[10rem] md:pb-[20rem] w-full flex items-center relative">
        <div class="w-full">

            <div class="home-container">
              
              <div class="space-y-5 lg:space-y-14">


                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-32 -space-y-2 font-bold icon-rainbow-text flex flex-col -tracking-[4px] pr-2">
                  <span v-if="tline1.includes('#')" class="inline-block" v-for="(text, b) in breakText(tline1)" :key="b" v-html="text"> </span>
                  <span v-else class="block" v-html="tline1"> </span>
                  <span class="block" v-html="tline2"> </span>
                </h1>


                <div class="w-full flex items-end justify-between">

                  <div class="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3" v-if="button">
                    <nuxt-link to="/advertising/projects" :data-back="buttontext" :data-front="buttontext" class="btn-flip px-8 w-[180px] pt-[8px] capitalzie text-sm bg-black text-white rounded-full h-7 flex items-center font-medium"> </nuxt-link>
                  </div>

                  <div class="md:flex space-y-3 md:space-y-0 md:space-x-5 w-1/2">
                    <div class="md:flex items-center justify-center">

                      <div class="w-64 border border-theme-purple rounded-full p-[2px] group overflow-hidden inline-block relative">

                        <span class="absolute right-[15px] top-[12px]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>

                        <select class="focus:outline-none appearance-none inline-block bg-white text-black rounded-full pl-5 pr-40 py-2">
                          <option selected disabled> Expertise </option>
                          <option v-for="expert in expertise" :key="expert" v-html="removeHash(expert.name)" ></option>
                        </select>
                      </div> 

                      </div>

                      <div class="w-64 border border-theme-red rounded-full p-[2px] group overflow-hidden inline-block relative">

                      <span class="absolute right-[15px] top-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>

                      <select class="focus:outline-none appearance-none inline-block bg-white text-black rounded-full pl-5 pr-40 py-2">
                        <option selected disabled> Industry </option>
                        <option v-for="industry in industries" :key="industry" v-html="industry.name" ></option>
                      </select>

                      </div> 
                  </div>

                </div>


              </div>

            </div>

        </div>

        <div class="absolute w-full top-[82%] md:top-[70%] z-[5px]">
          <div class="home-container">
            <div class="slider-wrapper rounded-3xl overflow-hidden">
              <ProjectsSelectedProjectsCarousel :link="link" :projects="carousel" />
            </div>
          </div>
        </div>

    </div>

</template>

<script>

import gsap from 'gsap'

export default {
    props: ['button', 'tline1', 'tline2', 'about', 'buttontext', 'link', 'carousel', 'expertise', 'industries'],
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
        removeHash(title) {
          return title.replace("#", "")
        },
        breakText (text) {
          return text.split('#');
        },
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
