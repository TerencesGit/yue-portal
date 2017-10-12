<template>
	<section>
		<header class="full-header">
			<div class="title">
				<img src="../../assets/img/photography_logo.png">
			</div>
			<div class="icon-arrow-down">
				<img src="../../assets/img/arrow_down.png">
			</div>
		</header>
		<div class="main">
			<div class="map">
				<img src="../../assets/img/yue_map.png">
			</div>
			<div class="advantage">
				<img src="../../assets/img/photo/advantage.png" alt="">
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../../assets/img/photo/global_travel.png" alt="">
				</div>
				<div class="flex-column micro-film">
					<div>
						<img src="../../assets/img/photo/film_title.png">
					</div>
					<div class="video">
						<video src="../../assets/video/movie.webm" controls></video>
					</div>
					<div>
						<img src="../../assets/img/photo/film_footer.png">
					</div>
				</div>
			</div>
			<div class="flex-column show">
				<div class="show-title">
					<img src="../../assets/img/photo/show_title.png" alt="">
				</div>
				<div class="flex-item">
					<img src="../../assets/img/photo/show_native.png" alt="">
					<router-link to="native" class="link-button">
						<img src="../../assets/img/photo/more_button.png" alt="">
					</router-link>
				</div>
				<div class="flex-item">
					<img src="../../assets/img/photo/show_oversea.png" alt="">
					<router-link to="oversea" class="link-button oversea">
						<img src="../../assets/img/photo/more_button.png" alt="">
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped lang="scss">
	.main {
		background: #F5F4EF;
	}
	.full-header {
		background: url(../../assets/img/photography_bg.jpg) no-repeat center;
  	background-size: cover;
	}
	.advantage {
		padding: 30px 50px;
		background: #fff;
		img {
      width: 100%;
    }
	}
	.micro-film {
    background: #F5F4EF;
    padding: 30px;
    // .video {
    //   margin-top: 15px;
    // }
  }
  .show {
  	padding: 50px;
		> div {
			margin: 30px 0;
		}
  }
  .link-button {
  	position: absolute;
  	right: 28%;
  	bottom: 0;
  	&.oversea {
  		top: 27%;
  		left: 20%;
  	}
  	// transform: translate(50%, 0);
  }
</style>