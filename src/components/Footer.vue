<template>
	<footer class="footer">
		<ul class="footer-nav">
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav1.png">
				<div class="item-show">
					<router-link to="/detail/photography" class="show-button">
						<img src="../assets/img/footer/show_button.png" alt="">
					</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav2.png">
				<div class="item-show">
					<router-link to="/detail/tourism" class="show-button">
						<img src="../assets/img/footer/show_button_gray.png" alt="">
					</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav3.png">
				<div class="item-show">
					<router-link to="/detail/finance" class="show-button">
						<img src="../assets/img/footer/show_button.png" alt="">
					</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav4.png">
				<div class="item-show">
					<router-link to="/detail/system" class="show-button">
						<img src="../assets/img/footer/show_button_gray.png" alt="">
					</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav5.png">
				<div class="item-show">
					<router-link to="/detail/marketing" class="show-button">
						<img src="../assets/img/footer/show_button.png" alt="">
					</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav6.png">
				<div class="item-show">
					<router-link to="/detail/join" class="show-button">
						<img src="../assets/img/footer/show_button_gray.png" alt="">
					</router-link>
				</div>
			</li>
		</ul>
		<div class="footer-logo">
			<span></span>
		</div>
	</footer>
</template>
<style scoped lang="scss">
	.footer {
		background: #fff;
		.footer-nav {
			display: flex;
			justify-content: center;
			width: 80%;
			padding: 20px 0;
			margin: auto;
		  .nav-item {
		  	flex: 1;
		    position: relative;
		    img {
		    	width: 100%;
		    	height: 100%;
		    }
		    &:nth-of-type(even) {
		      .item-show {
		        .show-button {
		          color: #999;
		        }
		      }
		    }
		    .item-show {
		      position: absolute;
		      top: 40%;
		      left: 0;
		      width: 100%;
		      text-align: center;
		      @media (min-width: 768px) {
					  top: 60% ;
					}
					// @media (min-width: 1200px) {
					//   top: 50% ;
					// }
		      .show-button {
		      	display: block;
		      	width: 50%;
		      	margin: auto;
		      	img {
		      		width: 80%;
		      		@media (min-width: 768px) {
							  width: 72%;
							}
		      	}
		      }
		    }
		  }
		}
		.footer-logo {
			width: 100%;
			padding: 0 10px 10px;
			text-align: center;
			span {
				display: inline-block;
				width: 25px;
				height: 25px;
				background: url(../assets/img/footer/yue_icon.png) no-repeat center;
				background-size: cover;
				@media (min-width: 768px) {
					width: 30px;
					height: 30px;
				}
			}
		}
	}
</style>