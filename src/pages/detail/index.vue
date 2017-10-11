<template>
	<section>
		<keep-alive>
			<transition name="slide-fade">
				<router-view></router-view>
			</transition>
	  </keep-alive>
		<FooterComp></FooterComp>
	</section>
</template>
<script>
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			FooterComp
		}
	}
</script>