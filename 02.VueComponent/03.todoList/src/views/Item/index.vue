<template>
  <li>
    <label>
      <!-- 不建议直接修改props数据 -->
      <!-- <input type="checkbox" v-model="todo.isDone"/> -->

      <input type="checkbox" v-model="isDone" />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "updateTodo"],
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