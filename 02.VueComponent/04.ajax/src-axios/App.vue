<template>
  <div>
    <p v-if="isLoading">loading....</p>
    <p v-else>
      Most Star Repo Is <a :href="repo.html_url">{{ repo.name }}</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      isLoading: false,
      repo: {
        name: "",
        html_url: "",
      },
    };
  },
  mounted() {
    /*
      请求方式：
        C - create 创建/增 POST
        R - read 读取/查 GET
        U - update 更新/改 
          PUT    全部改
          PATCH  部分改
        D - delete 删除 DELETE

        OPTIONS 预检请求：提前检查当前请求是否允许跨域
    */
    // 发送请求之前将loading改成true
    this.isLoading = true;
    axios
      .get("https://api.github.com/search/repositories111?q=v&sort=stars")
      .then((res) => {
        const { name, html_url } = res.data.items[0];
        this.repo = {
          name,
          html_url,
        };
        // this.repo = res.data.items[0];
        this.isLoading = false;
      })
      .catch((error) => {
        console.dir(error.response.status); // 响应状态码 401(未授权) 403(禁止) 404(资源找不到) 500（服务器内部错误）
        console.dir(error.message); // 响应状态码 Network Error
        alert("网络错误");
      });
  },
};
</script>

<style>
</style>