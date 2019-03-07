import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import HomeIndex from '@/components/home/HomeIndex'
import HomeTree from '@/components/home/HomeTree'
import HomeTeamwork from '@/components/home/HomeTeamwork'
import HomeTreestate from '@/components/home/HomeTreestate'
import HomeAboutus from '@/components/home/HomeAboutus'
import Joinus from '@/components/home/Joinus'
import JoinusContent from '@/components/home/joinus/Jcontent'
import HomeLogin from '@/components/home/HomeLogin'
import School from '@/components/home/School'
import Login from '@/components/home/Login'

import Mtbg from '@/components/home/state/mtbg'
import Qydt from '@/components/home/state/qydt'

Vue.use(ElementUI)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/homeindex',
 			children:[
	 			{
	 				path: 'homeindex',
		      name: 'homeindex',
		      component: HomeIndex
	 			},
	 			{
	 				path: 'hometeamwork',
		      name: 'hometeamwork',
		      component: HomeTeamwork
	 			},
	 			{
	 				path: 'hometreestate',
		      name: 'hometreestate',
		      component: HomeTreestate,
		      redirect:'/hometreestate/qydt',
		      children:[
		      		{
				 				path: 'qydt',
					      name: 'qydt',
					      component: Qydt
				 			},
				 			{
				 				path: 'mtbg',
					      name: 'mtbg',
					      component: Mtbg
				 			}
		      ]
	 			},
	 			{
	 				path: 'homeaboutus',
		      name: 'homeaboutus',
		      component: HomeAboutus
	 			},
	 			{
	 				path: 'homelogin',
		      name: 'homelogin',
		      component: HomeLogin
	 			}
//	 			,
//	 			{
//	 				path: 'homeschool',
//		      name: 'homeschool',
//		      component: HomeSchool
//	 			}
 			]
    },{
	 			path: '/joinus',
		    name: 'joinus',
		    component: Joinus,
		    children:[
		    	{
		    		path: 'jcontent',
		      	name: 'jcontent',
		      	component: JoinusContent
		    	}
		    ]
    },{
    		path: '/school',
		    name: 'school',
		    component: School
    },{
    		path: '/login',
		    name: 'login',
		    component: Login
    }
  ]
})
