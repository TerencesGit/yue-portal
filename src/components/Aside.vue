<template>
	<aside class="aside" v-show="show">
		<div class="logo">
			<img src="../assets/img/aside_logo.png" @click="toggleShow">
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
						<router-link to="join">如何加盟</router-link>
					</li>
				</ul>
			</nav>
		</transition>
	</aside>
</template>
<script>
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
			}
		},
		methods: {
			toggleShow() {
				this.navShow = !this.navShow;
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
	}
	.logo {
		padding: 10px;
		text-align: center;
		background: #028AEE;
	}
	.nav-list {
		text-align: center;
		background: #DEF0FE;
		li {
			padding: 5px;
			font-size: 16px;
			letter-spacing: 4px;
			&:nth-of-type(even) {
				background: #9CCEF3
			}
			a {
				display: inline-block;
				width: 100%;
			}
		}
	}
	.slide-fade-enter, .slide-fade-leave-to {
	  transform: translateY(-10px);
	  opacity: 0;
	}
</style>