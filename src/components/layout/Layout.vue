<script lang="ts" setup>

import Foot from "./Foot.vue";
import Bar from "../base/Bar.vue";
import {useLayout} from "../../composables/useLayout";

const {setClientWidth} = useLayout()



</script>
<template>
  <div class="bg-primary min-h-screen " v-resize="setClientWidth" id="app-sheet">
    <bar></bar>
    <main>
      <slot name="default"></slot>
    </main>
    <foot></foot>
  </div>
</template>

<style scoped>
</style>
