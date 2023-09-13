<template>
  <div>
    <section
      class="first-section bg-white pt-10 md:pt-20 pb-16 md:pb-32 rounded-b-[50px] relative z-10 border-t border-b overflow-hidden"
    >
      <div class="home-container">
        <div class="flex flex-col">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="w-full">
              <h1
                class="icon-rainbow-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -space-y-2 md:-space-y-3 -tracking-[1px] md:-tracking-[3px]"
              >
                <span class="block md:h-[77px]">Creativity &</span>
                <span class="block md:h-[77px]">Brand Experience</span>
                <span class="block md:h-[77px]">Reimagined!</span>
              </h1>
            </div>
            <div class="w-1/2 h-full hidden md:block">
              <div class="h-full"></div>
            </div>
          </div>

          <div class="flex flex-wrap md:flex-nowrap items-end">
            <div class="order-2 md:order-1 w-full">
              <div class="flex items-center justify-start space-x-1 mt-10">
                <AssetsAnimatedButtonOne
                  text="Our case studies"
                  target="projects"
                  backgroundcolor="bg-gray-900"
                  backgroundcoloronhover="transparent"
                  textcolor="text-gray-900"
                  textcoloronhover="text-gray-900"
                  bordercolor="border-gray-900"
                />
              </div>
            </div>

            <div class="order-1 md:order-2 w-full md:w-1/3">
              <div class="h-auto pt-5 md:pt-10">
                <p class="font-medium">
                  A 360° Integrated Creative, <br class="hidden md:block" />
                  Branding, Marketing and <br class="hidden md:block" />
                  Communications Agency Based <br class="hidden md:block" />
                  in Dubai, UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- cover container -->
    </section>

    <section class="video-section h-auto md:h-screen overflow-hidden w-full">
      <div class="w-full h-auto -z-[1]">
        <client-only>
          <vimeo-player
            v-cloak
            @ready="onReady"
            ref="player"
            :options="options"
            :video-id="`853339800`"
          ></vimeo-player>
        </client-only>
      </div>
      <!-- video -->
    </section>
    <!-- video section -->
    <!-- <div class="md:h-screen"></div> -->

    <section class="services-section py-20 md:py-32 bg-white border-t">
      <div class="home-container">
        <div class="text-4xl md:text-4xl tracking-title leading-none">
          <span class="block">Experience our</span>
          <span class="inline-block font-bold icon-rainbow-text"
            >Cutting-edge Services</span
          >
        </div>
      </div>

      <div class="mt-10 pl-[5%] md:pl-[10%]" id="carousel-services">
        <CarouselHomeServices />
      </div>
    </section>
    <!-- services -->

    <section
      class="pt-20 md:pt-32 py-32 featured-projects advertising-projects featured-advertising-projects bg-black border-t text-white relative z-10"
    >
      <div class="home-container relative">
        <div class="md:flex items-end md:space-x-10 space-y-2 md:space-y-0">
          <span class="text-3xl md:text-4xl block font-bold">Advertising</span>
          <p class="text-sm">
            Creativity & Brand Experience <br class="block md:hidden" />
            Reimagined!
          </p>
        </div>

        <nuxt-link
          to="/advertising"
          class="w-full md:w-40 h-10 block absolute right-0 -bottom-16 md:top-1 icon-rainbow-bg-1 p-1 group rounded-full overflow-hidden"
        >
          <span
            class="flex items-center justify-center absolute bg-black text-white top-[2.5%] md:top-[2.5%] left-[0.5%] md:left-[1%] group-hover:text-white group-hover:bg-transparent transition-all text-sm rounded-full w-[99%] md:w-[98%] h-[95%]"
            >View all cases</span
          >
        </nuxt-link>

        <div class="mt-10">
          <CarouselFeaturedProjects :projects="advertisingProjects" />
        </div>
      </div>
      <!-- container -->
    </section>
    <!-- advertising projects -->

    <section
      class="layer-pin-1 pt-20 md:pt-32 py-32 featured-projects featured-digital-projects border-t border-gray-600 bg-black text-white relative z-20"
    >
      <div class="home-container relative">
        <div class="md:flex items-end md:space-x-10 space-y-2 md:space-y-0">
          <span class="text-3xl md:text-4xl block font-bold">Digital</span>
          <p class="text-sm">
            Creativity & Brand Experience <br class="block md:hidden" />
            Reimagined!
          </p>
        </div>

        <nuxt-link
          to="/advertising"
          class="w-full md:w-40 h-10 block absolute right-0 -bottom-16 md:top-1 icon-rainbow-bg-1 p-1 group rounded-full overflow-hidden"
        >
          <span
            class="flex items-center justify-center absolute bg-black text-white top-[2.5%] left-[0.5%] md:left-[1%] group-hover:text-white group-hover:bg-transparent transition-all text-sm rounded-full w-[99%] md:w-[98%] h-[95%]"
            >View all cases</span
          >
        </nuxt-link>

        <div class="mt-10">
          <CarouselFeaturedProjects :projects="digitalProjects" />
        </div>
      </div>
      <!-- container -->
    </section>
    <!-- digital projects -->

    <section
      class="layer-pin-2 pt-20 md:pt-32 py-32 featured-projects featured-branding-projects bg-black border-t border-gray-600 text-white relative z-30"
    >
      <div class="home-container relative">
        <div class="md:flex items-end md:space-x-10 space-y-2 md:space-y-0">
          <span class="text-3xl md:text-4xl block font-bold">Branding</span>
          <p class="text-sm">
            Creativity & Brand Experience <br class="block md:hidden" />
            Reimagined!
          </p>
        </div>

        <nuxt-link
          to="/advertising"
          class="w-full md:w-40 h-10 block absolute right-0 -bottom-16 md:top-1 icon-rainbow-bg-1 p-1 group rounded-full overflow-hidden"
        >
          <span
            class="flex items-center justify-center absolute bg-black text-white top-[2.5%] left-[0.5%] md:left-[1%] group-hover:text-white group-hover:bg-transparent transition-all text-sm rounded-full w-[99%] md:w-[98%] h-[95%]"
            >View all cases</span
          >
        </nuxt-link>

        <div class="mt-10">
          <CarouselFeaturedProjects :projects="brandingProjects" />
        </div>
      </div>
      <!-- container -->
    </section>
    <!-- branding projects -->

    <section class="about-icon bg-white -mt-[100vh]">
      <div class="h-20"></div>

      <div class="home-container">
        <div
          class="flex flex-col md:flex-row items-center justify-between py-10 md:py-20 md:h-screen relative"
        >
          <div
            class="order-2 md:order-1 flex flex-col justify-between space-y-20 relative z-[10]"
          >
            <div class="space-y-5">
              <div class="font-medium icon-rainbow-text text-lg">
                About ICON
              </div>
              <h3
                class="font-bold text-4xl md:text-5xl -space-y-px -tracking-[1px] icon-heading"
              >
                <span class="block">We are not just a</span>
                <span class="block">360 Integrated</span>
                <span class="block">Marketing,</span>
                <span class="block">Branding and </span>
                <span class="block">Communications</span>
                <span class="block">Agency</span>
              </h3>
            </div>
            <div class="flex items-center space-x-5">
              <AssetsAnimatedButtonOne
                text="More About Us"
                target="projects"
                backgroundcolor="bg-gray-900"
                backgroundcoloronhover="transparent"
                textcolor="text-gray-900"
                textcoloronhover="text-gray-900"
                bordercolor="border-gray-900"
              />

              <nuxt-link
                to="/contact"
                class="rainbow-border rounded-full p-[2px] group overflow-hidden inline-block"
              >
                <span
                  class="inline-block bg-white text-black rounded-full px-8 md:px-12 py-2 group-hover:text-white group-hover:bg-transparent"
                  >Contact Us</span
                >
              </nuxt-link>
            </div>
          </div>

          <img
            src="https://icon-ad.com/assets/donut.png"
            alt="donug image"
            class="order-1 md:order-2 mb-16 w-[40rem] md:absolute right-[0%] md:-right-[14%] -bottom-[60%] md:top-[12%] md:top-[8%] z-1"
          />
        </div>
      </div>
      <!-- container -->

      <div class="h-32"></div>

      <div class="bg-white border-t relative z-[1]">
        <HomeCounterNumbers />
      </div>
      <!-- numbers -->
    </section>
    <!-- about icon -->

    <section class="clients-section bg-black text-white py-24 md:py-48">
      <div class="home-container">
        <HomeFeaturedClients />
      </div>
      <!-- container -->
    </section>
    <!-- clients -->

    <section class="makes-us-different-section py-32 bg-white border-t">
      <div class="home-container space-y-10">
        <div class="text-3xl md:text-4xl block font-bold">
          What makes us <br class="hidden md:block" />
          different
        </div>

        <CarouselMakesUsDifferent />
      </div>
      <!-- container -->
    </section>
    <!-- what makes us different -->

    <section class="blogs-section pt-32 bg-white border-t">
      <div class="home-container space-y-10 relative">
        <div class="text-3xl md:text-4xl block font-bold">Blogs</div>

        <CarouselFeaturedBlogs :blogs="blogs" />
      </div>
      <!-- container -->
    </section>
    <!-- blogs -->

    <!-- contact section below -->
    <section
      class="h-[45vh] md:h-[80vh] md:py-0 relative bg-white mt-32 md:mt-0"
    >
      <div
        class="flex flex-wrap md:flex-nowrap items-center absolute inset-0 overflow-hidden select-none"
      >
        <div
          class="social-links order-2 md:order-1 w-full md:w-1/2 flex self-start pt-10 md:pt-40 px-12"
        >
          <!-- <img
            src="https://res.cloudinary.com/dizi8svi8/image/upload/v1693306590/image5_pzofqx.png"
            alt="image"
            class="select-none"
          /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1395"
            height="1923"
            viewBox="0 0 1395 1923"
            class="w-fit mx-auto h-fit -mt-10"
          >
            <image
              width="1395"
              height="1923"
              xlink:href="https://res.cloudinary.com/dizi8svi8/image/upload/v1694161507/social-hand/background_len7dh.png"
            />
            <g
              class="group"
              onclick="window.open('http://www.facebook.com', '_blank')"
            >
              <image
                width="175"
                height="148"
                transform="translate(221, 286)"
                class="cursor-pointer"
                xlink:href="https://res.cloudinary.com/dizi8svi8/image/upload/v1694161500/social-hand/facebook_xz0luz.png"
              />
            </g>
            <g
              class="group"
              onclick="window.open('http://www.instagram.com', '_blank')"
            >
              <image
                width="181"
                height="144"
                transform="translate(387, 180)"
                class="cursor-pointer"
                xlink:href="https://res.cloudinary.com/dizi8svi8/image/upload/v1694161500/social-hand/instagram_ggni4v.png"
              />
            </g>
            <g
              class="group"
              onclick="window.open('http://www.pinterest.com', '_blank')"
            >
              <image
                width="187"
                height="158"
                transform="translate(362, 434)"
                class="cursor-pointer"
                xlink:href="https://res.cloudinary.com/dizi8svi8/image/upload/v1694161500/social-hand/pinterest_bl0xq8.png"
              />
            </g>
            <g
              class="group"
              onclick="window.open('http://www.behance.com', '_blank')"
            >
              <image
                width="179"
                height="152"
                transform="translate(538, 324)"
                class="cursor-pointer"
                xlink:href="https://res.cloudinary.com/dizi8svi8/image/upload/v1694161500/social-hand/behance_q8rpc5.png"
              />
            </g>
            <g
              class="group"
              onclick="window.open('http://www.vimeo.com', '_blank')"
            >
              <image
                width="184"
                height="161"
                transform="translate(513, 586)"
                class="cursor-pointer"
                xlink:href="https://res.cloudinary.com/dizi8svi8/image/upload/v1694161500/social-hand/vimeo_g4v9as.png"
              />
            </g>
          </svg>
        </div>
        <div
          class="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:block"
        >
          <div class="space-y-5">
            <div
              class="text-4xl md:text-3xl md:text-6xl font-bold icon-text icon-rainbow-text -space-y-3 md:-space-y-1"
            >
              <span class="h-12 md:h-14 block">Embrace the</span>
              <span class="h-12 md:h-16 block">Digital Era with Us</span>
            </div>

            <div class="flex items-center space-x-5">
              <AssetsAnimatedButtonsmOne
                text="More About Us"
                target="projects"
                backgroundcolor="bg-gray-900"
                backgroundcoloronhover="transparent"
                textcolor="text-gray-900"
                textcoloronhover="text-gray-900"
                bordercolor="border-gray-900"
              />

              <nuxt-link
                to="/contact"
                class="rainbow-border rounded-full p-[2px] group overflow-hidden inline-block"
              >
                <span
                  class="inline-block bg-white text-black rounded-full px-8 md:px-12 py-2 group-hover:text-white group-hover:bg-transparent"
                  >Contact Us</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      isNuxtReady: true,
      projectsLimit: 4,
      isVideoLoading: true,
      options: {
        muted: true,
        autoplay: true,
        background: true,
        loop: true,
        responsive: true,
        controls: true,
        portrait: false,
        byline: false,
        color: "000000",
        title: false,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.initLayeredScrolling();
    }, 250);

    // this.initSocailAnimation();
    // this.initParallaxEffect();
    // this.firstSection();
    // this.$lenis.on('scroll', this.scrollTrigger.update);
    // this.gsap.ticker.add((time) => {
    // this.$lenis.raf(time * 1000);
    // });
    // this.gsap.ticker.lagSmoothing(0);
  },
  beforeDestroy() {
    this.ctx.revert();
  },
  unmounted() {
    this.ctx.revert();
  },
  methods: {
    firstSection() {
      let q = this.gsap.utils.selector(this.$el);
      const serSection = q(".services-section");
      const videoSec = q(".video-section");

      this.gsap.to(videoSec, {
        y: "100%",
        scrollTrigger: {
          trigger: serSection,
          start: "center center",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },

    initLayeredScrolling() {
      this.ctx = this.gsap.context(() => {
        this.gsap.to(".layer-pin-1", {
          translateY: "-50%",
          scrollTrigger: {
            trigger: ".layer-pin-1",
            start: "top bottom",
            scrub: true,
          },
        });

        this.gsap.to(".layer-pin-2", {
          translateY: "-130%",
          duration: 2,
          scrollTrigger: {
            trigger: ".layer-pin-1",
            start: "top 50%",
            scrub: true,
          },
        });
      });

      return () => ctx.revert();
    },

    initSocailAnimation() {
      const ctx = this.gsap.context(() => {
        this.gsap.to(".social-in", {
          y: 0,
          opacity: "100%",
          duration: 1,
          scrollTrigger: {
            trigger: ".social-links",
            start: "-50% bottom",
            scrub: true,
            // markers: true,
          },
        });
      });
      return () => ctx.revert();
    },

    initParallaxEffect() {
      const sections = this.gsap.utils.toArray(".scroll-section");

      sections.forEach((element, index) => {
        const startCondition =
          element.offsetHeight < window.innerHeight
            ? "top top"
            : "bottom+=20% bottom";

        this.gsap.to(element, {
          y: "-50vh", // Adjust this value for the desired upward movement.
          scrollTrigger: {
            trigger: element,
            start: () => startCondition,
            end: () => {
              // Extend the scroll distance by the height we're moving the section up
              const endValue =
                startCondition === "top top"
                  ? "bottom+=50vh top"
                  : "bottom top+=50vh";
              return endValue;
            },
            pin: true,
            pinSpacing: false,
            scrub: 1,
            // markers: true,
          },
        });
      });

      let q = this.gsap.utils.selector(this.$el);
      const scrollSectionLast = q(".scroll-section-last");

      this.gsap.to(scrollSectionLast, {
        y: "-5vh", // Adjust this value for the desired upward movement.
        scrollTrigger: {
          trigger: scrollSectionLast,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },

    onReady() {
      this.isVideoLoading = false;
    },
    // setupSplits(element)
  },
  computed: {
    video: {
      get: function () {
        return this.$store.state.isCoverVideo;
      },
      set: function (value) {
        this.$store.commit("setIsCoverVideo", value);
      },
    },
  },
  async asyncData({ $axios, store }) {
    try {
      const [blogs, projects, clients] = await Promise.all([
        $axios.$get(`/blogs/featured?_format=json&page=0`),
        $axios.$get(`/projects/homefeatured`),
      ]);

      store.commit("project/setFeaturedProjects", projects);

      const advertisingProjects = projects.filter((project) =>
        project.subsidiary.includes("Advertising")
      );
      const brandingProjects = projects.filter((project) =>
        project.subsidiary.includes("Brand")
      );
      const digitalProjects = projects.filter((project) =>
        project.subsidiary.includes("Digital")
      );

      return {
        blogs,
        projects,
        advertisingProjects,
        brandingProjects,
        digitalProjects,
      };
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  },
};
</script>



<style scoped>
svg {
  stroke-dasharray: 300;
  /* stroke-dashoffset: 300; */
  transition: all 0.8s ease-in-out;
}
</style>
