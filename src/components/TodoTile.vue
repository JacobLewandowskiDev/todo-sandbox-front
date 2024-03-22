<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getPriorityClass(priority) {
      switch (priority) {
        case "HIGH":
          return "todo__priority--high";
        case "MEDIUM":
          return "todo__priority--medium";
        case "LOW":
          return "todo__priority--low";
        default:
          return "todo__priority--medium";
      }
    },
  },
};
</script>

<template>
  <router-link
    class="todo"
    :to="{ name: 'Details', params: { id: todo.id } }"
    tag="button"
  >
    <h2 class="todo__name">{{ todo.name }}</h2>
    <p :class="['todo__priority', getPriorityClass(todo.priority)]">
      {{ todo.priority }}
    </p>
    <p class="todo__body">{{ todo.description }}</p>
  </router-link>
</template>

<style scoped>
.todo {
  border-bottom: 2px solid #c3c3c3;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  grid-template-rows: 40px 80px;
  column-gap: 10px;
  margin: 0 auto;
  padding-top: 0.5rem;
  cursor: pointer;
  text-decoration: none;
}

.todo:hover {
  background-color: #adadad10;
}

.todo__name {
  font-size: 1.1rem;
  font-weight: 800;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000000;
}

.todo__priority {
  text-align: center;
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  padding: 0.3rem 1rem;
  margin: auto 0;
  border-radius: 5rem;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: right;
}

.todo__priority--high {
  background-color: #ffb3b3;
  color: #c02b2b;
}

.todo__priority--medium {
  background-color: #ffd8b3;
  color: #b25009;
}

.todo__priority--low {
  background-color: #fdffb3;
  color: #998a00;
}

.todo__body {
  color: #777777;
  font-size: 1.2rem;
  margin: 0.35rem 0;
  grid-column-start: 1;
  grid-column-end: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-y: hidden;
}
</style>
