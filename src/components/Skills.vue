<script setup lang="ts">
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue'
import {inject, ref} from "vue";
import SingleSkill from "./base/SingleSkill.vue";
import {tK} from "../constants";

const $t = inject(tK)
const selected = ref(0)
</script>

<template>
  <div class="px-2 py-2 sm:px-0">
    <TabGroup :default-index="1">
      <TabList class="flex justify-start">
        <Tab v-for="(skill, key, index) in $t('skillGroup')" class="drop-shadow-2xl flex-grow px-2"
             v-slot="{ selected }" as="div">
          <button
            :class="[
              'w-full mx-2 py-2.5 leading-5 font-medium bg-primary text-secondary hover:text-accent',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-secondary ring-opacity-60 w-full',
              selected
                ? 'bg-primary shadow-lg border-2 border-secondary'
                : 'text-secondary hover:bg-white/[0.12] ',
            ]"
          >
            {{ skill }}
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2 px-2">
        <TabPanel v-for="(_, skillGroupKey) in $t('skillGroup')" :key="skillGroupKey">
          <div class="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-4 my-4">
            <SingleSkill v-for="skill in $t('skillDetails')[skillGroupKey]" :key="skill.name"
                         :states="$t('states')"
                         :icon="skill.icon"
                         :percent="skill.percent"
                         :radius="40"
                         :text-class="['text-sm whitespace-normal text-white']"
                         :skill-name="skill.name"
                         :skill-experience="skill.xp"
                         :skill-version="skill.v"
            ></SingleSkill>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<style scoped>

</style>
