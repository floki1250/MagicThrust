<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="flex justify-center items-center text-center gap-8 flex-col h-screen">
        <h1
            class="text-8xl font-montserrat font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
            Error {{ error && error.statusCode }} </h1>

        <div
            class="hover:-translate-y-1 shadow-lg bg-gradient-to-r from-[#c980c9] to-[#467fff] border-1 border-gray-100 w-fit p-0.5 rounded-full  transition-all duration-500 ease-in-out">
            <div
                class="flex gap-2 w-fit rounded-full bg-gray-50 dark:bg-gray-900  font-semibold  text-black dark:text-white  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out group">

                <button @click="handleError">
                    <div class=" flex gap-2">
                        <Icon name="i-heroicons-home-solid" class="text-xl  pt-4" />
                        <span>Go Back</span>
                    </div>
                </button>

            </div>
        </div>

    </div>
</template>
