/*
 * @Author: 秦雨霏 
 * @Date: 2018-07-04 23:21:35 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-02 12:28:12
 */

<template>
  <div>
    <div ref="toolbar" class="toolbar"></div>
    <div type="text/plain" ref="text" class="text"></div> <!--可使用 min-height 实现编辑区域自动增加高度-->
    <!-- <textarea id="text1" style="width:100%; height:200px;"></textarea> -->
    <!-- <div ref="editor" style="text-align:left;" class="editor"></div> -->
  </div>
</template>
<script>
  import E from 'wangeditor'

  export default {
    name: 'editor',
    props: ['content'],
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {},
    mounted () {
      // console.log(this.content, '富文本编辑器的内容')
      let editor = new E(this.$refs.toolbar, this.$refs.text)
      if (this.content) this.editorContent = this.content
      // console.log(this.editorContent, '你猜')
      // editor.txt.html(this.editorContent)
      // let textArea = document.getElementById('text1')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html // 获取html格式
        // this.editorContent = editor.txt.text()
        // textArea.innerHTML = this.editorContent
        this.$emit('editorContent', this.editorContent)
      }
      editor.customConfig.onchangeTimeout = 1000 // 单位 ms
      editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'image',  // 插入图片
        'table',  // 表格
        // 'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
      ]
      editor.create()
      editor.txt.html(this.editorContent)
    }
  }
</script>
<style scoped>
.editor {
  border: 1px solid red;
  min-height: 500px;
  /* height: 500px; */
}
.toolbar {
  border: 1px solid #ccc;
}
.text {
  border: 1px solid #ccc;
  border-top: none;
  height: 520px;
}
</style>


