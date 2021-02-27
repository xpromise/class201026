# day03

## 插件

- 扩展 Vue 的功能

```js
// 定义插件
// 方式一
function MyPlugin(Vue) {}
// 方式二
const MyPlugin = {
	install: function (Vue) {},
};

// 使用插件
Vue.use(MyPlugin);
```

## 组件

```js
// 定义组件
const Component = Vue.extend(组件配置对象);

// 注册局部组件
{
  components: {
    Component: Component,
    Component: 组件的配置对象,
  }
}

// 注册全局组件
Vue.component(组件名称, Component);
Vue.component(组件名称, 组件的配置对象);

// 使用组件
<组件名称 />
```

## 脚手架

- 安装包

  - npm i @vue/cli -g

- 创建脚手架

  - vue create xxx

- 启动开发环境

  - npm run serve

- 启动生产环境

  - npm run build

- 修改脚手架配置
  - vue.config.js

## render 方法

```js
import Vue from "vue"; --> vun.runtime.esm.js
vun.runtime.esm.js 只包含运行时版本（不具备编译模板能力）
通过render方法，就能具备编译模板能力

new Vue({
  render: h => h(App)
}).$mount("#app");
```

## props

- 用于父子组件通信（传递动态数据）

```js
// 父组件给子组件设置标签属性
<Child :key="value" />

// 子组件需要声明接受
{
  props: ['key'],
  props: {
    key: Number
  },
  props: {
    key: {
      type: Number,
      required: true, // 必传参数
    }
  }
}

// 子组件使用
this.xxx
```

- 父 --> 子
  - 直接传递普通数据（非函数数据）
  - 子组件声明接受可以直接使用
  - 注意：props 通信数据是只读的，不可直接修改（数据源在哪，更新数据的方法就在哪）
- 子 --> 父
  - 父组件给子组件传递函数数据
  - 子组件通过调用函数，来修改父组件数据
