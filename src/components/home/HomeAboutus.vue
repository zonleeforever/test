<template>
	<div class="zhs_about">
		<div class="zhs_aboutimg"></div>
		<div class="zhs_aboutinfo">
			<h1>成为每一家幼儿园和每一位家长都在用的幼教云平台</h1>
			<ul>
				<li>
					<img src="../../assets/hj_01.jpg"/>
				</li>
				<li>
					<img src="../../assets/hj_02.jpg"/>
				</li>
				<li>
					<img src="../../assets/hj_03.jpg"/>
				</li>
				<li>
					<img src="../../assets/hj_04.jpg"/>
				</li>
				<li>
					<img src="../../assets/hj_05.jpg"/>
				</li>
				<li>
					<img src="../../assets/hj_06.jpg"/>
				</li>
			</ul>
		</div>
		
		<div class="zhs_aboutzhs">
			<h1>关于智慧树</h1>
			<p>智慧树幼教云平台是由北京环宇万维科技有限公司开发，以幼儿园园长、老师、家长为主要服务对象，专注于打造家园共育一体化服务平台。</p>
			<p>借助云计算平台和移动互联网技术，智慧树通过移动端将幼儿园园长、教师与家长相连接，通过移动端内的幼教管理和沟通工具，帮助幼儿园园长与老师实现智能管理和高效教学，帮助家长跨时空全时掌握幼儿在园的学习生活动态，实现并构建教师与家长实时沟通、开放分享的家校互动云平台。</p>
			<p>智慧树幼教云平台于2014年4月正式上线，已广泛应用于全国范围内的12万所幼儿园，总用户量3000万人，每月在线活跃用户1100万人。今天的智慧树，已在上海、广州、南京、成都、太原、武汉、沈阳等32个省市拥有了分支机构。</p>
			<p>专业、高效的智慧树团队中，多数核心研发成员毕业于北大，北航，北邮，哈工大，武大等院校，曾服务于百度，阿里，腾讯，小米，360，京东等知名互联网公司，60%以上具有十年以上的移动互联网研发与应用经验，除精通传统教育模式的投资管理团队以外，智慧树中产品运营团队均来自互联网行业。</p>
			<p>2017年的智慧树，希望以产品与服务的持续创新推动中国幼教互动产业的发展，成为每一家幼儿园和每一位家长都在用的幼教云平台。</p>
		</div>
		<div class="zhs_shiming">
			<p>使命：让孩子更好地成长</p>
			<p>愿景：成为孩子成长过程中最值得信赖的企业</p>
			<p>价值观：简单、正直、效率、协作</p>
		</div>
		<div class="zhs_dashiji">
			<h1>智慧树大事记</h1>
			<img src="../../assets/about_cents1.jpg" alt="" />
		</div>
	</div>
</template>

<script>
	export default({
		name:'homeaboutus',
		data(){
			return{
				
			}
		}
	})
</script>

<style scoped>
	.zhs_aboutimg{
		background-image: url(../../assets/about_logo.jpg);
		height: 420px;
		background-repeat: no-repeat;
	}
	.zhs_aboutinfo,.zhs_aboutzhs,.zhs_shiming{
		width: 1050px;
		margin: 0 auto;
	}
	h1{
		font-family: Microsoft YaHei;
	    font-size: 40px;
	    color: #333;
	    text-align: center;
	    font-weight: 400;
	}
	ul{
		width: 100%;
		list-style: none;
		position: relative;
	    overflow: hidden;
	    zoom: 1;
	    margin: 0 4px;
	}
	li{
		display: inline;
		float: left;
		margin: 0;
		padding: 0;
	}
	img{
		border: none;
	}
	.zhs_aboutzhs>p{
		text-align: left;
	    color: #666;
	    font-size: 14px;
	    margin-bottom: 30px;
	}
	.zhs_shiming>p{
		line-height: 2;
		color: #666;
	}
	.zhs_dashiji{
		width: 1050px;
		margin: 30px auto;
		text-align: center;
	}
</style>