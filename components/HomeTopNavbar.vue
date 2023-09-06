<template>
  <div id="topnavbar" class="text-black top-navbar w-full border-b border-gray-300">
        <div class="home-container">
            <div class="flex items-center justify-end lg:justify-between">

              <div class="text-xs tracking-widest space-x-1 flex items-start">
                  <nuxt-link to="/">
                    <AssetsLogo options="w-[7rem] h-10"/>
                  </nuxt-link>
              </div>
              <!-- join us link -->

                <ul class="flex items-center capitalize space-x-5 2xl:text-sm tracking-wider -ml-3 py-1">
                    <li v-for="(item, i) in nav" :key="i" class="relative group">
                         <nuxt-link :to="item.link" :class="item.active ? 'bg-white text-black' : ''" class="w-full lg:w-auto flex items-center space-x-1 justify-center py-4 px-2 xl:px-3 block font-medium hover:bg-white focus:outline-none focus:text-black focus:bg-white hover:text-black -tracking-[0.2px]">
                          <span>{{item.name}}</span>
                          <span class="arrow-down" v-if="item.nested">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" fill="none"><path stroke="url(#a)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 1 5.5 6 1 1"/><defs><linearGradient id="a" x1=".893" x2="10.091" y1=".555" y2="2.064" gradientUnits="userSpaceOnUse"><stop stop-color="#56B7DF"/><stop offset=".331" stop-color="#9E7FE0"/><stop offset=".628" stop-color="#C769A3"/><stop offset="1" stop-color="#DD5C63"/></linearGradient></defs></svg>
                          </span>
                        </nuxt-link>
                        <ul v-if="item.nested" class="opacity-0 translate-y-10 scale-50 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 group-hover:opacity-100 absolute bg-white border border-gray-300 shadow-2xl shadow-theme-sky/30 hover:shadow-theme-sky/50 rounded-2xl flex items-center overflow-hidden pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100">
                          <li v-for="(nest, i) in item.items" :key="i">
                            <nuxt-link
                              :style="`background-image: url(${nest.bgimg})`" 
                              class="relative flex items-end text-lg w-36 h-32 p-5 bg-cover bg-center font-semibold" :class="nest.bgimg ? 'text-white' : 'text-black hover:bg-gray-50'" :to="nest.link">
                              <span class="relative z-[11]">{{  nest.name  }}</span>  
                              <span v-if="nest.bgimg != false" class="inset-0 absolute bg-gradient-to-t from-black via-transparent"></span>
                            </nuxt-link>
                          </li>
                        </ul>
                    </li>
                    <li >
                         <nuxt-link to="/contact" class="w-full lg:w-auto flex justify-center text-white py-1 px-3 xl:px-3 block font-medium focus:outline-none icon-rainbow-bg rounded-full">Contact Us</nuxt-link>
                    </li>
                </ul>
                <!-- navbar list -->

            </div>
        </div>
        <!-- top navbar -->

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
        nested: false,
      },
      {
        name: 'advertising',
        link: '/advertising',
        nested: true,
        items: [
          {
            name: 'Works',
            link: '/advertising/projects',
            bgimg: 'https://res.cloudinary.com/dizi8svi8/image/upload/c_thumb,w_200,g_face/v1693296744/Bsy4JsjDPLUxI2JJdtqR_obnkyj.jpg',
          },
          {
            name: 'Services',
            link: '/advertising/services',
            bgimg: false,
          }
        ]
      },
      {
        name: 'digital',
        link: '/digital',
        nested: true,
        items: [
          {
            name: 'Works',
            link: '/digital/projects',
            bgimg: 'https://res.cloudinary.com/dizi8svi8/image/upload/c_thumb,w_200,g_face/v1693317846/Screenshot_2023-08-29_at_6.03.52_PM_luvcjl.png',
          },
          {
            name: 'Services',
            link: '/digital/services',
            bgimg: false,
          }
        ]
      },
      {
        name: 'branding',
        link: '/branding',
        nested: true,
        items: [
          {
            name: 'Works',
            link: '/branding/projects',
            bgimg: 'https://res.cloudinary.com/dizi8svi8/image/upload/c_thumb,w_200,g_face/v1693318035/Buffalo_Brand_Book_by_ICON_BrandingStudio_resized_2__page-0028_0_fusjc9.jpg',
          },
          {
            name: 'Services',
            link: '/branding/services',
            bgimg: false,
          }
        ]
      },
      {
        name: 'clients',
        link: '/clients',
      },
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

