<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./Views/Search";
import List from "./Views/List";

export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

<style>
</style>