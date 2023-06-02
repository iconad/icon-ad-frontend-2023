<template>
  <div class="main-navbar absolute top-0 bg-white left-0 w-full z-50">
      <div class="theme-container main-navbar relative z-10">
          <div class="flex items-center justify-between h-auto lg:h-16">

              <div :class="direction == 'rtl' ? 'order-2 space-x-1' : 'order-1' " class="main-logo text-xxxs tracking-widest flex items-start font-medium">
                  <nuxt-link to="/">
                      <AssetsLogo options="w-16 h-16"/>
                  </nuxt-link>
              </div>
              <!-- Logo -->

              <div :class="direction == 'rtl' ? 'order-1' : 'order-2' " class="p-5 z-20 bg-transparent w-auto h-auto p-0 block text-left text-base">
                <ul class="flex items-center uppercase tracking-wider space-y-0 text-black">
                    <li class="text-base border-b border-transparent hover:border-gray-800 font-medium">
                        <nuxt-link to="#contact" :class="direction == 'rtl' ? 'text-lg' : ''"> {{ calltext }} </nuxt-link>
                    </li>
                </ul>
                <!-- navbar menu -->

              </div>
              <!-- menu responsive wrapper -->
          </div>
      </div>
      <!-- main navbar -->
      <UtilsRainbowBar id="UtilsRainbowBar" colors="from-theme-sky via-theme-purple to-theme-pink w-full" />
  </div>
</template>
<script>
    export default {
        props: ['calltext', 'direction']
    }
</script>
