<template>
	<div class="full-header">
		<div class="title">
			<img src="../assets/img/index_logo.png" alt="悦视觉">
		</div>
		<div class="icon-arrow-down" @click="scrollDown">
			<img src="../assets/img/arrow_down_yue.png">
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