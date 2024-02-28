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
                    }]
                };
                this.todo = mockTodoData;
            },

            handleCancel() {
                console.log("Canceled update of todo, reverting changes.")
            },

            handleSave() {
                console.log("Saved the todo");
                //Add api call to update Todo
            },

            handleDeleteTodo() {
                console.log("Deleted the todo with id: " +  this.id);
            },

            handleDeleteStep() {
                console.log("Deleted the step");
            },

            addStepToList() {
                console.log("Step has been added to list");
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
        <UpdateTodo :name="todo.name" :description="todo.description" :priority="todo.priority" @update:name="updateName" @update:description="updateDescription" @update:priority="updatePriority"/>
        <p>{{ todo.name }}</p>
        <p>{{ todo.description }}</p>
        <p>{{ todo.priority }}</p>
        <SubtaskList/>
        <AddSubtask/>
    </div>
</template>

<style scoped>
</style>