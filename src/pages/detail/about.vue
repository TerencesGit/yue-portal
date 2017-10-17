<template>
	<section>
		<header>
			<img src="../../assets/img/about/banner.png" class="responsive-img">
		</header>
		<main class="main">
			<div class="flex">
				<div class="flex-item">
					<img src="../../assets/img/about/intro1.png">
					<div class="intro_detail photo">
						<h3>旅拍服务</h3>
						<p>覆盖全球50+目的地 国内10+  境外30+</p>
						<p>客样照+视频 全方位立体化展示</p>
						<p>保证品牌 以加盟商品牌对客服务</p>
						<p>你即刻成为最全面的婚嫁电商平台</p>
						<router-link to="photography" class="link-button"></router-link>
					</div>
				</div>
				<div class="flex-item">
					<img src="../../assets/img/about/intro2.png">
				</div>
				<div class="flex-item">
					<img src="../../assets/img/about/intro3.png">
					<div class="intro_detail tourism">
						<h3>旅游服务</h3>
						<p>与其他品牌差异化竞争</p>
						<p>获取更高营业额及利润</p>
						<p>客人省时省力快速成交</p>
						<p>你即刻成为像携程一样的旅游电商平台</p>
						<router-link to="tourism" class="link-button"></router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../../assets/img/about/intro4.png">
				</div>
				<div class="flex-item">
					<img src="../../assets/img/about/intro5.png">
					<div class="intro_detail finance">
						<h3>金融服务</h3>
						<p>为婚嫁·旅游产业进行资本对接</p>
						<p>消费金融、供应链金融服务</p>
						<p>利息低、放款快、产品多</p>
						<p>线上店内全支付通道 超低手续费</p>
						<p>你即刻成为全方位服务的金融公司</p>
						<router-link to="finance" class="link-button"></router-link>
					</div>
				</div>
				<div class="flex-item">
					<img src="../../assets/img/about/intro6.png">
				</div>
			</div>
			<div class="flex">
				<div class="flex-item">
					<img src="../../assets/img/about/intro7.png">
					<div class="intro_detail system">
						<h3>系统服务</h3>
						<p>婚嫁／旅游产业转型电商</p>
						<p>PC端、移动端、微信、APP定制开发</p>
						<p>行业属性多渠道分销系统</p>
						<p>让每个人都可以成为你的销售</p>
						<p>你即刻成为全系统的科技公司</p>
						<router-link to="system" class="link-button"></router-link>
					</div>
				</div>
				<div class="flex-item">
					<img src="../../assets/img/about/intro8.png">
				</div>
				<div class="flex-item">
					<img src="../../assets/img/about/intro9.png">
					<div class="intro_detail marketing">
						<h3>网络营销</h3>
						<p>网络多渠道流量整合</p>
						<p>百度、腾讯、微博、今日头条、大众点评…</p>
						<p>SEO、SEM</p>
						<p>品牌推广、产品推广、事件营销…</p>
						<p>你即刻成为全方位网络互动营销公司</p>
						<router-link to="marketing" class="link-button"></router-link>
					</div>
				</div>
			</div>
		</main>
		<div class="view">
			<img src="../../assets/img/about/view.png" class="responsive-img">
		</div>
		<div class="about">
			<img src="../../assets/img/about/about_banner.jpg">
			<!-- <div class="about-detail">
				<div class="txt">
					<h2>选择悦视觉 您将得到什么？</h2>
					<p>让所有与我们合作的企业 轻松的赚到钱</p>
					<p>与我们在一起 会发现 得到的不只是以上</p>
					<h4>还有更多</h4>
					<p>真正让你们企业成为</p>
					<p>跨行业 跨区域 跨国家</p>
					<p>真正全球化的企业</p>
				</div>
				<div class="icon"></div>
			</div> -->
		</div>
		<div class="process">
			<img src="../../assets/img/about/process.png" class="responsive-img">
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
		width: 80%;
		margin: 50px auto;
	}
	.flex-item {
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.intro_detail {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 1.5rem;
		color: #fff;
		&.photo {
			background: #62B5E4;
		}
		&.tourism {
			background: #656E81;
		}
		&.finance {
			color: #666;
			background: #FEFAFA;
			.link-button {
				background: url(../../assets/img/about/button_arrow_gray.png) no-repeat center;
				background-size: cover;
			}
			&:hover {
				.link-button {
					background: url(../../assets/img/about/button_more_gray.png) no-repeat center;
					background-size: cover;
				}
			}
		}
		&.system {
			background: #656E81;
		}
		&.marketing {
			background: #2CB0BA;
		}
		h3 {
			margin: 1rem 0;
			font-size: 1.5rem;
			letter-spacing: 1px;
		}
		p {
			font-size: .8rem;
			line-height: 1.8;
			word-break: keep-all;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.link-button {
			display: block;
			width: 1.8rem;
			height: 1.8rem;
			margin-top: .5rem;
			background: url(../../assets/img/about/button_arrow.png) no-repeat center;
			background-size: cover;
			transition: all .2s;
		}
		&:hover {
			.link-button {
				width: 5.85rem;
				height: 1.8;
				background: url(../../assets/img/about/button_more.png) no-repeat center;
				background-size: cover;
			}
		}
	}
	.about {
		position: relative;
		.about-detail {
			position: absolute;
			top: 15%;
			right: 20%;
			width: 35%;
			border: 1px solid #333;
			h2 {
				font-size: 1rem;
			}
			p {
				font-size: .9rem;
			}
		}
	}
</style>