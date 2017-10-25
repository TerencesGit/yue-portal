<template>
	<section>
		<header class="header">
			<img src="../../assets/img/photo/oversea_head.jpg" class="responsive-img">
		</header>
		<div class="main">
			<div class="main-center">
				<div class="main-title">
					<img src="../../assets/img/photo/oversea_title.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show1.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show2.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show3.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show4.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show5.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show6.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show7.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea_show8.jpg" alt="">
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		mounted () {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.header {
		height: 95vh;
		.responsive-img {
			height: 100%;
			@media (min-width: 768px) {
				height: auto;
			}
		}
	}
	.main {
		background: url(../../assets/img/photo/wave_bg.jpg) repeat center fixed;
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
				&:last-child {
					margin-bottom: 0;
				}
				&:not(.main-title) {
					img {
						width: 100%;
					}
				}
			}
		}
		.main-title {
			padding: 30px 0;
			img {
				width: 80%;
			}
		}
	}
</style>