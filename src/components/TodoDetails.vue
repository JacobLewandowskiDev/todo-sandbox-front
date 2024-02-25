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
            todo: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                
            };
        },

        methods: {
            handleCancel() {
                console.log("Canceled update of todo, reverting changes.")
            },

            handleSave() {
                console.log("Saved the todo");
            },

            handleDeleteTodo() {
                console.log("Deleted the todo with id: ");
            },

            handleDeleteStep() {
                console.log("Deleted the step");
            },

            addStepToList() {
                console.log("Step has been added to list");
            }
        }
    }
</script>

<template>
    <div class="container">
        <UpdateTodo/>

        <SubtaskList/>

        <AddSubtask/>
    </div>
</template>

<style scoped>
</style>