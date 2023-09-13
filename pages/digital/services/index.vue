<template>
  <div>

    <section id="coverSection">
        <ServicesPageCover 
          :button="true" 
          buttontext="Our Case Studies" 
          tline1="Your Brand" 
          tline2="Reimagined!"
          about="We believe that creativity is the key to success. We leverage insights from culture, consumer, and audience findings along with our industry knowledge to create campaigns that not only impact people's decisions but also give us unmatched breadth & depth when it comes down to strategic planning techniques and designing long-running successful advertising campaigns or producing content for your brand!"  />
    </section>
    <!-- cover section -->


    <section class="bg-black py-32" id="down">
      <div class="home-container">

      
        <div class="space-y-10">
          

          <div class="grid grid-cols-1 gap-32 md:gap-64 pt-16 md:pt-32">

            <div v-for="(expertise, i) in expertises" :key="i" class="flex flex-wrap md:flex-nowrap text-white rounded-2xl md:space-x-24">

              <div class="w-full md:w-1/2 relative space-y-5 md:space-y-0 ">

                <span class="font-semibold md:h-20 md:absolute left-0 -top-[117px] -tracking-[3px] md:-tracking-[5px]">
                  <span class="rainbow-strock text-black text-5xl md:text-[100px] relative z-10 md:whitespace-nowrap pr-1" v-html="breakText(expertise.name)[0]"> </span>

                    <span class="font-semibold md:h-20 md:absolute left-[50%] top-[140%] z-10">
                      <span class="text-white text-5xl md:text-[100px] md:whitespace-nowrap pr-1" v-html="breakText(expertise.name)[1]"> </span>
                    </span>

                </span>


                <div class="img">
                  <UtilsProjectImage :options="`w-full h-[20rem] md:h-[40rem] rounded-2xl overflow-hidden object-cover`" :mini="expertise.mini" :image="expertise.image" />                  
                </div>
                <!-- image -->
              </div>

              <div class="w-full md:w-1/3 pt-10 md:pt-32 space-y-12">


                  <div>
                    <client-only>
                      <p class="md:text-sm" v-html="expertise.details"> </p>
                    </client-only>
                  </div>


                <div>
                  <ul class="space-y-1">
                    <li v-for="(child, ch) in expertise.children" :key="ch" class="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><circle cx="8" cy="8" r="6.5" stroke="url(#a)" stroke-width="3"/><defs><linearGradient id="a" x1="-.19" x2="16.463" y1="17.424" y2="15.906" gradientUnits="userSpaceOnUse"><stop stop-color="#56B7DF"/><stop offset=".331" stop-color="#9E7FE0"/><stop offset=".628" stop-color="#C769A3"/><stop offset="1" stop-color="#DD5C63"/></linearGradient></defs></svg>
                      <span class="font-medium text-[21px]" v-html="child.name"></span>
                    </li>
                  </ul>
                </div>


                <div>
                  
                  <div class="flex items-center md:justify-center space-x-3">

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


        
      </div>
    </section>
    <!-- expertise -->


    <section class="pt-16 md:pt-20 pb-16 md:pb-32" id="GetAQuote">

      <div class="home-container">
        <FormsForm />
      </div>

    </section>



  </div>
</template>

<script>
  export default {

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
      // Fetch the expertises data
      const expertises = await $axios.$get(`/digital-all-expertises`);


      const objectById = {};
      const parents = [];
      const children = [];

      expertises.forEach((obj) => {
        objectById[obj.id] = obj;
        if (obj.parent) {
          children.push(obj);
        } else {
          parents.push(obj);
        }
      });

      function nestUnderParent(parent, children) {
        parent.children = children
          .filter((child) => child.parent === parent.name && child.name !== parent.name) // Filter out items with the same name as their parent
          .map((child) => {
            nestUnderParent(child, children);
            return child;
          });
      }




      const result = {};
      parents.forEach((parent) => {
        nestUnderParent(parent, children);
        result[parent.name] = parent;
      });


      return {
        expertises: result
      };
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
