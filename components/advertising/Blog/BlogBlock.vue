<template>
  <div>
    <div class="h-full">
      <nuxt-link :aria-label="blog.title" :to="`blogs${blog.slug}`">
        <UtilsImage options="w-full h-64 object-cover" :mini="blog.image_mini" :image="blog.image" />
      </nuxt-link>

    </div>
    <div class="text-lg p-5 hover:text-black font-medium">
      <nuxt-link :aria-label="blog.title" :to="`blogs${blog.slug}`" v-html="blog.title"></nuxt-link>
    </div>


    <div class="text-sm text-gray-700 font-medium p-5 mt-10 flex items-center justify-between">
      <span class="text-sm font-medium capitalize">by ICON</span>
      <nuxt-link to="/" class="w-5 h-5 bg-black rounded-full text-white flex items-center justify-center hover:rotate-90 transition-all duration-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
      </nuxt-link>
    </div>


  </div>
</template>

<script>
export default {
  props: ["blog"],
  };
</script>
