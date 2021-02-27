<template>
  <div>
    <p>{{ num }}</p>
    <!-- 绑定自定义事件, 凡是给组件绑定的事件都是自定义事件 -->
    <!-- <Child @add="add" @click="add" /> -->
    <Child ref="child" />
  </div>
</template>

<script>
import Child from "./Child";
/*
  自定义事件：可以用来组件间通信（子 --> 父）
    注意：给某个组件绑定，就只有这个组件可以触发
    使用：
      1. 绑定事件
        - <Child @事件名称="事件回调函数" />

        - <Child ref="xxx" /> （通过this.$listeners获取不到）
          mounted() {
            this.$refs.xxx.$on(事件名称, 事件回调函数)
          }
          beforeDestroy() {
            // 解绑事件
            this.$refs.xxx.$off(事件名称, 事件回调函数);
          },

      2. 触发事件
        - this.$emit(事件名称, 参数1, 参数2...)
        - this.$listeners.事件名称(参数1, 参数2...)

        组件实例对象上的方法：
          $on
          $once
          $off
          $emit
*/

export default {
  name: "App",
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    // 绑定持续自定义事件
    this.$refs.child.$on("add", this.add);
    // 一个事件可以绑定n个回调函数
    // this.$refs.child.$on("add", () => {
    //   console.log(222);
    // });
    // 绑定一次性自定义事件
    // this.$refs.child.$once("add", this.add);
    // console.log(this.$listeners);
    // this.$emit("add");
  },
  beforeDestroy() {
    // 解绑事件
    // this.$refs.child.$off("add", this.add);
  },
  methods: {
    add(x, y) {
      console.log(111);
      this.num = this.num + x + y;
    },
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>