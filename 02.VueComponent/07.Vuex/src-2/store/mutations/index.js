export default {
	// state参数：state就是所有原状态数据
	INCREMENT(state, num) {
		state.count += num;
	},
	DECREMENT(state, num) {
		state.count -= num;
	},
};
