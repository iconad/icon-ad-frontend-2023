<template>

    <div class="w-full py-20 w-full flex items-center relative">
        <div class="w-full">

            <div class="home-container">
              
              <div class="space-y-5 lg:space-y-32">


                <h1 class="-space-y-2 font-bold flex flex-col">
                  <span v-if="tline1.includes('#')" class="inline-block" v-for="(text, b) in breakText(tline1)" :key="b" v-html="text"> </span>
                  <span v-else class="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] -tracking-[5px]" v-html="tline1"> </span>
                  <span class="inline-block text-4xl icon-rainbow-text sm:text-5xl md:text-6xl lg:text-[150px] pb-2 -tracking-[10px]" v-html="tline2"> </span>
                </h1>


                <div class="flex flex-wrap md:flex-nowrap items-center space-x-2 md:space-x-5">

                  <div class="flex items-center justify-start space-x-1">
                    <AssetsAnimatedButtonOne 
                        text="Our case studies" 
                        target="/advertising/projects" 
                        backgroundcolor="bg-gray-900" 
                        backgroundcoloronhover="transparent" 
                        textcolor="text-gray-900"
                        textcoloronhover="text-gray-900"
                        bordercolor="border-gray-900" />
                  </div>

                  <a href="#next" class="block bg-black w-[2rem] md:w-[2.6rem] h-[2rem] md:h-[2.6rem] rounded-full text-white hover:text-black flex items-center justify-center cursor-pointer hover:bg-transparent border-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
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
