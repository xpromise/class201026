<template>
  <div>
    <el-button
      type="primary"
      @click="$message({ type: 'success', message: '这是一段提示' })"
      >el-button</el-button
    >
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
</style>
