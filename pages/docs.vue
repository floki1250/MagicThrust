<template>
    <div
        class="blur-blob fixed top-52 left-1 md:top-20 md:left-50 lg:top-20 lg:left-4 bg-gradient-to-r from-[#467fff] dark:from-indigo-800 to-[#c980c9] dark:to-[#c980c9] w-60 h-60 md:w-80 md:h-80 sm:w-60 sm:h-60 lg:w-96 lg:h-96">
    </div>
    <div class="flex gap-2">
        <div class="hidden lg:block lg:w-1/4 sticky h-fit top-24 z-10">
            <nav>
                <ul
                    class="flex gap-4 flex-col justify-center p-4 bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-lg">
                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 dark:bg-black/80 hover:bg-white">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#overview">Overview</a>
                    </li>

                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 dark:bg-black/80 hover:bg-white">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#getting-started">Getting started</a>
                    </li>

                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 dark:bg-black/80 hover:bg-white">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#features">Features</a>
                    </li>
                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 dark:bg-black/80 hover:bg-white">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#api">API</a>
                    </li>
                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 dark:bg-black/80 hover:bg-white">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#faq">FAQ</a>
                    </li>
                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 dark:bg-black/80 hover:bg-white">
                        <a class="font-semibold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <main class="bg-white/70 dark:bg-black/70 backdrop-blur-lg p-4 rounded-lg">
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
                    <div class="flex  gap-2 bg-white  dark:bg-black rounded-lg p-2">
                        <UButton color="teal" variant="soft">GET</UButton>
                        <code class="font-mono font-bold">await $fetch("/api/[id]", { method: "GET"})</code>
                    </div>

                    <div class="flex gap-2 bg-white dark:bg-black rounded-lg p-2">
                        <UButton color="blue" variant="soft">POST</UButton>
                        <code class="font-mono font-bold">await $fetch("/api/[id]", { method: "POST", body: { data: {id:id , ....} }
              })</code>
                    </div>
                    <div class="flex gap-2 bg-white dark:bg-black rounded-lg p-2">
                        <UButton color="orange" variant="soft">PUT</UButton>
                        <code class="font-mono font-bold">await $fetch("/api/[id]", { method: "PUT", body: { data: {id:id , ....} }
              })</code>
                    </div>
                    <div class="flex gap-2 bg-white dark:bg-black rounded-lg p-2">
                        <UButton color="red" variant="soft">DELETE</UButton>
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
                <p class="leading-relaxed">
                    If you have any questions or need further assistance, feel free to reach out to
                    us at :
                <div class="flex gap-4">
                    <NuxtLink to="https://github.com/floki1250" class="flex text-2xl hover:text-indigo-500"
                        target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                                <g fill="#fff">
                                    <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                                    <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                                </g>
                            </mask>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path stroke-dasharray="30" stroke-dashoffset="30"
                                    d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" />
                                </path>
                                <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s"
                                        values="10;0" />
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
                                </path>
                            </g>
                            <rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)">
                                <animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1"
                                    repeatCount="indefinite" values="11;11;7;7;11;11" />
                            </rect>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="https://x.com/Adem1250_Dr" class="flex text-2xl hover:text-indigo-500"
                        target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                color="currentColor" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="https://www.buymeacoffee.com/AdamDardour" class="text-2xl hover:text-[#ca98ca]"
                        target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path stroke-dasharray="48" stroke-dashoffset="48"
                                    d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
                                </path>
                                <path stroke-dasharray="14" stroke-dashoffset="14"
                                    d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                                        values="14;28" />
                                </path>
                            </g>
                            <mask id="lineMdCoffeeLoop0">
                                <path fill="none" stroke="#fff" stroke-width="2"
                                    d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4">
                                    <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite" />
                                </path>
                            </mask>
                            <rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeLoop0)">
                                <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2" />
                                <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5" />
                            </rect>
                        </svg>

                    </NuxtLink>
                </div>

                </p>
            </section>
        </main>
    </div>
</template>
