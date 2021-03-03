<template>
  <div>
    <p>
      click {{ count }} times, count is
      {{ countType }}
    </p>
    <button @click="INCREMENT(1)">+</button>
    <button @click="DECREMENT(1)">-</button>
    <button @click="incrementIfOdd(1)">increment if odd</button>
    <button @click="incrementAsync(1)">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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

    mapState, 映射state：将vuex中state数据映射到组件实例对象上
      将来可以直接通过this使用

      mapState(['count']) 将vuex中state中count数据映射到计算属性中

        {
          count() {
            return this.$store.state.count
          }
        }

    mapGetters, 映射getters
    mapActions,  映射actions
    mapMutations 映射mutations

    - redux
      connect(mapStateToProps, mapDispatchToProps)(App)
      connect(() => {}, {})(App)
*/
export default {
  name: "App",
  mounted() {
    console.log(this.$store);
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["countType"]),
  },
  methods: {
    ...mapActions(["incrementIfOdd", "incrementAsync"]),
    ...mapMutations(["INCREMENT", "DECREMENT"]),

    // increment() {
    //   // 触发mutations函数
    //   // this.$store.commit("INCREMENT", 1);
    //   this.INCREMENT(1);
    // },
    // decrement() {
    //   // this.$store.commit("DECREMENT", 1);
    //   this.DECREMENT(1);
    // },
    // incrementIfOdd() {
    //   // this.$store.dispatch("incrementIfOdd", 1);
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync", 1);
    // },
  },
};
</script>

<style>
</style>