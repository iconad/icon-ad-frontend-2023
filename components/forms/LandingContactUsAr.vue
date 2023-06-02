<template>
  <div class="text-gray-900">
      <div class="flex flex-wrap md:flex-nowrap">
        <div class="w-full space-y-2 mb-10 lg:mb-0">
          <h3 class="text-3xl sm:text-4xl uppercase h-12 rainbow-text-digital">
              <span class="block"> {{data.title}} {{data.title2}} </span>
          </h3>
          <p class="text-lg md:text-xl lg:text-[1.٥rem] font-bold">
            <span class="block leading-[35px]"> {{ data.subtitle }} <br> {{ data.subtitle2 }} </span>
          </p>
        </div>

        <div class="w-full">
          <FormsFormAr />
        </div>

      </div>

  </div>
</template>


<script>  


  export default {

    props: ['data'],

  }
</script>
