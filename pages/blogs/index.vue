<template>
  <div>
  <section id="coverSection">
      <PageCover 
        :button="true" 
        buttontext="Our latest posts" 
        tline1="Blogs" 
        :tline2=null
        about="We share inspiration and creative insights for businesses and individuals. From marketing strategies to design inspiration, our team of experts has you covered with a variety of topics to help spark your imagination."  />
  </section>
  <!-- cover section -->



  <div class="section section-blogs pb-32">
    <div class="max-w-6xl xxl:max-w-screen-xl mx-auto px-5 lg:px-0 w-full">
      <div class="section-header w-full">

        <div id="blogsPage" class="section-title leading-none mt-1 mb-12">
          <h1
            class="text-lg text-theme-black lg:text-2xl font-bold uppercase"
          >Latest Posts</h1>
        </div>

      </div>
      <!-- section-header -->

      <div class="inner w-full">
        <div class="clients-wrapper w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 w-full">
            <div class="border rounded-xl overflow-hidden w-full" v-for="(blog, i) in blogs" :key="i">
              <AdvertisingBlogBlock :blog="blog" />
            </div>
            <!-- client -->
          </div>
          <!-- grid -->


        </div>
        <!-- clients-wrapper -->
      </div>
    </div>
  </div>
  </div>
</template>


<script>

export default {
  layout: 'home',
  head: {
    title: 'Insights and Updates | ICON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Stay updated with industry insights and trends through ICON's informative blogs. Explore topics on marketing, advertising, branding, and digital strategies.`
      } 
    ],
  },
  data() {
    return {
      blogs: [],
      page: 0,
    }
  },


  methods: {

    getBlogsWithPagination () {
      this.$axios.$get(`/blogs`).then(resp => {
          this.blogs = resp;
        })
        .catch(err => {
          console.log(err);
        });
    },

    infiniteScroll($state) {

      setTimeout(() => {

        this.page++;

        this.$axios.$get(`/blogs?_format=json&page=${this.page}`).then(resp => {
          if (resp.length > 1) { // check if any left
            resp.forEach(item => this.blogs.push(item));
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

    const blogs = await $axios.$get(`/blogs?_format=json&page=0`)

      return {
        blogs
      }
    }

}

</script>
