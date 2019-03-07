<template>
	<div>
		<div class="zhs_teamwork"></div>
		<div class="zhs_h">
			<h1>至强渠道 创新共赢</h1>
		</div>
		<div class="zhs_icon"> 
			<div class="zhs_i1">
				<div class="zhs_content">
					<h3>更高的市场渗透率</h3>
					<p>深入全国32省，一体化产品体验开拓出不可比拟的市场渗透力</p>
				</div>
			</div>
			<div class="zhs_i2">
				<div class="zhs_content">
					<h3>更强的运营保障力</h3>
					<p>专设客户服务保障机构，全程支持系统安装应用，让您全程无忧</p>
				</div>
			</div>
			<div class="zhs_i3">
				<div class="zhs_content">
					<h3>更专业的技术团队</h3>
					<p>超半数专业技术研发队伍打造稳定扎实的高效体系</p>
				</div>
			</div>
			<div class="zhs_i4">
				<div class="zhs_content">
					<h3>更健康的合作模式</h3>
					<p>园所安装零投入，无需任何硬件设备投资与成本增加</p>
				</div>
			</div>
		</div>
		
		<div class="zhs_h">
			<h1>合作伙伴热情征集中</h1>
			<p>如果您愿与智慧树并肩奋斗，请留言至信箱，我们的工作人员会在24小时内联系您</p>
			<a href="mailto:hz@bbtree.com">hz@bbtree.com</a>
		</div>
		
		<div class="zhs_scan">
			<img src="../../assets/code_crm.jpg" alt="" />
		</div>
	</div>
</template>

<script>
	export default({
		name:'hometeamwork',
		data(){
			return{
				
			}
		}
	})
</script>

<style scoped>
	.zhs_teamwork{
		height: 570px;
		background-image: url(../../assets/hezuo_logo.jpg);
	}
	.zhs_h{
		margin-top: 30px;
		text-align: center;
	}
	.zhs_h>p{
		font-size: 18px;
	    color: #999;
	    font-weight: 700;
	    margin-bottom: 25px;
	}
	.zhs_h a {
	    font-size: 24px;
	    color: #1ab469;
	    font-weight: 400;
	    font-family: Microsoft YaHei;
	    text-decoration: none;
	}
	h1{
		text-align: center;
	}
	.zhs_icon{
		width: 1000px;
		height: 400px;
		margin: 0 auto;
	}
	.zhs_icon>div{
		width: 50%;
		height: 50%;
		float: left;
		background-repeat: no-repeat;
		background-position:40px center ;
	}
	.zhs_i1{
		background-image: url(../../assets/hz/hz_01.jpg);
	}
	.zhs_i2{
		background-image: url(../../assets/hz/hz_02.jpg);
	}
	.zhs_i3{
		background-image: url(../../assets/hz/hz_03.jpg);
	}
	.zhs_i4{
		background-image: url(../../assets/hz/hz_04.jpg);
	}
	.zhs_content{
		margin-left: 180px;
		margin-top: 50px;
	}
	.zhs_scan>img{
		margin: 40px auto;
    	display: block;
	}
</style>