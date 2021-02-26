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
      <AddComment />
      <!-- 使用标签属性传递comments数据：props方案 -->
      <CommentList :comments="comments" />
    </div>
  </div>
</template>

<script>
import AddComment from "./views/AddComment";
import CommentList from "./views/CommentList";

export default {
  name: "App",
  data() {
    return {
      comments: [
        {id: 1, username: 'peihua', content: 'i like jingge'},
        {id: 2, username: 'jingge', content: 'i like leige'},
      ]
    }
  },
  components: {
    AddComment,
    CommentList,
  },
};
</script>

<style>
</style>