<script scoped>
export default {
    // props: {
    //     todo: {
    //         type: Object,
    //         required: true
    //     }
    // },

    data() {
        return {
            showNewSubtaskForm: false
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

        toggleNewSubtaskForm() {
            this.showNewSubtaskForm = !this.showNewSubtaskForm;
        }
    }
}
</script>

<template>
    <div class="container">
        <form class="form">
            <label class="form__label">Task</label>
            <br>
            <input class="form__input" type="text" placeholder="Name">
            <br>
            <input class="form__input" type="text" placeholder="Description">
            <br>
            <select class="form__dropdown">
                <option value="" disabled selected hidden>Priority</option>
                <option class="form__dropdown__option" value="HIGH">HIGH</option>
                <option class="form__dropdown__option" value="MEDIUM">MEDIUM</option>
                <option class="form__dropdown__option" value="LOW">LOW</option>
            </select>
            <div class="container__form__div">
                <router-link class="form__container__div__button" :to="{ name: 'Home' }" tag="button" @click="handleCancel()">Cancel</router-link>
                <button class="form__container__div__button" @click="handleSave()">Save</button>
                <button class="form__button__delete" @click="handleDeleteTodo()">Delete</button>
            </div>
            <br class="form__break">
            <label class="form__label">Subtasks</label>
            <br>
            <div class="form__dropdown__subtasks">
                <input class="form__input" type="text" placeholder="Name">
                <br>
                <input class="form__input" type="text" placeholder="Description">
                <button class="form__button__delete" @click="handleDeleteStep()">Delete Subtask</button>
            </div>
            <br class="form__break">
            <hr class="form__line">
        </form>
        <button v-if="!showNewSubtaskForm" class="form__button__add" @click="toggleNewSubtaskForm()">Add subtask</button>
    </div>
    <div v-if="showNewSubtaskForm" class="container">
        <form class="form">
            <label class="form__label">New Subtask</label>
            <input class="form__input" type="text" placeholder="Subtask Name">
            <br>
            <input class="form__input" type="text" placeholder="Subtask Description">
            <br>
            <button v-if="showNewSubtaskForm" class="form__button__add" @click="toggleNewSubtaskForm()">Add subtask</button>
            <br class="form__break">
        </form>
    </div>
</template>

<style scoped>
.form__container__div__button:nth-child(2) {
    margin: 0 1rem;
}

.form__container__div__button:nth-child(2):hover {
    background-color: #2237f3;
    color: #ffffff;
}

.form__container__div__button:nth-child(2):active {
    background-color: #6776ff;
}

.form__button__add {
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
</style>