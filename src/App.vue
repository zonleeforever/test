<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		box-sizing: border-box;
	}
	html,body{
		margin: 0;
	}
	p{
		margin: 0;
	}
	li{
		cursor: pointer;
	}
</style>
