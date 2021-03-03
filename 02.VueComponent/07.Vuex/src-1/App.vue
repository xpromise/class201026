<template>
  <div>
    <p>
      click {{ $store.state.count }} times, count is
      {{ $store.getters.countType }}
    </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
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
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
</style>