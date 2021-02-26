<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="comment.username"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="comment.content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            @click="submit"
            class="btn btn-default pull-right"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddComment",
  props: ["addComment"],
  data() {
    return {
      comment: {
        username: "",
        content: "",
      },
    };
  },
  methods: {
    /*
      props方案：组件间通信方案
        适用于：父子组件通信
        - 父 --> 子 
          直接传递普通数据（非函数数据）
          子组件声明接受可以直接使用
          注意：props通信数据是只读的，不可直接修改（数据源在哪，更新数据的方法就在哪）
        - 子 --> 父
          父组件给子组件传递函数数据
          子组件通过调用函数，来修改父组件数据
    */
    submit() {
      const { username, content } = this.comment;
      // 如果输入内容为空，给出错误提示
      if (!username.trim() || !content.trim()) {
        alert("请输入用户名或评论内容");
        return;
      }
      // 添加评论
      this.addComment(this.comment);
      // 清空表单
      this.comment.username = "";
      this.comment.content = "";
    },
  },
};
</script>

<style>
</style>