import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";

// 安装/使用插件
Vue.use(VueRouter);

const router = new VueRouter({
	// 路由配置项：放置n个路由的配置
	routes: [
		{
			path: "/home", // 路由路径
			component: Home, // 路由组件
		},
		{
			path: "/about", // 路由路径
			component: About, // 路由组件
		},
		{
			path: "*",
			redirect: "/home", // 重定向
		},
	],
});

// 默认暴露出去
export default router;
