<template>
	<section>
		<HeaderComp></HeaderComp>
		<div class="main">
			<div class="flex-item">
				<img src="../assets/img/home_about_bg.png">
				<div class="item-title center">
						<img src="../assets/img/home_about.png">
						<router-link to="/about-us" class="link-button">
							<img src="../assets/img/about_us.png" >
						</router-link>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home_photo_bg.png">
					<div class="item-title right">
						<img src="../assets/img/home_photo.png">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div> 
				<div class="flex-item">
					<img src="../assets/img/home_tourism_bg.png">
					<div class="item-title left">
						<img src="../assets/img/home_tourism_title.png">
						<router-link to="/detail/tourism" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home_finance_bg.png">
					<div class="item-title center">
						<img src="../assets/img/home_finance_title.png" alt="">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item flex-center system">
					<img src="../assets/img/home_system_bg.png">
					<div class="item-title center">
						<img src="../assets/img/home_system.png" alt="">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item flex-center marketing">
					<img src="../assets/img/home_marketing_bg.png" alt="">
					<div class="item-title center">
						<img src="../assets/img/home_marketing.png" alt="">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home_video_bg.png" alt="">
					<div class="item-title center">
						<img src="../assets/img/start_button.png" alt="">
					</div>
				</div>
				<div class="flex-item">
					<img src="../assets/img/home_join_bg.png" alt="">
					<div class="item-title left">
						<img src="../assets/img/home_join_title.png">
						<router-link to="/detail/tourism" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="intro">
				<img src="../assets/img/home_intro.png">
			</div>
		</div>
		<div class="footer-logo">
			<img src="../assets/img/yue_icon.png">
		</div>
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
	.flex-item {
		position: relative;
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
	.footer-logo {
	  padding: 15px 15px 30px;
	  text-align: center;
	  background: #fff;
	}
</style>