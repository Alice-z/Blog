<template>
  <div >
    <ul  v-for="i in data"  class="info" >
      <li class="line">
      <a  v-html="i.title" @click="push(i) " /> 
      <p><a  v-html="i.time" /> <a style="margin-left:2rem" >分类：{{i.sort}} </a> </p>      
      </li>
    </ul>
  </div>
</template>
  
<script>
import data from "./Article_data.js";

export default {
  data() {
    return { data };
  },
  methods: {
    push(r) {
      this.$router.push({ name: "article", params: { r } });
    }
  }
};
</script>

<style lang="less" scoped>
.info {
  border-bottom: 0.1rem solid #ccc;
  padding: 2rem;
  width: 50%;
  padding-bottom: 0;
}
.fr {
  font-size: 1rem;
}
.line {
  a {
    letter-spacing: 0.2rem;
    color: #000;
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
</style>
