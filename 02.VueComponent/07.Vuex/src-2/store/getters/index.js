export default {
	countType(state) {
		return (state.count & 1) === 1 ? "奇数" : "偶数";
	},
};
