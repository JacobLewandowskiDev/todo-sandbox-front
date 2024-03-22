<script>
import AddSubtask from "../components/AddSubtask.vue";
import UpdateTodo from "../components/UpdateTodo.vue";
import SubtaskList from "../components/SubtaskList.vue";
import { apiUrl } from "../router/index.js";
import { fetchAPI } from "../service/apiService.js";

export default {
  components: {
    AddSubtask,
    UpdateTodo,
    SubtaskList,
  },

  props: {
    id: {
      required: true,
    },
  },

  data() {
    return {
      todo: null,
    };
  },

  created() {
    this.fetchTodoById(parseInt(this.id));
  },

  methods: {
    async fetchTodoById(id) {
      const { value, success, error } = await fetchAPI(`${apiUrl}/todos/${id}`);
      if (success) {
        this.todo = value;
        console.log("Fetching the specific Todo was successufull.");
      } else {
        console.error(
          "There was a problem fetching the specific Todo: " + error
        );
      }
    },

    updateName(newName) {
      this.todo.name = newName;
    },

    updateDescription(newDescription) {
      this.todo.description = newDescription;
    },

    updatePriority(newPriority) {
      this.todo.priority = newPriority;
    },

    handleAddSubtask(newSubtask) {
      if (this.todo) {
        this.todo.steps.push(newSubtask);
      }
    },
  },
};
</script>

<template>
  <div v-if="todo" class="container">
    <UpdateTodo
      :id="todo.id"
      :name="todo.name"
      :description="todo.description"
      :priority="todo.priority"
      @update:name="updateName"
      @update:description="updateDescription"
      @update:priority="updatePriority"
    />
    <SubtaskList
      :todoId="todo.id"
      :steps="todo.steps"
      :showUpdateButton="true"
      @refreshTodoDetails="fetchTodoById(todo.id)"
    />
    <AddSubtask
      :todoId="todo.id"
      @addSubtask="handleAddSubtask"
      @refreshTodoDetails="fetchTodoById(todo.id)"
    />
  </div>
</template>

<style scoped></style>
