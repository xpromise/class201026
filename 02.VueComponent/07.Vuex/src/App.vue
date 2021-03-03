<template>
  <div>
    <p>click {{ $store.state.count }} times, count is xxx</p>
    <button @click="increment">+</button>
    <button>-</button>
    <button>increment if odd</button>
    <button>increment async</button>
  </div>
</template>

<script>
/*
  组件操作vuex
    1. 读
    2. 写

    this上多一个属性$store
*/
export default {
  name: "App",
  mounted() {
    console.log(this.$store);
  },
  methods: {
    increment() {
      // 触发vuex更新 --> 触发action函数 --> dispatch
      this.$store.dispatch('increment');
    }
  }
};
</script>

<style>
</style>