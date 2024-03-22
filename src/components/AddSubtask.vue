<script>
import { apiUrl } from "../router/index.js";
import { fetchAPI } from "../service/apiService";

export default {
  props: {
    todoId: {
      required: false,
    },
    todo: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      steps: {
        name: "",
        description: "",
      },
    };
  },

  methods: {
    async addStepToList() {
      if (this.todoId) {
        const { success, error } = await fetchAPI(
          `${apiUrl}/todos/${this.todoId}/steps`,
          "POST",
          [this.steps]
        );
        if (success) {
          console.log("Step(s) have been added to array of steps");
          // Emit an event to notify the parent component about the added subtask
          this.$emit("subtaskAdded", {
            name: this.steps.name,
            description: this.steps.description,
          });
          // Refresh the todoDetails component by emitting an event to trigger a GET request
          this.$emit("refreshTodoDetails");
        } else {
          console.error("Failed to save step to Todo's stepList: " + error);
        }
      } else if (this.todo) {
        this.addStepLocally();
      }

      // Clear the input fields after adding the subtask
      this.steps.name = "";
      this.steps.description = "";
    },

    addStepLocally() {
      // If todoId is not provided, just add step locally
      console.log(
        "Step (name):" +
          this.steps.name +
          ", (description):" +
          this.steps.description +
          "; has been added to array of steps"
      );
      // Create a new subtask object
      const newStep = {
        name: this.steps.name,
        description: this.steps.description,
      };
      // Emit an event to notify the parent component about the added subtask
      this.todo.steps.push(newStep);
      this.$emit("subtaskAdded", newStep);
    },
  },
};
</script>

<template>
  <form class="form">
    <label class="form__label">New Subtask</label>
    <input
      class="form__input"
      type="text"
      placeholder="Subtask Name"
      v-model="steps.name"
      maxlength="100"
    />
    <br />
    <input
      class="form__input"
      type="text"
      placeholder="Subtask Description"
      v-model="steps.description"
      maxlength="3000"
    />
    <br />
    <button class="form__button--add" @click.prevent="addStepToList">
      Add subtask
    </button>
    <br class="form__break" />
  </form>
</template>

<style scoped>
.form__button--add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
