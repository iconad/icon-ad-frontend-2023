<template>
  <div>
      <client-only>
        <siema ref="siema" :draggable="true" :autoplay="true" :loop="false" @init="init" :autoplay-duration="15000" @change="onSlideChange()">

            <div v-for="(project, i) in projects" :key="i" class="h-[90vh] overflow-hidden relative">

              <UtilsProjectImage options="w-full object-cover object-center h-full" :mini="project.image_mini" :image="project.cover" />


                <div class="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] md:from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0)]">

                  <div class="theme-container w-full mb-16 md:mb-24 lg:mb-32 bg-red-300">

                    <span class="opacity-0 md:opacity-80 absolute text-white left-5 md:left-10 z-5 bottom-10 md:bottom-10 text-sm md:text-bae" v-html="project.title"></span>
                    <nuxt-link :to="`/${link}/projects${project.slug}`" class="opacity-80 hover:opacity-100 absolute text-white hover:underline right-5 md:right-10 z-5 bottom-10 md:bottom-16 text-sm md:text-bae"> Read Case Study</nuxt-link>

                  </div>


              </div>

            </div>

        </siema>
      </client-only>

      <div class="absolute w-full bottom-10 lg:left-3 text-white">

        <div class="flex items-center justify-center space-x-3">

          <div v-for="(project, i) in projects" :key="i" class="h-2 md:h-4 w-2 md:w-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 cursor-pointer" @click="goToSlide(i)"></div>
          <!-- project -->

        </div>

        <div class="theme-container hidden">
          <div class="w-full lg:w-1/2">
            <div class="carousel-thumbs lg:mt-16">
              <div class="flex items-center space-x-5">

                <div v-for="(project, i) in projects" :key="i" class="w-full h-24 lg:h-32 flex flex-col cursor-pointer" @click="goToSlide(i)">

                  <div class="h-[2px] lg:h-[3px] w-full bg-gray-400 rounded-full relative mb-4" >
                    <div :class="currentSlide == i && projects.length > 1 ? 'slidebar-current' : ''" class="slidebar absolute left-0 top-0 bg-white h-full rounded-full"></div>
                  </div>
                  <div class="text-sm lg:text-base font-medium uppercase">{{project.client ? project.client : project.custom_client }} </div>
                  <div class="text-xxs lg:text-sm opacity-80 capitalize"> {{ project.title.substring(0, 35) }} </div>

                </div>
                <!-- project -->

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- carousel thumbs -->
  </div>
</template>

<script>


  export default {
    props: ['projects', 'link'],
    data() {
      return {
        currentSlide: null
      }
    },
    methods: {
      onSlideChange () {
        this.currentSlide = this.$refs.siema.currentSlide
      },
      goToSlide (i) {
        this.$refs.siema.goTo(i)
        this.currentSlide = this.$refs.siema.currentSlide
      },
      init () {
        console.log('ready')
        this.currentSlide = 0
      }
    },
  }
</script>


<style>

  .slidebar-current {
    animation: loading 15s infinite;
  }

  @keyframes loading {
    0%    { width: 0; }
    100%  { width: 100%; }
  }

</style>
