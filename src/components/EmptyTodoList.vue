<script scoped>
</script>

<template>
    <h1 class="title">Todos</h1>
    <div class="empty-list">
        <h2 class="empty-list__title">No todos</h2>
        <p class="empty-list__body">Get started by creating a new todo</p>
        <br>
    <button class="empty-list__button" v-on:click="createTodo"><span id="plus">+</span> New Todo</button>
    </div>
</template>

<style scoped>
.title {
    margin-bottom: 45px;
    font-size: 2em;
    font-weight: bold;
}

.empty-list {
    position: relative;
    border: dashed 0.2em #848484;
    border-radius: 10px;
    height: 18em;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.empty-list__title {
    font-size: 1.1em;
    font-weight: 800;
}

.empty-list__body {
    color: #777777;
    font-size: 1.2em;
    margin-top: 15px;
}

.empty-list__button span {
    font-size:1.8em;
    font-weight: 100;
    position: relative;
    bottom: 3px;
    margin-right: 0.2em;
}
</style>