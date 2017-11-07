<template>
  <div  id="page" >
    <h1 v-html="title" />
    <div v-html="info" />
    <a class="top" href="#" >顶部</a href="#">
  </div>
</template>

<script>
import list from "@db/result.json";
export default {
  computed: {
    info() {
      return list.filter(r => r._id == this.$route.query._id)[0].info;
    },
    title() {
      return list.filter(r => r._id == this.$route.query._id)[0].title;
    }
  }
};
</script>

<style scoped>
#page {
  height: 100%;
  margin-left: 30rem;
  padding-right: 8rem;
  padding-top: 5rem;
  transition: all 0.5s;
}
@media screen and (max-width: 700px) {
  #page {
    margin: 0 auto;
    width: 80%;
    padding-right: 0;
  }
}
h1 {
  margin-bottom: 2rem;
  font-size: 2rem;
  letter-spacing: 0;
}
.top {
  display: block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background: #ccc;
  border-radius: 50%;
  position: fixed;
  right: 1rem;
  bottom: 2rem;
}
</style>
