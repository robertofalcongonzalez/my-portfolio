<script setup lang="ts">
import {onMounted} from "vue";

onMounted(()=>{
  fetch('https://api.github.com/users/robertofalcongonzalez').then((response)=> response.json().then(a=> console.log(a)))

})
</script>

<template>
<p>
  aklshdkljahsldkjalskjdh
</p>
</template>

<style scoped>

</style>
