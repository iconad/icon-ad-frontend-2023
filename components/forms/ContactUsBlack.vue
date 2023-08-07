<template>
  <div class="text-center text-gray-900">
      <div class="title space-y-16">
        <div class="space-y-6">
          <h3 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100" class="text-3xl md:text-4xl font-bold text-gray-100">
              <span class="block"> Get In Touch</span>
              <!-- <span class="block"> brands in the world.</span> -->
          </h3>
        </div>

        <div class="w-full lg:w-1/2 mx-auto">
          <FormsFormBlack :type="type" />
        </div>

      </div>

  </div>
</template>


<script>


  export default {

    props: ['data', 'type'],

  }
</script>
