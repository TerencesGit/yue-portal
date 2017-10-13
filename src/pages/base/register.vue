<template>
	<section>
		<div class="login-bg">
			<div class="login-box">
				<div class="login-top">
					<img src="../../assets/img/logo.png" alt="">
				</div>
				<div class="login-content">
					<div class="register-link">
						<span>已经注册？<router-link to="login">马上登录>></router-link></span>
					</div>
					<form class="login-form" onsubmit="return false">
						<div class="form-item">
							<label class="form-item__label">企业名称</label>
							<input type="text" v-model="form.partnerName" class="form-item__input" required>
						</div>
						<div class="form-item">
							<label class="form-item__label">企业网址(选填)</label>
							<input type="text" v-model="form.partnerSite" class="form-item__input">
						</div>
						<div class="form-item">
							<label class="form-item__label">联系人</label>
							<input type="text" v-model="form.contactName" class="form-item__input" required>
						</div>
						<div class="form-item">
							<label class="form-item__label">职务</label>
							<input type="text" v-model="form.titleName" class="form-item__input" required>
						</div>
						<div class="form-item">
							<label class="form-item__label">手机号</label>
							<input type="text" v-model="form.mobile" class="form-item__input" required>
						</div>
						<div class="form-item">
							<label class="form-item__label">手机验证码</label>
							<input type="text" v-model="form.smsCode" class="form-item__input"  required>
							<button class="form-item__button" :disabled="disabled" @click="getSmsCode">{{buttonText}}</button>
						</div>
						<div class="form-item submit">
							<el-button native-type="submit" type="primary" @click="submitForm">立即注册</el-button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data () {
			return {
				form: {
					partnerName: '',
					partnerSite: '',
					contactName: '',
					titleName: '',
					mobile: '',
					smsCode: '',
				},
				disabled: false,
				buttonText: '获取验证码',
			}
		},
		methods: {
			countDown() {
				let count = 60;
				let timer = null;
				this.disabled = true;
				timer = setInterval(() => {
					if(count > 0) {
						this.buttonText = `重新获取 ${count}s`
						count --;
					} else {
						this.buttonText = '重新获取';
						this.disabled = false;
						clearInterval(timer)
					}
				}, 1000)	
			},
			getSmsCode(e) {
				if(!this.form.mobile.match(/^(13|14|15|17|18)\d{9}$/)) {
					this.$notify.warning({
						title: '提示',
						message: '请填写正确手机号码',
					})
					return;
				}
				this.countDown();
				console.log(this.form.mobile)
			},
			submitForm() {
				if(this.form.partnerName && this.form.contactName && this.form.titleName && this.form.mobile && this.form.smsCode) {
					let data = {
						partnerName: this.form.partnerName,
						partnerSite: this.form.partnerSite,
						contactName: this.form.contactName,
						titleName: this.form.contactName,
						mobile: this.form.mobile,
						smsCode: this.form.smsCode,
					}
					console.log(data)
					this.$message('注册成功')
					this.$router.push('/register_success')
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
		background: url(../../assets/img/register_bg.jpg);
		background-size: 100% 100%;
		.login-box {
			width: 400px;
			text-align: center;
			.login-content {
				margin: 30px 0;
				padding: 15px 30px 20px;
				background: rgba(255,255,255,.8);
				.register-link {
					text-align: right;
					a {
						color: #009ae0;
					}
				}
			}
		}
	}
	.form-item {
		display: flex;
		height: 38px;
		padding: 6px 0;
		margin: 10px 0;
		border: 1px solid #999;
		&.submit {
			height: auto;
			padding: 0;
			border: 0;
			.el-button {
				width: 100%;
				margin-top: 10px;
				border-radius: 0;
			}
		}
		.form-item__label {
			// width: 100px;
			margin: 0 15px;
			text-align: left;
			color: #888;
			font-size: 15px;
		}
		.form-item__input {
			width: 40%;
			flex: 1;
			color: #666;
			font-size: 16px;
			background: transparent;
		}
		.form-item__button {
			height: 36px;
			margin-top: -6px;
		}
	}
</style>