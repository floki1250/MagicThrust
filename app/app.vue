<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#6366f1" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'MagicThrust',
  ogTitle: 'MagicThrust',
  description: 'Create fake servers and generate JSON data effortlessly with AI assistance. 🚀✨',
  ogDescription: 'Create fake servers and generate JSON data effortlessly with AI assistance. 🚀✨',
  ogImage: 'https://adamdar.vercel.app/img/magicthrust.jpeg',
})
</script>
