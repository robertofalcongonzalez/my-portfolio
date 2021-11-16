<script lang="ts" setup>
import {useLayout} from "../../composables/useLayout";
import {MenuIcon} from "@heroicons/vue/solid"
const {changeMenuStatus, menu} = useLayout();

const menus = {
  abilities: "Habilidades",
  projects: "Proyectos",
  aboutme: "Acerca de"
}

</script>

<template>
    <header class="md:invisible absolute w-full top-0 flex bg-white items-center">
      <MenuIcon class="h-12 w-12" @click="changeMenuStatus"></MenuIcon>
      <h3 class="text-black text-center" role="heading">Roberto Falcon Gonzalez</h3>
      <div class="flex-grow"></div>
      <div class="justify-self-end">
        <img
          alt="Selfie"
          class="rounded-full bg-cover bg-center m-2 h-12 w-12"
          src="../../assets/me.jpg"
        />
      </div>
    </header>
    <header class=" md:sticky md:top-0 bg-white shadow-md h-0 md:h-16 flex items-center invisible md:visible">
      <div class="justify-self-end">
        <img
          alt="Selfie"
          class="rounded-full bg-cover bg-center m-2 h-12 w-12"
          src="../../assets/me.jpg"
        />
      </div>
      <h3 class="text-black text-center" role="heading">Roberto Falcon Gonzalez</h3>
      <div class="flex-grow"></div>
      <ul class="inline-flex justify-self-end">
        <li
          v-for="(label) in menus"
          class="shadow-sm p-5 hover:bg-gray-200"
        >{{ label }}
        </li>
        <!--          :href="`#${name}`"-->

      </ul>
    </header>
</template>
