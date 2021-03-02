<template>
  <ul>
    <li v-for="(value, key) in detail" :key="key">{{ key }} - {{ value }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "name", "age", "sex"],
  data() {
    return {
      details: [
        { id: 1, title: "title001", content: "detail001" },
        { id: 3, title: "title003", content: "detail003" },
        { id: 5, title: "title005", content: "detail005" },
      ],
      detail: {},
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.details = [
  //       { id: 1, title: "title001", content: "detail001" },
  //       { id: 3, title: "title003", content: "detail003" },
  //       { id: 5, title: "title005", content: "detail005" },
  //     ];
  //     // const id = +this.$route.params.id;
  //     // this.detail = this.details.find((detail) => detail.id === id);
  //   }, 2000);
  // },
  watch: {
    /*
      默认情况下：
        监视的数据一定要发生变化才会触发，所以通常情况下数据一上来没有变化，是不会触发的
        解决：immediate: true, // 一上来触发一次
        监视数据是浅度监视，只监视第一层属性
        解决：deep: true, // 深度监视
    */
    $route: {
      //
      handler(newVal) {
        const id = +newVal.params.id;
        this.detail = this.details.find((detail) => detail.id === id);
      },
      immediate: true, // 一上来触发一次
      // deep: true, // 深度监视
    },
  },
};
</script>

<style>
</style>