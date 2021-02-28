<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment  />
      <CommentList />
    </div>
  </div>
</template>

<script>
import AddComment from "./views/AddComment";
import CommentList from "./views/CommentList";

export default {
  name: "App",
  components: {
    AddComment,
    CommentList,
  },
};
</script>

<style>
</style>