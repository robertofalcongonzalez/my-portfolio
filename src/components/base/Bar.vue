<script lang="ts" setup>
import {useLayout} from "../../composables/useLayout";
import {MenuIcon} from "@heroicons/vue/solid"
import {inject} from "vue";
import {tK} from "../../constants";

const {changeMenuStatus, breakpoint} = useLayout();
const menus = [
  {key: 'skills', linkTo: 'skills', tag: 'a'},
  {key: 'projects', linkTo: 'projects', tag: 'a'},
  {key: 'about', linkTo: 'about', tag: 'router-link'},

]
const $t = inject(tK)
</script>

<template>
  <header class="flex top-0 items-center h-16 w-full font-bold shadow-md bg-blueGray-800 text-accent">
    <MenuIcon class="w-12 h-12 text-accent" v-if="breakpoint === 'sm'" @click="changeMenuStatus"></MenuIcon>
    <h3 class="ml-2 text-center text-accent text-3xl" role="heading">{{ $t('myPortfolio') }}</h3>
    <div class="flex-grow"></div>
    <ul class="inline-flex justify-self-end" v-if="breakpoint !== 'sm'">
      <li
        v-for="(menu) in menus"
      ><a class="p-5 shadow-sm hover:bg-indigo-700" :href="`#${menu.linkTo}`">{{ $t(`menus.${menu.key}`) }}</a>
      </li>
      <!--          :href="`#${name}`"-->

    </ul>
  </header>
</template>
