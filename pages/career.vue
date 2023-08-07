<template>
    <div>
        <section class="life-at-icon-section bg-black text-white py-10 lg:py-24">
        <div class="theme-container">
            <div class="flex flex-wrap justify-center lg:space-x-24">
              <div class="w-full lg:w-1/4 space-y-3 life-at-icon">
                  <h3 class="text-4xl font-bold rainbow-text-digital">Life at icon</h3>
                  <p class="text-base">We are super talented, strong heroes, who support global and local brands & impact millions of people around the world every year.</p>
              </div>
              <div class="w-full lg:w-1/4">

                <div class="space-y-3 mt-10">
                  <h4 class="text-4xl font-semibold text-theme-sky">30+</h4>
                  <p class="text-base">
                    <strong class="block">Unique individual</strong> in our team
                  </p>
                </div>
                <!-- item -->

                <div class="space-y-3 mt-10">
                  <h4 class="text-4xl font-semibold text-theme-sky">12</h4>
                  <p class="text-base">
                    <strong class="block">Different nationality</strong> & vibrant culture
                  </p>
                </div>
                <!-- item -->

                <div class="space-y-3 mt-10">
                  <p class="text-base">
                    We are committed to actively building an inclusive, diverse, and equitable workplace where everyone feels welcomed, appreciated, respected, and heard.
                  </p>
                </div>
                <!-- item -->

                <div class="space-y-3 mt-10 last-stop">
                  <p class="text-base">
                    Icon is taking full responsibility to farm a safe environment that reflects our greatest asset - our people, we believe that this approach of always putting our people first, inspires growth and delivers outstanding outcomes for everyone as well as the clients and our beloved community around us.
                  </p>
                </div>
                <!-- item -->

              </div>
            </div>
            <!-- flex -->
        </div>
        <!-- container -->
      </section>
      <!-- life at icon -->


      <div class="hidden meet-the-team bg-theme-gray-1 text-white py-10 lg:py-32">
        <div class="theme-container">
          <AdvertisingIconersCarousel :title="`Meet the team`" :iconers="iconers" />
        </div>
        <!-- container -->
      </div>
      <!-- meet the team -->

      <section class="join-the-team py-20 lg:py-32 bg-black text-white">
        <div class="theme-container">
          <div class="flex flex-wrap lg:justify-center lg:flex-nowrap space-y-20 lg:space-y-0 lg:space-x-24">

            <div class="w-full lg:w-1/4 space-y-5">

              <h4 class="text-5xl uppercase font-black rainbow-text-more-red italic">
                <span class="block">join the</span>
                <span class="block">team</span>
              </h4>

              <div class="space-y-3 text-lg">
                <p class="font-semibold text-xl"> We're always looking for talented people to  join our team!</p>
                <p class="text-sm lg:text-base"> Submitting your resume is just the first step in forming an exceptional connection - we know that there's more to you than a list of jobs and accomplishments on a document. </p>
              </div>
            </div>
            <!-- column -->

            <div class="w-full lg:w-1/3">
              <FormsCareerForm />
            </div>
            <!-- column -->

          </div>
          <!-- flex -->
        </div>
        <!-- container -->
      </section>
      <!-- join the team -->
    </div>
</template>


<script>

export default {

  layout: 'home',

  head: {
    title: 'Career Opportunities at ICON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Join our team of creative minds at ICON Advertising agency. Explore exciting career opportunities and be part of our innovative marketing campaigns.`
      }
    ],
  },

  mounted() {

    let q = this.gsap.utils.selector(this.$el);

    const lifeAtIconSection = q(".life-at-icon-section")
    const lifeAtIcon = q(".life-at-icon")
    const lastStop = q(".last-stop")

    let mythis = this
    mythis.scrollTrigger.matchMedia({

      "(min-width: 1600px)": function () {

        mythis.gsap.to(lifeAtIconSection, {
          scrollTrigger: {
              trigger: lifeAtIconSection,
              start: 'center center+=7%',
              end: 'center+=100% center',
              endTrigger: lastStop,
              scrub: 2,
              pin: lifeAtIcon,
          }
        })
      },

      "(min-width: 768px) and (max-width: 1600px)": function () {

        mythis.gsap.to(lifeAtIconSection, {
          scrollTrigger: {
              trigger: lifeAtIconSection,
              start: 'center center+=25%',
              end: 'center+=60% center',
              endTrigger: lastStop,
              scrub: 2,
              pin: lifeAtIcon,
          }
        })
      },

    })

  },

  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/featured`)
    const iconers = await $axios.$get(`/iconers`)
    const expertise = await $axios.$get(`/expertises`)

    // console.log(expertise)

      return {
        projects,
        iconers,
        expertise
      }
    }

}

</script>

<style scoped>
.carousel-3d-slide  {
  border-radius: 12px;
  background: transparent;
}
</style>
