<template>
	<section>
		<div class="login-bg">
			<div class="login-box">
				<div class="login-top">
					<img src="../../assets/img/logo.png" alt="">
				</div>
				<div class="login-content">
					<div class="register-link">
						<span>还没有注册？<router-link to="register">立即注册>></router-link></span>
					</div>
					<form action="#" onsubmit="return false">
						<div class="form-group">
							<input type="text" v-model.trim="form.username" class="form-input" placeholder="您的账号/手机号/邮箱" required>
						</div>
						<div class="form-group">
							<input type="password" v-model.trim="form.password" class="form-input"  placeholder="您的密码" required>
						</div>
						<div class="form-group">
							<md-button type="submit" class="md-raised md-primary" @click="submitForm">登 录</md-button>
						</div>
					</form>
					<div class="login-tip">
						 <div class="auto-login">
						 	<label @click="checkBoxChange">
							 	<span class="checkbox" v-bind:class="{checked: autoLogin}"></span>
							 	下次自动登录
						 	</label>
						 </div>
						 <div class="forget">
						  <router-link to="login">忘记密码</router-link>
						 </div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import Md5 from '@/assets/js/md5'
	export default {
		data () {
			return {
				form: {
					username: '',
					password: '',
				},
				autoLogin: false,
			}
		},
		methods: {
			checkBoxChange() {
				this.autoLogin = !this.autoLogin;
			},
			submitForm() {
				if(this.form.username && this.form.password) {
					let data = {
						username: this.form.username,
						password: Md5.hex_md5(this.form.password)
					}
					console.log(data)
					this.$message('登录中...')
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.login-bg {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: url(../../assets/img/login_bg.png);
		background-size: 100% 100%;
		.login-box {
			width: 350px;
			margin-top: -80px;
			text-align: center;
			.login-content {
				margin: 30px 0;
				.register-link {
					text-align: right;
					color: #fff;
					span {
						padding: 2px 6px;
						border-radius: 25px;
						background: rgba(255, 255, 255, .3)
					}
					a {
						color: #fcd004;
					}
				}
			}
		}
	}
	.form-group {
		margin: 10px 0;
		.form-input {
			width: 100%;
			padding: 8px 12px;
			font-size: 18px;
			color: #666;
		}
		.md-button {
			width: 100%;
			padding: 5px 10px;
			margin: 0;
			color: #fff;
			font-size: 18px;
		}
	}
	.login-tip {
		display: flex;
		justify-content: space-between;
		color: #999;
		.auto-login {
			label {
				cursor: pointer;
			}
			.checkbox {
				display: inline-block;
				width: 15px;
				height: 15px;
				background: #fff;
				border-radius: 3px;
				vertical-align: middle;
				position: relative;
				&.checked::before {
					content: '';
					width: 15px;
					height: 15px;
					position: absolute;
					top: 0;
					left: 0;
					background: url(../../assets/img/arrow_success.png) no-repeat center;
				}
			}
		}
		.forget {
			a {
				color: #999;
			}
		}
	}
</style>