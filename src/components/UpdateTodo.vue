<script scoped>
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
        handleSave() {
                console.log("Saved the todo");
                //Add api call to update Todo
            },

            handleDeleteTodo() {
                console.log("Deleted the todo with id: " +  this.id);
                //add api call to delete todo
            }
    }
}
</script>

<template>
    <form class="form">
        <label class="form__label">Task</label>
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
            <button class="form__container__button" @click="handleSave()">Save</button>
            <button class="form__container__button--delete" @click="handleDeleteTodo()">Delete</button>
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