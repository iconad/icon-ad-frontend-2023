<template>
    <div class="home-services">
      <carousel v-if="isNuxtReady" :nav="true" :dots="false" :items="2" :margin="15" :loop="false" :responsive="{0:{items:1.2},600:{items:3.5}}">

            <div class="border rounded-xl px-5 pt-10 pb-5">
                <img src="https://icon-ad.com/assets/image1.png" alt="image" class="w-20 md:w-auto">

                <a href="/advertising" class="block">
                    <h3 class="mt-16 text-xl md:text-2xl font-bold text-theme-sky">Rigorous</h3>
                    <p class="text-sm mt-3 text-gray-700 font-medium">Understanding of measurement, insights based, methodologies & data-driven</p>
                </a>
            </div>
            <!-- item -->

            <div class="border rounded-xl px-5 pt-10 pb-5">
                <img src="https://icon-ad.com/assets/image2.png" alt="image" class="w-20 md:w-auto">

                <a href="/digital" class="block">
                    <h3 class="mt-16 text-xl md:text-2xl font-bold text-theme-sky">Integrated</h3>
                    <p class="text-sm mt-3 text-gray-700 font-medium">Views of the customer across devices, touchpoints, attitudes & behaviors</p>
                </a>
            </div>
            <!-- item -->

            <div class="border rounded-xl px-5 pt-10 pb-5">
                <img src="https://icon-ad.com/assets/image3.png" alt="image" class="w-20 md:w-auto">

                <a href="/branding" class="block">
                    <h3 class="mt-16 text-xl md:text-2xl font-bold text-theme-sky">Flexible</h3>
                    <p class="text-sm mt-3 text-gray-700 font-medium">Creatively adapted to all mediums, visualizations, and platforms</p>
                </a>
            </div>
            <!-- item -->

            <div class="border rounded-xl px-5 pt-10 pb-5">
                <img src="https://icon-ad.com/assets/image4.png" alt="image" class="w-[7.3rem] md:w-auto">

                <a href="/plus" class="block">
                    <h3 class="mt-16 text-xl md:text-2xl font-bold text-theme-sky">Fast</h3>
                    <p class="text-sm mt-3 text-gray-700 font-medium">Execution, automated data extraction; objective-oriented analysis</p>
                </a>
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