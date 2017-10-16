<template>
	<div class="full-header">
		<div class="title">
			<slot name="header-title">
				<img src="../assets/img/index_logo.png">
			</slot>
		</div>
		<div class="icon-arrow-down" @click="scrollDown">
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
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 100vh;
	  background: url(../assets/img/index_bg.jpg) no-repeat center;
	  background-size: 100% 100%;
	  .icon-arrow-down {
	    position: absolute;
	    bottom: 10%;
	    cursor: pointer;
	    animation: flicker .4s ease-in-out infinite alternate;
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