<template>
<div>
  <quill-editor
    ref="quill"
    v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  />
  <el-button @click='submit'>提交</el-button>
</div>

</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    QuillEditor: quillEditor
  },
  data: function() {
    return {
      content: '',
      editorOption: {
        // Some Quill options...
      }
    }
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
      console.log(this.content)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    submit() {
      let data = {
        title: '呵呵',
        content: this.content
      }
      this.$http.editorSubmit(data).then(()=>{
        console.log('发布成功')
        this.content = ''
      })
    }
  }
}
</script>

<style lang="scss">
.quill-editor {
  min-height: 500px;
}
.ql-container {
  min-height: 500px;
}

.ql-container .ql-snow {
  height: 500px;
}
</style>
