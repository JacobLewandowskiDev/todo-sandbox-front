<script scoped>
    import TodoTile from './TodoTile.vue';

    export default {
        components: {
            TodoTile
        },

        methods: {
            createTodo() {
                console.log('Hello world');
            }
        }    
    }
</script>

<template>
    <div class="container">
        <div id="empty-todo-list">
            <h1 class="container__title">Todos</h1>
            <div class="container__empty-todo-list">
                <h2 class="container__empty-todo-list__title">No todos</h2>
                <p class="container__empty-todo-list__body">Get started by creating a new todo</p>
                <br>
            <button class="container__button" v-on:click="createTodo"><span id="plus">+</span> New Todo</button>
            </div>
        </div>

        <div id="todo-list" class="container__todo-list">
            <div class="container__todo-list__title-div">
                <h1 class="container__todo-list__title-div__title">Todos</h1>
                <button class="container__todo-list__title-div__addtodo--button">Add New Todo</button>
            </div>
            
            <div>
                <TodoTile/>
                <TodoTile/>
                <TodoTile/>
            </div>

        </div>
    </div>
</template>

<style>
    #empty-todo-list {
        display: block;
        visibility: visible;
    }

    #todo-list {
        display: block;
        visibility: visible;
    }

</style>