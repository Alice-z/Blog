<template>
  <div  id="page" >
    <h1 v-html="title"></h1>
    <div v-html="info"></div>
    <a class="top" href="#" >顶部</a href="#">
  </div>
</template>

<script>
import data from './Article_data'
export default {
  computed:{
    title(){
      return data[this.$route.query.page].title
    },
    info(){
      return  data[this.$route.query.page].info
    }
  }
}

</script>

<style scoped>
#page{
  height: 100%;
  margin-left: 30rem;
  padding-right: 8rem;
  padding-top: 5rem;
  transition: all .5s 
}
@media screen and (max-width: 700px) {
  #page{margin:0 auto;width: 80% ;padding-right: 0}
}
h1{
  margin-bottom: 2rem;
  font-size: 2rem;
  letter-spacing:0
}
.top{
  display: block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background: #ccc;
  border-radius: 50%;
  position: fixed;
  right: 1rem;
  bottom: 2rem;
}
</style>
