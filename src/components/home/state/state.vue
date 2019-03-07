<template>
	<div class="zhs_state">
		<div class="zhs_list" v-for="item in stateArr">
			<div class="zhs_left">
				<div class="bor_top"></div>
				<p class="month">{{ item.month}}</p>
				<p class="year">{{ item.year }}</p>
			</div>
			<div class="zhs_right">
				<h2>{{ item.title }}</h2>
				<p class="zhs_content">{{ item.content }}</p>
				<p>
					<a :href="'#'+item.id">阅读全文</a>
				</p>
				<hr />
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name:'state',
		data(){
			return{
				stateArr:[
					{
						year:'2018',
						month:'5月',
						title:'智慧树获“2018数据驱动先锋企业奖”，数据为用户创造价值',
						content:'10月16日，以“场景赋能驱动有数”为主题的神策数据2018数据驱动大会在北京如期举行，来自全球大数据各大行业的领袖人物聚首北京，融合国际前沿技术与行业经验，深入探讨时代浪潮下的新生态、新洞察、新实践。北京环宇万维科技有限公司(智慧树)作为国内领先的幼教云平台受邀参加并获“2018数据驱动先锋企业-最佳技术平台奖”。',
						id:'001'
					},
					{
						year:'2019',
						month:'7月',
						title:'智慧树荣获DEMO创新中国“中国教育创新成长30强”',
						content:'9月7日，由“创业邦”主办，杭州市政府联合主办的“2018 创新中国总决赛暨秋季峰会”在杭州洲际酒店如期举行。经过峰会和论坛主办方严格筛选及审核，中国幼教云平台领导品牌智慧树(北京环宇万维科技有限公司)成功获颁“中国教育创新成长30强”荣誉。',
						id:'002'
					}
				]
			}
		}
	})
</script>

<style scoped>
	.zhs_left{
		width: 150px;
	}
	.zhs_right{
		width: 850px;
	}
	.zhs_left,.zhs_right{
		float: left;
	}
	h2{
		font-family: Microsoft YaHei;
	    font-weight: 400;
	    font-size: 28px;
	    color: #333;
	    margin-bottom: 20px;
	    text-align: left;
	    margin-top: 0;
	}
	a{
		text-decoration: none;
	    color: #333;
	    font-size: 18px;
	    font-family: Microsoft YaHei;
	}
	p{
		margin-bottom: 10px;
	}
	.zhs_content{
		font-size: 14px;
		margin-bottom: 40px;
	}
	.month{
		font-size: 40px;
	    height: 50px;
	    line-height: 50px;
	}
	.year{
		font-size: 18px;
    	margin-left: 20px;
	}
	.bor_top{
		border-top: 5px solid #36b976;
	    width: 82px;
	    margin-bottom: 3px;
	}
</style>