<template>
	<section>
		<header class="header"></header>
		<div class="main">
			<div class="main-center">
				<div class="main-title">
					<img src="../../assets/img/tourism/tourism_title.png" alt="">
				</div>
				<div class="text-center">
					<img src="../../assets/img/tourism/tourism_pic1.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic2.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic3.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic4.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic5.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic6.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic7.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic8.jpg" alt="">
				</div>
			</div>
			<div class="banner">
				<img src="../../assets/img/tourism/yue_banner.jpg" class="responsive-img">
			</div>
			<div class="view">
				<img src="../../assets/img/tourism/view.png">
			</div>
			<div class="map">
				<img src="../../assets/img/yue_map.jpg" class="responsive-img">
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		mounted() {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.header {
		height: 100vh;
		background: url(../../assets/img/tourism/banner.jpg) no-repeat center;
		background-size: cover;
	}
	.main {
		background: #F5F4EF;
		> div {
			margin: 60px 0;
		}
		.main-center {
			width: 80%;
			margin: 0 auto 100px;
			position: relative;
			z-index: 1;
			text-align: center;
		}
		.main-title {
			padding: 50px 0;
		}
		.row {
			display: flex;
			width: 100%;
			&:nth-of-type(even) {
				.col:first-child {
					width: calc(50% + 5px);
				}
				.col:last-child {
					width: calc(50% - 5px);
				}
			}
			&:nth-of-type(odd) {
				.col:first-child {
					width: calc(50% - 5px);
				}
				.col:last-child {
					width: calc(50% + 5px);
				}
			}
			.col {
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.map {
			margin-bottom: 0;
		}
	}
	.view {
		text-align: center;
	}
</style>