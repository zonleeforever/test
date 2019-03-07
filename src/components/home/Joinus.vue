<template>
	<div class="zhs_jus">
		<div class="zhs_jus_nav">
			<div class="zhs_jus_head">
				<img src="../../assets/us/logo.gif" alt="" />
				<span @click="setid1">社会招聘</span>
				<span @click="setid2">校园招聘</span>
				<span @click="setid3">实习生招聘</span>
			</div>
		</div>
		<div class="zhs_jus_img"></div>
		
		<Jcontent :routid="routid"/>
		
		<div class="zhs_jus_foot">
			<div class="zhs_jus_link">
				<a href="#">智慧树</a>
				<a href="#">智慧树幼教平台</a>
				<a href="#">智慧树网站</a>
			</div>
			<p>
				Copyrights © 2006 - 2017 FLOW TECHNOLOGY. All Rights Reserved. 北京环宇万维科技有限公司 版权所有 京ICP备14014697号-2　京公网安备11010502027077 Powered 
			</p>
			<p>
				By OurATS
			</p>
		</div>
		
	</div>
</template>

<script>
	import Jcontent from './joinus/Jcontent'
	export default({
		name:'homejoinus',
		data(){
			return{
				routid:1
			}
		},
		components:{
			Jcontent
		},
		methods:{
			setid1(){
				this.routid = 1
			},
			setid2(){
				this.routid = 2
			},
			setid3(){
				this.routid = 3
			}
		}
	})
</script>

<style scoped>
	.zhs_jus_nav{
		height: 60px;
		background-image: url(../../assets/us/tab_bg3.png);
		background-size: cover;
	}
	.zhs_jus_head{
		width: 1000px;
		margin: 0 auto;
		height: 60px;
	}
	.zhs_jus_head>img{
		height: 60px;
		vertical-align: middle;
		float: left;
		height: 45px;
		margin-top: 7.5px;
		margin-right: 80px;
	}
	.zhs_jus_head>span{
		display: inline-block;
		height: 60px;
		width: 172px;
		text-align: center;
		float: left;
		line-height: 60px;
		font-size: 18px;
		color: #fff;
		cursor: pointer;
	}
	.zhs_jus_head>span:hover{
		background-color: #fff;
		color: #333;
	}
	.zhs_jus_img{
		height: 400px;
		background-image: url(../../assets/us/social_banner.jpg);
		background-size: cover;
	}
	.zhs_jus_foot{
		height: 140px;
		margin-top: 30px;
		padding-top: 30px;
    	background-color: #f6f6f6;
    	border: 1px solid #f6f6f6;
	}
	.zhs_jus_link{
		text-align: center;
	}
	.zhs_jus_link>a{
		display: inline-block;
		width: 120px;
		border-right: 1px solid #333;
		font-size: 10px;
		text-decoration: none;
		color: #333;
	}
	.zhs_jus_foot>p{
		font-size: 13px;
		text-align: center;
		margin-top: 10px;
	}
</style>