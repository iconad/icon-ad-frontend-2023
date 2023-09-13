<template>

    <div class="space-y-5 cursor-pointer" @click="goTo">
      <UtilsProjectImage class="overflow-hidden rounded-2xl" :options="`${height} bg-gray-100 w-full object-cover transition-all duration-300 hover:scale-105`" :mini="project.image_mini" :image="project.large_thumb" />

      <div class="mt-5 text-white">
        <h2 class="text-[21px] font-semibold uppercase leading-tight"> 
          <nuxt-link :to="`/${link}/projects${project.slug}`" v-html="project.title"> </nuxt-link>
        </h2>
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
