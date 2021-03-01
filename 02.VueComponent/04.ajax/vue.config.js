module.exports = {
	devServer: {
		// proxy: "http://localhost:9527", // 目标服务器地址
		proxy: {
			"^/api": { // 处理以/api开头的请求
				target: "http://localhost:9527", // 目标服务器地址
				pathRewrite: { // 路径重写
					"^/api": "", // 将 ^/api 替换为 空
				},
				changeOrigin: true, // 改变host
			},
		},
	},
};
