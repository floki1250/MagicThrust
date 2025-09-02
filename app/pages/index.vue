<template>
    <div class="min-h-screen w-full  overflow-hidden">
        <div class=" absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <Prism animation-type="rotate" :time-scale="0.5" :height="3.5" :base-width="5.5" :scale="3.6" :hue-shift="0"
                :color-frequency="1" :noise="0" :glow="1" />
        </div>
        <!-- Background Blobs -->

        <div class="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            <div class=" px-8  mt-8 mb-2 2xl:mb-8">
                <h1
                    class="poppins text-6xl lg:text-6xl 2xl:text-8xl  h-28 font-bold backdrop-blur-sm  shadow-gradient-to-r from-[#003fd1] via-50% via-[#FF2100] to-[#ff9500]  bg-clip-text text-base-content">
                    <span
                        class="font-bold bg-white transition-all duration-300 hover:bg-gradient-to-r from-[#003fd1]  to-[#fff] bg-clip-text text-transparent">
                        MagicThrust✨ </span>
                </h1>
            </div>
            <div class="md:w-3/4 w-full  flex justify-center flex-col items-center">
                <div class="text-2xl lg:text-2xl 2xl:text-5xl text-center font-bold mb-8 poppins w-96">Create Mock
                    servers
                    and
                    generate JSON data effortlessly with AI assistance.
                </div>

            </div>
            <div class="flex gap-4 my-8">
                <button
                    class=" transition-all duration-300 w-40 flex justify-center items-center ease-in-out bg-black/80 px-4 rounded-2xl border-2 border-base-300 hover:border-[#003fd1]   hover:shadow-2xl shadow-[#003fd1] py-2">
                    <NuxtLink to="/create">
                        <div class=" flex items-center gap-2">
                            <Icon name="i-heroicons-rocket-launch-solid" class="text-xl  " />
                            <span>Get Started</span>
                        </div>
                    </NuxtLink>
                </button>
                <button
                    class=" transition-all duration-300 w-40 flex justify-center items-center ease-in-out bg-black/80 px-4 rounded-2xl border-2 border-base-300 hover:border-[#003fd1]   hover:shadow-2xl shadow-[#003fd1]  py-2">
                    <NuxtLink to="/docs">
                        <div class=" flex items-center justify-center gap-2">
                            <Icon name="i-heroicons-book-open" class="text-xl  " />
                            <span>Learn More</span>
                        </div>
                    </NuxtLink>
                </button>
            </div>
            <div class="absolute bottom-1 left-0 right-0 mx-auto h-fit w-full md:w-fit p-4 poppins">
                <div class="grid md:grid-cols-3 gap-4 w-full text-sm ">
                    <div
                        class="flex text-left md:max-w-96 p-4 bg-base-100/80 hover:shadow-lg transition-shadow ease-linear duration-500  backdrop-blur-sm  rounded-xl">
                        <Icon name="i-heroicons-code-bracket" class="hidden lg:block  lg:text-xl" />
                        <p class="ml-1">No Need Github Repo , Copy
                            & Paste your Json and start the
                            server</p>

                    </div>
                    <div
                        class="flex text-left p-4 md:max-w-96  bg-base-100/80 hover:shadow-lg transition-shadow ease-linear duration-500  rounded-xl">
                        <Icon name="i-heroicons-sparkles" class="hidden lg:block  lg:text-xl" />
                        <p class="ml-1"> Powered By <span
                                class="font-bold  bg-gradient-to-r from-[#003fd1]  to-[#fff] bg-clip-text text-transparent">
                                Gemini AI✨ </span> to effortlessly generate JSON</p>
                    </div>
                    <div
                        class="flex text-left md:max-w-96  p-4 bg-base-100/80 hover:shadow-lg transition-shadow ease-linear duration-500   rounded-xl">
                        <Icon name="i-heroicons-heart" class="hidden lg:block  lg:text-xl" />
                        <p class="ml-1">Free To Use and Open
                            source</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
