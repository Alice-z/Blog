<template>
 <div class="nav">
   <img  src="/static/img/lufei.jpg" >
   <h1 >Alice</h1>
    <p><router-link to="/">Hmoe</router-link></p>
    <p><router-link to="/blog">Blog</router-link></p>
    <p><router-link to="/life">Life</router-link></p>
    <p><a>Design by myself</a></p>
 </div> 
</template>

<script>
export default { 

 
}
</script>

<style scoped>
img{
  background: url('/static/img/bar.jpg') no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
  width:6rem;
  height:6rem
}
.nav {
  text-align: center;
  height: 20rem ;
  padding-top: 20rem;
  margin:  auto 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
}
</style>
