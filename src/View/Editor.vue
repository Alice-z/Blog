<template>
  <div id="life">
    <label for="title">标题:</label>
    <input class="ipt" type="text" v-model="title" id="title">
    <label for="title">分类:</label>
    <input class="ipt" type="text" v-model="sort" id="sort">
    <div id="edit">  
      <script id="ue" type="text/plain" />
      <input @click="createBlog" class="btn" type="button" value="发表文章" style="float:right;margin-right:3rem">
    </div>
  </div>
</template>

<script>
import '../../static/ueditor/ueditor.config.js' 
import '../../static/ueditor/ueditor.all.js'
import '../../static/ueditor/lang/zh-cn/zh-cn.js'
import '../../static/ueditor/ueditor.parse.min.js'
export default {
  data: _ => ({ editor: null, title: '', info: '',sort:'' }),
  methods: {
    async  createBlog() {
      this.info = this.editor.getContent()
      let {title,info,sort}=this
      await this.fetch('/blog-file/creat', { title,info,sort },'post')
      this.$router.push('/blog')
    },
  },
  mounted() { 
    this.editor = UE.getEditor('ue', { initialFrameWidth: null, initialFrameHeight: 750 }) 
    },
  destroyed() { this.editor.destroy() }
}
</script>

<style scoped>
@media screen and (max-width:700px) {
  #edit{
    width: 100%
  }
}
  #edit{
    width: 80%;
    overflow: auto;
  }

input{
  margin:1rem 2rem
}
#life{
  overflow: auto;
  padding: 3rem 10rem;
}
</style>




