<script setup lang="ts">
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue'
import {inject} from "vue";
import SingleSkill from "./base/SingleSkill.vue";

const $t = inject('translate')
</script>

<template>
  <div class="px-2 py-2 w-full sm:px-0">
    <TabGroup>
      <TabList class="flex w-full rounded-xl">
        <Tab v-for="skill in $t('skillGroup')" class="drop-shadow-2xl"
             v-slot="{ selected }" as="template">
          <button
            :class="[
              'w-full mx-2 py-2.5 leading-5 font-medium bg-primary text-secondary hover:text-accent',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-secondary ring-opacity-60',
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
        <TabPanel v-for="skillGroup in Object.keys($t('skillGroup'))" :key="skillGroup">
          <!-- TODO: Add Transitions-->
<!--          <transition-group duration="1"-->
<!--                            enter-active-class="transition ease-in duration-700"-->
<!--                            leave-active-class="transition ease-out duration-700">-->
            <div class="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-4 my-4">
              <SingleSkill v-for="skill in $t('skillDetails')[skillGroup]" :key="skill.name"
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
<!--          </transition-group>-->

        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<style scoped>

</style>
<!--<Spinner :percent="100" :radius="40" string :states="$t('states')"></Spinner>-->
