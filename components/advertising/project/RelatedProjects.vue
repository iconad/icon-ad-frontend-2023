<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
      <div v-for="(project, i) in projects" :key="i">
        <ProjectsProject link="advertising" size="small" height="h-96" :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['projects']
  }
</script>
