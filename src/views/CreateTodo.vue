<script scoped>
    import SubtaskList from '../components/SubtaskList.vue';
    import AddSubtask from '../components/AddSubtask.vue';
    import { apiUrl } from '../router/index.js';


    export default {
        components: {
            SubtaskList,
            AddSubtask
        },

        data() {
            return {
                todo: {
                    name: "",
                    description: "",
                    priority: "",
                    steps: []
                }
            };
        },

        methods: {
            async createTodo() {
                try {
                    const response = await fetch(apiUrl + '/todos', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(this.todo)
                    });

                    if(!response.ok) {
                        alert('Failed to create todo, please check your inputs.'); 
                       throw new Error('Failed to create todo, please check your inputs.');
                    }

                    this.$router.push({ name: 'Todos' }); //If POST was successful -> redirect user to todolist component.
                    console.log('Todo was successfully saved.')
                } catch (error) {
                    console.error('Error when creating todo: ' + error);
                }
            },

            handleAddSubtask(newSubtask) {
                todo.steps.push(newSubtask);
            }
        }
    }
</script>

<template>
<div class="container">
    <router-link class="back-to-main" :to="{ name: 'Todos' }" tag="button">X</router-link>

    <form class="form" @submit.prevent="createTodo">
        <label class="form__label">Todo</label>
        <br>
        <input class="form__input" type="text" placeholder="Todo Name" v-model="todo.name">
        <br>
        <input class="form__input" type="text" placeholder="Todo Description" v-model="todo.description">
        <br>
        <select class="form__dropdown" v-model="todo.priority">
            <option value="" disabled selected hidden>Todo Priority</option>
            <option class="form__dropdown__option" value="HIGH">HIGH</option>
            <option class="form__dropdown__option" value="MEDIUM">MEDIUM</option>
            <option class="form__dropdown__option" value="LOW">LOW</option>
        </select>
        <SubtaskList :steps="todo.steps"/>
        <AddSubtask :todo="todo" @addSubtask="handleAddSubtask"/>
        <button class="form__button--add" type="submit">Create Todo</button>
        <br class="form__break">
    </form>
</div>
</template>

<style>

</style>