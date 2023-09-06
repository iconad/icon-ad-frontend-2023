<template>
    <div class="carousel-with-top-arrows zero-right">
        <client-only>
            <carousel v-if="isNuxtReady" :nav="true" :dots="false" :margin="20" :loop="false" :responsive="{0:{items:1.2},600:{items:1.5},1000:{items:2.5}}">
            
                
                <div v-for="(blog, i) in blogs" :key="i">
                    <CarouselSingleBlogBlock :blog="blog" />
                </div>
            

            </carousel>
        </client-only>
    </div>
</template>

<script>
export default {
    props: ['blogs'],
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