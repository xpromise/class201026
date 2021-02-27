<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <!-- 不建议直接修改props数据 -->
      <!-- <input type="checkbox" v-model="todo.isDone"/> -->

      <input type="checkbox" v-model="isDone" />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "updateTodo", "delTodo"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    del() {
      if (confirm(`您确认要删除 ${this.todo.name} 这个待办事项吗`)) {
        this.delTodo(this.todo.id);
      }
    },
  },
  computed: {
    isDone: {
      get() {
        return this.todo.isDone;
      },
      set() {
        this.updateTodo(this.todo.id);
      },
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>