<template>
    <div class="w-full h-[70vh] sm:h-[70vh] lg:h-[70vh] 3xl:h-[60vh] w-full flex items-center relative ">
        <div class="w-full space-y-10 lg:space-y-32">

              <div class="home-container">
                <div class="space-y-5 lg:space-y-10">


                  <h1 class="text-4xl md:text-[60px] lg:text-[80px] font-bold icon-rainbow-text inline-block py-4 -tracking-[3px]">
                    <div v-if="tline1.includes('#')" class="flex flex-col -space-y-2 md:space-y-7 pb-3">
                      <span v-for="(text, b) in breakText(tline1)" :key="b" v-html="text"> </span>
                    </div>
                    <span v-else class="block" v-html="tline1"> </span>
                    <span class="block" v-html="tline2"> </span>
                  </h1>


                <div class="w-full flex flex-col md:flex-row items-center md:items-end justify-between space-y-10 md:space-y-0 space-y-reverse">

                  <AssetsAnimatedButtonOne 
                  text="Our case studies" 
                  target="projects" 
                  backgroundcolor="bg-gray-900" 
                  backgroundcoloronhover="transparent" 
                  textcolor="text-gray-900"
                  textcoloronhover="text-gray-900"
                  class="order-2 md:order-1"
                  bordercolor="border-gray-900" />

                  <div class="order-1 md:order-2 w-full md:w-1/3 ml-auto">
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
