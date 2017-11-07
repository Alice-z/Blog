<template>
  <div id="life">
    <button @click="createBlog">save </button>
    <label for="title">标题:</label>
    <input class="ipt" type="text" v-model="title" id="title">
    <label for="title">分类:</label>
    <input class="ipt" type="text" v-model="sort" id="sort">
    <div id="editor" style="height:500px" />   
  </div>
</template>

<script>
import list from "@db/result.json";

export default {
  data: _ => ({
    list,
    editor: null,
    title: "",
    info: "",
    sort: "",
    quill: ""
  }),
  methods: {
    async createBlog() {
      // this.info = JSON.stringify(this.quill.getContents().ops)
      this.info=this.quill.container.firstChild.innerHTML
      let { title, info, sort } = this;
      await this.fetch("/blog/save", { title, info, sort },'POST'); //dev
      this.$router.push("/blog");/* */
    },
    save() {
      console.log(this.quill.getContents().ops[0] )
    }
  },
  mounted() {
    hljs.configure({
      languages: ["javascript", "ruby", "python"]
    });
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
          ["link", "blockquote", "code-block", "image"],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
    this.quill = new Quill("#editor", {
      modules: {
        syntax: true,
        toolbar:toolbarOptions
      },
      placeholder:this.list[0].info,
      theme: "snow" // or 'bubble'
    });
  }
};
</script>
