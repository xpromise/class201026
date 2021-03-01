<template>
  <div>
    <!-- 安装element插件时 el-button组件被全局注册了，所以可以使用 -->
    <el-button type="primary" @click="tip">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    tip() {
      // 安装element插件时 给Vue的原型上添加了这个方法
      this.$message({
        type: "success",
        message: "这是一段提示~",
      });
    },
  },
};
</script>

<style>
</style>
