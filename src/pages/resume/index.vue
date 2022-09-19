<script setup lang="ts">
import mdText from './mdText'

const md = ref(mdText)
const editor = ref(null)
const initCompleted = (editorInstance) => {
  editor.value = editorInstance
  editorInstance.setValue(mdText)
}

const handleChange = (text) => {
  self.console.log('text', text)
  md.value = text
}
</script>

<template>
  <div class="flex">
    <div class="w-1/2 h-screen overflow-x-scroll">
      <MonacaEditor @init-completed="initCompleted" @on-change="handleChange" />
    </div>

    <div class="w-1/2 h-screen overflow-x-scroll">
      <MdPreview :content="md" />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
