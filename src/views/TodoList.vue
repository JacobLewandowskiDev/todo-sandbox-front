<script scoped>
    import TodoTile from '../components/TodoTile.vue';
    import EmptyTodoList from '../components/EmptyTodoList.vue';

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
               <router-link class="container__todo-list__div__addtodo" :to="{ name: 'Create' }" tag="button">Add new Todo</router-link>
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