<script setup lang="ts">
defineProps<{
  title?: string,
  titleClass?: string[] | Record<string, any>;
}>()
</script>

<template>
  <section v-bind="$attrs">
    <div :class="titleClass">
      <h3 v-if="!!title" class="text-2xl pl-4 shadow-sm">{{ title }}</h3>
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </section>
</template>

<style scoped>

</style>
