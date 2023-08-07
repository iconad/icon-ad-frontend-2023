<template>
  <div>
    <div class="">
      <nuxt-link :aria-label="blog.title" :to="`blogs${blog.slug}`">

        <UtilsImage options="w-full h-64 object-cover" :mini="blog.image_mini" :image="blog.image" />

      </nuxt-link>

    </div>
    <div class="text-sm text-gray-700">
          <!-- {{blog.date}} -->
    </div>
    <div class="text-lg ">
      <nuxt-link class="p-3 pt-5 block" :aria-label="blog.title" :to="`blogs${blog.slug}`" v-html="blog.title"></nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  props: ["blog"],
  };
</script>
