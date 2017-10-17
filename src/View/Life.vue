<template>
  <div id="life">
    <label for="title">标题</label>
    <input type="text" v-model="title" id="title">
    <script id="ue" type="text/plain"></script>
    <button @click="createBlog">createBlog</button>
    <div>
      <pre class="brush:js;toolbar:false"><br/></pre><p><span style="color: #52adf2;">data</span>: <span style="color: #ef596f;font-style: italic;">_</span> <span style="color: #d55fde;">=&gt;</span> ({ <span style="color: #ef596f;">editor</span>: <span style="color: #d8985f;">null</span>, <span style="color: #ef596f;">title</span>: <span style="color: #98c378;">&#39;&#39;</span>, <span style="color: #ef596f;">info</span>: <span style="color: #98c378;">&#39;&#39;</span> }),</p><p><span style="color: #ef596f;">methods</span>: {</p><p><span style="color: #52adf2;">createBlog</span>() {</p><p><span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">info</span> <span style="color: #aab1c0;">=</span> <span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">editor</span>.<span style="color: #52adf2;">getContent</span>()</p><p><span style="color: #e5c07b;">console</span>.<span style="color: #52adf2;">log</span>(<span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">info</span>);</p><p><span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #52adf2;">fetch</span>(<span style="color: #98c378;">&#39;</span><span style="color: #89ca78;">/file/creat</span><span style="color: #98c378;">&#39;</span>, { <span style="color: #ef596f;">title</span>: <span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">title</span>, <span style="color: #ef596f;">info</span>: <span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">info</span> })</p><p>},</p><p>},</p><p><span style="color: #52adf2;">mounted</span>() { <span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">editor</span> <span style="color: #aab1c0;">=</span> <span style="color: #e5c07b;">UE</span>.<span style="color: #52adf2;">getEditor</span>(<span style="color: #98c378;">&#39;</span><span style="color: #89ca78;">ue</span><span style="color: #98c378;">&#39;</span>, { <span style="color: #ef596f;">initialFrameWidth</span>: <span style="color: #d8985f;">null</span>, <span style="color: #ef596f;">initialFrameHeight</span>: <span style="color: #d8985f;">350</span> }) },</p><p><span style="color: #52adf2;">destroyed</span>() { <span style="color: #e5c07b;font-style: italic;">this</span>.<span style="color: #ef596f;">editor</span>.<span style="color: #52adf2;">destroy</span>() }</p><p><br/></p>
    </div>
  </div>
</template>

<script>
export default {
  data: _ => ({ editor: null, title: '', info: '' }),
  methods: {
    createBlog() {
      this.info = this.editor.getContent()
      console.log(this.info);
      this.fetch('/file/creat', { title: this.title, info: this.info },'post').then(r=>console.log(r))
    },
  },
  mounted() { this.editor = UE.getEditor('ue', { initialFrameWidth: null, initialFrameHeight: 350 }) },
  destroyed() { this.editor.destroy() }
}
</script>

<style>
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>




