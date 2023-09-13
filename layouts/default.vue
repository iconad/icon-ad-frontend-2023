<template>
  <main>
    <div class="icon-cursor hidden md:hidden" />

    <div class="icon-wrapper">
      <div class="icon-content">
        <!-- <Chatbot /> -->
        <HomeTopNavbar class="hidden md:block relative z-50 bg-white" />
        <MobileMegaMenu class="relative z-50 block md:hidden" />

        <div>
          <Nuxt />
        </div>

        <footer
          id="FooterSection"
          class="footer-section bg-black text-white rounded-t-3xl"
        >
          <div class="home-container">
            <Footer />
          </div>
          <div class="bg-white text-black">
            <div class="home-container">
              <div
                class="flex flex-col md:flex-row items-center justify-between py-5 md:py-3"
              >
                <p class="order-last md:order-first text-center md:text-left">
                  © All rights reserved by ICON 2023.
                </p>
                <ul class="font-medium order-first md:order-last">
                  <li>
                    <nuxt-link to="/privacy-policy" class="theme-link">
                      Privacy & Policy
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    this.gsapAnimations();
    // this.cursorAnimation();

    // this.$lenis.on('scroll', (e) => {
    //   // console.log(e);
    // });
    // const raf = (time) => {
    //   this.$lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    // requestAnimationFrame(raf);
  },

  methods: {
    gsapAnimations() {
      let ctx = this.gsap.context(() => {
        const $wrapper = document.getElementById("icon-wrapper");
        const $content = document.getElementById("icon-content");

        this.scrollSmoother.create({
          wrapper: $wrapper,
          content: $content,
          smooth: 1.5,
          effects: true,
          smoothTouch: 0,
          preventDefault: true,
          normalizeScroll: { allowNestedScroll: true },
          ignoreMobileResize: true,
        });

        const iconHeadings = new this.splitText(".icon-heading", {
          type: "lines",
        });

        iconHeadings.lines.forEach((target) => {
          this.gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: target,
              scrub: 1,
              start: "top 85%",
              end: "bottom center",
            },
          });
        });
      });

      return () => ctx.revert();
    },

    cursorAnimation() {
      this.gsap.set(".icon-cursor", { xPercent: -50, yPercent: -50 });

      let xTo = this.gsap.quickTo(".icon-cursor", "x", {
        duration: 0.6,
        ease: "power3",
      });

      let yTo = this.gsap.quickTo(".icon-cursor", "y", {
        duration: 0.6,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });

      let h1Tags = document.querySelectorAll("h1 span");

      h1Tags.forEach((h1) => {
        h1.addEventListener("mouseenter", (e) => {
          this.gsap.to(".icon-cursor", {
            scale: 5,
            duration: 0.5,
            mixBlendMode: "difference",
            background: "#fff",
          });
        });
        h1.addEventListener("mouseleave", (e) => {
          this.gsap.to(".icon-cursor", {
            scale: 1,
            duration: 0.5,
            mixBlendMode: "normal",
            background:
              "-webkit-linear-gradient(0deg, #56b7df 20%, #cc69a8 58%, #f4505f 88%)",
          });
        });
      });
    },
  },
};
</script>
