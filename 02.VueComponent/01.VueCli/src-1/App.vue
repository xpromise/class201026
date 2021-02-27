<template>
  <!-- 
    写html：组件页面结构 
    要求必须有一个根标签
  -->
  <div>
    <!-- 使用组件 -->
    <TestComponent />
    <TestComponent></TestComponent>
    <test-component />
    <test-component></test-component>
    
    <p class="title">{{ num }}</p>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
// 引入其他组件
import TestComponent from "./views/TestComponent";
// 写js代码：组件配置对象
export default {
  name: "App", // 组件名称：在vue调试工具显示
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    handleClick() {
      this.num++;
    },
  },
  // 注册局部组件
  components: {
    TestComponent,
  },
};
</script>

<style lang="less">
// 写css
.title {
  font-size: 30px;
  color: yellowgreen;
}
</style>