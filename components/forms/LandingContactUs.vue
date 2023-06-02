<template>
  <div class="text-gray-900">
      <div class="flex flex-wrap md:flex-nowrap">
        <div class="w-full space-y-2 mb-10 lg:mb-0">
          <h3 class="text-3xl sm:text-4xl uppercase italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-pink to-theme-red">
              <span class="block"> {{data.title}} {{data.title2}} </span>
          </h3>
          <p class="text-lg md:text-xl lg:text-[1.3rem] font-bold">
            <span class="block"> {{ data.subtitle }} <br> {{ data.subtitle2 }} </span>
          </p>
        </div>

        <div class="w-full">
          <FormsLandingForm />
        </div>

      </div>

  </div>
</template>


<script>


  export default {

    props: ['data'],

  }
</script>
