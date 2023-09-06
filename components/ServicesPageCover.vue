<template>

    <div class="w-full py-20 w-full flex items-center relative text-center md:text-left relative">
        <div class="w-full">

            <div class="home-container">
              
              <div class="space-y-5 lg:space-y-32">


                <h1 class="-space-y-2 font-bold flex flex-col">
                  <span v-if="tline1.includes('#')" class="inline-block" v-for="(text, b) in breakText(tline1)" :key="b" v-html="text"> </span>
                  <span v-else class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl" v-html="tline1"> </span>
                  <span class="inline-block text-4xl icon-rainbow-text sm:text-5xl md:text-6xl lg:text-9xl pb-2" v-html="tline2"> </span>
                </h1>


                <div class="w-full flex items-end justify-between">

                  <div class="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3" v-if="button">
                    <nuxt-link to="/advertising/projects" :data-back="buttontext" :data-front="buttontext" class="btn-flip px-8 w-[180px] pt-[8px] capitalzie text-sm bg-black text-white rounded-full h-7 flex items-center font-medium"> </nuxt-link>
                  </div>

                  
                  <a href="#down" class="w-7 h-7 icon-rainbow-bg rounded-full flex items-center justify-center">
                    <AssetsDownArrowWhite options="w-5 h-5 text-white" />
                  </a>

                </div>


              </div>

            </div>

        </div>


    </div>

</template>

<script>

import gsap from 'gsap'

export default {
    props: ['button', 'tline1', 'tline2', 'about', 'buttontext', 'link'],
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
