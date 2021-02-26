<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
import CommentItem from "../CommentItem";
export default {
  name: "CommentList",
  // 声明接受props数据
  // props: ["comments"],
  // props: {
  //   // 接受的props属性是comments，类型为数组
  //   comments: Array,
  // },
  props: {
    // 接受的props属性是comments，类型为数组
    comments: {
      type: Array,
      required: true,
    },
  },
  // mounted() {
  //   // 使用props  props会被数据代理
  //   console.log(this.comments);
  // },
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