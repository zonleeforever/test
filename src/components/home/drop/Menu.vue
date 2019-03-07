<template>
	<div class="zhs_drop">
		<ul v-if="isshow">
			<li v-for="item in title" @click="go(item.id)">
				{{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default({
		name:'menus',
		data(){
			return{
				showVal:false
			}
		},
		props:{
			title:{
				type:Array,
				default:[]
			},
			isshow:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			go(id){
				if(id == 2){
					let routeData = this.$router.resolve({path: '/login'});
					window.open(routeData.href, '_blank');
				}
			}
		}
		
	})
</script>

<style scoped>
	.zhs_drop{
		width: 140px;
		position: absolute;
		top: 35px;
		left: -40px;
		z-index: 99;
		background-color: #fff;
		border-radius:5px;
		/*border: 1px solid #e5e5e5;*/
	}	
	ul{
		width: 100%;
		list-style: none;
		padding: 0;
	}
	li{
		display: inline-block;
		width: 100%;
	}
	li:hover{
		color: #1ab469;
	}
</style>