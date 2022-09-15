<script setup>
import { ref } from 'vue'

const open = ref(false)

// const question = () => {
//   const str = '2old 1how 3are 4you'
//   const temp: { [x: string]: any } = {}
//   str.split(' ').forEach((item) => {
//     const index = Number(item.substring(0, 1))
//     temp[index - 1] = item.substring(1)
//   })
//   temp.length = 4
//   return Array.from(temp).join(' ')
// }
onMounted(() => {
  // const result = question()
})
</script>

<template>
  <button @click="open = true">
    Open Modal
  </button>

  <teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">
        Close
      </button>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  @apply text-indigo text-center;
}
</style>

