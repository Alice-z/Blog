<template>
  <div id="life">
    <label for="title">标题</label>
    <input type="text" v-model="title" id="title">
    <script id="ue" type="text/plain"></script>
    <button @click="createBlog" class="btn" style="float:right;margin-right:3rem">发布文章</button>    
  </div>
</template>

<script>
export default {
  data: _ => ({ editor: null, title: '', info: '' }),
  methods: {
    createBlog() {
      this.info = this.editor.getContent()
      this.fetch('/file/creat', { title: this.title, info: this.info },'post').then(r=>console.log(r))
    },
  },
  mounted() { this.editor = UE.getEditor('ue', { initialFrameWidth: null, initialFrameHeight: 350 }) },
  destroyed() { this.editor.destroy() }
}
</script>

<style>
.info {
  border-radius: 1rem;
  line-height: 2rem;
  padding: 1rem;
  margin: 1rem;
  background-color: #ffffff;
}
#life{
  overflow: scroll;
}
</style>




