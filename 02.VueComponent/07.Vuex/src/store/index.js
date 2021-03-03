import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	// 集中存储数据的仓库（所有vuex数据）
	state: {
		count: 0,
	},
	// 一个包含n个用来间接修改数据的函数对象
	// 通常会与后端交互
	actions: {
		// store参数: commit
		increment(store) {
			// 触发mutation函数，同时传递参数
			store.commit("INCREMENT", 1);
		},
	},
	// 一个包含n个用来直接修改数据的函数对象
	// 状态一旦修改，state管理的数据也会修改，vuex数据都是响应式的，所以页面也会自动更新
	mutations: {
		// state参数：state就是所有原状态数据
		INCREMENT(state, num) {
			state.count += num;
		},
	},
});

export default store;
