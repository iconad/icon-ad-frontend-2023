<template>
    <div class="h-screen text-red-500">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Back to home</NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error'],

    mounted() {
        this.$router.push('/')
    }
  }
  </script>