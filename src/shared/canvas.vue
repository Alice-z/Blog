<template>
    <canvas/>
</template>

<script>
export default {
  mounted: _ => import('../util/canvas.js')
}
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}



</style>
