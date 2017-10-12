<template>
	<section>
		<HeaderComp></HeaderComp>
		<div class="main">
			<div class="flex-item">
				<img src="../assets/img/home_about_bg.png">
				<div class="item-title about-us">
					<img src="../assets/img/home_about.png">
					<router-link to="/about-us" class="link-button">
						<img src="../assets/img/about_us.png" >
					</router-link>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home_photo_bg.png">
					<div class="item-title photo">
						<img src="../assets/img/home_photo.png">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/show_button.png">
						</router-link>
					</div>
				</div> 
				<div class="flex-item">
					<img src="../assets/img/home_tourism_bg.png">
					<div class="item-title tourism">
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
				<div class="flex-item">
					<img src="../assets/img/home_system_bg.png">
					<div class="item-title center">
						<img src="../assets/img/home_system.png" alt="">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/show_button2.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item">
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
					<div class="item-title film">
						<img src="../assets/img/start_button.png" class="pointer">
					</div>
				</div>
				<div class="flex-item">
					<img src="../assets/img/home_join_bg.png" alt="">
					<div class="item-title join">
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
			<img src="../assets/img/footer/yue_icon.png">
		</div>
	</section>
</template>
<script>
	import HeaderComp from '@/components/Header'
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			HeaderComp,
			FooterComp,
		},
	}
</script>
<style scoped lang="scss">
	.flex-item {
		position: relative;
	}
	.item-title {
		&.about-us {
			top: 35%;
			> img {
				width: 50%;
			}
			.link-button {
				width: 30%;
			}
		}
		&.photo {
			top: 50%;
			left: none;
			right: 0;
			transform: translate(0, -50%);
			> img {
				width: 80%;
			}
			.link-button {
				width: 60%;
			}
		}
		&.tourism, &.join {
			top: 50%;
			left: 0;
			transform: translate(50%, -50%);
			> img {
				width: 80%;
			}
			.link-button {
				width: 60%;
			}
		}
		&.film {
			width: 10%
		}
	}
	.footer-logo {
	  padding: 15px 15px 30px;
	  text-align: center;
	  background: #fff;
	}
</style>