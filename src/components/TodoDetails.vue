<script scoped>
    import AddSubtask from '../components/AddSubtask.vue';
    import UpdateTodo from '../components/UpdateTodo.vue';
    import SubtaskList from '../components/SubtaskList.vue';

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
            this.fetchTodo();
        },

        methods: {
            fetchTodo() {
                //Implement actual API Get call
                //The code below is only for testing
                const mockTodoData = {
                    id: parseInt(this.id),
                    name: "Todo Name",
                    description: "Todo Description",
                    priority: "HIGH",
                    steps: [
                    {
                        "id": 1,
                        "name": "Step 1 name",
                        "description": "Description for Step 1"
                    },
                    {
                        "id": 2,
                        "name": "Step 2 name",
                        "description": "Description for Step 2"
                    },
                    {
                        "id": 3,
                        "name": "Step 3 name",
                        "description": "Description for Step 3"
                    }]
                };
                this.todo = mockTodoData;
            },

            handleCancel() {
                console.log("Canceled update of todo, reverting changes.")
                //go back to /todos
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