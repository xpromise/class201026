import Vue from "vue";
import { Button, Message } from "element-ui";
// vue add element 为当前脚手架自动添加按需加载配置
// https://element.eleme.cn/#/zh-CN/component/quickstart

Vue.use(Button); // 全局注册组件

Vue.prototype.$message = Message;
