<script lang="ts" setup>
defineProps<{ name: string, color: string }>()
</script>

<template>
  <button class="btn btn-purple">{{ name }}</button>
</template>

<style scoped>

</style>
