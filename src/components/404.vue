<template>
  <div class="hed">
    <div class="top" >
      <img src="/static/img/404title.png" class="a1" alt="">
      <img src="/static/img/4041.png" class="a2" alt="">
      <img src="/static/img/404book.png" class="a4" alt="">
      <img src="/static/img/404home.png" class="a3" alt="">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

.top{
  position: absolute;
  top: 0;left:0;right: 0;bottom: 0;
   background-size: 100% 100%;
   background: url("/static/img/404.jpeg") no-repeat;
   background-size:  100% 100%
}
img{
  position: relative;;
}
.a1{
top:8rem;left: 10rem;
z-index: 4;
}
.a2{
top:8rem;left: 12rem;z-index: 3;
}
.a3{
top:2rem;left:1rem;z-index: 1;
}
.a4{
top:7em;left: 6rem;z-index: 2;
}
</style>
