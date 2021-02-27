<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :updateTodo="updateTodo" :delTodo="delTodo" />
      <Footer
        :total="total"
        :isDoneCount="isDoneCount"
        :checkTodos="checkTodos"
        :delAllDoneTodos="delAllDoneTodos"
      />
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, name: "吃饭", isDone: true },
        { id: 2, name: "睡觉", isDone: false },
        { id: 3, name: "coding", isDone: false },
      ],
    };
  },
  computed: {
    // 总数
    total() {
      return this.todos.length;
    },
    // 已完成数量
    isDoneCount() {
      return this.todos.reduce((prev, curr) => {
        return prev + (curr.isDone ? 1 : 0);
      }, 0);
    },
  },
  methods: {
    addTodo(name) {
      this.todos.unshift({ id: Date.now(), name, isDone: false });
    },
    updateTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;
    },
    delTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    checkTodos(isDone) {
      this.todos.forEach((todo) => {
        todo.isDone = isDone;
      });
    },
    delAllDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>