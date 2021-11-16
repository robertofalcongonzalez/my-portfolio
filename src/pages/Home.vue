<script setup lang="ts">
import {DownloadIcon, TrashIcon} from "@heroicons/vue/solid"
import BaseSection from "../components/layout/BaseSection.vue";
import {inject, ref} from "vue";

const showDownload = ref(true)
const $t = inject('translate')
</script>
<template>
  <BaseSection :title="$t('downloadCV')" v-if="showDownload"
               :title-class="['flex justify-start items-center border-4 border-red-400 border-dashed pr-2']"
  >
    <template v-slot:title>
      <button class="animate-bounce">
        <DownloadIcon class="h-12 text-red-300"></DownloadIcon>
      </button>
      <div class="flex-grow"></div>
      <TrashIcon class="h-6 cursor-pointer text-red-300" @click="showDownload = false"></TrashIcon>
    </template>
  </BaseSection>
  <BaseSection class="shadow-sm mt-2"
               :title="$t('firstSectionTitle')"
               :title-class="['sticky h-16 flex shadow-sm items-center justify-start border']"
  >
    <template v-slot:content>

    </template>
  </BaseSection>
  <section></section>
  <section></section>
</template>

<style scoped>

</style>
