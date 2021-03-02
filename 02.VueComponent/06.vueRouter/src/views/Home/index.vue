<template>
  <div>
    <h2>Home...</h2>
    <ul class="nav nav-tab">
      <li><router-link to="/home/message">message</router-link></li>
      <li><router-link to="/home/news">news</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* 
  scoped
    作用：让样式只对当前组件生效
    原理：给当前组件所有标签添加一个自定义属性 data-v-xxx
    所有样式选择器都会加上属性选择器 [data-v-xxx]
    所以样式就只会对当前组件生效
*/
.router-link-active {
  color: green !important;
}
</style>