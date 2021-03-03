import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	// 集中存储数据的仓库（所有vuex数据）
	state: {
		count: 0,
	},
	// 存储只读的计算属性数据
	getters: {
		countType(state) {
			return (state.count & 1) === 1 ? "奇数" : "偶数";
		},
	},
	// 一个包含n个用来间接修改数据的函数对象
	// 通常会与后端交互
	actions: {
		// store参数: commit state
		increment(store) {
			// 触发mutation函数，同时传递参数
			store.commit("INCREMENT", 1);
		},
		decrement({ commit }) {
			commit("DECREMENT", 1);
		},
		incrementIfOdd({ commit, state }) {
			// if (state.count % 2 === 0) return;
			// commit("INCREMENT", 1);

			// if (state.count % 2 === 1) {
			// 	commit('INCREMENT', 1);
			// }

			// state.count % 2 === 1 && commit("INCREMENT", 1);

			if ((state.count & 1) === 0) return;
			commit("INCREMENT", 1);
		},
		incrementAsync({ commit }) {
			setTimeout(() => {
				commit("INCREMENT", 1);
			}, 1000);
		},
	},
	// 一个包含n个用来直接修改数据的函数对象
	// 状态一旦修改，state管理的数据也会修改，vuex数据都是响应式的，所以页面也会自动更新
	mutations: {
		// state参数：state就是所有原状态数据
		INCREMENT(state, num) {
			state.count += num;
		},
		DECREMENT(state, num) {
			state.count -= num;
		},
	},
});

export default store;
