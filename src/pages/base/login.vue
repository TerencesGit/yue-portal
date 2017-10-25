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
							<el-button native-type="submit" type="primary" @click="submitForm" :loading="loading">登 录</el-button>
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
	import { requestLogin } from '@/api'
	import Md5 from '@/assets/js/md5'
	import Utils from '@/assets/js/utils'
	export default {
		data () {
			return {
				form: {
					username: '',
					password: '',
				},
				loading: false,
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
						email: this.form.username,
						password: Md5.hex_md5(this.form.password)
					}
					this.loading = true;
					requestLogin(data).then(res => {
						console.log(res)
						this.loading = false;
						if(res.data.code === '0001') {
							let user = {
                name: escape(btoa(this.form.username)),
                pwd: escape(btoa(this.form.password)),
              }
              if(res.data.result.redirectUrl) {
              	window.location.href = res.data.result.redirectUrl;
              } else {
              	let userId = res.data.result.userInfo.userId;
	              localStorage.setItem('user', JSON.stringify(user))
	              Utils.setCookie('userId', userId)
								this.$router.push('/')
              }
						} else {
							this.$message.error(res.data.message)
						}
					}).catch(err => {
						console.log(err)
						this.loading = false;
						this.$catchError(err)
					})
				}
			}
		},
		mounted() {
			let user = JSON.parse(localStorage.getItem('user'))
	    if(user && user.name && user.pwd) {
	      this.form.username = atob(unescape(user.name))
	      this.form.password = atob(unescape(user.pwd))
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
		background: url(../../assets/img/login_bg.jpg);
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
		.el-button {
			width: 100%;
			margin-top: 10px;
			border-radius: 0;
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