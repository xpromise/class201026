import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";
import Message from "../views/Message";
import News from "../views/News";

// 安装/使用插件
Vue.use(VueRouter);

const router = new VueRouter({
	// 路由配置项：放置n个路由的配置
	routes: [
		{
			path: "/home", // 路由路径
			component: Home, // 路由组件
			children: [
				// 子路由
				{
					path: "/home/message", // 路由路径
					component: Message, // 路由组件
				},
				{
					path: "news", // 路由路径
					component: News, // 路由组件
				},
				{
					path: "/", // 路由路径
					redirect: "message", 
				},
			],
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
