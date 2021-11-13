<script lang="ts" setup>

import Top from "./Top.vue";
import Foot from "./Foot.vue";
import Bar from "../base/Bar.vue";
</script>

<template>
  <top></top>
  <bar></bar>
  <main>
    <slot name="default"></slot>
  </main>
  <foot></foot>
</template>

<style scoped>
</style>
