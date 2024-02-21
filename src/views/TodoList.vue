<script scoped>
    import TodoTile from '../components/TodoTile.vue';
    import EmptyTodoList from '../components/EmptyTodoList.vue';
    import MockTodoList from '../data/MockTodoList.json';
    import Pagintation from '../components/Pagintation.vue'

    export default {
        components: {
            TodoTile,
            EmptyTodoList,
            Pagintation
        },

        data() {
            return {
                todos: []
            }
        },

        created() {
            // Simulating asynchronous fetch from API using setTimeout - For TESTING purposes only
            setTimeout(() => {
            // Assigning mock data to todos array
            this.todos = MockTodoList;
            }, 1000); // Simulating delay
        },

        //Fetch actual data from the server
        // created() {
        //     this.fetchTodos();
        // },

        methods: {
            async fetchTodos() {
                try {
                    const response = await fetch('/todos');
                    if(!response.ok) {
                        throw new Error('Failed to fetch todolist data');
                    }
                    const data = await response.json();
                    this.todos = data;
                } catch (error) {
                    
                }
            }
        }
        
    }
</script>

<template>
    <div class="container">
        <div v-if="todos.length === 0" class="container__empty-list">
            <EmptyTodoList/>
        </div>

        <div v-if="todos.length > 0" class="container__todo-list">
            <div class="container__todo-list__div">
                <h1 class="container__todo-list__div__title">Todos</h1>
               <router-link class="container__todo-list__div__addtodo" :to="{ name: 'Create' }" tag="button">Add new Todo</router-link>
            </div>
            
            <div class="container__todo-list__todos">
                <TodoTile v-for="todo in todos" :key="todo.id" :todo="todo"/>
            </div>
            <Pagintation v-bind:todos="todos"/>
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
    margin-top: 2rem;
}
</style>