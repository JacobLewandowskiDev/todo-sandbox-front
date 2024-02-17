<script scoped>
    import TodoTile from './TodoTile.vue';
    import EmptyTodoList from './EmptyTodoList.vue';

    export default {
        components: {
            TodoTile,
            EmptyTodoList
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
        <div class="container__empty-list">
           <EmptyTodoList/>
        </div>

        <div class="container__todo-list">
            <div class="container__todo-list__div">
                <h1 class="container__todo-list__div__title">Todos</h1>
                <button class="container__todo-list__div__addtodo">Add New Todo</button>
            </div>
            
            <div class="container__todo-list__todos">
                <TodoTile/>
                <TodoTile/>
                <TodoTile/>
            </div>
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
    margin-top: 3rem;
}
</style>