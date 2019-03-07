<template>
	<div>
	
		<Head />
		<router-view></router-view>
		<Foot />
		
	</div>
</template>

<script>
	import Head from './Head'
	import Foot from './Foot'
	export default({
		name:'home',
		data(){
			return{
				
			}
		},
		components:{
			Head,
			Foot
		}
	})
</script>

<style>
	
</style>