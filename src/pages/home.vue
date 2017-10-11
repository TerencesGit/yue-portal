<template>
	<section>
		<HeaderComp></HeaderComp>
		<div class="g-content">
			<div class="about-us">
				<img src="../assets/img/about_us.png" alt="">
			</div>
			<div class="flex">
				<div class="flex-item relative">
					<img src="../assets/img/home_photo.png" alt="">
					<div class="button-wrap">
						<a href="#" class="show-button">查看详情</a>
					</div>
				</div> 
				<div class="flex-item relative">
					<img src="../assets/img/home_tourism.png" alt="">
					<div class="item-title">
						<img src="../assets/img/home_finance.png" class="title-img" alt="">
						<img src="../assets/img/about_us.png" alt="">
					</div>
				</div>
			</div>
			<div class="flex" style="height: 300px">
				<div class="flex-item flex-center finance">
					<div class="flex flex-column">
						<img src="../assets/img/home_finance.png" alt="">
						<div style="text-align: center">
							<a href="#" class="show-button">查看详情</a>
						</div>
						
					</div>
				</div>
				<div class="flex-item flex-center system">
					<img src="../assets/img/home_system.png" alt="">
				</div>
				<div class="flex-item flex-center marketing">
					<img src="../assets/img/home_marketing.png" alt="">
				</div>
			</div>
			<div class="flex">
				<div class="flex-item"></div>
				<div class="flex-item">
					<img src="../assets/img/home_join.png" alt="">
				</div>
			</div>
			<div class="intro">
				<img src="../assets/img/home_intro.png">
			</div>
		</div>
		<FooterComp></FooterComp>
	</section>
</template>
<script>
	import HeaderComp from '@/components/Header'
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			HeaderComp,
			FooterComp
		}
	}
</script>
<style scoped lang="scss">
	.about-us {
		height: 300px;
		text-align: center;
		background: #0096A7;
		img {
			margin: 10%;
		}
	}
	.finance {
		background: #0167B9
	}
	.system {
		background: #F2F2F2
	}
	.marketing {
		background: #9DCDF3
	}
</style>