<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default {

}
 
</script>

<style>
@import url('/static/css/mixin.css');
@import url('/static/css/reset.css');
@import url('/static/css/animate.css');
#app{
  overflow: hidden;
  /* height: 100%; */
}
canvas {
  position: fixed;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: all .3s
}
.tag{
  font-size: 2rem;
  margin: 0.5rem
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
h1 {
    font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 0.9rem;
    text-transform: uppercase;
    margin: 1.2rem 0;
    margin-bottom:0;
    left: 0.4rem;
}
 p {
  font-size: 1.4rem;
  line-height: 2em;
  margin: 0;
  letter-spacing: 0.2rem;
  color: #999
 }
</style>
