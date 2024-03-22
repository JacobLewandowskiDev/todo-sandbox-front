<script>
import { apiUrl } from "../router/index.js";
import { fetchAPI } from "../service/apiService.js";

export default {
  props: {
    id: {
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    priority: {
      type: String,
      required: true,
    },
  },
  methods: {
    async handleUpdateTodo() {
      const updatedTodo = {
        name: this.name,
        description: this.description,
        priority: this.priority,
      };

      const { success, error } = await fetchAPI(
        `${apiUrl}/todos/${this.id}`,
        "PUT",
        updatedTodo
      );

      if (success) {
        this.$router.push({ name: "Todos" });
        console.log("Todo was updated successfully.");
      } else {
        alert("Error while updating the Todo, please check your inputs.");
        console.error("There was a problem updating the Todo: " + error);
      }
    },

    async handleDeleteTodo(todoId) {
      const { success, error } = await fetchAPI(
        `${apiUrl}/todos/${todoId}`,
        "DELETE"
      );

      if (success) {
        this.$router.push({ name: "Todos" }); //If DELETE was successful -> redirect user to todolist component.
        console.log("Deleting of the Todo was successfull");
      } else {
        console.error("Failed to delete Todo: " + error);
      }
    },
  },
};
</script>

<template>
  <form class="form">
    <label class="form__label">Todo</label>
    <br />
    <input
      class="form__input"
      type="text"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
      maxlength="100"
    />
    <br />
    <input
      class="form__input"
      type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)"
      maxlength="3000"
    />
    <br />
    <select
      class="form__dropdown"
      :value="priority"
      @input="$emit('update:priority', $event.target.value)"
    >
      <option class="form__dropdown__option" value="HIGH">HIGH</option>
      <option class="form__dropdown__option" value="MEDIUM">MEDIUM</option>
      <option class="form__dropdown__option" value="LOW">LOW</option>
    </select>
    <div class="form__container">
      <router-link
        class="form__container__button"
        :to="{ name: 'Todos' }"
        tag="button"
        >Cancel</router-link
      >
      <button
        class="form__container__button"
        @click="handleUpdateTodo()"
        type="button"
      >
        Save
      </button>
      <button
        class="form__container__button--delete"
        @click="handleDeleteTodo(this.id)"
        type="button"
      >
        Delete
      </button>
    </div>
  </form>
  <br class="form__break" />
</template>

<style scoped>
.form__container__button:nth-child(2) {
  margin: 0 1rem;
}

.form__container__button:nth-child(2):hover {
  background-color: #2237f3;
  color: #ffffff;
}

.form__container__button:nth-child(2):active {
  background-color: #6776ff;
}

.form__button--add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
