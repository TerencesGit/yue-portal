<template>
	<section>
		<HeaderComp></HeaderComp>
		<keep-alive>
			<transition name="fade">
				<router-view></router-view>
			</transition>
	  </keep-alive>
	</section>
</template>
<script>
	import HeaderComp from '@/components/Header'
	export default {
		name: 'baseWrap',
		components: {
			HeaderComp
		},
	}
</script>
