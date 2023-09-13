<template>
  <div class="grid grid-cols-1 gap-[1.5px] border-b">
    <div
      v-for="(item, i) in expertises"
      :key="item.id"
      class="expertises-grid bg-white group py-10 flex items-end justify-between transition-all relative"
    >
      <nuxt-link
        :to="item.link"
        :class="`flex items-center space-x-8 icon-rainbow-text-on-hover w-full select-none`"
      >
        <UtilsProjectImage
          :options="`w-16`"
          :mini="item.icon_mini"
          :image="item.icon"
        />

        <h3
          class="text-3xl md:text-[2.5rem] 3xl:text-5xl font-bold transition-all -space-y-px"
        >
          <span
            class="block"
            v-for="(text, i) in breakText(item.name)"
            :key="i"
            v-html="text"
          >
          </span>
        </h3>
      </nuxt-link>
      <span
        class="block bg-black w-7 h-7 rounded-full text-white flex items-center justify-center transition-all duration-500 group-hover:-translate-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
    <!-- item -->
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: ["expertises"],
  data() {
    return {
      colors: ["red", "sky", "pink", "purple", "sky-dark", "purple"],
    };
  },
  methods: {
    breakText(text) {
      return text.split("#");
    },
  },
};
</script>
