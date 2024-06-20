<template>
    <div
        class=" blur-blob absolute top-52 left-1 md:top-20 md:left-50 lg:top-20 lg:left-4 bg-gradient-to-r from-[#467fff] dark:from-indigo-800 to-[#c980c9] dark:to-[#c980c9]  w-60 h-60 md:w-80 md:h-80 sm:w-60 sm:h-60 lg:w-96 lg:h-96">
    </div>
    <div class="flex justify-center items-center text-center gap-8 flex-col">
        <div class="px-8 text-6xl py-2">
            <h1
                class="font-montserrat font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
                MagicThrust </h1>
        </div>
        <div class="w-3/4 flex justify-center flex-col items-center">
            <div class="text-5xl text-center font-bold mb-8 ">Your Backend Is Being Lazy?</div>
            <p class="text-2xl text-gray-800 dark:text-gray-200 backdrop-blur-lg"> No worries! Magicthrust
                allows you
                to quickly create, host, and
                manage a fake
                REST API. With AI-generated JSON data, you can get everything set up with ease.</p>
        </div>
        <div class="flex gap-4 ">
            <div
                class="hover:-translate-y-1 shadow-lg bg-gradient-to-r from-[#c980c9] to-[#467fff] border-1 border-gray-100 w-fit p-0.5 rounded-full  transition-all duration-500 ease-in-out">
                <div
                    class="flex gap-2 w-fit rounded-full bg-gray-50 dark:bg-gray-900  font-semibold  text-black dark:text-white  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out group">

                    <NuxtLink to="/create">
                        <div class=" flex gap-2">
                            <UIcon name="i-heroicons-rocket-launch-solid" class="text-xl  pt-4" />
                            <span>Get Started</span>
                        </div>
                    </NuxtLink>

                </div>
            </div>
            <div
                class="hover:-translate-y-1  bg-gradient-to-r from-[#ffd000] to-[#467fff] border-1 border-gray-100 w-fit p-0.5 rounded-full  transition-all duration-500 ease-in-out">
                <div
                    class="flex gap-2 w-fit rounded-full bg-gray-50 dark:bg-gray-900  font-semibold  text-black dark:text-white  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out group">

                    <NuxtLink to="/docs">
                        <div class=" flex gap-2">
                            <UIcon name="i-heroicons-book-open-solid" class="text-xl  pt-4" />
                            <span>Learn More</span>
                        </div>
                    </NuxtLink>

                </div>
            </div>

        </div>
        <br>
        <br>

        <div class="grid grid-cols-3 gap-4 w-full text-sm mb-2">
            <div class="flex text-left p-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl">
                <UIcon name="i-heroicons-code-bracket" class="hidden lg:block  lg:text-xl" />
                <p class="ml-1">No Need Github Repo , Copy
                    & Paste your Json and start the
                    server</p>

            </div>
            <div class="flex text-left p-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl">
                <UIcon name="i-heroicons-sparkles" class="hidden lg:block  lg:text-xl" />
                <p class="ml-1"> Powered By <span
                        class="font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
                        Gemini AI✨ </span> to effortlessly generate JSON</p>
            </div>
            <div class="flex text-left p-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl">
                <UIcon name="i-heroicons-heart" class="hidden lg:block  lg:text-xl" />
                <p class="ml-1">Free To Use and Open
                    source</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.blur-blob {
    filter: blur(40px);
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(.075, .82, .165, 1);
    border-radius: 9999px;
    z-index: -10;

}
</style>