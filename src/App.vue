<script lang="ts" setup>
import Layout from "./components/layout/Layout.vue";
import {useLanguages} from "./composables/useLanguage";
import {provide} from "vue";

const {$t, setLanguage, lang} = useLanguages()
//TODO: Check if this is the event fired when reload
document.addEventListener('readystatechange', () => {
  setLanguage(localStorage.getItem('lang') || 'es');
})
provide('translate', $t);</script>

<template>
  <Layout>
    <template v-slot:default>
      <router-view></router-view>
    </template>
  </Layout>
</template>

<style>
</style>
