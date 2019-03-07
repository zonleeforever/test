<template>
	<div class="zhs_head">
		<div class="zhs_headContent">
			<span class="zhs_logo" title="智慧树丨中国领先的幼教云平台"></span>
			<ul>
				<router-link tag="li" :to="{name:'homeindex'}" v-bind:class="head_li">
					<span @click="hide">首页</span>
				</router-link>
				<!--<router-link tag="li" to="hometree">智慧树</router-link>-->
				<li class="head_li">
					<span @click="show">智慧树</span>
					<Menu :title="zhsArr" :isshow="isShow"/>
				</li>
				
				<router-link tag="li" :to="{name:'hometeamwork'}" v-bind:class="head_li">
					<span @click="hide">智慧树合作</span>
				</router-link>
				<router-link tag="li" :to="{name:'hometreestate'}" v-bind:class="head_li">
					<span @click="hide">智慧树动态</span>
				</router-link>
				<router-link tag="li" :to="{name:'homeaboutus'}" v-bind:class="head_li">
					<span @click="hide">关于我们</span>
				</router-link>
				<li>
					<router-link tag="a" target="_blank" :to="{name:'joinus'}" v-bind:class="head_li">
						<span @click="hide">加入我们</span>
					</router-link>
				</li>
				<!--<router-link tag="li" to="homelogin" v-bind:class="head_li">
					<span>用户登陆</span>
				</router-link>-->
				<li class="head_li">
					<span @click="show_">用户登陆</span>
					<Menu :title="loginArr" :isshow="isShow_"/>
				</li>
				<li>
					<router-link tag="a" target="_blank" :to="{name:'school'}" v-bind:class="head_li">
						<span @click="hide">幼儿园申请入住</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Menu from "./home/drop/Menu"
	export default({
		name:'heads',
		data(){
			return{
				head_li:'head_li',
				zhsArr:[
					{
						title:"智慧树下载",
						id:1
					},
					{
						title:"了解智慧树",
						id:1
					}
				],
				loginArr:[
					{
						title:"代理商登陆",
						id:2
					},
					{
						title:"园长登陆",
						id:2
					},
					{
						title:"宝宝视频家长登陆",
						id:2
					}
				],
				isShow:false,
				isShow_:false
			}
		},
		components:{
			Menu
		},
		methods:{
			show(){
				this.isShow = !this.isShow
			},
			show_(){
				this.isShow_ = !this.isShow_
			},
			hide(){
				this.isShow = false
				this.isShow_ = false
			}
		}
	})
</script>

<style scoped>
	.zhs_head{
		text-align: center;height: 100px;line-height: 100px;
	}
	.zhs_headContent{
		width: 1000px;
		margin: 0 auto;
	}
	.zhs_logo{
		display: inline-block;
		width: 134px;
		height: 55px;
		background-image: url(../assets/new_index_logo.png);
		background-size: cover;
		float: left;
		margin-top: 20px;
		margin-right: 20px;
	}
	ul{
		list-style: none;
	    margin: 0;
	    padding: 0;
	    float: left;
	}
	li{
		float: left;
		display: block;
		margin-left: 20px;
		margin-top: 40px;
		height: 25px;
		line-height: 25px;
		border-right: 1px solid #e5e5e5;
		padding-right: 10px;
		color: #666;
		position: relative;
	}
	li:last-child{
		border: none;
	}
	.head_li>span:hover{
		color: #1ab469;
	}
	.router-link-exact-active{
		color: #1ab469;
	}
	a{
		text-decoration: none;
		color: #666;
	}
</style>