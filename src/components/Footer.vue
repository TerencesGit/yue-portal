<template>
	<footer class="footer">
		<ul class="footer-nav">
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav1.png">
				<div class="item-show">
					<router-link to="/detail/photography" class="show-button">查看详情</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav2.png">
				<div class="item-show">
					<router-link to="/detail/tourism" class="show-button">查看详情</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav3.png">
				<div class="item-show">
					<router-link to="/detail/finance" class="show-button">查看详情</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav4.png">
				<div class="item-show">
					<router-link to="/detail/system" class="show-button">查看详情</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav5.png">
				<div class="item-show">
					<router-link to="/detail/marketing" class="show-button">查看详情</router-link>
				</div>
			</li>
			<li class="nav-item">
				<img src="../assets/img/footer/footer_nav6.png">
				<div class="item-show">
					<router-link to="/detail/join" class="show-button">查看详情</router-link>
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
		  .nav-item {
		    position: relative;
		    &:nth-of-type(even) {
		      .item-show {
		        .show-button {
		          color: #999;
		          border: 1px solid #999;
		        }
		      }
		    }
		    .item-show {
		      position: absolute;
		      top: 60%;
		      left: 0;
		      width: 100%;
		      text-align: center;
		      .show-button {
		        font-size: 12px;
		        padding: 3px 12px;
		        color: #f3f3f3;
		        border: 1px solid #f3f3f3;
		        &:hover {
		          text-decoration: none;
		        }
		      }
		    }
		  }
		}
		.footer-logo {
			padding: 0 15px 15px;
			text-align: center;
		}
	}
</style>