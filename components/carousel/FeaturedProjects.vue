<template>
    <div class="home-services featured-projects">
      <client-only>
        <carousel v-if="isNuxtReady" :touchDrag="true" :nav="true" :dots="false" :items="2" :margin="50" :loop="false" :responsive="{0:{items:1},600:{items:2}}">

            <div v-for="(project, i) in projects" :key="i" class="rounded-xl">

                <ProjectsProject mode="light" link="advertising" size="small" height="h-96" :project="project" class="project"/>

            </div>
            <!-- item -->

        </carousel>
      </client-only>
    </div>
  </template>
  

  <script>
  export default {
    props: ['projects'],
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
        }, 1000); // waits for 3 seconds
    }

  };
  </script>
  

<style scoped>
    .owl-carousel .owl-item img {
        width: auto;
    }
</style>