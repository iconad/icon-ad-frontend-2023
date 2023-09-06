<template>
  <div>

    <section id="coverSection">
        <PageCover 
          :button="false" 
          buttontext="Our Case Studies" 
          tline1="Our" 
          tline2="Clients!"
          about="Our presence in the market for 15 years has enabled us to work with global brands catering to their business objectives. Our strategic approach into building and growing these alliances has enabled us to be their partners for all their creative and marketing services."  />
    </section>
    <!-- cover section -->


      <div class="pb-32 home-container">

        <div class="grid grid-cols-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <div v-for="client in clients" :key="client.id">
            <div class="w-full border rounded-xl">
              <UtilsProjectImage options="w-full h-48 object-contain mx-auto" :mini="client.image_mini" :image="client.logo_black" :title="client.title" />
            </div>
          </div>
        </div>

      </div>

    <!-- <section id="ContactSection" class="contact-section bg-black text-white py-32">
       <div class="theme-container">
         <FormsContactUs
          :data="{
            title: 'have an',
            title2: 'impact',
            subtitle: 'Join the most powerful',
            subtitle2: 'brands in the world.'
         }"
          />
       </div>
    </section> -->
    <!-- contact section end -->


  </div>
</template>


<script>

export default {
  // layout: 'home',
  head: {
    title: 'Branding Services for Businesses in Dubai | ICON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Trusted by leading brands like  Dubai Municeipel Party, Dubai Police, Mercedes Benz, Ajman Government ICON Advertising delivers exceptional results. Discover satisfied clients success stories collaborative partnerships.`
      } 
    ],
  },
  async asyncData({ $axios, store }) {

    const clients = await $axios.$get(`/all-clients`)

      return {
        clients
      }
    }

}

</script>
