<template>
  <div>

    <section id="coverSection">
        <PageCover 
          :button="true" 
          buttontext="Our Case Studies" 
          tline1="Your Brand" 
          tline2="Reimagined!"
          about="We believe that creativity is the key to success. We leverage insights from culture, consumer, and audience findings along with our industry knowledge to create campaigns that not only impact people's decisions but also give us unmatched breadth & depth when it comes down to strategic planning techniques and designing long-running successful advertising campaigns or producing content for your brand!"  />
    </section>
    <!-- cover section -->

    <section class="bg-black py-32">
      <div class="home-container">
       
        <div class="space-y-10">
          
          <div class="text-3xl text-white">
            <span class="font-light">Our</span>
            <span class="font-bold icon-rainbow-text">Expertise</span>
          </div>

          <div class="grid grid-cols-2 gap-20">

            <div v-for="(expertise, i) in page[0].content" :key="i" v-if="!expertise.image" class="border border-[#2D2D2D] text-white p-32 rounded-2xl space-y-10">

              <div class="img">
                <div class="w-32 h-32 bg-gray-400 opacity-50 rounded-xl"></div>
              </div>
              <!-- image -->

              <h2 class="text-4xl font-semibold" :class="expertise.title.length > 22 ? 'h-32' : 'h-20' ">
                <span v-for="(text, b) in breakText(expertise.title)" :key="b" v-html="text"> </span>
              </h2>
              <p class="text-sm" v-html="expertise.details"> </p>

              <div>
                
                <div class="flex items-center justify-center space-x-3">

                  <nuxt-link :to="expertise.link" class="bg-[#2D2D2D] rounded-full p-[1px] group overflow-hidden inline-block ">
                      <span class="inline-block bg-black text-sm rounded-full h-7 w-32 group-hover:text-white group-hover:bg-transparent flex items-center justify-center">Read More</span>
                  </nuxt-link>   
                  
                  <nuxt-link to="#GetAQuote" class="rainbow-border rounded-full p-[1px] group overflow-hidden inline-block ">
                      <span class="inline-block bg-black text-sm rounded-full h-7 w-32 group-hover:text-white group-hover:bg-transparent flex items-center justify-center">Get a Quote</span>
                  </nuxt-link>     

                </div>

              </div>

            </div>

          </div>
          
        </div>


        
      </div>
    </section>
    <!-- expertise -->

    <section class="h-screen flex items-center relative overflow-hidden">

      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626057/shape_image_44_rynpo5.png" class="w-[10rem] absolute left-0 top-[50%] z-[6]" alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626057/shape_image_48_vrl8fk.png" class="w-[20rem] absolute left-[50%] -top-[10%] " alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626057/shape_image_49_xnzw9a.png" class="w-[9rem] absolute right-0 top-[50%]" alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626056/shape_image_46_uevanl.png" class="w-56 absolute left-[40%] top-[60%] z-[6]" alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626056/shape_image_47_kfaayw.png" class="w-32 absolute left-[10%] top-[20%]" alt="ring">

      <div class="home-container relative z-[5]">
        <div class="text-5xl font-bold">
          <span class="block">Effective synergy between</span>
          <span class="block">advertising and</span>
          <span class="block">production is essential for</span>
          <span class="block">driving sales and</span>
          <span class="block">delivering customer</span>
          <span class="block">satisfaction.</span>
        </div>
      </div>

    </section>
    <!-- shapes -->


    <section class="pt-20 pb-32" id="GetAQuote">

      <div class="home-container">
        <FormsForm />
      </div>

    </section>



  </div>
</template>

<script>
  export default {

    layout: 'advertising',

    head: {
      title: 'Comprehensive Advertising Services | ICON',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'We offer a wide range of advertising services in Dubai from creative design, motion graphics to 2d & 3d animation to help your brand stand out among competitors.'
        }
      ],
    },

    computed: {
      expertise () {
        return this.page[0].content;
      }
    },

    methods: {
      goTo (link) {
        this.$router.push({
          path: `${link}`
        });
      },
      breakText (text) {
        return text.split('#');
      }
    },

    async asyncData({ $axios, store }) {

    const page = await $axios.$get(`/pages/digital-expertise`)

      return {
        page,
      }
    }


  }
</script>


<style scoped>

  @media only screen and (max-width: 920px){
    .my-masonry {
      display: flex!important;
      flex-direction: column!important;
    }

  }

</style>
