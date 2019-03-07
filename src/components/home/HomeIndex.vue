<template>
	<div>
		<el-carousel :interval="5000" arrow="always" height="570px">
			<el-carousel-item v-for="(item,index) in imgArr" :key="index">
				<img :src="item.src" class="img" alt="" />
			</el-carousel-item>
		</el-carousel>

		<el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content bg-purple bg1"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple bg2"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple bg3"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple bg4"></div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default({
		name: 'homeindex',
		data() {
			return {
				imgArr: [{
						src: require('../../assets/bg/bg1.jpg'),
						val: 1
					},
					{
						src: require('../../assets/bg/bg2.jpg'),
						val: 2
					},
					{
						src: require('../../assets/bg/bg3.png'),
						val: 3
					},
					{
						src: require('../../assets/bg/bg4.jpg'),
						val: 4
					}
				]
			}
		}
	})
</script>

<style scoped>
	.img {
		width: 100%;
		height: 100%;
	}
	
	.el-row {
		padding-left: 5px;
		padding-right: 5px;
		margin-left: 0 !important;
		margin-right: 0 !important;
		margin-top: 10px;
		margin-bottom: 40px;
		height: 200px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
		height: 100%;
	}
	
	.bg-purple {
		background: #fff;
		height: 100%;
		position: relative;
   		border: 1px solid #e5e5e5;
   		background-size: cover;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.bg1{
		background-image: url(../../assets/option/01.png);
	}
	.bg2{
		background-image: url(../../assets/option/02.png);
	}
	.bg3{
		background-image: url(../../assets/option/03.png);
	}
	.bg4{
		background-image: url(../../assets/option/04.png);
	}
</style>