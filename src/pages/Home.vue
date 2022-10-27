<script setup lang="ts">
import {DownloadIcon} from "@heroicons/vue/solid"
import BaseSection from "../components/layout/BaseSection.vue";
import {inject} from "vue";
import Skills from "../components/Skills.vue";
import GithubProfile from "../components/GithubProfile.vue";
import {tK} from "../constants";
import {useLanguages} from "../composables/useLanguage";

const $t = inject(tK)
const {lang} = useLanguages();
</script>
<template>
  <BaseSection>
    <template #content>
      <figure class="p-8 text-accent rounded-xl md:flex md:p-0">
        <img class="mx-auto w-32 h-32 rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/me.jpg" alt=""
             width="640" height="640">
        <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
          <blockquote>
            <p class="text-2xl font-semibold">
              “{{ $t('aboutText') }}”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-cyan-600">
              Roberto Falcón González
            </div>
            <div class="text-gray-500">
              {{ $t('professionalTitle') }}
            </div>
          </figcaption>
        </div>
      </figure>
    </template>
  </BaseSection>
  <BaseSection id="skills"
               :title="$t('firstSectionTitle')"
               :title-class="['sticky h-16 flex text-accentCTA font-bold items-center shadow-inner justify-start bg-secondary']"
  >
    <template v-slot:title>
      <div class="flex-grow"></div>
      <div>{{ $t('downloadCV') }}</div>
      <a class="animate-bounce" :href="`src/assets/cvs/${lang}.pdf`" :download="$t('cvFileName')">
        <DownloadIcon class="h-12 text-accentCTA"></DownloadIcon>
      </a>
    </template>
    <template v-slot:content>
      <Skills></Skills>
    </template>
  </BaseSection>
  <BaseSection>
    <template #content>
      <GithubProfile></GithubProfile>
    </template>
  </BaseSection>
</template>

<style scoped>

</style>
