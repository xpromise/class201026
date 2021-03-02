import Vue from "vue";
import App from "./App.vue";

import router from "./router";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	// 应用router：会beforeCreate中完成router的初始化
	router,
}).$mount("#app");
