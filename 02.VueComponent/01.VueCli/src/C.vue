<template>
  <div>
    <p>CCCCC</p>
    <!-- :count="count" 给父组件插槽标签传递数据 -->
    <slot name="content" :count="count"/>
  </div>
</template>

<script>
export default {
  name: "C",
  data() {
    return {
      count: 1,
    };
  },
};
</script>

<style>
</style>