<template>
    <div>
        <div
            class=" blur-blob absolute top-52 left-1 md:top-20 md:left-50 lg:top-20 lg:left-4 2xl:top-40 2xl:left-10 bg-gradient-to-r from-[#467fff] dark:from-indigo-800 to-[#c980c9] dark:to-[#c980c9]  w-60 h-60 md:w-80 md:h-80 sm:w-60 sm:h-60 lg:w-96 lg:h-96 2xl:w-96 2xl:h-96">
        </div>
        <div class="relative h-screen w-full flex flex-col justify-center items-center">


            <div class=" px-8 mt-8 mb-1 2xl:mb-8">
                <h1
                    class="font-montserrat text-6xl lg:text-6xl 2xl:text-8xl  h-28 font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
                    MagicThrust </h1>
            </div>
            <div class="w-3/4 flex justify-center flex-col items-center">
                <div class="text-2xl lg:text-2xl 2xl:text-5xl text-center font-bold mb-8 ">Your Backend Is Being
                    Lazy?
                </div>
                <p class="text-md m-auto  w-2/3 text-gray-800 dark:text-gray-200 backdrop-blur-lg"> No worries!
                    Magicthrust
                    allows you
                    to quickly create, host, and
                    manage a fake
                    REST API. With AI-generated JSON data, you can get everything set up with ease.</p>
            </div>
            <div class="flex gap-4 my-8">
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
                <NuxtLink to="/docs"
                    class="hover:-translate-y-1 flex justify-start hover:shadow-lg w-fit rounded-full bg-gray-50 dark:bg-gray-800  font-semibold text-gray-400 hover:text-indigo-700 border-2 border-gray-50 dark:border-gray-900 dark:hover:border-indigo-700 hover:border-indigo-700  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out">
                    <div class="flex gap-2 justify-center items-center">
                        <UIcon name="i-heroicons-document-solid" class="text-xl  pt-4" />
                        <span>Learn More</span>
                    </div>
                </NuxtLink>
            </div>
            <div class="absolute bottom-0 mb-4 2xl:mb-20 left-0 right-0 mx-auto h-fit w-fit p-4">
                <div class="grid grid-cols-3 gap-4 w-full text-sm ">
                    <div
                        class="flex text-left max-w-60 p-4 bg-gray-50 hover:shadow-lg transition-shadow ease-linear duration-500 dark:bg-gray-800 dark:text-white rounded-xl">
                        <UIcon name="i-heroicons-code-bracket" class="hidden lg:block  lg:text-xl" />
                        <p class="ml-1">No Need Github Repo , Copy
                            & Paste your Json and start the
                            server</p>

                    </div>
                    <div
                        class="flex text-left p-4 max-w-60  bg-gray-50 hover:shadow-lg transition-shadow ease-linear duration-500 dark:bg-gray-800 dark:text-white rounded-xl">
                        <UIcon name="i-heroicons-sparkles" class="hidden lg:block  lg:text-xl" />
                        <p class="ml-1"> Powered By <span
                                class="font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
                                Gemini AI✨ </span> to effortlessly generate JSON</p>
                    </div>
                    <div
                        class="flex text-left max-w-60  p-4 bg-gray-50 hover:shadow-lg transition-shadow ease-linear duration-500 dark:bg-gray-800 dark:text-white rounded-xl">
                        <UIcon name="i-heroicons-heart" class="hidden lg:block  lg:text-xl" />
                        <p class="ml-1">Free To Use and Open
                            source</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
