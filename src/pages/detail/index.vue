<template>
	<section>
		<AsideComp :show="asideShow"></AsideComp>
		<keep-alive>
			<transition name="fade">
				<router-view></router-view>
			</transition>
	  </keep-alive>
		<FooterComp></FooterComp>
	</section>
</template>
<script>
	import { getMyInfo } from '@/api'
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
			},
			getUserInfo() {
	      getMyInfo().then(res => {
	        if(res.data.code === '0001') {
	          // let userInfo = res.data.result.userInfo;
	          // console.log(userInfo)
	        } else {
	          // this.$message.error(res.data.message)
	        }
	      }).catch(err => {
	        console.log(err)
	        this.$catchError(err)
	      })
	    },
		},
		mounted () {
			this.asideShow = false;
			document.addEventListener('scroll', this.scroll)
			// this.getUserInfo()
		}
	}
</script>