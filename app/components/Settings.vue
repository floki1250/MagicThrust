<template>
    <div>
        <h1 class="poppins font-semibold">Settings</h1>
        <input type="password" v-model="apiKey" placeholder="Enter your OpenAI API Key"
            class="input input-bordered w-full max-w-xs mt-4" />
    </div>
</template>
<script setup lanp="ts">
import { useStorage } from '@vueuse/core';
const apiKey = useStorage(apiKey, '')

</script>