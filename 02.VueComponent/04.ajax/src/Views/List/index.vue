<template>
  <div class="row">
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/6412038?v=3"
          style="width: 100px"
        />
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/6412038?v=3"
          style="width: 100px"
        />
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/6412038?v=3"
          style="width: 100px"
        />
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/6412038?v=3"
          style="width: 100px"
        />
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/6412038?v=3"
          style="width: 100px"
        />
      </a>
      <p class="card-text">reactjs</p>
    </div>
  </div>
</template>

<script>
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
      console.log(searchName);
    },
  },
};
</script>

<style>
</style>