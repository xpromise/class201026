<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 使用组件 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

// 向外默认暴露组件配置对象
export default {
  name: "App", // 给组件取一个名称（组件名称）：将来vue devtool就可以看到组件名字了
  components: { // 注册局部组件
    HelloWorld,
  },
};
</script>

<style lang='less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
