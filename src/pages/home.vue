<template>
	<section>
		<HeaderComp></HeaderComp>
		<div class="main">
			<div class="flex-item">
				<img src="../assets/img/home/home_about_bg.png">
				<div class="item-title about-us">
					<img src="../assets/img/home/home_about.png">
					<router-link to="/detail/about" class="link-button">
						<img src="../assets/img/home/about_us.png" >
					</router-link>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home/home_photo_bg.png">
					<div class="item-title photo">
						<img src="../assets/img/home/home_photo.png">
						<router-link to="/detail/photography" class="link-button">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div> 
				<div class="flex-item">
					<img src="../assets/img/home/home_tourism_bg.png">
					<div class="item-title tourism">
						<img src="../assets/img/home/home_tourism_title.png">
						<router-link to="/detail/tourism" class="link-button">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home/home_finance_bg.png">
					<div class="item-title center">
						<img src="../assets/img/home/home_finance_title.png" alt="">
						<router-link to="/detail/finance" class="link-button">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item">
					<img src="../assets/img/home/home_system_bg.png">
					<div class="item-title center">
						<img src="../assets/img/home/home_system.png" alt="">
						<router-link to="/detail/system" class="link-button">
							<img src="../assets/img/home/show_button2.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item">
					<img src="../assets/img/home/home_marketing_bg.png" alt="">
					<div class="item-title center">
						<img src="../assets/img/home/home_marketing.png" alt="">
						<router-link to="/detail/marketing" class="link-button">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../assets/img/home/home_video_bg.png" alt="">
					<div class="item-title film">
						<img src="../assets/img/home/start_button.png" class="pointer" @click="handlePlayed">
					</div>
				</div>
				<div class="flex-item">
					<img src="../assets/img/home/home_join_bg.png" alt="">
					<div class="item-title join">
						<img src="../assets/img/home/home_join_title.png">
						<router-link to="/detail/join" class="link-button">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex-item intro">
				<img src="../assets/img/home/home_intro.png">
			</div>
		</div>
		<div class="footer-logo">
			<img src="../assets/img/footer/yue_icon.png">
		</div>
		<el-dialog :visible.sync="videoVisible" :close-on-click-modal="false" custom-class="video-dialog" @close="handleClose">
			<video id="yueVideo" src="../assets/video/movie.webm" controls autoplay></video>
		</el-dialog>
	</section>
</template>
<script>
	import { getMyInfo } from '@/api'
	import HeaderComp from '@/components/Header'
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			HeaderComp,
			FooterComp,
		},
		data () {
			return {
				videoVisible: false,
			}
		},
		methods: {
			getUserInfo() {
	      getMyInfo().then(res => {
	        if(res.data.code === '0001') {
	        } else {
	          // this.$message.error(res.data.message)
	        }
	      }).catch(err => {
	        console.log(err)
	        this.$catchError(err)
	      })
	    },
	    handlePlayed() {
	    	this.videoVisible = true;
	    	let yueVideo = document.getElementById('yueVideo');
	    	yueVideo && yueVideo.play()
	    },
	    handleClose() {
	    	document.getElementById('yueVideo').pause();
	    },
		},
		mounted() {
			window.scrollTo(0, 0)
			// this.getUserInfo()
			// let _53code = document.createElement("script");
		 //  _53code.src = "http://tb.53kf.com/code/code/9006078/2";
		 //  let s = document.getElementsByTagName("script")[0]; 
		 //  s.parentNode.insertBefore(_53code, s);
		}
	}
</script>
<style scoped lang="scss">
	.flex-item {
		position: relative;
		> img {
			width: 100%;
			height: 100%
		}
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