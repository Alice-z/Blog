<template>
  <div id="app" >
    <router-view />
    <canvas />
  </div>
</template>

<script>
export default {
  mounted: _ => import('./util/canvas.js'),

}

</script>

<style>
@import url('/static/css/mixin.css');

* {  margin: 0;  padding: 0}
#app{
  overflow: hidden;
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
</style>
