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
          <router-link active-class="active" to="/about">About</router-link>
        </li>
        <li><router-link active-class="active" to="/home">Home</router-link></li>
      </ul>
      <div class="col-md-8"><router-view /></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-active {
  color: red !important;
}
</style>