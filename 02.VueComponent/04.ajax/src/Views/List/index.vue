<template>
  <div>
    <h2 v-if="isShowText">请输入搜素内容</h2>
    <h2 v-else-if="isLoading">loading...</h2>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      isShowText: true, // 决定初始化文字显示/隐藏
      isLoading: false, // 决定loading显示/隐藏
      users: [], // 用户列表数据
    };
  },
  mounted() {
    this.$bus.$on("sendSearchName", this.search);
  },
  methods: {
    search(searchName) {
      // console.log(searchName);
      // 切换为loading状态
      this.isShowText = false;
      this.isLoading = true;
      // 发送请求
      axios
        // .get(`https://api.github.com/search/users?q=${searchName}`)
        // .get(`http://localhost:9527/search/users?q=${searchName}`)
        // .get(`http://localhost:8080/search/users?q=${searchName}`)
        .get(`/api/search/users?q=${searchName}`)
        .then((res) => {
          this.isLoading = false;
          this.users = res.data.items.map((user) => {
            return {
              id: user.id,
              login: user.login,
              avatar_url: user.avatar_url,
              html_url: user.html_url,
            };
          });
        })
        .catch((error) => {
          // console.log(error.message);
          if (error.message === "Network Error") {
            alert("网络链接失败，请打开网络链接或连上WIFI试试");
          }
        });
    },
  },
};
</script>

<style>
</style>