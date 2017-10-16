<template>
  <div id="xx">
    <script id="ue" type="text/plain"></script>
    <pre class="brush:js;toolbar:false">destroyed()&nbsp;{&nbsp;this.editor.destroy()&nbsp;}</pre>
    <P id="box" v-html="info" />
  </div>
</template>

<script>
export default {
  data: _ => ({ editor: null, info: '', timer: null }),
  beforeRouteLeave(to, from, next) { clearInterval(this.timer); next() },
  created() { this.timer = setInterval(_ => this.info = this.editor.getContent(), 1000) },
  mounted() { this.editor = UE.getEditor('ue', { initialFrameWidth: null, initialFrameHeight: 350 }) },
  destroyed() { this.editor.destroy() }
}
</script>

<style>
.info {
  border-radius: 10px;
  line-height: 20px ;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>




