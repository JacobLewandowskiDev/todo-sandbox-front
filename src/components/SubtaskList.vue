<script scoped>
import { apiUrl } from '../router/index.js'

    export default {
        props: {
            steps: {
                type: Array,
                default: () => []
            },

            todoId: {
                required: true
            }
        },
        methods: {
            async handleDeleteStep(stepIds) {
                if (this.todoId) {
                    try {
                        for (const stepId of stepIds) {
                            const response = await fetch(`${apiUrl}/todos/${this.todoId}/steps?stepId=${stepId}`, {
                                method: 'DELETE',
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8'
                                }
                            });

                            if (response.ok) {
                                console.log("Deleted step from the todo's subtaskList");
                                // Emit an event to notify the parent component about the deleted subtask
                                this.$emit('stepDeleted', stepId);
                            } else {
                                const errorMessage = await response.text(); // Extract error message from response
                                throw new Error(`Failed to delete subtask: ${errorMessage}`);
                            }
                        }
                    } catch (error) {
                        console.error('Error deleting subtask:', error);
                    }
                }
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
            <button class="subtasklist__subtask__delete" @click="handleDeleteStep([step.id])">Delete Subtask</button>
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