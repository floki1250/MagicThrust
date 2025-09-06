<template>
    <div>
        <header class="fixed top-0 z-50 w-full bg-background/90 backdrop-blur p-2">
            <div class="flex justify-between items-center h-12">
                <div class="rounded-full">
                    <NuxtLink to="/" class="text-3xl font-bold">
                        <img src="/logo.svg" class="w-12 h-12" />
                    </NuxtLink>

                </div>

                <div class="flex justify-center gap-1">


                    <div>
                        <NuxtLink to="https://github.com/floki1250/MagicThrust" class="btn hover:text-[#003fd1]"
                            target="_blank">
                            <span class="text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
                                    <path fill="currentColor"
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="https://adamdardour.dev" class="btn hover:text-[#003fd1]" target="_blank">
                            <Icon name="i-heroicons-cursor-arrow-ripple-16-solid" class="text-xl" />
                        </NuxtLink>
                    </div>
                    <div>
                        <button class="btn" @click="settings = true">
                            <Icon name="i-heroicons-cog-6-tooth-16-solid" class="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <div>
            <slot />
        </div>
        <dialog class="modal modal-open" v-if="settings">
            <div class="modal-box border-2 border-base-300 shadow-2xl  max-w-md">
                <h1 class="text-2xl poppins font-semibold">Gemini Api Key</h1>
                <form method="dialog" class="modal-action">
                    <button @click="settings = false"
                        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <input type="password" v-model="apiKey" placeholder="Enter your Gemini API Key"
                        class="input input-bordered w-full " />
                </form>
            </div>
        </dialog>
    </div>
</template>
<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
const settings = ref(false)
const apiKey = useStorage('apiKey', '')

</script>