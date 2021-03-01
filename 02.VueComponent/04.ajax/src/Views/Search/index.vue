<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
      />
      <button @click="sendSearchName">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchName: "",
      oldSearchName: "",
    };
  },
  methods: {
    sendSearchName() {
      const searchName = this.searchName.trim();
      if (!searchName) {
        alert("请输入搜索内容~");
        return;
      }
      if (oldSearchName === searchName) {
        return;
      }
      this.$bus.$emit("sendSearchName", searchName);
      this.oldSearchName = searchName;
    },
  },
};
</script>

<style>
</style>