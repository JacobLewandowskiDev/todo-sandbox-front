<script></script>

<template>
  <h1 class="title">Todos</h1>
  <div class="empty-list">
    <h2 class="empty-list__title">No todos</h2>
    <p class="empty-list__body">Get started by creating a new todo</p>
    <br />
    <router-link
      class="empty-list__button"
      :to="{ name: 'Create' }"
      tag="button"
      ><span id="plus">+</span> New Todo</router-link
    >
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}

.empty-list {
  position: relative;
  border: dashed 0.2em #848484;
  border-radius: 0.8rem;
  height: 18rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.empty-list__title {
  font-size: 1.1rem;
  font-weight: 800;
}

.empty-list__body {
  color: #777777;
  font-size: 1.2em;
  margin-top: 1rem;
}

.empty-list__button span {
  font-size: 1.8em;
  font-weight: 100;
  position: relative;
  bottom: 0.1rem;
  margin-right: 0.4rem;
}
</style>
