
<template>
  <div>

    <section class="digital-cover pt-12 md:pt-32">

      <PlusCover />

    </section>
    <!-- digital cover -->





    <section id="threeSection" class="-mt-10 relative z-10 h-screen py-48 bg-gradient-to-r from-theme-sky to-theme-purple flex items-center justify-center">


      <div class="space-y-6" id="JoinForm">
        <p class="text-3xl md:text-4xl font-semibold text-white text-center">
          <span class="block">Join the waiting list</span>
        </p>

        <div class="w-full mx-auto">
          <FormsJoinTheWaitingList />
        </div>

      </div>

    </section>

  </div>
</template>

<script>
  export default {
    layout: 'plus'
  }
</script>