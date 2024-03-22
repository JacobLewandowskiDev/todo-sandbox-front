<script>
import { apiUrl } from "../router/index.js";
import { fetchAPI } from "../service/apiService";

export default {
  emits: ["refreshTodoDetails", "deleteStepLocally", "updateStepLocally"],

  props: {
    steps: {
      type: Array,
      default: () => [],
    },

    showUpdateButton: {
      type: Boolean,
      default: false, // Default value to show the update button
    },

    todoId: {
      default: null,
      required: false,
    },
  },
  methods: {
    async handleDeleteStep(index) {
      if (this.todoId !== null) {
        const stepId = this.steps[index].id; // Get the ID using the index
        const { success, error } = await fetchAPI(
          `${apiUrl}/todos/${this.todoId}/steps?stepId=${stepId}`,
          "DELETE"
        );
        if (success) {
          console.log("Deletion of step finished successfully.");
          this.$emit("refreshTodoDetails");
        } else {
          console.error("Failed to delete step: " + error);
        }
      } else {
        this.$emit("deleteStepLocally", index); // Emit the index instead of stepId
      }
    },

    async handleUpdateStep(index) {
      const originalStep = { ...this.steps[index] };
      const updatedStep = this.steps[index];
      if (this.todoId !== null) {
        const { success, error } = await fetchAPI(
          `${apiUrl}/todos/${this.todoId}/steps`,
          "PUT",
          updatedStep
        );
        if (success) {
          console.log("Update of the step was successfull.");
          this.$router.push({ name: "Details" });
        } else {
          this.steps[index] = originalStep;
          console.error("Failed to update the step: " + error);
        }
      }
    },

    handleUpdateStepLocally(index) {
      this.$emit("updateStepLocally", index, this.steps[index]);
    },
  },
};
</script>

<template>
  <label class="label">Subtasks</label>
  <br />
  <div class="subtasklist" :class="{ 'empty-subtasks': steps.length === 0 }">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="subtasklist__subtask"
    >
      <input
        class="subtasklist__subtask__input"
        type="text"
        v-model="step.name"
        :placeholder="'Name: ' + step.name"
        maxlength="100"
        @input="handleUpdateStepLocally(index)"
      />
      <br />
      <input
        class="subtasklist__subtask__input"
        type="text"
        v-model="step.description"
        :placeholder="'Description: ' + step.description"
        maxlength="3000"
        @input="handleUpdateStepLocally(index)"
      />
      <div class="subtasklist__subtask__container">
        <button
          class="subtasklist__subtask__container--update"
          v-if="showUpdateButton"
          @click="handleUpdateStep(index)"
          type="button"
        >
          Update Subtask
        </button>
        <button
          class="subtasklist__subtask__container--delete"
          @click="handleDeleteStep(index)"
          type="button"
        >
          Delete Subtask
        </button>
      </div>
      <br class="form__break" />
    </div>
  </div>
  <hr class="form__line" />
</template>

<style scoped>
.form__line {
  margin-top: 0.5rem;
}

.empty-subtasks {
  display: none;
  visibility: hidden;
}

.subtasklist__subtask__container {
  display: block;
}

.subtasklist__subtask__container--update,
.subtasklist__subtask__container--delete {
  width: 48%;
  text-wrap: nowrap;
}
</style>
