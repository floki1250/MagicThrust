<template>
    <div>
        <button class="m-button" :style="{ '--primary-color': props.color }">
            <div style="display: flex; align-items: center">
                <div v-html="iconContent" v-if="icon && iconContent"></div>
                <div v-if="text">{{ text }}</div>
            </div>
        </button>
    </div>
</template>
<script setup>
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
    text: String,
    icon: String,
    color: {
        type: String,
        default: "#000",
    },
});
const iconContent = ref("");

onMounted(() => {
    loadIcon();
});

async function loadIcon () {
    try {
        const response = await fetch(`https://api.iconify.design/${props.icon}.svg`);
        if (response.ok) {
            iconContent.value = await response.text();
        } else {
            throw new Error("Failed to load icon");
        }
    } catch (error) {
        console.error(error);
    }
}
</script>
<style scoped lang="scss">
.m-button {
    background-color: var(--primary-color);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
    border: none;
}

.m-button:hover {
    box-shadow: 0 10px 20px -10px var(--primary-color);
    transform: translateY(-5px);
}
</style>