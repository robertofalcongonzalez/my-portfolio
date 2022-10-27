<script lang="ts" setup>
import Layout from "./components/layout/Layout.vue";
import {useLanguages} from "./composables/useLanguage";
import {onMounted, provide} from "vue";
import {tK} from "./constants";

const {setLanguage, translate, lang} = useLanguages()
//TODO: Check if this is the event fired when reload
onMounted(() => {
  const lsLang = localStorage.getItem('lang');
  if (lsLang) {
    setLanguage(lsLang);
  }
})
provide(tK, translate);
</script>

<template>
  <Layout>
    <template v-slot:default>
      <router-view></router-view>
    </template>
  </Layout>
</template>

<style>
</style>
