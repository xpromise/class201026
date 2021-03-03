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
      this.$store.state 读取state数据
      this.$store.getters 读取getters数据
    2. 写
      this.$store.dispatch 触发action函数
      this.$store.commit 触发mutation函数
        传参只有一个参数

    this上多一个属性$store
*/
export default {
  name: "App",
  mounted() {
    console.log(this.$store);
  },
  methods: {
    increment() {
      // 触发mutations函数
      this.$store.commit("INCREMENT", 1);
    },
    decrement() {
      // this.$store.dispatch("decrement");
      this.$store.commit("DECREMENT", 1);
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd", 1);
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync", 1);
    },
  },
};
</script>

<style>
</style>