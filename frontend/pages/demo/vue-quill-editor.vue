<template>
  <section class="container">
    <h1 class="title">Vue-Quill-Editor</h1>
    <div class="quill-editor-example">
      <div
        class="quill-editor"
        v-quill:editor="editorOption"
        :content="content"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange">
      </div>
    </div>
    <div class="quill-preview" v-html="contentCode"></div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        name: '01-example',
        content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading...</span></h2>`,
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ]
          },
          theme: 'snow'
        }
      }
    },
    computed: {
      contentCode() {
        return this.content
      }
    },
    mounted() {
      console.log('this is my editor', this.editor)
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', this.editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', this.editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', this.editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/buefy-customize.scss";
.quill-editor {
  height: 200px;
}
</style>