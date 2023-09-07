<template>
  <div class="home-services">
    <carousel
      v-if="isNuxtReady"
      :nav="true"
      :dots="false"
      :items="2"
      :margin="15"
      :loop="false"
      :responsive="{ 0: { items: 1.2 }, 600: { items: 3.5 } }"
    >
      <div class="service-wrap border rounded-xl px-5 pt-10 pb-5">
        <img
          src="https://icon-ad.com/assets/image1.png"
          alt="image"
          class="service-icon w-20 md:w-auto"
        />

        <a href="/advertising" class="block">
          <h3 class="mt-16 text-2xl md:text-3xl font-bold text-theme-sky">
            Advertising
          </h3>
          <p class="text-sm mt-3 font-medium">
            Advertising and Creative arm of ICON
          </p>
        </a>
      </div>
      <!-- item -->

      <div class="border rounded-xl px-5 pt-10 pb-5">
        <img
          src="https://icon-ad.com/assets/image2.png"
          alt="image"
          class="w-20 md:w-auto"
        />

        <a href="/digital" class="block">
          <h3 class="mt-16 text-2xl md:text-3xl font-bold text-theme-sky">
            Digital
          </h3>
          <p class="text-sm mt-3 font-medium">
            Advertising and Creative arm of ICON
          </p>
        </a>
      </div>
      <!-- item -->

      <div class="border rounded-xl px-5 pt-10 pb-5">
        <img
          src="https://icon-ad.com/assets/image3.png"
          alt="image"
          class="w-20 md:w-auto"
        />

        <a href="/branding" class="block">
          <h3 class="mt-16 text-3xl font-bold text-theme-pink">Branding</h3>
          <p class="text-sm mt-3 font-medium">
            Advertising and Creative arm of ICON
          </p>
        </a>
      </div>
      <!-- item -->

      <div class="border rounded-xl px-5 pt-10 pb-5">
        <img
          src="https://icon-ad.com/assets/image4.png"
          alt="image"
          class="w-[7.3rem] md:w-auto"
        />

        <a href="/plus" class="block">
          <h3 class="mt-16 text-2xl md:text-3xl font-bold text-theme-sky">
            ICON+
          </h3>
          <p class="text-sm mt-3 font-medium">
            Advertising and Creative arm of ICON
          </p>
        </a>
      </div>
      <!-- item -->
    </carousel>
  </div>
</template>
  

  <script>
export default {
  data() {
    return {
      isNuxtReady: true,
    };
  },

  mounted() {
    this.initIconsHover();

    setTimeout(() => {
      // Carousel
      this.$nextTick(() => {
        const prevButton = this.$el.querySelector(".owl-prev");
        const nextButton = this.$el.querySelector(".owl-next");

        if (prevButton) {
          prevButton.textContent = "❮"; // Left chevron
        }

        if (nextButton) {
          nextButton.textContent = "❯"; // Right chevron
        }
      });
    }, 3000); // waits for 3 seconds
  },
  methods: {
    initIconsHover() {
      let timeout;
      const serviceWrap = document.querySelector(".service-wrap");

      serviceWrap.addEventListener("mousemove", function (e) {
        if (timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, e), 200);
        console.log(e);
      });

      function callParallax(e) {
        parallaxIt(e, ".service-icon", 150);
      }

      function parallaxIt(e, target, movement) {
        let $this = serviceWrap;
        let relX = e.pageX - $this.offsetLeft;
        let relY = e.pageY - $this.offsetTop;

        console.log($this);

        // let relX = e.pageX - $this.offset().left;
        // let relY = e.pageY - $this.offset().top;

        this.gsap.to(target, {
          duration: 1,
          translateX:
            ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement,
          translateY:
            ((relY - $this.offsetHeight / 2) / $this.offsetHeight) * movement,
          // translateX: ((relX - $this.width() / 2) / $this.width()) * movement,
          // translateY: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: "none",
        });
      }
    },
  },
};
</script>
  

<style scoped>
.owl-carousel .owl-item img {
  width: auto;
}
</style>