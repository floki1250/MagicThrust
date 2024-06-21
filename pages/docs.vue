<template>
    <div
        class=" blur-blob fixed top-52 left-1 md:top-20 md:left-50 lg:top-20 lg:left-4 bg-gradient-to-r from-[#467fff] dark:from-indigo-800 to-[#c980c9] dark:to-[#c980c9]  w-60 h-60 md:w-80 md:h-80 sm:w-60 sm:h-60 lg:w-96 lg:h-96">
    </div>
    <div class="flex gap-2">
        <div class="hidden lg:block lg:w-1/4  sticky h-fit top-24 z-10 ">
            <nav>
                <ul class="flex gap-4 flex-col justify-center p-4  bg-white/70 backdrop-blur-lg rounded-lg ">
                    <li
                        class="group transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 hover:bg-white   ">
                        <a class="group-hover:font-bold group-hover:bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text group-hover:text-transparent"
                            href="#overview">Overview</a>
                    </li>
                    <li
                        class="transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 hover:bg-white   ">
                        <a href="#overview">Overview</a>
                    </li>
                    <li
                        class="transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 hover:bg-white   ">
                        <a href="#overview">Overview</a>
                    </li>
                    <li
                        class="transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 hover:bg-white   ">
                        <a href="#overview">Overview</a>
                    </li>
                    <li
                        class="transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 hover:bg-white   ">
                        <a href="#overview">Overview</a>
                    </li>
                    <li
                        class="transition-all duration-500 ease-in-out w-full shadow-md hover:shadow-lg p-2 rounded-lg bg-white/80 hover:bg-white   ">
                        <a href="#overview">Overview</a>
                    </li>

                </ul>
            </nav>
        </div>
        <main class="bg-white/70 backdrop-blur-lg p-4 rounded-lg">
            <section id="overview" class="mb-12">
                <h2 class="text-3xl font-semibold mb-4">Overview</h2>
                <p class="leading-relaxed">Welcome to MagicThrust! This application allows you to create fake servers
                    and generate JSON data with AI assistance. Below you'll find a detailed guide on how to use each
                    feature of the app.</p>
            </section>

            <section id="getting-started" class="mb-12">
                <h2 class="text-3xl font-semibold mb-4">Getting Started</h2>
                <p class="leading-relaxed mb-4">To get started with MagicThrust, follow these steps:</p>
                <ol class="list-decimal list-inside">
                    <li>Enter a description for the JSON you want to generate.</li>
                    <li>Click the "Generate JSON" button to get sample JSON data.</li>
                    <li>Edit the JSON data if needed in the textarea provided.</li>
                    <li>Click the "Create Fake Server" button to create a fake server with the JSON data.</li>
                </ol>
            </section>

            <section id="features" class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">Features</h2>
                <ul class="list-disc list-inside">
                    <li><strong>AI JSON Generation:</strong> Generate JSON data based on a simple text prompt.</li>
                    <li><strong>JSON Formatting:</strong> Automatically format your JSON data for readability.</li>
                    <li><strong>Fake Server Creation:</strong> Easily create a fake server with your JSON data.</li>
                </ul>
            </section>

            <section id="api" class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">API</h2>
                <p class="leading-relaxed">MagicThrust provides the following API endpoints:</p>
                <ul class="list-disc list-inside">
                    <li><strong>POST /api/generate:</strong> Generate JSON data from a text prompt. <br /> <code
                            class="bg-gray-100 p-1 rounded">{ "prompt": "Describe the JSON" }</code></li>
                    <li><strong>POST /api/create:</strong> Create a fake server with JSON data. <br /> <code
                            class="bg-gray-100 p-1 rounded">{ "json": { ...your JSON data... } }</code></li>
                </ul>
            </section>

            <section id="faq" class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">FAQ</h2>
                <p class="leading-relaxed mb-4">Find answers to common questions below:</p>
                <ul class="list-disc list-inside">
                    <li><strong>What is MagicThrust?</strong> MagicThrust is an application that allows you to generate
                        and format JSON data and create fake servers easily.</li>
                    <li><strong>How does the AI JSON generation work?</strong> The AI JSON generation uses a text prompt
                        to create sample JSON data based on the description you provide.</li>
                </ul>
            </section>

            <section id="contact">
                <h2 class="text-2xl font-semibold mb-4">Contact</h2>
                <p class="leading-relaxed">If you have any questions or need further assistance, feel free to reach out
                    to us at <a href="mailto:support@magicthrust.com">support@magicthrust.com</a>.</p>
            </section>
        </main>
    </div>
</template>

<script setup>
// No specific script setup needed for this static documentation page
</script>
<style scoped>
.blur-blob {
    filter: blur(40px);
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(.075, .82, .165, 1);
    border-radius: 9999px;
    z-index: -10;

}
</style>