<script setup lang="ts">
import Spinner from "./Spinner.vue";
import {computed, inject,} from "vue";
import {useLayout} from "../../composables/useLayout";
const props = defineProps({
  radius: {type: Number, required: true},
  percent: {type: Number, required: true},
  strokeWidth: {type: Number, required: false, default: 6},
  states: {type: Object, required: true},
  string: Boolean,
  textClass: Array,
  icon: String,
  skillName: String,
  skillExperience: String,
  skillVersion: String,
});
const $t = inject('translate')
const {breakpoint} = useLayout()
const responsiveRadius = computed(() => breakpoint.value !== 'sm' ? props.radius : props.radius / 2)
const svgSize = computed(() => responsiveRadius.value * 2 + props.strokeWidth + (props.strokeWidth / Math.PI))

</script>

<template>
  <div class="flex justify-start items-center border-2 p-4 border-secondary">
    <div class="flex-col">
      <img :src="`src/assets/svg/${icon}.svg`" :style="{height: `${svgSize}px`, width: `${svgSize}px`}" alt="V">
    </div>
    <div class="flex-col ml-4 text-left">
      <div class="items-start text-accent">
        {{ $t('skill') }}: <span class="text-accentCTA">{{ skillName }}</span>
      </div>
      <div class="items-end text-accent">
        {{ $t('xp') }}: <span class="text-accentCTA">{{ skillExperience }}</span>
      </div>
      <div class="items-end text-accent " v-if="skillVersion">
        {{ $t('v') }}: <span class="text-accentCTA">{{ skillVersion }}</span>
      </div>

    </div>
    <div class="flex-grow"></div>
    <div class="flex-col ">
      <Spinner :states="states"
               :percent="percent"
               :string="string"
               :radius="responsiveRadius"
               :text-class="textClass"
               :stroke-width="strokeWidth"
      ></Spinner>
    </div>
  </div>
</template>

<style scoped>

</style>
