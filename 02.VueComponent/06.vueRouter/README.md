# vue-router
- 用来开发SPA应用

- SPA应用：单页面应用
  - 整个应用只有一个完整页面
  - 点击链接不会发送请求，不会刷新
  - 只会跳转地址和局部更新组件

## 使用
- 路由配置
  - router/index.js
  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  // 安装/使用插件
  Vue.use(VueRouter);
  // 默认暴露出去
  export default new VueRouter({
    // 路由配置项：放置n个路由的配置
    routes: [],
  });
  ```
 - main.js
 ```js
 import router from './router';
 new Vue({ router, ... })
 ```   

- 提供两个组件
1. router-link 组件
  - 作用：用来路由跳转（改变路径）
  - 特点：点击链接不会发送请求，不会刷新页面
  - 选中的router-link会自动添加上两个类名
    router-link-exact-active 
    router-link-active

    https://router.vuejs.org/zh/api/#router-link-props

2. router-view 组件
  - 作用：用来显示当前路由组件
    内部会找到路由的配置项routes，根据里面的配置来匹配路由路径，加载相应的路由组件

- 组件实例对象上添加了两个属性
1. $route
  - params 
  - query 
  - path 当前路由路径

2. $router
  - history
    - push
    - replace
    - go
    - back

## 路由传参的方式
1. params
  - 配置路由
    {
      path: 'xxx/:id'
    }
  - 路由链接
    <router-link :to="/xxx/1">xxx</router-link>  
  - 子路由使用
    this.$route.params.id

2. query
  - 路由链接
    <router-link :to="/xxx?key=value">xxx</router-link>  
  - 子路由使用
    this.$route.query.key 

3. props
  将params或query参数以props方式传递到组件内
  优点：可以通过this直接使用，简单方便
  - 配置路由
    {
      props($route) {
        return {
          ...$route.query,
          ...$route.params,
        };
      },
    }
  - 子路由声明接受props
    props: ['xxx']
  - 子路由使用
    this.xxx    

4. 命名路由
  - 配置路由
    {
      name: 'xxx'
    }
  - 路由链接
    <router-link :to="{
      name: 'xxx', // 跳转到哪个命名路由
      params: {  }, // params参数
      query: {  }, // query参数
    }">xxx</router-link>    
  - 子路由使用
    this.$route.params
    this.$route.query

5. 通过router-view给显示的路由组件传递公共参数
  - 配置
      <router-view xxx="xxx"></router-view>
  - 子路由声明接受props
    props: ['xxx']
  - 子路由使用
    this.xxx   

## 路由跳转的方式
1. 路由链接跳转
  - router-link

2. 编程式导航
  - this.$router.history.push

- 如果只需要做跳转操作，用路由链接跳转更简单
  - 比如：nav导航
- 如果需要在跳转之前，做一些其他事，用编程式导航
  - 比如：登录功能

## 缓存路由组件
- keep-alive
  - include
  - exclude
  - max

- 当使用keep-alive缓存的组件会多两个生命周期函数
  - activated
  - deactivated

## 前端路由的两种模式
1. hash
特点：
  - 兼容性较好
  - 地址栏带 #（不太美观）
  - window.location.hash

2. history
特点：
  - 兼容性较差
  - 地址栏不带 #（更美观）
  - window.history