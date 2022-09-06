<script>
// import LeaderLine from '../utils/leader-line@1.0.7.js'
import LeaderLine from '/src/utils/leader-line@1.0.7.js'
import MyButton from './Button.vue'

export default {
  name: 'LeaderLineDemo',
  components: { MyButton },
  props: {

  },
  data() {
    return {
      lines: [],
    }
  },
  mounted() {
    const dom1 = document.querySelector('#dom1')
    const dom2 = document.querySelector('#dom2')
    const dom3 = document.querySelector('#dom3')
    const dom4 = document.querySelector('#dom4')

    const l1 = new LeaderLine(dom1, dom2, { color: 'gold', size: 6 })
    const l2 = new LeaderLine(
      dom2,
      LeaderLine.pointAnchor(dom3, {
        x: 60,
        y: 20,
      }),
      { endLabel: LeaderLine.pathLabel('This is additional label') },
    )

    const l3 = new LeaderLine(dom3, dom4, {
      startPlugColor: '#1a6be0',
      endPlugColor: '#1efdaa',
      gradient: true,
      dash: {
        animation: true,
      },
    })

    this.lines.push(l1, l2, l3)
  },
  methods: {
    changeSize() {
      this.lines && this.lines.forEach(line => line.size++)
    },
  },

}
</script>

<template>
  <div class="w-full">
    <MyButton label="size+" primary @click="changeSize" />
  </div>

  <div class="relative w-screen h-screen">
    <div id="dom1" class="p-2 absolute">
      point1
    </div>
    <div id="dom2" class="p-2 absolute top-100 left-50">
      point2
    </div>
    <div id="dom3" class="p-2 absolute top-0 left-150">
      point3
    </div>
    <div id="dom4" class="p-2 absolute top-0 left-280">
      point4
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
