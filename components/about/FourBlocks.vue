<template>
    <div class="home-services">
      <carousel v-if="isNuxtReady" :nav="true" :dots="false" :items="2" :margin="15" :loop="true" :responsive="{0:{items:1.2},600:{items:3.5}}">

            <div class="icon-rainbow-bg-hover transition-all rounded-xl p-px">
                <div class="rounded-[0.70rem] p-12 h-[367px] flex items-center bg-white">
                    <div class="space-y-7">
                        <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1694416328/image_77_rjaods.png" alt="image" class="">

                        <a href="/advertising" class="block space-y-3">
                            <h3 class="text-xl md:text-[32px] font-bold">Rigorous</h3>
                            <p class="text-sm mt-3 text-gray-700 font-medium">Understanding of measurement, insights based, methodologies & data-driven</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- item -->

            <div class="icon-rainbow-bg-hover transition-all rounded-xl p-px">
                <div class="rounded-[0.70rem] p-12 h-[367px] flex items-center bg-white">
                    <div class="space-y-7">
                        <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1694416327/image_74_nymsd8.png" alt="image" class="">

                        <a href="/digital" class="block space-y-3">
                            <h3 class="text-xl md:text-[32px] font-bold">Integrated</h3>
                            <p class="text-sm mt-3 text-gray-700 font-medium">Views of the customer across devices, touchpoints, attitudes & behaviors</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- item -->

            <div class="icon-rainbow-bg-hover transition-all rounded-xl p-px">
                <div class="rounded-[0.70rem] p-12 h-[367px] flex items-center bg-white">
                    <div class="space-y-7">
                        <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1694416327/image_73_cynky6.png" alt="image" class="">

                        <a href="/branding" class="block space-y-3">
                            <h3 class="text-xl md:text-[32px] font-bold">Flexible</h3>
                            <p class="text-sm mt-3 text-gray-700 font-medium">Creatively adapted to all mediums, visualizations, and platforms</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- item -->

            <div class="icon-rainbow-bg-hover transition-all rounded-xl p-px">
                <div class="rounded-[0.70rem] p-12 h-[367px] flex items-center bg-white">
                    <div class="space-y-7">
                        <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1694416328/image_75_odmbsd.png" alt="image" class="">

                        <a href="/plus" class="block space-y-3">
                            <h3 class="text-xl md:text-[32px] font-bold">Fast</h3>
                            <p class="text-sm mt-3 text-gray-700 font-medium">Execution, automated data extraction; objective-oriented analysis</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- item -->

          </carousel>
    </div>
  </template>
  

  <script>
  
  export default {
    data() {
      return {
        isNuxtReady: true,
      };
    },

    mounted() {

        
      setTimeout(() => {
          this.$nextTick(() => {
              const prevButton = this.$el.querySelector('.owl-prev');
              const nextButton = this.$el.querySelector('.owl-next');
              
              if (prevButton) {
                  prevButton.textContent = '❮'; // Left chevron
              }
              
              if (nextButton) {
                  nextButton.textContent = '❯'; // Right chevron
              }
          });
      }, 3000); // waits for 3 seconds
    }

  };
  </script>
  

<style scoped>
    .owl-carousel .owl-item img {
        width: auto;
    }
    

</style>