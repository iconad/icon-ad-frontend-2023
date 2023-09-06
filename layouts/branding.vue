<template>
  <div>

    <!-- <div class="this-navbar"> -->
        <!-- <Chatbot /> -->
        <!-- <TopNavbar class="top-navbar-1 hidden md:block" /> -->
        <BrandingMainNavbar class="hidden md:block" />
        <MobileMegaMenu class="block md:hidden" />
      <!-- </div> -->

      <div class="mt-16">
        <Nuxt />
      </div>

      <footer id="FooterSection" class="footer-section bg-black text-white rounded-t-3xl">
        <div class="home-container">
          <Footer />
        </div>
        <div class="bg-white text-black">
          <div class="home-container">
            <div class="flex items-center justify-between py-3">
              <p class="order-last md:order-first text-center md:text-left">© All rights reserved by ICON 2023. </p>
              <ul class="font-medium order-first md:order-last">
                <li>
                  <nuxt-link to="/privacy-policy" class="theme-link"> Privacy & Policy </nuxt-link>
                </li>
              </ul>
            </div>    
          </div>
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
