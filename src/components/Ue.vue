<template>
    <script id="ue" type="text/plain"></script>
</template>
<script>
export default {
  data() {
    return {
      editor: null,
      defaultMsg: '这里是UE测试',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
    }
  },
  mounted() {
    const _this = this;
    this.editor = UE.getEditor('ue', this.config); // 初始化UE
    this.editor.addListener("ready", function() {
      _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
    });
  },
  methods: {
    getUEContent() { // 获取内容方法
      return this.editor.getContent()
    }
  },
  destroyed() {
    this.editor.destroy();
  }
}
</script>
