<template>
	<section>
		<div class="login-bg">
			<div class="login-box">
				<div class="login-top">
					<img src="../../assets/img/logo.png" alt="">
				</div>
				<div class="login-content">
					<h3><img src="../../assets/img/success.jpg" alt="">恭喜您，注册成功！</h3>
					<p>请稍后，工作人员马上与您联系</p>
					<p>我们将确认身份后给予登录账号</p>
					<p>{{count}}秒后自动跳转登录页.......</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data () {
			return {
				count: 5,
			}
		},
		methods: {
			countDown() {
				let timer = null;
				timer = setInterval(() => {
					if(this.count > 0) {
						this.count --;
					} else {
						clearInterval(timer)
						this.$router.push('/login')
					}
				}, 1000)	
			},
		},
		mounted () {
			this.countDown()
		}
	}
</script>
<style scoped lang="scss">
	.login-bg {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: url(../../assets/img/register_success_bg.jpg);
		background-size: 100% 100%;
		.login-box {
			width: 400px;
			text-align: center;
			.login-content {
				height: 400px;
				margin: 30px 0;
				padding: 30px;
				color: #009bde;
				background: rgba(255,255,255,1);
				h3 {
					font-size: 22px;
					margin: 30px 0;
					img {
						margin-right: 5px;
					}
				}
				p {
					font-size: 18px;
					&:last-child {
						margin: 30px;
					}
				}
			}
		}
	}
</style>