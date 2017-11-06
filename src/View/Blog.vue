<template>
	<div id="blog" style="height:100%">
		<img src="/static/img/lufei.jpg" @click="showBar" class="img">
    <transition name="zoom-in-top">
      <div v-if="isshow" class="model" @click="showBar">
      <div class="nav">
        <h1>Alice</h1>
        <p><router-link to="/">Hmoe</router-link></p>
        <p><router-link to="/blog">Blog</router-link></p>
        <p><router-link to="/life">Life</router-link></p>
        <p><router-link to="/admin">Admin</router-link></p>
      </div>
      </div>
    </transition>
    <div class="sliderbar">
        <img src="/static/img/lufei.jpg" >
        <h1>Alice</h1>
        <p><router-link to="/">Hmoe</router-link></p>
        <p><router-link to="/blog">Blog</router-link></p>
        <p><router-link to="/life">Life</router-link></p>
        <p><router-link to="/admin">Admin</router-link></p>
    </div>
		<router-view id="right" />
		<canvas />    
  </div>
</template>

<script>
export default {
  data() {
    return { isshow: false };
  },
  methods: {
    showBar() {
      this.isshow = !this.isshow;
    }
  },
  mounted() {
    import("../util/canvas.js");
  }
};
</script>

<style lang='less' scoped>
img {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.img {
  display: none;
}
.sliderbar {
  text-align: center;
  position: fixed;
  height: 100%;
  width: 25rem;
  padding-top: 25rem;
  border-right: 0.1rem solid #ccc;
  margin: auto 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
}
.nav {
  width: 70%;
  margin: 0 auto;
  padding-top: 6rem;
}
.model {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}
#right {
  margin-left: 35rem;
  margin-right: 15rem;
  padding-top: 4rem;
}   

@media screen and (max-width: 700px) {
  #right {
    padding-bottom: 1rem;
    margin: 0;
    padding: 6.5rem 2rem 1rem;
  }
  .sliderbar{
    display: none
  }
  .tag {
    display: none;
  }
  .img {
    float: left;
    position: relative;
    top: 0.2rem;
    left: 40%;
    display: block;
  }
}
</style>
