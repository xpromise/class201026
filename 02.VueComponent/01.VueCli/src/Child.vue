<template>
  <div>
    <p>child..</p>
    <button @click="$globalEventBus.$emit('ChildToApp', 'hello app')">
      child按钮
    </button>
  </div>
</template>

<script>
export default {
  name: "Child",
  mounted() {
    // 通过 $globalEventBus（全局事件总线）对象来绑定事件
    this.$globalEventBus.$on("AppToChild", (msg) => {
      console.log("child", msg);
    });
  },
};
</script>

<style>
</style>