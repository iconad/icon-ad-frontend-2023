<template>
  <div>

      <!-- <div class="this-navbar"> -->
      <LandingMainNavbar calltext="Contact Us" class="top-navbar-2" />
      <!-- </div> -->

      <div class="mt-16">
        <Nuxt />
      </div>

      <footer id="FooterSection" class="footer-section bg-theme-gray pt-16 pb-8 3xl:pt-32 pb-10">
        <div class="theme-container">
          <LandingFooter />
        </div>
      </footer>
  </div>
</template>


<script>
  export default {
    mounted() {

      this.$lenis.on('scroll', (e) => {
      });

      const raf = (time) => {
        this.$lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }
</script>
