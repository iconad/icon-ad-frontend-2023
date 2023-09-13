<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-[1px] text-center border-t border-gray-300 bg-gray-300">
          
          <div class="h-64 flex flex-col justify-center bg-white space-y-1" >
            <span class="flex items-center justify-center -tracking-[4px] text-7xl md:text-8xl scale-110 font-semibold -space-x-5">
              <span class="icon-rainbow-text inline-block -space-x-4 md:-space-x-6">
                <span class="scroll-counter" data-counter-time="0.1">45</span>
                <span>+</span>
              </span>
            </span>
            <span class="font-semibold text-[21px]">In-house Team</span>
          </div>

          <div class="h-64 flex flex-col justify-center bg-white space-y-1">
            <span class="flex items-center justify-center -tracking-[4px] text-7xl md:text-8xl scale-110 font-semibold -space-x-5">
              <span class="icon-rainbow-text inline-block -space-x-4 md:-space-x-6">
                <span class="scroll-counter" data-counter-time="0.1">15</span>
                <span>+</span>
              </span>
            </span>
            <span class="font-semibold text-[21px]">Your Experience</span>
          </div>

          <div class="h-64 flex flex-col justify-center bg-white space-y-1">
            <span class="flex items-center justify-center -tracking-[4px] text-7xl md:text-8xl scale-110 font-semibold -space-x-5">
              <span class="icon-rainbow-text inline-block -space-x-4 md:-space-x-6">
                <span class="scroll-counter" data-counter-time="0.1">16</span>
                <span>+</span>
              </span>
            </span>
            <span class="font-semibold text-[21px]">Global Brands</span>
          </div>

          <div class="h-64 flex flex-col justify-center bg-white space-y-1">
            <span class="flex items-center justify-center -tracking-[4px] text-7xl md:text-8xl scale-110 font-semibold -space-x-5">
              <span class="icon-rainbow-text inline-block pr-1">
                <span class="scroll-counter" data-counter-time="500">500</span>
                <span></span>
              </span>
            </span>
            <span class="font-semibold text-[21px]">Clients</span>
          </div>

        </div>
    </div>
</template>

<script>

    import counter from '~/utils/counter'

    export default {

        mounted() {
            counter()
        },
        
    }
</script>

<style lang="scss" scoped>

</style>