<script>
import SubtaskList from "../components/SubtaskList.vue";
import AddSubtask from "../components/AddSubtask.vue";
import { apiUrl } from "../router/index.js";
import { fetchAPI } from "../service/apiService.js";

export default {
  components: {
    SubtaskList,
    AddSubtask,
  },

  data() {
    return {
      todo: {
        name: "",
        description: "",
        priority: "",
        steps: [],
      },
    };
  },

  methods: {
    async createTodo() {
      const { value, success, error } = await fetchAPI(
        `${apiUrl}/todos`,
        "POST",
        this.todo
      );
      if (success) {
        console.log("Todo was saved to the db successfully: " + value);
        this.$router.push({ name: "Todos" }); //If POST was successful -> redirect user to todolist component.
      } else {
        console.error(
          "There was a problem with saving the Todo to the db. Please check inputs: " +
            error
        );
        alert("Todo creation failed, please check your inputs.");
      }
    },

    handleAddSubtask(newSubtask) {
      this.todo.steps.push(newSubtask);
      console.log("Step was added");
    },

    handleDeleteStepLocally(index) {
      this.todo.steps.splice(index, 1);
      console.log("Step was deleted");
    },

    handleUpdateStepLocally(index, updatedStepData) {
      this.todo.steps[index] = updatedStepData;
      console.log("Step was updated");
    },
  },
};
</script>

<template>
  <div class="container">
    <router-link class="back-to-main" :to="{ name: 'Todos' }" tag="button"
      >X</router-link
    >

    <form class="form" @submit.prevent="createTodo">
      <label class="form__label">Todo</label>
      <br />
      <input
        class="form__input"
        type="text"
        placeholder="Todo Name"
        v-model="todo.name"
      />
      <br />
      <input
        class="form__input"
        type="text"
        placeholder="Todo Description"
        v-model="todo.description"
      />
      <br />
      <select class="form__dropdown" v-model="todo.priority">
        <option value="" disabled selected hidden>Todo Priority</option>
        <option class="form__dropdown__option" value="HIGH">HIGH</option>
        <option class="form__dropdown__option" value="MEDIUM">MEDIUM</option>
        <option class="form__dropdown__option" value="LOW">LOW</option>
      </select>
      <SubtaskList
        :steps="todo.steps"
        @deleteStepLocally="handleDeleteStepLocally"
        @updateStepLocally="handleUpdateStepLocally"
      />
      <AddSubtask :todo="todo" @addSubtask="handleAddSubtask" />
      <button class="form__button--add" type="submit">Create Todo</button>
      <br class="form__break" />
    </form>
  </div>
</template>

<style></style>
