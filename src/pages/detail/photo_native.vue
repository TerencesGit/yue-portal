<template>
	<section>
		<header class="header">
			<img src="../../assets/img/photo/native_head.png" alt="">
		</header>
		<div class="main">
			<div class="main-center">
				<div class="main-title">
					<img src="../../assets/img/photo/native_title.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show1.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show2.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show3.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show4.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show5.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show6.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/native_show7.png" alt="">
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		
	}
</script>
<style scoped lang="scss">
	.header {
		height: 90vh;
	}
	.main {
		background: url(../../assets/img/photo/photo_bg.png) repeat center;
		.main-center {
			width: 80%;
			margin: 0 auto;
			position: relative;
			z-index: 1;
			padding: 15px 15px 0;
			text-align: center;
			background: #F5F4EF;
			> div {
				margin: 8px 0;
			}
		}
		.main-title {
			padding: 30px 0;
		}
	}
</style>