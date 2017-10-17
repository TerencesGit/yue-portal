<template>
	<section>
		<HeaderComp>
			<img slot="header-title" src="../../assets/img/photo/photo_logo.png">
			<img slot="scroll-button" src="../../assets/img/arrow_down.png">
		</HeaderComp>
		<div class="main">
			<div class="map">
				<img src="../../assets/img/yue_map.png" class="responsive-img">
			</div>
			<div class="advantage">
				<img src="../../assets/img/photo/advantage.jpg" class="responsive-img">
			</div>
			<div class="row">
				<div class="col">
					<img src="../../assets/img/photo/global_travel.jpg" class="responsive-img">
				</div>
				<div class="col micro-film">
					<div>
						<img src="../../assets/img/photo/film_title.png" class="responsive-img">
					</div>
					<div class="video">
						<video src="../../assets/video/movie.webm" controls></video>
					</div>
					<div>
						<img src="../../assets/img/photo/film_footer.png">
					</div>
				</div>
			</div>
			<div class="native relative">
				<img src="../../assets/img/photo/native.jpg" class="responsive-img">
				<router-link to="native" class="more-link">
					<!-- <img src="../../assets/img/photo/more.png"> -->
				</router-link>
			</div>
			<div class="oversea relative">
				<img src="../../assets/img/photo/oversea.jpg" class="responsive-img">
				<router-link to="oversea" class="more-link oversea">
					<!-- <img src="../../assets/img/photo/more.png"> -->
				</router-link>
			</div>
			<div class="footer">
				<img src="../../assets/img/photo/photo_footer.jpg" class="responsive-img">
			</div>
		</div>
	</section>
</template>
<script>
	import HeaderComp from '@/components/Header'
	export default {
		components: {
			HeaderComp,
		},
		mounted() {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.full-header {
		background: url(../../assets/img/photo/photography_bg.jpg) no-repeat center;
  	background-size: cover;
	}
	.micro-film {
		display: flex;
	  flex-direction: column;
	  justify-content: space-around;
	  align-items: center;
    padding: 30px;
    background: #F5F4EF;
    .video {
    	width: 100%;
    	video {
    		width: 100%;
    	}
    }
  }
  .more-link {
  	position: absolute;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	// &.oversea {
  	// 	top: 30%;
  	// 	left: 25%;
  	// 	height: 0;
  	// }
  }
  .row {
  	display: flex;
  	.col {
			width: 50%;
  	}
  }
</style>