<template>
	<div id="blog" style="height:100%">
		<div  :class="isshow?'a':'b'" class="zoom sliderbar">
			<img src="/static/img/lufei.jpg">
			<h1>Alice</h1>
			<p><router-link to="/">Hmoe</router-link></p>
			<p><router-link to="/blog">Blog</router-link></p>
			<p><router-link to="/life">Life</router-link></p>
			<p><router-link to="/admin">Admin</router-link></p>
 		</div>
		<router-view id="right" />
	</div>
</template>

<script>
export default {
	data(){return {isshow:false }},
	methods: { showBar() { this.isshow = !this.isshow } },
	mounted() {
		screen.availWidth < 700 ? 
		Zoomerang.config({maxHeight: 300, maxWidth: 100, bgColor: '#000', bgOpacity: .85, onBeforeOpen: this.showBar, onClose: this.showBar	})
		.listen('.zoom') : ''
	}
}
</script>

<style lang='less' scoped>
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
	img {
		background: url('/static/img/bar.jpg') no-repeat;
		background-size: 100% 100%;
		border-radius: 50%;
		width: 6rem;
		height: 6rem
	}
}
#right {
  margin-left: 30rem;
  padding-top: 4rem;
}

@media screen and (max-width: 700px) {
		#right {
		padding-bottom: 1rem;
		margin-left: 0;
		padding-top: 5.5rem
  }
	.sliderbar {
		height: 20rem!important;
		padding-top: .5rem!important;
		border: none!important;
		right: 0;
	}
	.a {
		width: 15rem!important;
		height: 18rem!important;
		margin-top: -20rem!important;
		margin-left: -8rem!important;
		transform: scale(0)
	}
	.b {
		width: 6rem!important;
		height: 6rem!important;
		transform: scale(.7)
	}
}
</style>
