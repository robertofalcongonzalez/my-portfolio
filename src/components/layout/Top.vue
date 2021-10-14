<script setup lang="ts">import { ref } from '@vue/reactivity';
import constants from '../../constants';



</script>

<template>
  <div class="md:banner smallBanner flex justify-center items-center">
    <div class="md:w-2/4 bg-gray-700 w-3/4 opacity-75 m-1 p-2">
      <blockquote class="lg:text-4xl md:text-2xl font-serif text-gray-50">
        <p>“{{ constants.es.bannerText }}”</p>
      </blockquote>
      <h2
        class="md:text-xl lg:text-3xl text-right sm:text-sm text-xs text-gray-50"
      >{{ constants.es.bannerTextAuthor }}</h2>
    </div>
  </div>
  
</template>

<style scoped>
</style> 