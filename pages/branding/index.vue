<template>
  <div>
    <BrandingFrontCover />

    <section
      id="projectsSection"
      class="relative bg-black rounded-2xl overflow-hidden py-32"
    >
      <div class="front-projects home-container">
        <Projects columns="1" :from="0" :to="4" height="h-[30rem]" />
      </div>
    </section>
    <!-- projects section -->

    <section id="creativityUnlock" class="bg-white py-32">
      <div class="theme-container">
        <div class="flex items-center">
          <div class="w-full space-y-3">
            <div class="text-9xl font-semibold -space-y-8">
              <span
                class="block leading-none icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more -tracking-[5px] h-[8.5rem]"
                >Unlock</span
              >
              <span
                class="block leading-none icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more -tracking-[5px] h-[8.5rem]"
                >Creativity</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full md:w-4/5 expertises-section icon-rainbow-bg-3-stops mt-32"
        >
          <AdvertisingExpertiseExpertises :expertises="expertises" />
        </div>
        <!-- expertises section end -->
      </div>
      <!-- Container -->
    </section>
    <!-- creativity section end -->

    <section class="clients-section bg-black text-white py-48">
      <div class="home-container">
        <HomeFeaturedClients />
      </div>
      <!-- container -->
    </section>
    <!-- clients -->

    <section class="bb-branding pt-[15vh] space-y-[10vh]">
      <div
        class="str-branding translate-x-[26rem] text-[9rem] h-[12rem] font-bold icon-rainbow-text whitespace-nowrap -tracking-[10px] px-4"
      >
        Building brands for more than 15 years
      </div>

      <div class="home-container">
        <div class="pb-[15vh] flex items-end justify-end">
          <div class="w-full md:w-1/3">
            <p>
              We are a creative user (consumer, human beings) experience agency
              with 360 marketing services, providing high-end data-driven
              advertising campaigns, strategies, and storytelling that impact
              today's consumers and different target audiences in a great level
              of understanding across the globe and MENA region.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BrandingHome",
  // layout: 'branding',

  head: {
    title: "Trusted Clients of ICON Advertising",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `Build a strong brand identity with ICON's branding services. From logo design to brand strategy, we help businesses leave a lasting impression on their audience.`,
      },
    ],
  },

  mounted() {
    setTimeout(() => {
      this.scrollToReveal();
    }, 500);
  },

  beforeDestroy() {
    this.ctxBrand.kill();
    this.ctxBrand.revert();
  },

  methods: {
    goTo(value) {
      this.$router.push({ path: `${value}` });
    },

    breakText(text) {
      return text.split("#");
    },

    scrollToReveal() {
      this.ctxBrand = this.gsap.context(() => {
        this.gsap.to(".str-branding", {
          x: "-100%",
          duration: 2,
          scrollTrigger: {
            trigger: ".bb-branding",
            start: "top 95%",
            end: "+=3800",
            scrub: true,
          },
        });
      });
    },
  },

  async asyncData({ $axios, store }) {
    const projects = await $axios.$get(`/projects/brand-home`);
    const expertises = await $axios.$get(`/home-brand-expertises`);
    const clients = await $axios.$get(`/clients`);

    store.commit("project/setFeaturedProjects", projects);

    return {
      projects,
      expertises,
      clients,
    };
  },
};
</script>

<style>
.social-columns-grid {
  columns: 2;
}
</style>
