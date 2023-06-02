<template>

    <div class="space-y-5 cursor-pointer" @click="goTo">
      <UtilsProjectImage :options="`${height} bg-gray-100 w-full object-cover rounded-2xl overflow-hidden`" :mini="project.image_mini" :image="project.large_thumb" />

      <div class="mt-5 space-y-3 px-5 pt-3 pb-8 w-full lg:w-3/4" :class="mode == 'dark' ? 'text-gray-100' : 'text-black' ">
        <h2 :class="size == 'small' ? 'text-2xl' : 'md:text-2xl 2xl:text-3xl' " class="text-xl font-semibold uppercase">
          <nuxt-link :to="`/${link}/projects${project.slug}`" v-html="project.title"> </nuxt-link>
        </h2>
        <div v-if="size != 'small' " v-html="project.body" class="text-sm md:text-base opacity-80"></div>
      </div>
    </div>

</template>

<script>
  export default {
    props: ['project', 'size', 'height', 'link', 'mode'],
    methods: {
      goTo() {
        this.$router.push({path: `/${this.link}/projects${this.project.slug}`});
      }
    },
  }
</script>
