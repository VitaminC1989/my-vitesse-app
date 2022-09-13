<script setup lang="ts">
import 'animate.css'
import _debounce from 'lodash/debounce'

// 属性
const props = defineProps<{ name: string }>()
// 数据
const counter = ref(0)
// 方法
const increase = () => counter.value++

onMounted(() => {
  // 控制类名的添加和移除
  const btn = document.querySelector('button')
  const heart = document.querySelector('#heart')
  if (btn && heart) {
    btn.addEventListener('mousedown', () => {
      const classList = ['animate__animated', 'animate__rubberBand']
      const classList2 = ['animate__animated', 'animate__heartBeat']
      btn.classList.remove(...classList)
      heart.classList.remove(...classList2)

      setTimeout(() => {
        btn.classList.add(...classList)
        heart.classList.add(...classList2)
      })
    })
  }
})
</script>

<template>
  <div class="flex justify-center align-center">
    <button class="text-6 bg-indigo rounded-full py-2 px-6 hover:bg-indigo-500 select-none" @click="increase">
      <!-- Fuck 🫀 -->
      Fuck {{ props.name ? `${props.name}'s'` : '' }}🫀
    </button>

    <div id="heart" class="ml-8">
      <span>{{ counter }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  --animate-duration: 800ms;
  --animate-delay: 10s;
}

#heart {
  $heart-width: 250px;
  $heart-height: 200px;

  position: relative;
  width: $heart-width;
  height: $heart-height;
  @apply bg-transparent;

  span {
    @apply absolute z-3 text-whtie select-none text-8;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -58%);
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    border-radius: $heart-height $heart-height 0px 0px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    @apply bg-rose;
  }

  &::before {
    left: 0;
    top: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  ;
}
</style>
