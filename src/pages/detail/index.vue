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
			this.getUserInfo()
			document.addEventListener('scroll', this.scroll)
			if(document.getElementById('iconDiv1')) return;
			let _53code = document.createElement("script");
		  _53code.src = "http://tb.53kf.com/code/code/9006078/2";
		  let s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(_53code, s);
		}
	}
</script>