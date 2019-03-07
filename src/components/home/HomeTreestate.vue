<template>
	<div>
		<div class="zhs_state"></div>
		<div class="zhs_link">
			<router-link :to="{name:'qydt'}" tag="div" class="zhs_title">企业动态</router-link>
			<router-link :to="{name:'mtbg'}" tag="div" class="zhs_title">媒体报告</router-link>
		</div>
		<div class="zhs_content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default({
		name:'hometreestate',
		data(){
			return{
				
			}
		}
	})
</script>

<style scoped>
	.zhs_state{
		height: 570px;
		background-image: url(../../assets/state/mtdt.jpg);
	}
	.zhs_link{
		width: 1000px;
		margin: 0 auto;
		height: 60px;
		margin-top: 40px;
	}
	.zhs_title{
		height: 60px;
		width: 50%;
		float: left;
		text-align: center;
		line-height: 50px;
		border: 1px solid #ccc;
		font-size: 24px;
		font-family: Microsoft YaHei;
		cursor: pointer;
	}
	.router-link-exact-active{
		background-color: #1ab469;
		color: #fff;
	}
	.zhs_content{
		margin-top: 60px;
	}
</style>