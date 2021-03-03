export default {
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
};
