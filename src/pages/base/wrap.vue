<template>
	<section>
		<HeaderComp></HeaderComp>
		<keep-alive>
			<router-view></router-view>
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
