<script setup lang="ts">
import { inject } from '@vue/runtime-core';
import layoutKey, { ILayout } from '../../store/global'
const layout = inject(layoutKey) as ILayout
const menus = {
    abilities: "Habilidades",
    projects: "Proyectos",
    aboutme: "Acerca de"
}

</script>

<template>
    <div
        :class="['md:sticky', 'md:top-0', 'bg-white', 'shadow-md', 'md:visible', { visible: layout.menu }]"
    >
        <div class="flex items-center">
            <div class="justify-self-start">
                <img
                    src="../../assets/me.jpg"
                    alt="Selfie"
                    class="rounded-full bg-cover bg-center m-2 h-12 w-12"
                />
            </div>
            <h3 role="heading" class="text-black justify-self-start">Roberto Falcon Gonzalez</h3>
            <div class="flex-grow"></div>
            <ul class="inline-flex justify-self-end">
                <li
                    v-for="(label, name) in menus"
                    role="link"
                    class="shadow-sm p-5 hover:bg-gray-200"
                    :href="`#${name}`"
                >{{ label }}</li>
            </ul>
        </div>
    </div>
</template>