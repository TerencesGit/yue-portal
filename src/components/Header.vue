<template>
	<div class="full-header">
		<div class="header-title">
			<slot name="header-title">
				<img src="../assets/img/header_logo.png">
			</slot>
		</div>
		<div class="header-icon" @click="scrollDown">
			<slot name="scroll-button">
				<img src="../assets/img/arrow_down_yue.png">
			</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'header',
		methods: {
			scrollDown() {
				let scrollHeight = document.getElementsByClassName('full-header')[0].offsetHeight;
				let currentPosition = 0;
				let timer = null;
	      let gotoTop = () => {
	        currentPosition += 25;
	        if (currentPosition < scrollHeight) {
	          window.scrollTo(0, currentPosition);
	        } else {
	          window.scrollTo(0, scrollHeight);
	          clearInterval(timer);
	          timer = null;
	        }
	      }
	      timer = setInterval(gotoTop, 1)
			}
		}
	}
</script>
<style scoped lang="scss">
	.full-header {
	  position: relative;
	  height: 100vh;
	  background: url(../assets/img/header_banner.jpg) no-repeat center;
	  background-size: cover;
	  @media (min-width: 768px) {
	  	background: url(../assets/img/header_bg.jpg) no-repeat center;
	  	background-size: cover;
		}
	  .header-title {
	  	position: absolute;
	  	top: 75%;

	  	transform: translateY(-50%);
	  	width: 80%;
	  	margin-left: 10%;
	  	text-align: center;
	  	@media (min-width: 768px) {
	  		top: 50%;
	  	}
	  }
	  .header-icon {
	    position: absolute;
	    left: 50%;
	    bottom: 10%;
	    width: 30px;
	    margin-left: -15px;
	    text-align: center;
	    cursor: pointer;
	    animation: flicker .4s ease-in-out infinite alternate;
	    @media (min-width: 768px) {
	  		width: 45px;
	    	margin-left: -22.5px;
	  	}
	  }
	}
	@keyframes flicker {
	  0% { 
	    transform: translateY(0px); 
	    opacity: 0.5 
	  }
	  100% { 
	    transform: translateY(10px); 
	    opacity: 1 
	  }
	}
</style>