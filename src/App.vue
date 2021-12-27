<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
}

input, select, textarea {
    outline: none;
    resize: none;
    border: none;
}

html, body, #app {
	width: 100%;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	.content {
		width: 100%;
	}
}
</style>
