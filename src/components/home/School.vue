<template>
	<div class="zhs_sch">
		<div class="zhs_sch_nav">
			<img src="../../assets/school/school.png" alt="" />
			<span>幼儿园申请入驻</span>
		</div>
		<div class="zhs_line"></div>
		<div class="zhs_login">
			<a href="#">已有账号？立即登录>></a>
		</div>
		
		<el-steps :space="200" :active="2" finish-status="success">
		  <el-step title="账号信息"></el-step>
		  <el-step title="校园信息"></el-step>
		  <el-step title="班级信息"></el-step>
		  <el-step title="完成"></el-step>
		</el-steps>
		
		<div class="zhs_info">
			<div>
			  <el-input placeholder="请输入内容" v-model="input3">
			    <template slot="prepend">Http://</template>
			  </el-input>
			</div>
		</div>
		<div class="zhs_info">
			<input class="zhs_yz" type="text" />
			<button class="zhs_btn">获取验证码</button>
		</div>
		<div class="zhs_info">
			<el-input></el-input>
		</div>
		<div class="zhs_info zhs_info_agree">
			<span>注册即视为同意 </span>
			<span style="color: #28d19d;">智慧树用户服务协议</span>
		</div>
		<div class="zhs_info">
			<button class="zhs_zhuce">注册账号</button>
		</div>
		<div class="zhs_info zhs_info_a">
			<a href="#">用户条款</a>
			<a href="#">隐私保护</a>
			<a href="#">资质证明</a>
			<a href="#">联系我们</a>
		</div>
		<div class="zhs_info_p">
			<p>© 2009 - 2018 BBtree.com. 版权所有 ICP证:京ICP备14014697号-2</p>
		</div>
	</div>
</template>

<script>
	export default({
		name:'school',
		data(){
			return{
				 input3: '',
				 input:''
			}
		}
	})
</script>

<style scoped>
	.zhs_sch_nav{
		position: relative;
	    width: 100%;
	    height: 70px;
	    background-color: #fff;
	    background-image: url(../../assets/school/data_image_png;base….png);
	    background-size: contain;
	    background-repeat: no-repeat;
	    background-position: 150px;
	}
	.zhs_sch_nav>img{
		margin: 10px auto auto 35px;
	}
	.zhs_sch_nav>span{
		display: inline-block;
		width: 250px;
		height: 30px;
		line-height: 30px;
		position: absolute;
		top: 20px;
		left: 220px;
		font-size: 20px;
		color: #666;
		text-align: center;
		border-left:1px solid #999;
	}
	.zhs_line{
		background-color: #eef4f7;
		height: 18px;
	}
	.zhs_login{
		margin: 20px 0 20px 0;
	}
	.zhs_login>a{
		font-size: 14px;
		display: inline-block;
		float: right;
		margin-right: 150px;
		color: #28d19d;
		text-decoration: none;
		font-weight: 600;
	}
	.el-steps{
		width: 800px;
		margin: 60px auto;
		position: relative;
    	left: 90px;
	}
	.zhs_info{
		width: 380px;
		margin: 0 auto;
		position: relative;
		margin-bottom: 25px;
	}
	.zhs_yz{
		background-color: #fff;
		border-radius: 4px;
    	border: 1px solid #dcdfe6;
    	height: 40px;
	    line-height: 40px;
	    outline: 0;
	    padding: 0 15px;	
	    width: 280px;
	}
	.zhs_btn{
		width: 112px;
	    padding: 12px 0;
	    text-align: center;
        color: #fff;
	    background-color: #28d19d;
	    border-color: #28d19d;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        position: absolute;
        top: 0;
        right: 0;
	}
	.zhs_info_agree{
		text-align: center;
		font-size: 14px;
	}
	.zhs_zhuce{
		width: 100%;
	    padding: 12px 0;
	    text-align: center;
        color: #fff;
	    background-color: #28d19d;
	    border-color: #28d19d;
        cursor: pointer;
        border: none;
        border-radius: 5px;
	}
	.zhs_info_a{
		text-align: center;
		margin-top: 80px;
	}
	.zhs_info_a>a{
		font-size: 14px;
		color: #666;
		display: inline-block;
		width: 80px;
		border-right:1px solid #dcdfe6;
		text-align: center;
	}
	.zhs_info_a>a:last-child{
		border: none;
	}
	.zhs_info_a>a:hover{
		color: #28d19d;
	}
	.zhs_info_p>p{
		text-align: center;
		font-size: 14px;
		color: #333;
	}
	.is-success{
		color: #28d19d !important;
	}
</style>