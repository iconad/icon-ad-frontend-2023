<template>
  <div>

    <section id="coverSection">
        <ProjectsPageCover 
          :button="false"
          buttontext="" 
          tline1="Some of" 
          tline2="our finest work"
          :carousel="carousel"
          link="advertising"
          :industries="industries"
          :expertise="expertise"
          :about="null"  />
    </section>
    <!-- cover section -->

    <div class="projects-main bg-black text-white pb-16 md:pb-32 rounded-3xl pt-[8rem] sm:pt-[18rem] md:pt-[20rem] lg:pt-[35rem]">

      <div class="home-container">

        <div v-if="projects.length != 0" class="projects mt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10" >
            <div class="mb-10" v-for="(project, i) in projects" :key="i">
              <ProjectsProject mode="dark" link="advertising" height="h-80" :project="project" class="project"/>
            </div>
          </div>
        </div>
        <!-- projects -->

        <div v-else class="h-[40vh] flex items-center justify-center">
          <p class="text-lg font-semibold opacity-50">0 Projects found!</p>
        </div>


        <client-only>
          <infinite-loading v-if="projects.length" @infinite="infiniteScroll">
            <div slot="spinner">Loading...</div>
            <div slot="no-more">More to be added soon!</div>
          </infinite-loading>
        </client-only>


      </div>
      <!-- container -->

    </div>
    <!-- projects main  -->


    <section class="pt-20 pb-32" id="GetAQuote">

      <div class="home-container">
        <FormsForm />
      </div>

    </section>

  </div>
</template>


<script>

export default {

  head: {
    title: 'Advertising Portfolio: Take a Look at some of our work',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Explore the successful projects of our valued clients at Icon Advertising, the leading creative branding, digital marketing, and design agency in the UAE. Our unparalleled services drive the growth and success of businesses in the region.`
      }
    ],
  },

  data() {
    return {
      projects: [],
      selectedIndustry: 0,
      selectedService: 0,
      selectedExpertie: 0,
      page: 0,
      settings: {
          itemsToShow: 1,
          centerMode: true,
          autoPlay: true,
          playSpeed: 5000,
          infiniteScroll: false,
        }
    }
  },


  methods: {


    removeHash(title) {
      return title.replace("#", "")
    },

    goTo(slug) {
      this.$router.push({path: `/advertising/projects${slug}`});
    },

    onFilterUpdate() {
      this.getProjectsWithPagination()
    },

    getProjectsWithPagination () {
      this.$axios.$get(`/all-projects?_format=json&subsidiary=0&industriy=${this.selectedIndustry}&expertises=${this.selectedExpertie}`).then(resp => {
          this.projects = resp;
        })
        .catch(err => {
          console.log(err);
        });
    },

    infiniteScroll($state) {

      setTimeout(() => {

        this.page++;

        this.$axios.$get(`/all-projects?_format=json&subsidiary=0&industriy=${this.selectedIndustry}&expertises=${this.selectedExpertie}&page=${this.page}`).then(resp => {
          if (resp.length > 1) { // check if any left
            resp.forEach(item => this.projects.push(item));
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          console.log(err);
        });

      }, 500);

    }

  },

  async asyncData({ $axios, store }) {

    const carousel = await $axios.$get(`/projects/home/slides/advertising`)
    const projects = await $axios.$get(`/all-projects?_format=json&page=0&subsidiary=0`)
    const expertise = await $axios.$get(`/expertises`)
    const industries = await $axios.$get(`/industries-list`)
    const services = await $axios.$get(`/all-services`)

      return {
        carousel,
        projects,
        expertise,
        services,
        industries
      }
    }

}

</script>


<style>

.projects-masonry-grid {
  columns: 2;
  column-rule: 1px solid lightblue;
}

@media only screen and (max-width: 780px){

  .projects-masonry-grid {
    columns: 1;
  }

}

</style>
