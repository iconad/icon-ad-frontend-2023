<template>
    <div class="testimonials-carousel">
        <client-only>
            <carousel v-if="isNuxtReady" :nav="true" :dots="false" :margin="20" :loop="false" :responsive="{0:{items:1}}">
            
                
                <div class="space-y-10">
                    <div class="font-bold text-3xl md:text-[40px] -tracking-[1px] leading-none w-full md:w-2/3"> 
                        <p>Sed ut perspiciatis unde omnis iste <br> natus error sit voluptatem <br> accusantium doloremque <br> laudantium, totam rem aperiam, <br> eaque ipsa explicabo.</p>
                    </div>
                    <div class="flex items-center space-x-5">
                        <div class="w-image w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div>
                            <div class="font-semibold">Alexander Zhestkov</div>
                            <div>Dubai Police</div>
                        </div>
                    </div>
                </div>


                <div class="space-y-10">
                    <div class="font-bold text-3xl md:text-[40px] -tracking-[1px] leading-none w-full md:w-2/3"> 
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa explicabo.</p>
                    </div>
                    <div class="flex items-center space-x-5">
                        <div class="w-image w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div>
                            <div class="font-semibold">Alexander Zhestkov</div>
                            <div>Dubai Police</div>
                        </div>
                    </div>
                </div>


                <div class="space-y-10">
                    <div class="font-bold text-3xl md:text-[40px] -tracking-[1px] leading-none w-full md:w-2/3"> 
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa explicabo.</p>
                    </div>
                    <div class="flex items-center space-x-5">
                        <div class="w-image w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div>
                            <div class="font-semibold">Alexander Zhestkov</div>
                            <div>Dubai Police</div>
                        </div>
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