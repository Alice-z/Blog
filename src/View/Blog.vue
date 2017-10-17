<template>
	<div id="blog" style="height:100%">
		<div class="info">
			<h1 class="line"><router-link to="details"> This is My Bolg</router-link> </h1>
			<pre class="brush:js;toolbar:false">destroyed()&nbsp;{&nbsp;this.editor.destroy()&nbsp;}</pre>
			<p class="time mf">{{time}}</p>
			<p class="intro mf"><a to="">this is my blog</a></p>
		</div>
	</div>
</template>

<script>
import {nowTime} from '../mixins/filter'
export default {
	data:_=>({time:nowTime()})
}
</script>

<style lang='less' scoped>

.info {
	padding-bottom: 10px;
	border-bottom: 2px solid #ccc
}
.mf{
	margin-left: 30px;
}
// .time {	.mf }
// .intro{	.mf }

</style>
