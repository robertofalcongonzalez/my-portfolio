<script lang="ts" setup>
import Layout from "./components/layout/Layout.vue";
import BaseSection from "./components/layout/BaseSection.vue";
import {useLanguages} from "./composables/useLanguage";
import {provide, ref} from "vue";
import {DownloadIcon, TrashIcon} from "@heroicons/vue/solid"

const {$t, setLanguage, lang} = useLanguages()
const showDownload = ref(true)
//TODO: Check if this is the event fired when reload
document.addEventListener('readystatechange', () => {
  setLanguage(localStorage.getItem('lang') || 'es');
})
provide('translate', $t);
</script>

<template>
  <Layout>
    <template v-slot:default>
      <BaseSection :title="$t('downloadCV')" v-if="showDownload"
                   :title-class="['flex justify-start items-center border-4 border-red-400 border-dashed']"
      >
        <template v-slot:title>
          <button class="animate-bounce">
            <DownloadIcon class="h-12 text-red-300"></DownloadIcon>
          </button>
          <div class="flex-grow"></div>
          <TrashIcon class="h-12 text-red-300" @click="showDownload = false"></TrashIcon>
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
  </Layout>
</template>

<style>
</style>
