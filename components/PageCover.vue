<template>
    <div class="w-full h-[60vh] sm:h-[70vh] lg:h-[70vh] 3xl:h-[60vh] w-full flex items-center relative text-center md:text-left">
        <div class="w-full space-y-10 lg:space-y-20">

              <div class="home-container">
                <div class="space-y-5 lg:space-y-32">


                  <h1 class="text-[1.8rem] sm:text-[3rem] lg:text-6xl h-32 -space-y-1 font-bold icon-rainbow-text-3-stops-red-more icon-rainbow-text-3-stops inline-block">
                    <span v-if="tline1.includes('#')" class="inline-block" v-for="(text, b) in breakText(tline1)" :key="b" v-html="text"> </span>
                    <span v-else class="block" v-html="tline1"> </span>
                    <span class="block" v-html="tline2"> </span>
                  </h1>


                <div class="w-full flex items-end justify-between">

                  <div class="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3" v-if="button">

                    <nuxt-link to="/advertising/projects" :data-back="buttontext" :data-front="buttontext" class="btn-flip px-8 w-[180px] pt-[8px] capitalzie text-sm bg-black text-white rounded-full h-7 flex items-center font-medium"> </nuxt-link>



                  </div>

                  <div class="w-1/3 ml-auto">
                    <p class="text-black text-sm 2xl:text-base font-medium" v-html="about"></p>
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
    props: ['button', 'tline1', 'tline2', 'about', 'buttontext'],
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
