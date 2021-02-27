<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List :todos="todos" />
      <Footer />
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
        { id: 1, name: "吃饭" },
        { id: 2, name: "睡觉" },
        { id: 3, name: "coding" },
      ],
    };
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