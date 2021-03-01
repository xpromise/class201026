import Vue from "vue";
import "./plugins/element.js";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
