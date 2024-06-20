<template>
    <div class="flex gap-4 justify-between items-center text-center flex-col lg:flex-row ">
        <div class="lg:w-1/2">
            <div>
                <h1 class="text-3xl lg:text-4xl text-left font-RaMono text-gray-600 dark:text-gray-50">Describe Your
                    Data and
                    <br><span
                        class="font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
                        Gemini AI✨ </span> Will Generate JSON for You
                </h1>
                <br>
                <div class="flex gap-4">
                    <div
                        class="hover:shadow-lg focus:bg-gradient-to-tr hover:bg-gradient-to-tr from-[#c980c9] to-[#467fff] w-full p-0.5 rounded-full transition-all duration-500 ease-in-out text-gray-400 hover:text-gray-700 hover:dark:text-white">
                        <div class="p-2 flex gap-2 bg-gray-50 lg:min-w-96 w-full rounded-full  dark:bg-gray-800">
                            <UIcon name="i-heroicons-sparkles-solid" class="text-2xl " />
                            <input type="text" placeholder="Example: Generate a 10 random users with avatars"
                                v-model="prompt" :disabled="loading"
                                class="  bg-gray-50 dark:bg-gray-800 text-gray-950 dark:text-gray-400 rounded-full w-full  outline-none pl-2">
                        </div>

                    </div>

                    <div
                        class="hover:shadow-lg hover:bg-gradient-to-r from-[#c980c9] to-[#467fff] border-1 border-gray-100 w-fit p-0.5 rounded-full  transition-all duration-500 ease-in-out">
                        <div
                            class="flex gap-2 w-fit rounded-full bg-gray-50 dark:bg-gray-800  font-semibold text-gray-400 hover:text-black hover:dark:text-white  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out group">

                            <button @click="generateJson()" v-if="!loading">
                                <div class="flex gap-2">
                                    <UIcon name="i-heroicons-bolt-solid" class="text-xl  pt-4" />
                                    <span>Generate
                                        Json</span>
                                </div>
                            </button>
                            <div v-else>
                                <Loader />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="bg-gray-50 dark:bg-gray-800 border dark:border-gray-900 border-gray-100 p-4 rounded-xl text-md text-left font-RaMono text-gray-600 dark:text-gray-50 my-4">
                <h2>Json Examples :</h2>

                <div class="grid gap-4 text-left grid-flow-row grow grid-cols-4 ">
                    <button @click="overwriteData(products)"
                        class="hover:text-indigo-500 rounded-full  border-2 hover:border-indigo-400 border-transparent p-2">Products</button>
                    <button @click="overwriteData(users)"
                        class="hover:text-[#c980c9] rounded-full  border-2 hover:border-[#c980c9] border-transparent p-2">Users</button>
                    <button @click="overwriteData(employees)"
                        class="hover:text-indigo-500 rounded-full  border-2 hover:border-indigo-400 border-transparent p-2">Employees</button>
                    <button @click="overwriteData(students)"
                        class="hover:text-[#c980c9] rounded-full  border-2 hover:border-[#c980c9] border-transparent p-2">students</button>
                </div>
            </div>
            <div class="flex gap-4 ">
                <button @click="createServer()"
                    class="flex justify-start hover:shadow-lg w-fit rounded-full bg-gray-50 dark:bg-gray-800  font-semibold text-gray-400 hover:text-amber-500 border-2 border-gray-50 dark:border-gray-900 dark:hover:border-amber-500 hover:border-amber-500  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out">
                    <div class="flex gap-2 justify-center items-center">
                        <UIcon name="i-heroicons-rocket-launch-solid" class="text-xl  pt-4" />
                        <span>Create Server</span>
                    </div>
                </button>


                <div class="px-4 py-2 bg-gray-50  rounded-full w-fit dark:bg-gray-800" v-if="serverCode">
                    <p class="text-md  text-left font-RaMono text-gray-600 dark:text-gray-50"> Server Code :
                        <span
                            class="font-bold  bg-gradient-to-r from-[#467fff] to-[#c980c9] bg-clip-text text-transparent">
                            {{ serverCode }} </span>
                    </p>
                </div>
            </div>
        </div>
        <div class=" h-full flex text-left justify-center items-center lg:w-1/2">
            <div class=" shadow-2xl w-fit p-1 bg-gradient-to-r from-[#c980c9] to-[#467fff] rounded-lg">
                <div class="p-2 rounded-lg  bg-white dark:bg-[#1e1e1e] border border-white dark:border-gray-800">
                    <ClientOnly>
                        <monaco-editor ref="editor" class=" min-w-96 min-h-96 w-full" v-model="data" language="json"
                            :options="{ theme: $colorMode.preference == 'light' ? 'vs' : 'vs-dark' }" />
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// @ts-ignore
import MonacoEditor from 'vue-monaco-cdn'


const loading = ref(false)
const data = ref()
const products = {
    "jsonData": [
        {
            "id": 1,
            "title": "Sony WH-1000XM4 Wireless Headphones",
            "description": "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
            "image": "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B0863TXGM3"
        },
        {
            "id": 2,
            "title": "Apple iPhone 13 Pro",
            "description": "The iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, and Pro camera system for stunning photos and videos.",
            "image": "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B09V3HNQHD"
        },
        {
            "id": 3,
            "title": "MacBook Pro 16-inch",
            "description": "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance. Up to 21 hours of battery life.",
            "image": "https://m.media-amazon.com/images/I/61bElYZQszL._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B09JQK9DK5"
        },
        {
            "id": 4,
            "title": "Samsung Galaxy Watch 4",
            "description": "Track your fitness progress with our first smartwatch that conveniently measures body composition. Manage your health with sleep tracking, ECG, and more.",
            "image": "https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B096BK7W5J"
        },
        {
            "id": 5,
            "title": "JBL Flip 5 Portable Bluetooth Speaker",
            "description": "Bring the party anywhere with JBL Flip 5's bold sound, durable fabric, and 12 hours of playtime. Waterproof and perfect for outdoor adventures.",
            "image": "https://m.media-amazon.com/images/I/71xb2xkN7aL._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B07QK2SPP7"
        },
        {
            "id": 6,
            "title": "Fitbit Charge 5 Advanced Fitness & Health Tracker",
            "description": "Optimize your workout routine with daily readiness, track your heart rate variability, and get a daily Stress Management Score.",
            "image": "https://m.media-amazon.com/images/I/61MXDBVX9+L._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B098P6Z5GM"
        },
        {
            "id": 7,
            "title": "Amazon Echo Dot (4th Gen)",
            "description": "Smart speaker with Alexa. Stream songs from Amazon Music, Apple Music, Spotify, SiriusXM, and others. Voice control your smart home.",
            "image": "https://m.media-amazon.com/images/I/71zTLaOQ9FL._AC_SL1000_.jpg",
            "url": "https://www.amazon.com/dp/B07XJ8C8F7"
        },
        {
            "id": 8,
            "title": "Kindle Paperwhite (8 GB)",
            "description": "Now with a 6.8” display and adjustable warm light. Store thousands of books and get up to 10 weeks of battery life.",
            "image": "https://m.media-amazon.com/images/I/61V2ydfJ8-L._AC_SL1000_.jpg",
            "url": "https://www.amazon.com/dp/B08N36XNTT"
        },
        {
            "id": 9,
            "title": "Nikon D3500 DSLR Camera",
            "description": "Compact, easy to use, and versatile. Get stunning photos and Full HD videos with this entry-level DSLR.",
            "image": "https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B07GWKDLGT"
        },
        {
            "id": 10,
            "title": "GoPro HERO10 Black",
            "description": "High-Res Photos + Videos, Waterproof to 33ft, and features a new front screen and an improved rear touch screen.",
            "image": "https://m.media-amazon.com/images/I/71lY6HXwRDL._AC_SL1500_.jpg",
            "url": "https://www.amazon.com/dp/B09CSL9H6L"
        }
    ]
}
const users = {
    "jsonData": [
        {
            "id": 1,
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "avatar": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "email": "bob.smith@example.com",
            "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            "id": 3,
            "name": "Carol Williams",
            "email": "carol.williams@example.com",
            "avatar": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            "id": 4,
            "name": "David Brown",
            "email": "david.brown@example.com",
            "avatar": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            "id": 5,
            "name": "Eva Miller",
            "email": "eva.miller@example.com",
            "avatar": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            "id": 6,
            "name": "Frank Wilson",
            "email": "frank.wilson@example.com",
            "avatar": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
            "id": 7,
            "name": "Grace Lee",
            "email": "grace.lee@example.com",
            "avatar": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
            "id": 8,
            "name": "Henry Moore",
            "email": "henry.moore@example.com",
            "avatar": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        {
            "id": 9,
            "name": "Isla Anderson",
            "email": "isla.anderson@example.com",
            "avatar": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        {
            "id": 10,
            "name": "Jack Thomas",
            "email": "jack.thomas@example.com",
            "avatar": "https://randomuser.me/api/portraits/men/10.jpg"
        }
    ]
}
const employees = {
    "jsonData": [
        {
            "id": 1,
            "job": "Software Engineer",
            "role": "Frontend Developer",
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "address": "123 Main St, Anytown, CA 12345"
        },
        {
            "id": 2,
            "job": "Data Scientist",
            "role": "Machine Learning Engineer",
            "name": "Bob Williams",
            "email": "bob.williams@example.com",
            "address": "456 Oak Ave, Springfield, IL 62701"
        },
        {
            "id": 3,
            "job": "Project Manager",
            "role": "Agile Scrum Master",
            "name": "Charlie Brown",
            "email": "charlie.brown@example.com",
            "address": "789 Pine Ln, New York, NY 10001"
        },
        {
            "id": 4,
            "job": "Designer",
            "role": "UI/UX Designer",
            "name": "Diana Smith",
            "email": "diana.smith@example.com",
            "address": "1011 Maple Rd, Los Angeles, CA 90001"
        },
        {
            "id": 5,
            "job": "Marketing Specialist",
            "role": "Content Marketing Manager",
            "name": "Eric Jones",
            "email": "eric.jones@example.com",
            "address": "1213 Birch St, Chicago, IL 60601"
        },
        {
            "id": 6,
            "job": "Sales Manager",
            "role": "Account Executive",
            "name": "Fiona Wilson",
            "email": "fiona.wilson@example.com",
            "address": "1415 Cedar Ave, Houston, TX 77001"
        },
        {
            "id": 7,
            "job": "HR Manager",
            "role": "Recruitment Specialist",
            "name": "George Davis",
            "email": "george.davis@example.com",
            "address": "1617 Willow Ln, Phoenix, AZ 85001"
        },
        {
            "id": 8,
            "job": "Finance Analyst",
            "role": "Budget Analyst",
            "name": "Helen Garcia",
            "email": "helen.garcia@example.com",
            "address": "1819 Oak Dr, San Antonio, TX 78201"
        },
        {
            "id": 9,
            "job": "Operations Manager",
            "role": "Logistics Coordinator",
            "name": "Ian Miller",
            "email": "ian.miller@example.com",
            "address": "2021 Pine Ave, San Diego, CA 92101"
        },
        {
            "id": 10,
            "job": "Customer Support Representative",
            "role": "Technical Support Agent",
            "name": "Jasmine Rodriguez",
            "email": "jasmine.rodriguez@example.com",
            "address": "2223 Birch Ln, Dallas, TX 75201"
        }
    ]
}
const students = {
    "jsonData": [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "age": 18,
            "grade": 12,
            "major": "Computer Science"
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Smith",
            "age": 17,
            "grade": 11,
            "major": "Biology"
        },
        {
            "id": 3,
            "firstName": "David",
            "lastName": "Brown",
            "age": 19,
            "grade": 12,
            "major": "Mathematics"
        },
        {
            "id": 4,
            "firstName": "Emily",
            "lastName": "Wilson",
            "age": 16,
            "grade": 10,
            "major": "English Literature"
        },
        {
            "id": 5,
            "firstName": "Michael",
            "lastName": "Jones",
            "age": 18,
            "grade": 12,
            "major": "History"
        },
        {
            "id": 6,
            "firstName": "Sarah",
            "lastName": "Garcia",
            "age": 17,
            "grade": 11,
            "major": "Art"
        },
        {
            "id": 7,
            "firstName": "James",
            "lastName": "Miller",
            "age": 19,
            "grade": 12,
            "major": "Physics"
        },
        {
            "id": 8,
            "firstName": "Olivia",
            "lastName": "Davis",
            "age": 16,
            "grade": 10,
            "major": "Music"
        },
        {
            "id": 9,
            "firstName": "Daniel",
            "lastName": "Rodriguez",
            "age": 18,
            "grade": 12,
            "major": "Psychology"
        },
        {
            "id": 10,
            "firstName": "Sophia",
            "lastName": "Martinez",
            "age": 17,
            "grade": 11,
            "major": "Chemistry"
        }
    ]
}
const editor = ref();
const prompt = ref("");
const serverCode = ref("");


function overwriteData (json: any) {
    editor.value.getMonaco().setValue(JSON.stringify(json, null, 2))
}

async function generateJson () {
    loading.value = true
    const datares = await $fetch("/api/ai", {
        method: "POST",
        body: {
            prompt: prompt.value + " in Json"
        }
    })
    console.log(datares)
    overwriteData(datares)
    loading.value = false
}
async function createServer () {
    serverCode.value = await $fetch("/api/createServer", {
        method: "POST",
        body: {
            data: data.value
        }
    })
    console.log(serverCode.value)
    await navigateTo(`/api/${serverCode.value}`, {
        external: false,
        open: {
            target: '_blank',
            windowFeatures: {
                popup: true,
                width: 500,
                height: 500
            }
        }
    })
}
</script>
