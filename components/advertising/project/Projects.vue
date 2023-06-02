<template>
  <div class="startformhere">
    <client-only>
      <masonry :cols="{default: 2, 920: 1}" :gutter="{default: page == 'home' ? '100px' : '50px' , 1120: '20px', 880: '50px'}" >
        <div v-for="(project, i) in projects" :key="i" class="w-full">

          <ProjectsProject :mode="mode" link="advertising" :project="project" class="project"
            :class="[
              i == 1 ? page == 'home' ? 'lg:mt-64' : 'lg:mt-32' : page == 'home' ? 'lg:mt-20' : '' ,
            ]"
          />

        </div>
      </masonry>
    </client-only>
  </div>
</template>


<script>

export default {
  props:['from', 'to', 'mode', 'page'],

  mounted() {
    // this.$nextTick(() => this.animate());
  },

  methods: {

    animate () {


      let q = this.gsap.utils.selector(this.$el);

      const projectEven = q(".project-even")
      const projectOdd = q(".project-odd")
      const startFromHere = q(".startformhere")


      const scrollTrigger = {
          trigger: startFromHere,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
          pin: true
        };

        this.gsap.timeline({ scrollTrigger }).to(projectEven, { y: 300});
        this.gsap.timeline({ scrollTrigger }).from(projectOdd, { y: -300});


      this.gsap.to(projectEven,
        {
          y: 200,
          scrollTrigger: projectEven
        }
      );

      this.gsap.to(projectOdd,
        {
          y: -200
        }
      );


    }

  },

  computed: {

    projects () {
      return [ ...this.$store.state.project.projects ].splice(this.from, this.to)
    }
  }
}


</script>


<style scoped>
  .masonry-columns {
    columns: 2;
  }
</style>
