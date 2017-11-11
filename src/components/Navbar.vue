<template>
 <div class="nav">
   <img  src="/static/img/lufei.jpg" >
   <h1 >Alice</h1>
    <p class="tag">A Salted fish Designer </p>   
    <p><router-link to="/home">home</router-link></p>
    <p><router-link to="/edit">edit</router-link></p>
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

</style>
