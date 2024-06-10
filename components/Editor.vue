<template>
    <monaco-editor class="w-96 h-96" v-model="code" language="json" :options="{ theme: 'vs-dark' }" />
</template>

<script>
import MonacoEditor from 'vue-monaco-cdn'

export default {
    components: {
        MonacoEditor
    },

    data () {
        return {
            code: 'const noop = () => {}'
        }
    }
}
</script>

<style>
.editor {
    width: 600px;
    height: 400px;
}
</style>