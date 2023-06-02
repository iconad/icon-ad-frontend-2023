<template>
  <div>

      <!-- <div class="this-navbar"> -->
      <AdvertisingLandingMainNavbar direction="rtl" calltext="تواصل معنا" class="top-navbar-2" />
      <!-- </div> -->

      <div class="mt-16">
        <Nuxt />
      </div>

      <footer id="FooterSection" class="footer-section bg-theme-gray py-5">
        <div class="theme-container">
          <div class="copyright flex-col md:flex-row flex items-center justify-between text-sm">
            <p class="order-last md:order-first text-center md:text-left">© All rights reserved by ICON 2023. </p>
            <ul class="font-medium order-first md:order-last mb-2">
              <li>
                <a href="https://icon-ad.com/privacy-policy" class="theme-link"> Privacy & Policy </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  </div>
</template>


<script>

export default {
}
</script>
