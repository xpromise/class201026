<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :delComment="delComment"
      />
    </ul>
  </div>
</template>

<script>
import CommentItem from "../CommentItem";

export default {
  name: "CommentList",
  data() {
    return {
      comments: [
        { id: 1, username: "peihua", content: "i like jingge" },
        { id: 2, username: "jingge", content: "i like leige" },
      ],
    };
  },
  mounted() {
    this.$bus.$on("addComment", this.addComment);
  },
  beforeDestroy() {
    this.$bus.$off("addComment", this.addComment);
  },
  methods: {
    addComment(comment) {
      this.comments.unshift({ ...comment, id: Date.now() });
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
  components: {
    CommentItem,
  },
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>