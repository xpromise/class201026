<template>
  <div class="container">
    <div class="row"><h1>Vue Router</h1></div>
    <div class="row">
      <ul class="col-md-4 nav nav-pills nav-stacked">
        <!-- 
          vue-router一共全局注册两个组件：
          1. router-link 组件
            - 作用：用来路由跳转（改变路径）
            - 特点：点击链接不会发送请求，不会刷新页面
            - 选中的router-link会自动添加上两个类名
              router-link-exact-active 
              router-link-active

              https://router.vuejs.org/zh/api/#router-link-props

          2. router-view 组件
            - 作用：用来显示当前路由组件
              内部会找到路由的配置项routes，根据里面的配置来匹配路由路径，加载相应的路由组件
         -->
        <li>
          <!-- <router-link active-class="active" to="/about">About</router-link> -->
          <router-link to="/about">About</router-link>
        </li>
        <li><router-link to="/home">Home</router-link></li>
      </ul>
      <div class="col-md-8">
        <keep-alive include="Home,About"> <router-view /></keep-alive>
        <!-- <keep-alive exclude="Home"> <router-view /></keep-alive> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    console.log("App beforeCreate");
  },
  created() {
    console.log("App created");
  },
  beforeMount() {
    console.log("App beforeMount");
  },
  mounted() {
    console.log("App mounted");
  },
};
</script>

<style scoped>
.router-link-active {
  color: red !important;
}
</style>