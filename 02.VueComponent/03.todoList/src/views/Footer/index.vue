<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ isDoneCount }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" v-show="isDoneCount" @click="del">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["isDoneCount", "total", "checkTodos", "delAllDoneTodos"],
  methods: {
    del() {
      if (confirm("您确认要删除已选择的todo吗")) {
        this.delAllDoneTodos();
      }
    },
  },
  computed: {
    isAllCheck: {
      get() {
        return this.total > 0 && this.isDoneCount === this.total;
      },
      set(val) {
        this.checkTodos(val);
      },
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>