<template>
  <div>

    <section v-if="expertise" id="coverSection">
        <PageCover 
          :button="true" 
          buttontext="Our Case Studies" 
          :tline1="expertise.page_title" 
          :tline2="null"
          :about="expertise.summary"  
          />
    </section>
    <!-- cover section -->

    <div ref="popupwrapper"  class="-z-[1] opacity-0 fixed inset-0 bg-black backdrop-blur bg-opacity-50 flex items-center justify-center">
      
      <span class="absolute right-5 md:right-10 top-5 md:top-10 text-white opacity-50 cursor-pointer hover:opacity-90" @click="closePopup()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 md:w-20 h-10 md:h-20">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>

      
      <div ref="popup" data-lenis-prevent class="relative scale-0 max-h-[70vh] md:max-h-[60vh] w-[90%] md:w-2/3 bg-black rounded-2xl border border-stone-800 shadow-2xl bg-opacity-50 p-32 text-white space-y-5 popup-scroll shadow-theme-sky/20">
        <div class="text-4xl font-semibold" v-if="service.title" v-html="service.title" ></div>
        <div class="text-gray-200 space-y-5" v-if="service.body" v-html="service.body"></div>
      </div>
    </div> 

    <section v-if="accordionData.length != 0" class="bg-black py-16 md:py-32">
      <div class="home-container">
       
        <div class="space-y-3 md:space-y-10">
          
          <div class="text-4xl md:text-[65px] text-white flex flex-col -space-y-2 md:space-y-3">
            <span class="font-light">Our</span>
            <span class="font-bold w-48 md:w-96 pb-4 icon-rainbow-text">Expertise</span>
          </div>
          <pre class="text-white">
          </pre>
          <div class="grid gap-20" :class="accordionData.length == 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2' ">

            <div v-for="(accordion, i) in accordionData" :key="i" class="border border-[#2D2D2D] text-white px-10 lg:px-16 md:px-32 pt-10 md:pt-24 pb-10 md:pb-48 rounded-2xl space-y-5 relative">

              <div class="img text-white w-20">
                <UtilsProjectImage :options="`w-full`" :mini="accordion.mini" :image="accordion.image" />                  
              </div>
              <!-- image -->

              <h2 class="text-[30px] md:text-[40px] font-bold -space-y-3 md:-space-y-5" :class="accordionData.length == 1 ? '' : 'h-auto' ">
                <span class="block leading-none" v-for="(text, b) in breakText(accordion.title)" :key="b" v-html="text"> </span>
              </h2>
              <p class="text-sm" v-html="summary(accordion.body)"> </p>

              <div  class="md:absolute bottom-24 left-0 w-full flex lg:px-16 md:px-32">
                
                <div class="mt-8 md:mt-0 flex items-center space-x-3" :class="accordionData.length == 1 ? '' : 'justify-center' ">

                  <span @click="selectService(accordion)" class="cursor-pointer bg-[#2D2D2D] rounded-full p-[1px] group overflow-hidden inline-block ">
                      <span class="inline-block bg-black text-sm rounded-full h-8 md:h-10 w-[8.5rem] group-hover:text-white group-hover:bg-transparent flex items-center justify-center">Read More</span>
                  </span>   
                  
                  <nuxt-link to="#GetAQuote" class="rainbow-border rounded-full p-[1px] group overflow-hidden inline-block ">
                      <span class="inline-block bg-black text-sm rounded-full h-8 md:h-10 w-[8.5rem] group-hover:text-white group-hover:bg-transparent flex items-center justify-center">Get a Quote</span>
                  </nuxt-link>     

                </div>

              </div>

            </div>

          </div>
          
        </div>


        
      </div>
    </section>
    <!-- expertise -->

    <section class="h-[70vh] md:h-screen flex items-center relative overflow-hidden">

      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626057/shape_image_44_rynpo5.png" class="w-24 md:w-[10rem] absolute -left-[12%] md:left-0 top-[60%] md:top-[50%] z-[6]" alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626057/shape_image_48_vrl8fk.png" class="w-[14rem] md:w-[20rem] absolute left-[50%] -top-[10%] " alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626057/shape_image_49_xnzw9a.png" class="w-[9rem] absolute -right-[15%] md:right-0 top-[50%]" alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626056/shape_image_46_uevanl.png" class="w-32 md:w-72 absolute left-[55%] md:left-[62%] lg:left-[42%] top-[72%] md:top-[61%] z-[6]" alt="ring">
      <img src="https://res.cloudinary.com/dizi8svi8/image/upload/v1692626056/shape_image_47_kfaayw.png" class="w-32 absolute left-[10%] top-[20%]" alt="ring">

      <div class="home-container relative z-[5]">
        <div class="text-4xl md:text-[50px] lg:text-[60px] -space-y-1 md:space-y-5 -tracking-[2px] font-bold">
          <span class="md:block">Effective synergy between</span>
          <span class="md:block">advertising and</span>
          <span class="md:block">production is essential for</span>
          <span class="md:block">driving sales and</span>
          <span class="md:block">delivering customer</span>
          <span class="md:block">satisfaction.</span>
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

  import Atos from '~/utils/Atos'


    export default {
      head() {
        return {
          title: this.expertise ? `${this.seo.title.replace(/&amp;/g, '&')} | ICON Digital` : "ICON Digital",
          meta: [
            {
              hid: 'twitter:title',
              name: 'twitter:title',
              content: this.seo.title.replace(/&amp;/g, '&')
            },
            {
              hid: 'twitter:description',
              name: 'twitter:description',
              content: this.seo && this.seo.description ? this.seo.description : ""
            },

            {
              hid: 'og:title',
              property: 'og:title',
              content: this.seo.title.replace(/&amp;/g, '&')
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content: this.seo && this.seo.description ? this.seo.description : ""
            },

            { property: "og:site_name", content: "Icon Advertising LLC" },
            {
              hid: "description",
              name: "description",
              content: this.seo && this.seo.description ? this.seo.description : "",
            },
            {
              hid: "keywords",
              name: "keywords",
              content: this.seo && this.seo.keywords ? this.seo.keywords : "",
            },
            {
              hid: "og:url",
              property: "og:url",
              content: this.expertise.slug,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:  this.seo.title.replace(/&amp;/g, '&'),
            },
            {
              hid: "og:description",
              property: "og:description",
              content: this.seo && this.seo.description ? this.seo.description : "",
            },

          ]
        };
      },
      data() {
        return {
          service: {
            title: 'Motion Graphic',
            body: 'At ICON, we believe in the power of collaboration! Therefore we have all resources required to create a complete motion graphics project, starting from idea generation to script to sound design. What makes us stand out among our competitors is that we deliver 100% original work.'
          },
          isPopup: false
        }
      },

      mounted() {

        document.addEventListener('keyup', this.checkEscape);

      },

      beforeDestroy() {
        // Remove the keyup event listener when the component is destroyed
        document.removeEventListener('keyup', this.checkEscape);
      },

      methods: {


        selectService (service) {
          
          this.service.title = service.title;
          this.service.body = service.body;
          this.isPopup = true;

          this.$lenis.stop();

          // animate using GSAP after Vue's DOM update cycle
          this.gsap.to(this.$refs.popupwrapper, { zIndex: 50, opacity: 1, ease: "power2.inOut", });
          this.gsap.to(this.$refs.popup, { scale: 1, opacity: 1, ease: "power2.inOut", });


        },

        closePopup() {
          this.gsap.to(this.$refs.popup, 0.5, {
              scale: 0,
              opacity: 0,
              zIndex: -10,
              ease: "power2.inOut",
              onComplete: () => {
                  this.isPopup = false;
                  this.gsap.set(this.$refs.popup, { clearProps: "all" });
              }
          });
          this.gsap.to(this.$refs.popupwrapper, 0.5, {
              opacity: 0,
              zIndex: -10,
              ease: "power2.inOut",
              onComplete: () => {
                  this.isPopup = false;
                  this.gsap.set(this.$refs.popupwrapper, { clearProps: "all" });

                  this.$lenis.start();

              }
          });
      },
        checkEscape(event) {
            // Check if the pressed key is "Escape"
            if (event.key === "Escape" && this.isPopup) {
                this.closePopup();
            }
        },

        breakText (text) {
          return text.split('#');
        },
        summary (text) {
          return text.substring(0, 200) + ' ...';
        },

      },

      computed: {
        seo () {
          return JSON.parse(this.expertise.seo)[0];
        },
        accordionData() {

           if (this.expertise.accordion) {
            return  JSON.parse(this.expertise.accordion).slice(0);
           }

        },
        storageUrl() {
          return 'https://drupal.icon-ad.com/';
        },
      },

      async asyncData({ $axios, params }) {
        const expertise = await $axios.$get(`/expertise/${params.service}`);

        return {
            expertise: expertise[0],
        }
    }


  }
</script>
