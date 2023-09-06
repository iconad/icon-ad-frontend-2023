<template>
  <div>
    <div class="flex flex-wrap md:flex-nowrap py-16 md:py-24 space-y-12 md:space-y-0">
      <div class="w-full md:w-1/2 flex items-center justify-center md:justify-start text-center md:text-left text-white">

        <div class="main-logo font-medium">

          <nuxt-link to="/">
            <AssetsLogoWhite options="w-24 mx-auto md:mx-0"/>
          </nuxt-link>

          <div>
            <h4 class="font-semibold text-lg leading-snug mt-5">
              <span class="block">Creativity </span>
              <span class="block">& Brand Experience </span>
              <span class="block">Reimagined!</span>
            </h4>

          </div>
          <!-- column -->

        </div>
        <!-- Logo -->
        
      </div>
      <!-- column -->

      <div class="w-full md:w-2/3 space-y-20">
        <div class="newsletter space-y-6">

          <div class="icon-rainbow-text-3-stops icon-rainbow-text-3-stops-red-more-1 font-medium text-center md:text-left"> Subscribe to our newsletter </div>
          <div class="relative">
            <input type="text" class="w-full text-center md:text-left text-gray-200 placeholder-gray-600 py-1 text-4xl font-semibold bg-transparent active:outline-none focus:outline-none focus:" placeholder="Email Address">
            <span class="absolute right-0 bottom-0 h-full flex items-center opacity-50 md:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg"  width="55" height="55" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 43.542 43.542 13.75m0 0v28.6m0-28.6h-28.6"/></svg>
            </span>
          </div>
          <!-- input -->

        </div>
        <!-- news letter -->
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h4 class="font-semibold text-lg">Our Subsidiaries</h4>
            <ul class="space-y-1 mt-2 text-sm font-medium text-gray-200">
              <li>
                <nuxt-link to="/advertising" class="theme-link">ICON Advertising</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/digital" class="theme-link">ICON Digital</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/branding" class="theme-link">BrandingStudio</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/plus" class="theme-link">ICON Plus</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/career" class="theme-link">Careers</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blogs" class="theme-link">Blogs</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- column -->

          <div>
            <h4 class="font-semibold text-lg">Office</h4>
            <p class="mt-2 text-sm font-medium text-gray-300">
              <span class="block">Office 306</span>
              <span class="block">Spectrum Building</span>
              <span class="block">Oud Metha, Dubai</span>
              <span class="block">United Arab Emirates.</span>
            </p>
          </div>
          <!-- column -->

          <div class="space-y-5">
            <div class="space-y-2">
              <h4 class="font-semibold text-lg">Contact Us</h4>
              <p class="mt-2 text-sm font-medium text-gray-100">
                <span class="block">Let's talk about your goals!</span>
                <a href="mailto:info@icon-ad.com" class="theme-link">info@icon-ad.com</a>
                <br>
                <a href="tel:+97142636550" class="theme-link">+971 4 263 6550</a>
              </p>
            </div>
          </div>
          <!-- column -->

        </div>

      </div>
      <!-- column -->
    </div>
    

  </div>
</template>

<script>
  export default {

  }
</script>
