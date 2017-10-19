<template>
  <div id="right">
    <div  v-for="i in data"  class="info" >
      <h1 class="line" v-html="i.title" @click="push(i.info) "> </h1>
    </div>
  </div>
</template>
  
<script>

import data from './article_data.js'

export default {
  data() {  return { data }  },
  methods:{
    push(r){  this.$router.push({name:'article',params:{r}}) }
  }
}
</script>

<style lang="less" scoped>
#right {
	margin-left: 25rem;
	border-bottom: 0.2rem solid #ccc;
	.mf {
		margin-left: 2rem;
	}
}

@media screen and (max-width: 700px) {
	#right {
		padding-bottom: 1rem;
		margin-left: 0;
		padding-top: 5.5rem

  }
  }
</style>
