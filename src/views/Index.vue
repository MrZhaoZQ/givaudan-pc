<template>
	<div class="content">
		<div class="slider slider1">
            <div class="slider1bg">
                <img src="" alt="">
            </div>
        </div>
        <div class="slider slider2">
            <img src="../assets/imgs/test.gif" alt="">
        </div>
        <div class="slider  slider3"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
        
	},
    created() {
        
    },
    mounted() {

    },
    updated() {

    },
    destroyed() {

    }
};
</script>

<style lang="scss" scoped>
    .slider {
        width: 100vw; height: 100vh;
        overflow: hidden;
        &.slider1 {
            .slider1bg {
                width: 100%; height: 100%;
                background: url('../assets/imgs/homeBg.jpg');
                background-size: cover;
                animation: slider1bgScale 3s ease-in-out infinite;
            }
        }

        &.slider2 {
            position: relative; left: 0; top: 0;
            img {
                width: 380px; height: 380px;
                position: absolute; left: 50%; top: 100px; margin: -190px;
            }
        }

        &.slider3 {
            background: url('../assets/imgs/bg.gif');
            background-size: cover;
        }
    }

    @keyframes slider1bgScale {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
