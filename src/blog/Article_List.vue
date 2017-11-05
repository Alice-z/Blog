<template>
  <div >
    <ul v-for="(i,k) in data" class="info jello">
      <li class="line">
        <a v-html="i.title" @click="push(k) " />
        <p>
          <a v-html="i.time" />
          <a style="margin-left:2rem">分类：{{i.sort}} </a>
        </p>
      </li>
    </ul>
    <div class="tag swing">
      <p>分类</p>
      <span @click="init">
        <a>所有文章</a>
      </span>
      <span @click="toTag('vue')">
        <a>Vue</a>
      </span>
      <span @click="toTag('node')">
        <a>node</a>
      </span>
      <span @click="toTag('webpack')">
        <a>webpack</a>
      </span>
    </div>
  </div>
</template>

  
<script>
import data from "./Article_data.js";

export default {
  data() {
    return {
      data:null
    }
  },
  async created(){
    let {doc}=await this.fetch('/blog_db/find')
    this.data=process.env.NODE_ENV=='development'?doc: data
  },
  methods: {
    push(page) {
      this.$router.push({ name: "article", query: {  page  }
      })
    },
    init() {
      this.data = data
    },
    toTag(tag) {
      this.data = data.filter(r => r.sort == tag)
    }
  }
}


</script>

<style lang="less" scoped>
@media screen and (max-width: 700px) {
  .info{
    width: 75%!important ;
    margin: 0 auto
  }
  .tag{
    display: none;
  }
}
.info {
  // border-bottom: 0.1rem solid #ccc;
  padding: 2rem;
  width: 50%;
  padding-bottom: 0;
  margin-bottom: 1rem;
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  &:hover{
   animation:jello 2s infinite alternate
  }
}
.fr {
  font-size: 1rem;
}
.line {
  a {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    color: #000;
    line-height: 2rem
  }
  p {
    margin-top: 2rem;
    a {
      color: #999;
    }
  }
}
.mf {
  margin-left: 2rem;
}
.border {
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

.tag {
	width: 20rem;
	height: 30rem;
	position: fixed;
	right: 5rem;
	top: 5rem;
  padding: 2rem;
  .border;
  &:hover{
    animation: swing 3s infinite alternate;
  }
  p{
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    color: #000;
    line-height: 2rem
  }
	span{
		.border;
		font-size: 1rem;
		padding: .1rem .5rem
	}
}
</style>
