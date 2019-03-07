<template>
	<div>
		<div class="zhs_login_nav">
			<img src="../../assets/new_index_logo.png" alt="" />
			<span>智慧树合作伙伴运营平台</span>
		</div>
		<div class="zhs_main">
			<div class="zhs_main_content">
				<h2 style="margin-left: 40px;">登录</h2>
				<p style="margin-left: 40px;"></p>
				<div>
					<p>
						<!--<i class="el-icon-mobile-phone"></i>-->
						<input type="text" placeholder="手机号"/>
					</p>
					<p>
						<!--<i class="el-icon-view"></i>-->
						<input type="text" placeholder="密码"/>
					</p>
					<p style="font-size: 13px;color: #666;">
						<el-checkbox v-model="checked" style="margin-right: 5px;margin-top: 20px;"></el-checkbox>请确认您已阅读并同意<span class="zhs_fc">《平台使用协议》</span>
					</p>
					<p>
						<button>登陆</button>
					</p>
				</div>
			</div>
		</div>
		
		<div class="zhs_login_foot">
			<p>
				<span class="zhs_fc">智慧树官网</span>
				<span class="zhs_line"></span>
				<span class="zhs_fc">联系我们</span>
			</p>
			<p>北京环宇万维科技有限公司   ©2017 版权所有</p>
		</div>
	</div>
</template>

<script>
	export default({
		name:'login',
		data(){
			return{
				 checked: true
			}
		}
	})
</script>

<style scoped>
	.zhs_login_nav{
		width: 1000px;
		margin: 0 auto;
		height: 70px;
		line-height: 70px;
		position: relative;
	}
	.zhs_login_nav>img{
		position: absolute;
		top: 10px;
		left: 0;
		height: 50px;
	}
	.zhs_login_nav>span{
		display: inline-block;
		font-family: "\5FAE\8F6F\96C5\9ED1";
	    font-size: 22px;
	    color: #666666;
	    height: 70px;
	    line-height: 70px;
	    position: absolute;
	    top: 0;
	    left: 160px;
	}
	.zhs_main{
		height: 530px;
		background-image: url(../../assets/login_bg.dffc3b1.png);
		background-size: cover;
		position: relative;
		padding: 20px;
	}
	.zhs_main_content{
		width: 390px;
		height: 300px;
		position: absolute;
		top: 100px;
		right: 400px;
		background-color: #fff;
		border-radius: 10px;
	}
	.zhs_main_content>div{
		width: 300px;
		margin: 30px auto;
	}
	.zhs_main input{
		width: 300px;
		height: 40px;
		padding-left: 60px;
	}
	i{
		font-size: 25px;
	}
	.zhs_main button{
		margin-top: 10px;
		width: 120px;
		height: 35px;
		border-radius: 10px;
		background-color: #28d19d;
		color: #fff;
		border: none;
	}
	.zhs_line{
		display: inline-block;
		height: 14px;
		border-left: 1px solid #999;
		margin-left: 20px;
		margin-right: 20px;
	}
	.zhs_login_foot{
		text-align: center;
	}
	.zhs_login_foot>p{
		font-size: 14px;
		color: #999;
		margin: 20px;
	}
	.zhs_fc{
		color:#28d19d;
	}
</style>