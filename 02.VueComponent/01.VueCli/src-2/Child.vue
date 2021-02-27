<template>
  <div>
    <p>child..</p>
    <button @click="add">Child的按钮</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  mounted() {
    // 子组件通过 this.$listeners 属性获取到自定义的事件
    console.log(this.$listeners);
  },
  methods: {
    add() {
      // 触发自定义事件的回调函数
      // this.$listeners.add(1, 2);

      // 触发自定义事件的方法
      this.$emit("add", 3, 4);
    },
  },
};
</script>

<style>
</style>