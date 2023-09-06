<template>
    <div class="carousel-with-top-arrows zero-right">
        <client-only>
            <carousel v-if="isNuxtReady" :nav="true" :dots="false" :margin="20" :loop="false" :responsive="{0:{items:1.2},600:{items:1.5},1000:{items:2.5}}">
            
                
                <div class="icon-rainbow-bg rounded-xl pb-1.5 h-[25rem] md:h-[20rem]">
                    <div class="border w-full h-full bg-white rounded-lg space-y-5 px-10 flex flex-col justify-center">
                        <div class="capitalize text-xl font-semibold"> we actively <br class="hidden md:block"> listen </div>
                        <p class="text-sm">Listening to our clients as well as the target audience, we see conversations as a chance to discover, understand, evaluate, and implement successful projects with results that positively impact the audience's life our partners' brand perception.</p>
                    </div>
                </div>
            

            
                <div class="icon-rainbow-bg rounded-xl pb-1.5 h-[25rem] md:h-[20rem]">
                    <div class="border w-full h-full bg-white rounded-lg space-y-5 px-10 flex flex-col justify-center">
                        <div class="capitalize text-xl font-semibold"> We're Creative and <br class="hidden md:block"> Data-driven </div>
                        <p class="text-sm">We challenge stereotypes in every aspect of our work, while our creatives seamlessly collaborate with our strategy and planning teams, with the ultimate goal of conceptualizing, executing and delivering award-winning campaigns. </p>
                    </div>
                </div>
            

            
                <div class="icon-rainbow-bg rounded-xl pb-1.5 h-[25rem] md:h-[20rem]">
                    <div class="border w-full h-full bg-white rounded-lg space-y-5 px-10 flex flex-col justify-center">
                        <div class="capitalize text-xl font-semibold"> We're In It  <br class="hidden md:block"> Together </div>
                        <p class="text-sm">We're at our best when we work together, with our clients, partners and colleagues, our work environment is diverse, creative-oriented and most importantly people centric agency.  </p>
                    </div>
                </div>
            

            
                <div class="icon-rainbow-bg rounded-xl pb-1.5 h-[25rem] md:h-[20rem]">
                    <div class="border w-full h-full bg-white rounded-lg space-y-5 px-10 flex flex-col justify-center">
                        <div class="capitalize text-xl font-semibold"> We're  <br class="hidden md:block"> Positive </div>
                        <p class="text-sm">We seek solutions to problems and always find a way forward, we bring passion and energy to every situation we encounter. </p>
                    </div>
                </div>
               

            </carousel>
        </client-only>
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