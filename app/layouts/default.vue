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
                        <button>
                            <Icon name="i-heroicons-cog-6-tooth-16-solid" />
                        </button>
                    </div>
                    <div>
                        <NuxtLink to="https://www.buymeacoffee.com/AdamDardour" class="text-2xl hover:text-[#003fd1]"
                            target="_blank">
                            <Icon name="i-heroicons-cup-solid" class="text-3xl" />
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

    </div>
</template>
<script lang="ts" setup>



</script>