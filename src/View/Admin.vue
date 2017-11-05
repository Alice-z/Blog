<template>
  <div>
    <h1>文章管理页面 </h1>
    <div v-for="(i,k) in list " class="row">
      <span v-html="i.title"></span>
      <button class="btn" @click="remove(i._id,k)">删除</button>
    </div>
  </div>
</template>

<script>

import list from '../blog/Article_data'
export default {
data(){
  return{list:null}
},
created(){
    console.log(this.isDev);
  
  this.fetch('/blog_db/find').then(r=>{
    this.list=r.doc||list
  })
},
methods:{
  remove(_id,k){
    this.fetch('/blog_db/remove',{_id},'post' )
    this.list.splice(k,1)
    // this.isDev?
    // this.fetch('/blog-file/remove',this.list,'post')
  }
}
}
</script>

<style scoped>
span{
  color: #999;
  font-size: 1.5rem;
}
h1{
  margin-bottom: 2rem
}
button{
  float: right;
  position: relative;
  vertical-align: middle;
  top: -0.3rem
}
.row{
  margin-bottom: 2rem;
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  height: 2rem;
  line-height: 2rem;
  padding: 1rem;
  width: 50%

}

</style>
