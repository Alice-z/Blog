<template>
  <div id="app">
    <div id="bar" :style="{width,borderRight:width=='17%'?'1px solid #ccc':''}">
      <div class="left">
        <img class="zoom" src="/static/img/lufei.jpg" width="100" height="100" style="border-radius: 50%">
        <h1 @click="TgBar">A l i c e</h1>
        <p><a @click="to('/')">Hmoe</a></p>
        <p><a @click="to('/')">Blog</a></p>
        <p><a @click="to('/life')">Life</a></p>
        <p><a>Design by myself</a></p>
      </div>
    </div>
    <transition name="fade">
      <router-view class="right" id="info" :style="{marginLeft:width }" />
    </transition>
    <canvas :style="{left:width=='100%'?0:'17%' }" />
  </div>

</template>
<script>
export default {
  data: _ => ({ width: '100%' }),
  methods: {
    TgBar() { this.width = this.width == '100%' ? '17%' : '100%'; this.$router.push('/') },
    to(to) { this.width = '17%'; this.$router.push(to) },
  },
  mounted: _ => {
    import('./util/canvas.js')
    Zoomerang.config({ maxHeight: 400, maxWidth: 400, bgColor: '#000', bgOpacity: .85 }).listen('.zoom')
  }
}

</script>

<style>
@import url('/static/css/mixin.css');
html,
body,
#app {
  height: 100%
}
*{
  margin: 0;padding: 0
}
#bar {
  float: left;
  height: 100%;
  position: relative;
  transition: all .5s 
}
#info{
  padding: 50px 400px 20px 60px;
  transition: all .5s 
}
.img{
  background: url('/static/img/bar.jpg') no-repeat;
  background-size: 100% 100%;
}
.left {
  text-align: center;
  height: 100%;
  margin: 250px auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
canvas {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: all .3s 
}

.right {
  height: 100%;
  background: transparent;
  position: relative;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,.fade-leave-to {
  opacity: 0
}

</style>
