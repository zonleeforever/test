<template>
	<div class="zhs_foot">
		<p class="zhs_img">
			<img src="../assets/telephone.jpg" alt="" />
		</p>
		<p class="zhs_list">
			服务时间：7:00-22:00
		</p>
		<ul>
			<li class="zhs_hover">用户条款</li>
			<li class="zhs_hover">隐私保护</li>
			<li class="zhs_hover">资质证明</li>
			<li class="zhs_hover">联系我们</li>
		</ul>
		
		<div>
			<ul>
				<li>友情链接：</li>
				<li class="zhs_hover">智慧树</li>
				<li class="zhs_hover">智慧树幼教平台</li>
				<li class="zhs_hover">智慧树网站</li>
			</ul>
		</div>
		
		<p>
			Copyrights © 2006 - 2018 BBTREE TECHNOLOGY. All Rights Reserved.
		</p>
		<p>
			北京环宇万维科技有限公司 版权所有 京ICP备14014697号-2　京公网安备11010502027077
		</p>
		<p>
			京B2-20180109统一社会信用代码91110105790676397Y  销售食品许可证
		</p>
	</div>
</template>

<script>
	export default({
		name:'foot',
		data(){
			return{
				
			}
		}
	})
</script>

<style scoped>
	.zhs_foot{
		width: 1000px;
		margin: 0 auto;
		text-align: center;
	}
	p{
		font-size: 14px;
		margin-bottom: 9px;
	}
	.zhs_list{
		margin-top: 15px;
	}
	ul{
		list-style: none;
	    margin: 0;
	    padding: 0;
	    display: inline-block;
	    margin-bottom: 10px;
	}
	li{
		float: left;
		display: block;
		margin-left: 20px;
		height: 20px;
		line-height: 20px;
		border-right: 1px solid #e5e5e5;
		padding-right: 10px;
		color: #666;
		font-size: 14px;
	}
	li:last-child{
		border: none;
	}
	.zhs_hover:hover{
		color: #1ab469;
	}
</style>