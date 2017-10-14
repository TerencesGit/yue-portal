<template>
	<section>
		<aside class="aside" v-show="show">
			<div class="logo">
				<span @click="toggleShow"></span>
			</div>
			<transition name="slide-fade">
				<nav v-show="navShow">
					<ul class="nav-list">
						<li>
							<router-link to="photography">旅拍服务</router-link>
						</li>
						<li>
							<router-link to="tourism">旅游服务</router-link>
						</li>
						<li>
							<router-link to="finance">金融服务</router-link>
						</li>
						<li>
							<router-link to="system">系统服务</router-link>
						</li>
						<li>
							<router-link to="marketing">营销服务</router-link>
						</li>
						<li>
							<!-- <router-link to="join">如何加盟</router-link> -->
							<span @click="handleJoin">加盟我们</span>
						</li>
					</ul>
				</nav>
			</transition>
		</aside>
		<el-dialog :visible.sync="formVisible" :show-close="false" size="tiny">
			<div slot="title" class="dialog-title">
				<h2>加盟我们</h2>
			</div>
			<form onsubmit="return false">
					<div class="form-item">
						<label class="form-item__label">姓名</label>
						<input type="text" v-model="form.name" class="form-item__input" required>
					</div>
					<div class="form-item">
						<label class="form-item__label">联系方式</label>
						<input type="text" v-model="form.mobile" class="form-item__input" required>
					</div>
					<div class="form-item">
						<label class="form-item__label">企业名称</label>
						<input type="text" v-model="form.partnerName" class="form-item__input" required>
					</div>
					<div class="form-item textarea">
						<label class="form-item__label">备注</label>
						<textarea rows="3" v-model="form.note"></textarea>
					</div>
					<div class="form-item submit">
						<el-button native-type="reset" @click="formVisible = false">取消</el-button>
						<el-button native-type="submit" type="primary" @click="submitForm">提交</el-button>
					</div>
				</form>
		</el-dialog>
	</section>
</template>
<script>
	import { createJoinInfo } from '@/api'
	export default {
		name: 'Aside',
		props: {
			show: {
				type: Boolean,
				default: false,
			}
		},
		data () {
			return {
				navShow: true,
				form: {
					name: '',
					mobile: '',
					partnerName: '',
					note: ''
				},
				formVisible: false,
				submited: false,
			}
		},
		methods: {
			toggleShow() {
				// this.navShow = !this.navShow;
				this.$router.push('/')
			},
			handleJoin() {
				if (this.submited) {
					this.$notify({
						type: 'warning',
						title: '提示',
						message: '已提交加盟信息，请等待管理员联系'
					})
				} else {
					this.formVisible = true;
				}
			},
			submitForm () {
				if(this.form.name && this.form.mobile && this.form.partnerName) {
					let data = Object.assign({}, this.form)
					console.log(data)
					createJoinInfo(data).then(res => {
						console.log(res)
						if(res.data.code === '0001') {
							this.submited = true;
							this.$message.success('提交成功，请等待管理员联系')
						} else {
							this.$message.error(res.data.message)
						}
						this.formVisible = false;
					}).catch(err => {
						this.formVisible = false;
						console.log(err)
						this.$catchError(err)
					})
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.aside {
		position: fixed;
		top: 100px;
		left: 0;
		z-index: 999;
		width: 120px;
		.logo {
			padding: 10px;
			text-align: center;
			background: #028AEE;
			span {
				display: inline-block;
				width: 41px;
				height: 41px;
				cursor: pointer;
				background: url(../assets/img/aside_logo.png) no-repeat center;
			}
		}
	}
	.nav-list {
		text-align: center;
		background: #DEF0FE;
		li {
			padding: 5px;
			font-size: 16px;
			letter-spacing: 4px;
			// border-bottom: 1px solid #9CCEF3;
			// &:last-child {
			// 	border-bottom: none;
			// }
			// &:hover, &.active {
			// 	background: #9CCEF3
			// }
			&:nth-of-type(even) {
				background: #9CCEF3
			}
			a {
				display: inline-block;
				width: 100%;
			}
			span {
				color: #337ab7;
				cursor: pointer;
			}
		}
	}
	.dialog-title {
		// text-align: center;
		color: #2DAEB9;
		font-size: 20px;
	}
	.form-item {
		&.submit {
			margin-top: 30px;
		}
		&.textarea {
			height: 76px;
			textarea {
				flex: 1;
				border: none;
				outline: none;
				resize: none;
				background: transparent;
			}
		}
	}
</style>