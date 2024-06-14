<template>
    <div
        class="blur-blob absolute top-20 left-20 md:top-20 md:left-50 lg:top-20 lg:left-16 bg-gradient-to-r from-[#467fff] to-[#ceb2ce] w-60 h-60 md:w-80 md:h-80 sm:w-60 sm:h-60 lg:w-96 lg:h-96">
    </div>
    <div class="flex justify-center items-center text-center gap-8 flex-col">

        <div class="px-8 text-4xl lg:text-6xl py-2">
            <h1
                class="font-montserrat font-bold  bg-gradient-to-r from-[#467fff] to-[#ceb2ce] bg-clip-text text-transparent">
                MagicThrust </h1>
        </div>
        <div class="w-2/3">
            <div class="text-5xl text-center font-bold mb-8 ">Your Backend Is Being Lazy?</div>
            <p class="text-2xl text-gray-500 dark:text-gray-200"> No worries! Magicthrust
                allows you
                to quickly create, host, and
                manage a fake
                REST API. With AI-generated JSON data, you can get everything set up with ease.</p>
        </div>
        <div>
            <div
                class="hover:-translate-y-1 shadow-lg bg-gradient-to-r from-[#ceb2ce] to-[#467fff] border-1 border-gray-100 w-fit p-0.5 rounded-full  transition-all duration-500 ease-in-out">
                <div
                    class="flex gap-2 w-fit rounded-full bg-gray-50 dark:bg-gray-900  font-semibold  text-black dark:text-white  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out group">

                    <button>
                        <div class="flex gap-2">
                            <UIcon name="i-heroicons-rocket-launch-solid" class="text-xl  pt-4" />
                            <span>Get Started</span>
                        </div>
                    </button>

                </div>
            </div>

        </div>
        <br>
        <div class="grid grid-cols-3 gap-4 w-full text-sm mb-2">
            <div class="text-left p-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl">No Need Github Repo , Copy
                & Paste your Json and start the
                server</div>
            <div class="text-left p-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl">Powered By <span
                    class="font-bold  bg-gradient-to-r from-[#467fff] to-[#ceb2ce] bg-clip-text text-transparent">
                    Gemini AI✨ </span> to effortlessly generate JSON</div>
            <div class="text-left p-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl">Free To Use and Open
                source</div>
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