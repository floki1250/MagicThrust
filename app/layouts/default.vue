<template>
    <div>
        <header class="fixed top-0 z-50 w-full bg-background/90 backdrop-blur p-2">
            <div class="flex justify-between items-center h-12">
                <div class="rounded-full">
                    <NuxtLink to="/" class="text-3xl font-bold">
                        <img src="/logo.svg" class="w-12 h-12" />
                    </NuxtLink>

                </div>

                <div class="flex justify-center gap-4">
                    <div>
                        <button @click="settings = true">
                            <Icon name="i-heroicons-cog-6-tooth-16-solid" />
                        </button>
                    </div>
                    <div>
                        <NuxtLink to="https://www.buymeacoffee.com/AdamDardour" class="text-2xl hover:text-[#003fd1]"
                            target="_blank">

                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="https://github.com/floki1250" class="text-2xl hover:text-[#003fd1]"
                            target="_blank">

                        </NuxtLink>
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