import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

const vm = new Vue({
	render: (h) => h(App),
}).$mount("#app");

console.log(vm);
/*
	vm.__proto__ === Vue.prototype

	this._proto__ === VueComponent.prototype

	this.__proto__.__proto__ === Vue.prototype
*/