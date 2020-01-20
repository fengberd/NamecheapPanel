import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/Home.vue'
import DomainManageView from './views/DomainManage.vue'

Vue.use(Router);

let router=new Router(
{
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', component: HomeView },
		{ path: '/domain/:domain', component: DomainManageView },
		
		{ path: '*', redirect: '/' }
	]
});

router.beforeEach((to,from,next)=>
{
	next();
});

export default router;
