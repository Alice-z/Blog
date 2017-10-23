<template>
  <div>
    <h1>文章管理页面 </h1>
    <div v-for="(i,k) in list " class="row">
      <span v-html="i.title"></span>
      <button class="btn" @click="remove(k)">删除</button>
    </div>
  </div>
</template>

<script>

import list from '../blog/Article_data'
export default {
data(){
  return{list}
},
methods:{
  remove(k){
    this.list.splice(k,1)
    // console.log(typeof JSON.stringify(this.list));
    this.fetch('/file/remove',this.list,'post').then(r=>console.log('succ'))
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
  top: -1rem
}
.row{
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  width: 50%
}
</style>
