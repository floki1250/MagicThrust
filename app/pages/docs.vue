<template>
    <div class="pt-20 px-4">
        <div
            class="blur-blob fixed top-52 left-1 md:top-20 md:left-50 lg:top-20 lg:left-4 bg-gradient-to-r from-[#467fff] dark:from-indigo-800 to-[#fff] dark:to-[#fff] w-60 h-60 md:w-80 md:h-80 sm:w-60 sm:h-60 lg:w-96 lg:h-96">
        </div>
        <div class="flex gap-2 ">
            <div class="hidden lg:block lg:w-1/4 sticky h-fit top-24 z-10">

                <ul class="flex gap-4 flex-col justify-center p-4 bg-base-100/70  backdrop-blur-lg rounded-lg">
                    <li
                        class="cursor-pointer group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-base-100/80  hover:bg-base-100">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#fff] bg-clip-text group-hover:text-transparent"
                            href="#overview">Overview</a>
                    </li>

                    <li
                        class="cursor-pointer group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-base-100/80  hover:bg-base-100">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#fff] bg-clip-text group-hover:text-transparent"
                            href="#getting-started">Getting started</a>
                    </li>

                    <li
                        class="cursor-pointer group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-base-100/80  hover:bg-base-100">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#fff] bg-clip-text group-hover:text-transparent"
                            href="#features">Features</a>
                    </li>
                    <li
                        class="cursor-pointer group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-base-100/80  hover:bg-base-100">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#fff] bg-clip-text group-hover:text-transparent"
                            href="#api">API</a>
                    </li>
                    <li
                        class="cursor-pointer group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-base-100/80  hover:bg-base-100">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#fff] bg-clip-text group-hover:text-transparent"
                            href="#faq">FAQ</a>
                    </li>
                    <li
                        class="cursor-pointer group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-base-100/80  hover:bg-base-100">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#fff] bg-clip-text group-hover:text-transparent"
                            href="#contact">Contact</a>
                    </li>
                </ul>

            </div>
            <main class="bg-base-100/70  backdrop-blur-lg p-4 rounded-lg">
                <section id="overview" class="mb-12">
                    <h2 class="text-3xl font-semibold mb-4">Overview</h2>
                    <p class="leading-relaxed">
                        Welcome to MagicThrust! This application allows you to create fake servers and
                        generate JSON data with AI assistance. Below you'll find a detailed guide on how
                        to use each feature of the app.
                    </p>
                </section>

                <section id="getting-started" class="mb-12">
                    <h2 class="text-3xl font-semibold mb-4">Getting Started</h2>
                    <p class="leading-relaxed mb-4">
                        To get started with MagicThrust, follow these steps:
                    </p>
                    <ol class="list-decimal list-inside">
                        <li>Enter a description for the JSON you want to generate .</li>
                        <li>Click the "Generate JSON" button to get sample JSON data.</li>
                        <li>Edit the JSON data if needed in the textarea provided.</li>
                        <li>
                            Click the "Create Server" button to create a fake server with the JSON
                            data.
                        </li>
                    </ol>
                </section>

                <section id="features" class="mb-12">
                    <h2 class="text-2xl font-semibold mb-4">Features</h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>AI JSON Generation:</strong> Generate JSON data based on a simple text
                            prompt.
                        </li>
                        <li>
                            <strong>JSON Formatting:</strong> Automatically format your JSON data for
                            readability.
                        </li>
                        <li>
                            <strong>Fake Server Creation:</strong> Easily create a fake server with your
                            JSON data.
                        </li>
                    </ul>
                </section>

                <section id="api" class="mb-12">
                    <h2 class="text-2xl font-semibold mb-4">API</h2>
                    <p class="leading-relaxed">MagicThrust provides the following API methods:</p>
                    <br>
                    <div class="flex flex-col gap-4">
                        <div class="flex  gap-2 bg-base-100  dark:bg-black rounded-lg p-2">
                            <button class="font-bold poppins text-teal-500">GET</button>
                            <code class="font-mono font-bold">await $fetch("/api/[id]", { method: "GET"})</code>
                        </div>

                        <div class="flex gap-2 bg-base-100 dark:bg-black rounded-lg p-2">
                            <button class="font-bold poppins text-blue-500">POST</button>
                            <code class="font-mono font-bold">await $fetch("/api/[id]", { method: "POST", body: { data: {id:id , ....} }
              })</code>
                        </div>
                        <div class="flex gap-2 bg-base-100 dark:bg-black rounded-lg p-2">
                            <button class="font-bold poppins text-orange-500">PUT</button>
                            <code class="font-mono font-bold">await $fetch("/api/[id]", { method: "PUT", body: { data: {id:id , ....} }
              })</code>
                        </div>
                        <div class="flex gap-2 bg-base-100 dark:bg-black rounded-lg p-2">
                            <button class="font-bold poppins text-red-500">DELETE</button>
                            <code
                                class="font-mono font-bold">await $fetch("/api/[id]", { method: "DELETE", body: { id:id } })</code>
                        </div>
                    </div>
                </section>

                <section id="faq" class="mb-12">
                    <h2 class="text-2xl font-semibold mb-4">FAQ</h2>
                    <p class="leading-relaxed mb-4">Find answers to common questions below:</p>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>What is MagicThrust?</strong> MagicThrust is an application that
                            allows you to generate and format JSON data and create fake servers easily.
                        </li>
                        <li>
                            <strong>How does the AI JSON generation work?</strong> The AI JSON generation
                            uses a text prompt to create sample JSON data based on the description you
                            provide.
                        </li>
                    </ul>
                </section>

                <section id="contact">
                    <h2 class="text-2xl font-semibold mb-4">Contact</h2>
                    <div class="leading-relaxed">
                        If you have any questions or need further assistance, feel free to reach out to
                        us at :
                    <div class="flex gap-4 my-2">
                        <NuxtLink to="https://github.com/floki1250" class="flex text-2xl hover:text-[#003fd1]"
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined -->
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M6.517 17.113c.395.578 1.592 1.81 3.225 2.12M9.864 22C8.836 21.83 2 19.606 2 12.093C2 5.063 8.002 2 12 2c4 0 10 3.063 10 10.093c0 7.513-6.836 9.738-7.864 9.907c0 0-.21-3.417-.087-4.003c.122-.586-.294-1.528-.294-1.528c.971-.364 2.45-.884 2.945-2.282c.385-1.084.627-2.658-.45-4.138c0 0 .282-2.39-.25-2.484c-.533-.092-2.1.947-2.1.947c-.457-.13-1.476-.377-1.898-.333c-.423-.044-1.445.203-1.902.333c0 0-1.568-1.04-2.1-.947s-.25 2.484-.25 2.484c-1.077 1.48-.835 3.054-.45 4.138c.496 1.398 1.974 1.918 2.945 2.282c0 0-.416.942-.294 1.528S9.864 22 9.864 22"
                                    color="currentColor" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://x.com/Adem1250_Dr" class="flex text-xl hover:text-[#003fd1]"
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined -->
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                    color="currentColor" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://www.buymeacoffee.com/AdamDardour" class="text-xl hover:text-[#003fd1]"
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined -->
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" color="currentColor">
                                    <path
                                        d="M18.25 10.5h1.39c1.852 0 2.402.265 2.357 1.584c-.073 2.183-1.058 4.72-4.997 5.416" />
                                    <path
                                        d="M5.946 20.615C2.572 18.02 2.075 14.34 2.001 10.5c-.031-1.659.45-2 2.658-2h10.682c2.208 0 2.69.341 2.658 2c-.074 3.84-.57 7.52-3.945 10.115c-.96.738-1.77.885-3.135.885H9.081c-1.364 0-2.174-.147-3.135-.886M11.309 2.5C10.762 2.839 10 4 10 5.5M7.54 4S7 4.5 7 5.5M14.001 4c-.273.17-.501 1-.501 1.5" />
                                </g>
                            </svg>

                        </NuxtLink>
                    </div>

                    </div>
                </section>
            </main>
        </div>
    </div>
</template>
