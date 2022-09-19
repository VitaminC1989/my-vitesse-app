<script setup lang="ts">
/**
 * 常见问题：控制台报错
 * 解决方案：https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046
 *  */
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import MarkdownWorker from 'monaco-editor/esm/vs/basic-languages/markdown/markdown?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

import _debounce from 'lodash/debounce'

const emit = defineEmits(['initCompleted', 'onChange'])

let editor: monaco.editor.IStandaloneCodeEditor

// 初始化编辑器
const init = () => {
  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json')
        return new JsonWorker()

      if (label === 'css' || label === 'scss' || label === 'less')
        return new CssWorker()

      if (label === 'html' || label === 'handlebars' || label === 'razor')
        return new HtmlWorker()

      if (label === 'typescript' || label === 'javascript')
        return new TsWorker()

      if (label === 'markdown' || label === 'md')
        return new MarkdownWorker()

      return new EditorWorker()
    },
  }

  const dom = document.getElementById('container') as HTMLElement
  editor = monaco.editor.create(dom, {
    // value: 'function hello() {\n\talert(\'Hello world!\');\n}',
    value: '# 请输入markdown文本',
    language: 'markdown',
  })
  // 初始化完成 响应事件
  emit('initCompleted', editor)
  monaco.editor.setTheme('hc-black')
  // 编辑器尺寸自适应
  self.onresize = function () { editor.layout() }

  // 编辑器内容改变 响应事件
  const debounced = _debounce(() => {
    emit('onChange', editor.getValue())
  }, 200)
  const model = editor.getModel()
  model && model.onDidChangeContent((event) => {
    debounced()
  })
}
onMounted(() => {
  init()
})
</script>

<template>
  <div id="container" class="w-full h-full" />
</template>
