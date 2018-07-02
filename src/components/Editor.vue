<template>
  <div>
    <div ref="toolbar" class="toolbar"></div>
    <div ref="text" class="text"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        <p>请输入内容</p>
    </div>
    <!-- <div ref="editor" style="text-align:left;" class="editor"></div> -->
  </div>
</template>
<script>
  import E from 'wangeditor'

  export default {
    name: 'editor',
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent () {
        alert(this.editorContent)
      }
    },
    mounted () {
      let editor = new E(this.$refs.toolbar, this.$refs.text)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
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
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
    ]
      editor.create()
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
  height: 500px;
}
</style>


