<script setup lang="ts">
import {computed, ref} from "vue";

interface States {
  start: string;
  middle: string;
  creative: string;
  master: string;
}

const props = defineProps({
  radius: {type: Number, required: true},
  percent: {type: Number, required: true},
  strokeWidth: {type: Number, required: false, default: 6},
  states: {type: Object, required: true},
  string: Boolean,
  textClass: Array,
});

const ringWidth = ref(2 * Math.PI * props.radius);
const ringSlice = ringWidth.value * (props.percent / 100)
// TODO: Animate it!
const offset = ref(ringWidth.value - ringSlice)
const text = computed(() => {
  // Get enum element based on percentage
  const numberToText = props.percent <= 25 ?
    props.states.start : props.percent > 25 && props.percent <= 50 ?
      props.states.middle : props.percent > 50 && props.percent <= 75 ?
        props.states.creative : props.percent > 75 && props.percent <= 100 ?
          props.states.master : undefined;
  return props.string ? numberToText : `${props.percent}%`
})
const circlePosition = computed(() => props.radius + (props.strokeWidth + (props.strokeWidth / 3)) / 2)
const svgSize = computed(() => props.radius * 2 + props.strokeWidth + (props.strokeWidth / Math.PI))

</script>

<template>
  <div class="flex justify-center items-center z-10 relative">
    <svg class="flex innerCircle"
         :style="{'stroke-dashoffset':offset, 'stroke-dasharray': ringWidth,
          height: `${svgSize}px`, width: `${svgSize}px`}">
      <circle :cx="circlePosition"
              :cy="circlePosition"
              :r="radius"
              class="m-auto"
              stroke="#428bca"
              :stroke-width="strokeWidth"
              fill="transparent">

      </circle>
    </svg>
    <svg class="flex absolute"
    :style="{height: `${svgSize}px`, width: `${svgSize}px`}">
      <circle :cx="circlePosition"
              :cy="circlePosition"
              :r="radius + strokeWidth /2"
              class="absolute m-auto"
              stroke="white"
              :stroke-width="strokeWidth * 0.05"
              fill="transparent">

      </circle>
      <circle :cx="circlePosition"
              :cy="circlePosition"
              :r="radius - strokeWidth / 2"
              class="absolute m-auto"
              stroke="white"
              :stroke-width="strokeWidth * 0.05"
              fill="transparent">

      </circle>
    </svg>
    <div role="textbox"
         class="flex absolute"
         :style="{height: `${radius * 2}px`, width: `${radius * 2}px`}">
      <span :class="['m-auto', {'text-center': string}, ...textClass]">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Doesn't work properly with tailwind -rotate-90 class */
.innerCircle {
  transform: rotate(-90deg);
}
</style>
