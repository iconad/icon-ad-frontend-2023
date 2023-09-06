<template>
  <div id="topnavbar" class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-50">
        <div class="home-container">
            <div class="flex items-center justify-end lg:justify-between">

              <div class="text-xs tracking-widest space-x-1 flex items-start">
                  <nuxt-link to="/">
                    <AssetsLogoWhite options="w-[5rem] h-10"/>
                  </nuxt-link>
              </div>
              <!-- join us link -->

                <ul class="remove-last-border flex items-center uppercase text-sm lg:text-xs 2xl:text-sm tracking-wider -ml-3">
                    <li v-for="(item, i) in nav" :key="i">
                         <nuxt-link :to="item.link" :class="item.active ? 'bg-white text-black' : ''" class="w-full lg:w-auto flex justify-center py-4 px-2 xl:px-3 block font-medium hover:bg-white focus:outline-none focus:text-black focus:bg-white hover:text-black">{{item.name}}</nuxt-link>
                    </li>
                </ul>
                <!-- navbar list -->

            </div>
        </div>
        <!-- top navbar -->
        <div class="absolute top-[100%] w-full left-0 bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red h-1"></div>

    </div>
</template>

<script>

import Queries from '~/utils/Queries'

export default {
data() {
  return {
    nav:[
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'advertising',
        link: '/advertising',
      },
      {
        name: 'digital',
        link: '/digital',
      },
      {
        name: 'branding',
        link: '/branding',
      },
      {
        name: 'plus',
        link: '/plus',
      },
      {
        name: 'clients',
        link: '/clients',
      },
      // {
      //   name: 'ideas',
      //   link: '/ideas',
      //   active: false,
      //   external: false
      // },
    ]
  }
},

mounted() {

  let q = this.gsap.utils.selector(this.$el);

  const topNavbar = q(".top-navbar")

  const queries = new Queries
  queries.mobile() ? this.isMenu = false : this.isMenu = true

  // const showAnim = this.gsap.from(topNavbar, {
  //     yPercent: -110,
  //     paused: true,
  //     duration: 0.2
  //   }).progress(1);

  //   this.scrollTrigger.create({
  //     start: "top top",
  //     end: 99999,
  //     onUpdate: (self) => {
  //       self.direction === -1 ? showAnim.play() : showAnim.reverse()
  //     }
  //   });

},


computed: {
  isMenu: {

    get() {
      return this.$store.state.isMenu
    },

    set(newValue) {
      this.$store.commit('setIsMenu', newValue)
    }

  },
  current () {
    return this.$store.state.current
  },
}
}
</script>

