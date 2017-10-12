<template>
	<section>
		<AsideComp :show="asideShow"></AsideComp>
		<keep-alive>
			<transition name="slide-fade">
				<router-view></router-view>
			</transition>
	  </keep-alive>
		<FooterComp></FooterComp>
	</section>
</template>
<script>
	import AsideComp from '@/components/Aside'
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			AsideComp,
			FooterComp
		},
		data() {
			return {
				asideShow: true
			}
		},
		methods: {
			scroll() {
				let asideTop = window.screen.availHeight - 400;
				this.asideShow = window.scrollY >= asideTop ? true : false;
			}
		},
		mounted () {
			document.addEventListener('scroll', this.scroll)
		}
	}
</script>