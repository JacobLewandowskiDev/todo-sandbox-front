<script scoped>
import { apiUrl } from "../router/index.js";

export default {
    props: {
        id: {
            required: true
        },

        name: {
            type: String,
            required: true
        },
        
        description: {
            type: String
        },

        priority: {
            type: String,
            required: true
        }
    },
    methods: {
        async handleUpdateTodo() {
            const updatedTodo = {
                name: this.name,
                description: this.description,
                priority: this.priority
            };

            try {
                const response = await fetch(`${apiUrl}/todos/${this.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedTodo)
                });
                if (!response.ok) {
                    throw new Error('Application failed to update the Todo.');
                }
                console.log("Updated of the Todo was successfull");
            } catch(error) {
                console.log('Error while updating the Todo:' + error);
            }
        },

        async handleDeleteTodo(todoId) {
            if (todoId) {
                try {
                    const response = await fetch(`${apiUrl}/todos/${todoId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    });

                    if (response.ok) {
                        console.log("Deleted a todo from the database");
                        // Go back to main page upon deletion of a todo
                        this.$router.push({ name: 'Todos' }); //If DELETE was successful -> redirect user to todolist component.
                    } else {
                        const errorMessage = await response.text(); // Extract error message from response
                        throw new Error(`Failed to delete todo: ${errorMessage}`);
                    }

                } catch (error) {
                    console.error('Error deleting todo:', error);
                }
            }
        }
    }
}
</script>

<template>
    <form class="form">
        <label class="form__label">Todo</label>
        <br>
        <input class="form__input" type="text" :value="name" @input="$emit('update:name', $event.target.value)" maxlength="100">
        <br>
        <input class="form__input" type="text" :value="description" @input="$emit('update:description', $event.target.value)" maxlength="3000">
        <br>
        <select class="form__dropdown" :value="priority" @input="$emit('update:priority', $event.target.value)">
            <option class="form__dropdown__option" value="HIGH">HIGH</option>
            <option class="form__dropdown__option" value="MEDIUM">MEDIUM</option>
            <option class="form__dropdown__option" value="LOW">LOW</option>
        </select>
        <div class="form__container">
            <router-link class="form__container__button" :to="{ name: 'Todos' }" tag="button">Cancel</router-link>
            <button class="form__container__button" @click="handleUpdateTodo()">Save</button>
            <button class="form__container__button--delete" @click="handleDeleteTodo(this.id)" type="button">Delete</button>
        </div>
    </form>
    <br class="form__break">
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
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
</style>