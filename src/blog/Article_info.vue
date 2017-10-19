<template>
  <div v-html="$route.params.r" id="page" ></div>
</template>

<script>
export default {
}
</script>

<style scoped>
#page{
  height: 100%;
  margin-left: 30rem;
  padding-right: 8rem;
  padding-top: 5rem;
}
@media screen and (max-width: 700px) {
  #page{margin:0 auto;width: 80% ;padding-right: 0}
}
</style>
