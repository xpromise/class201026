<template>
  <div>
    <p>App...</p>
    <button @click="send">App的按钮</button>
    <Child />
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "App",
  components: {
    Child,
  },
  mounted() {
    this.$globalEventBus.$on("ChildToApp", (msg) => {
      console.log("app", msg);
    });
  },
  methods: {
    send() {
      this.$globalEventBus.$emit("AppToChild", "hello child~~");
    },
  },
};
</script>

<style>
</style>