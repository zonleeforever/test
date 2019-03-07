<template>
	<div class="zhs_jcontent">
		<h3>职位搜索</h3>		
		<el-form ref="form" :model="form" label-width="80px">
		  <el-form-item label="职位类别:">
		    <el-select v-model="form.region" placeholder="请选择">
		      <el-option label="计算机" value="计算机"></el-option>
		      <el-option label="互联网" value="互联网"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="聘用类别:">
		    <el-select v-model="form.region1" placeholder="请选择">
		      <el-option label="正式" value="正式"></el-option>
		      <el-option label="实习" value="实习"></el-option>
		    </el-select>
		  </el-form-item>
		  
		  <el-form-item label="工作时间:">
		    <el-radio-group v-model="form.resource">
		      <el-radio label="全部"></el-radio>
		      <el-radio label="全职"></el-radio>
		      <el-radio label="兼职"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button type="primary">搜索职位</el-button>
		  </el-form-item>
		</el-form>
		
		
		<el-table
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	      prop="zhiwei"
	      label="职位名称"
	      width="400">
	    </el-table-column>
	    <el-table-column
	      prop="num"
	      label="招聘人数"
	      width="150">
	    </el-table-column>
	     <el-table-column
	      prop="address"
	      label="工作地点"
	      width="360">
	    </el-table-column>
	    <el-table-column
	      prop="date"
	      label="发布日期">
	    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
	export default({
		name:'jcontent',
		data(){
			return{
				form: {
		          region: '',
		          region1: '',
		          resource: ''
		        },
		        tableData: [{
		          date: '2016-05-02',
		          zhiwei: '广告联盟媒介拓展经理-北京-00312',
		          address: '上海市普陀区金沙江路 1518 弄',
		          num:8
		        }, {
		          date: '2016-05-04',
		          zhiwei: '广告联盟商务经理-北京-00311	',
		          address: '上海市普陀区金沙江路 1517 弄',
		          num:10
		        }, {
		          date: '2016-05-01',
		          zhiwei: 'APP广告销售经理/总监（品牌类+API...',
		          address: '上海市普陀区金沙江路 1519 弄',
		          num:2
		        }, {
		          date: '2016-05-03',
		          zhiwei: 'Java开发经理-北京-00299',
		          address: '上海市普陀区金沙江路 1516 弄',
		          num:7
		        }]
			}
		},
		props:['routid']
	})
</script>

<style>
	.zhs_jcontent{
		width: 1000px;
		margin: 0 auto;
	}
	h3{
		margin-top: 40px;
	}
	.el-form-item__label{
		margin-right: 50px;
	}
	.el-input__inner{
		width: 300px;
	}
</style>