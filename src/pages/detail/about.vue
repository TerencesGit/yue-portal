<template>
	<section>
		<header>
			<img src="../../assets/img/join/banner.png">
		</header>
		<main class="main">
			<div class="flex">
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro1.png">
					<!-- <div class="link"> -->
						<router-link to="photography" class="link-button">
							<!-- <img src="../../assets/img/join/button.png" class="btn-sm"> -->
						</router-link>
					<!-- </div> -->
				</div>
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro2.png">
				</div>
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro3.png">
					<div class="link">
						<router-link to="tourism" class="link-button">
							<!-- <img src="../../assets/img/join/button.png" class="btn-sm"> -->
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro4.png">
				</div>
				<div class="flex-item intro gray">
					<img src="../../assets/img/join/intro5.png">
					<router-link to="finance" class="link-button">
						<!-- <img src="../../assets/img/join/button.png" class="btn-sm"> -->
					</router-link>
				</div>
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro6.png">
				</div>
			</div>
			<div class="flex">
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro7.png">
					<router-link to="system" class="link-button">
						<!-- <img src="../../assets/img/join/button.png" class="btn-sm"> -->
					</router-link>
				</div>
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro8.png">
				</div>
				<div class="flex-item intro">
					<img src="../../assets/img/join/intro9.png">
					<router-link to="marketing" class="link-button">
						<!-- <img src="../../assets/img/join/button.png" class="btn-sm"> -->
					</router-link>
				</div>
			</div>
		</main>
		<div class="view">
			<img src="../../assets/img/join/view.png">
		</div>
		<!-- <div class="join-us">
			<div class="join-reason">
				<img src="../../assets/img/join/join.png">
			</div>
			<div class="join-form">
				<h2>加盟我们</h2>
				<form action="">
					<div class="form-item">
						<label class="form-item__label">姓名</label>
						<input type="text" class="form-item__input" required>
					</div>
					<div class="form-item">
						<label class="form-item__label">联系方式</label>
						<input type="text" class="form-item__input" required>
					</div>
					<div class="form-item">
						<label class="form-item__label">企业名称</label>
						<input type="text" class="form-item__input" required>
					</div>
					<div class="form-item">
						<label class="form-item__label">备注</label>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<div class="form-item submit">
						<el-button native-type="submit" type="primary">提交</el-button>
					</div>
				</form>
			</div>
		</div> -->
		<div class="process">
			<img src="../../assets/img/join/process.png">
		</div>
	</section>
</template>
<script>
	export default {
		mounted () {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 50px auto;
	}
	.flex-item {
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.intro {
		&.gray {
			&:hover {
				.link-button {
					width: 104px;
					height: 32px;
					background: url(../../assets/img/join/button_big_gray.png) no-repeat center;
				}
			}
			.link-button {
				position: absolute;
				left: 40px;
				bottom: 40px;
				width: 32px;
				height: 32px;
				background: url(../../assets/img/join/button_gray.png) no-repeat center;
				transition: all .2s;
			}
		}
		&:hover {
			.link-button {
				width: 104px;
				height: 32px;
				background: url(../../assets/img/join/button_big.png) no-repeat center;
			}
		}
		.link-button {
			position: absolute;
			left: 40px;
			bottom: 40px;
			width: 32px;
			height: 32px;
			background: url(../../assets/img/join/button.png) no-repeat center;
			transition: all .2s;
		}
	}
	.join-us {
		display: flex;
		width: 80%;
		padding: 0 100px;
		margin: 50px auto;
		background: #fff;
		> div {
			flex: 1;
		}
		.join-reason {
			padding: 50px;
		}
		.join-form {
			padding: 20px 50px;
			h2 {
				color: #2DAEB9;
				font-size: 50px;
			}
		}
	}
	.process {
		margin-top: 50px;
	}
</style>