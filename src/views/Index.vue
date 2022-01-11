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
        <div class="slider  slider3">
            <transition name="txt1" v-on:after-enter="afterTxt1Enter">
                <p class="txt1" v-if="showTxt1">测试文字一一一</p>
            </transition>
            <transition name="txt2">
                <p class="txt2" v-if="showTxt2">测试文字二二二</p>
            </transition>
            <transition name="txt3">
                <p class="txt3" v-if="showTxt3">测试文字三三三</p>
            </transition>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            winHeight: document.documentElement.clientHeight,   //屏幕高度
            showTxt1: false,
            showTxt2: false,
            showTxt3: false,
		}
	},
	methods: {
        scrollToTop() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop, this.winHeight * 1.5)
            if (scrollTop >= this.winHeight * 1.5) {
                this.showTxt1 = true
            }
        },
        afterTxt1Enter(el, done) {
            console.log("afterTxt1Enter")
            this.showTxt2 = true
        }
	},
    created() {
        
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
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
            position: relative; left: 0; top: 0;
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

    .txt1 {
        width: 100%;
        color: red;
        position: absolute; left: 0; top: 10%;
    }
    .txt1-enter-active, .txt1-leave-active {
        opacity: 1;
        top: 10%;
        transition-property: opacity, top;
        transition-duration: 1s;
    }
    .txt1-enter, .txt1-leave{
        opacity: 0;
        top: 100%;
    }

    .txt2 {
        width: 100%;
        color: red;
        position: absolute; left: 0; top: 14%;
    }
    .txt2-enter-active, .txt2-leave-active {
        opacity: 1;
        top: 14%;
        transition-property: opacity, top;
        transition-duration: 2s;
    }
    .txt2-enter, .txt2-leave{
        opacity: 0;
        top: 100%;
    }
</style>
