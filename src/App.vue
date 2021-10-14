<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Layout from "./components/layout/Layout.vue";
</script>

<template>
  <Layout>
    <template v-slot:default>
      <main>
        <div style="height: 200vh;"></div>
        <section>
          <div class="sticky top-0 shadow-md h-16" id="abilities"></div>
        </section>
        <section></section>
        <section></section>
      </main>
    </template>
  </Layout>
</template>

<style>
</style>
