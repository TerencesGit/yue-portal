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
			<img src="../assets/img/footer/yue_icon.png">
		</div>
	</footer>
</template>
<style scoped lang="scss">
	.footer {
		background: #fff;
		.footer-nav {
			display: flex;
			justify-content: center;
			padding: 20px 50px;
			width: 80%;
			margin: auto;
		  .nav-item {
		  	flex: 1;
		    position: relative;
		    img {
		    	width: 100%;
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
		      top: 60%;
		      left: 0;
		      width: 100%;
		      text-align: center;
		      @media screen and (max-width: 768px) {
					  top: 50%;
					}
					@media screen and (max-width: 450px) {
					  top: 30%;
					}
		      .show-button {
		      	display: block;
		      	width: 40%;
		      	margin: auto;
		      }
		    }
		  }
		}
		.footer-logo {
			width: 30px;
			height: 30px;
			padding: 0 15px 15px;
			text-align: center;
		}
	}
</style>