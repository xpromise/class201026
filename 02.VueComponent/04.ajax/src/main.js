import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
	render: (h) => h(App),
}).$mount("#app");
