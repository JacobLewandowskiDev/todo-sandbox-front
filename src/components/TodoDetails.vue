<script scoped>
    import AddSubtask from '../components/AddSubtask.vue';
    import UpdateTodo from '../components/UpdateTodo.vue';
    import SubtaskList from '../components/SubtaskList.vue';
    import { apiUrl } from '../router/index.js';

    export default {
        components: {
            AddSubtask,
            UpdateTodo,
            SubtaskList
        },

        props: {
            id: {
                required: true
            }
        },

        data() {
            return {
                todo: null
            };
        },

        created() {
            this.fetchTodoById(parseInt(this.id));
        },

        methods: {
            async fetchTodoById(id) {
                try {
                    const response = await fetch(apiUrl + '/todos/' + id);
                    if(!response.ok) {
                        throw new Error('Failed to fetch Todo object data');
                    }
                    const data = await response.json();
                    this.todo = data;
                } catch (error) {
                    
                }
            },

            updateName(newName) {
            this.todo.name = newName;
            },

            updateDescription(newDescription) {
                this.todo.description = newDescription;
            },

            updatePriority(newPriority) {
                this.todo.priority = newPriority;
            }
        }
    }
</script>

<template>
    <div v-if="todo" class="container">
        <UpdateTodo :id="todo.id" :name="todo.name" :description="todo.description" :priority="todo.priority" @update:name="updateName" @update:description="updateDescription" @update:priority="updatePriority"/>
        <SubtaskList :steps="todo.steps"/>
        <AddSubtask :todoId="todo.id"/>
    </div>
</template>

<style scoped>
</style>