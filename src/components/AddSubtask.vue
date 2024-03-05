<script scoped>
    export default {
        props: {
            todoId: {
                required: false
            }
        },

        data() {
            return {
            steps: [], // Array to store subtasks
            name: '',
            description: ''
            }
        },

        methods: {
            addStepToList() {
                console.log("Step (name):" + this.name + ", (desc.):" + this.description +"; has been added to array of steps");
                // Create a new subtask object
                const newSubtask = {
                    name: this.name,
                    description: this.description
                };
                // Push the new subtask object into the subtasks array
                this.steps.push(newSubtask);
                // Clear the input fields after adding the subtask
                this.name = '';
                this.description = '';
            },
        }
    }
</script>

<template>
    <form class="form">
        <label class="form__label">New Subtask</label>
        <input class="form__input" type="text" placeholder="Subtask Name" v-model="name" maxlength="100">
        <br>
        <input class="form__input" type="text" placeholder="Subtask Description" v-model="description" maxlength="3000">
        <br>
        <button class="form__button--add" @click.prevent="addStepToList()">Add subtask</button>
        <br class="form__break">
    </form>
</template>

<style scoped>
.form__button--add {
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
</style>