<script setup lang="ts">
import {inject, onMounted} from "vue";
import {tK} from "../constants";

onMounted(()=>{
  fetch('https://api.github.com/users/robertofalcongonzalez').then((response)=> response.json().then(a=> a))

})
const $t = inject(tK)
</script>

<template>
<p>
  {{ $t('test.test.test.test') }}
</p>
</template>

<style scoped>

</style>
