<template>
    <div class="h-svh md:min-h-screen w-full overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <Prism animation-type="rotate" :time-scale="0.5" :height="3.5" :base-width="5.5" :scale="3.6" :hue-shift="0"
                :color-frequency="1" :noise="0" :glow="1" />
        </div>

        <div
            class="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
            <!-- Title Section -->
            <div class="text-center mb-4 sm:mb-6 lg:mb-8">
                <h1 class="poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
                    <span
                        class="font-bold bg-white transition-all duration-300 hover:bg-gradient-to-r from-[#003fd1] to-[#fff] bg-clip-text text-transparent">
                        MagicThrust✨
                    </span>
                </h1>
            </div>

            <!-- Description Section -->
            <div class="w-full max-w-4xl flex justify-center flex-col items-center mb-6 sm:mb-8">
                <div class="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-center font-bold poppins px-4">
                    Create Mock servers and generate JSON data effortlessly with AI assistance.
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="flex justify-center flex-col sm:flex-row gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none ">
                <button
                    class="transition-all duration-300 w-full sm:w-40 flex justify-center items-center ease-in-out bg-black/80 px-4 rounded-2xl border-2 border-base-300 hover:border-[#003fd1] hover:shadow-2xl shadow-[#003fd1] py-3 sm:py-2">
                    <NuxtLink to="/create" class="w-full flex justify-center">
                        <div class="flex items-center gap-2">
                            <Icon name="i-heroicons-rocket-launch-solid" class="text-xl" />
                            <span>Get Started</span>
                        </div>
                    </NuxtLink>
                </button>
                <button
                    class="transition-all duration-300 w-full sm:w-40 flex justify-center items-center ease-in-out bg-black/80 px-4 rounded-2xl border-2 border-base-300 hover:border-[#003fd1] hover:shadow-2xl shadow-[#003fd1] py-3 sm:py-2">
                    <NuxtLink to="/docs" class="w-full flex justify-center">
                        <div class="flex items-center justify-center gap-2">
                            <Icon name="i-heroicons-book-open" class="text-xl" />
                            <span>Learn More</span>
                        </div>
                    </NuxtLink>
                </button>
            </div>

            <!-- Feature Cards Section -->
            <div
                class="hidden md:block absolute bottom-2  md:bottom-8 left-0 right-0 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 poppins">
                <div class="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 w-full text-sm sm:text-base">
                    <div
                        class="flex flex-col sm:flex-row text-left p-3 sm:p-4 bg-base-100/80 hover:shadow-lg transition-shadow ease-linear duration-500 backdrop-blur-sm rounded-xl">
                        <Icon name="i-heroicons-code-bracket"
                            class="hidden sm:block text-xl mb-2 sm:mb-0 sm:mr-2 flex-shrink-0" />
                        <p class="sm:ml-1">
                            No Need Github Repo, Copy & Paste your JSON and start the server
                        </p>
                    </div>
                    <div
                        class="flex flex-col sm:flex-row text-left p-3 sm:p-4 bg-base-100/80 hover:shadow-lg transition-shadow ease-linear duration-500 rounded-xl">
                        <Icon name="i-heroicons-sparkles"
                            class="hidden sm:block text-xl mb-2 sm:mb-0 sm:mr-2 flex-shrink-0" />
                        <p class="sm:ml-1">
                            Powered By <span
                                class="font-bold bg-gradient-to-r from-[#003fd1] to-[#fff] bg-clip-text text-transparent">
                                Gemini AI✨
                            </span> to effortlessly generate JSON
                        </p>
                    </div>
                    <div
                        class="flex flex-col sm:flex-row text-left p-3 sm:p-4 bg-base-100/80 hover:shadow-lg transition-shadow ease-linear duration-500 rounded-xl">
                        <Icon name="i-heroicons-heart"
                            class="hidden sm:block text-xl mb-2 sm:mb-0 sm:mr-2 flex-shrink-0" />
                        <p class="sm:ml-1">
                            Free To Use and Open source
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>