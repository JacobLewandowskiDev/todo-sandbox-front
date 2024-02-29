<script scoped>
    export default {
        props: {
            steps: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            handleDeleteStep(stepId) {
                //Make api call to delete step with stepId from todoList, then make GetTodoById call again to refresh list
                console.log("Delete step with id: " + stepId);
            }
        }
    }
</script>

<template>
    <label class="label">Subtasks</label>
    <br>
    <div class="subtasklist" :class="{ 'empty-subtasks': steps.length === 0}">
        <div v-for="step in steps" :key="step.id" class="subtasklist__subtask">
            <input class="subtasklist__subtask__input" type="text" :placeholder="'Name: ' + step.name" maxlength="100">
            <br>
            <input class="subtasklist__subtask__input" type="text" :placeholder="'Description: ' + step.description" maxlength="3000">
            <button class="subtasklist__subtask__delete" @click="handleDeleteStep(step.id)">Delete Subtask</button>
            <br class="form__break">
        </div>
    </div>
    <hr class="form__line">
</template>

<style scoped>
.form__line {
    margin-top: 0.5rem;
}

.empty-subtasks {
    display: none;
    visibility: hidden;
}

</style>