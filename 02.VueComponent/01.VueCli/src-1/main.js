/*
  引入App组件，渲染到页面上
*/
// 方案一
// import Vue from "vue/dist/vue.esm.js";

// 方案二
import Vue from "vue";
// 是webpack extendsions功能配置了
import App from "./App";

// 方案一：
// 还需要在index.html中使用App组件
// new Vue({
// 	el: "#app",
// 	components: {
// 		App,
// 	},
// });

// 方案二
// new Vue({
// 	el: "#app",
// 	render: (h) => h(App),
// });

// const vm = new Vue({
// 	render: (h) => h(App),
// });
// vm.$mount("#app");

// 关闭提示
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");

/*
  当我们 import Vue from "vue"; 引入Vue文件的版本是 vue.runtime.esm.js
    vue.runtime.esm.js 这个版本只包含运行时版，没有编译模板能力
    所以，如果需要编译模板能力，需要引入完整版的vue.esm.js

    通过render方法去渲染App组件，内部提供编译模板能力
      整体代码量更少，体积更小
*/
