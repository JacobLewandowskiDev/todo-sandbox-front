<script>
import TodoTile from "../components/TodoTile.vue";
import EmptyTodoList from "../components/EmptyTodoList.vue";
import { apiUrl } from "../router/index.js";
import Pagination from "../components/Pagination.vue";
import { fetchAPI } from "../service/apiService.js";

export default {
  components: {
    TodoTile,
    EmptyTodoList,
    Pagination,
  },

  data() {
    return {
      todos: [],
      currentPage: 1,
      pageSize: 5,
    };
  },

  created() {
    this.fetchTodos();
  },

  methods: {
    async fetchTodos() {
      const { value, success, error } = await fetchAPI(`${apiUrl}/todos`);
      if (success) {
        this.todos = value;
        console.log("Fetch TodoList was successfull.");
      } else {
        console.error("There was a problem fetching the TodoList: " + error);
      }
    },

    getNumOfPages() {
      let listLength = this.todos.length;
      return Math.ceil(listLength / this.pageSize);
    },

    // Get the todos to display for the current page
    getCurrentPageTodos() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.todos.slice(startIndex, endIndex);
    },

    // Handle page change event from Pagination component
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<template>
  <div class="container">
    <div v-if="this.todos.length === 0" class="container__empty-list">
      <EmptyTodoList />
    </div>

    <div v-if="todos.length > 0" class="container__todo-list">
      <div class="container__todo-list__div">
        <h1 class="container__todo-list__div__title">Todos</h1>
        <router-link
          class="container__todo-list__div__addtodo"
          :to="{ name: 'Create' }"
          tag="button"
          >Create Todo</router-link
        >
      </div>

      <div class="container__todo-list__todos">
        <TodoTile
          v-for="todo in getCurrentPageTodos()"
          :key="todo.id"
          :todo="todo"
        />
      </div>

      <Pagination
        :numOfPages="getNumOfPages()"
        :currentPage="currentPage"
        @pageChange="onPageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.container__todo-list {
  margin-top: 2rem;
}
.container__todo-list__div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.container__todo-list__div__addtodo {
  float: right;
}

.container__todo-list__todos {
  margin-top: 2rem;
}
</style>
