<script scoped>

</script>

<template>
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
        <div class="form__container__form__div">
            <router-link class="form__container__div--button" :to="{ name: 'Todos' }" tag="button" @click="handleCancel()">Cancel</router-link>
            <button class="form__container__div--button" @click="handleSave()">Save</button>
            <button class="form__container__form__div__button--delete" @click="handleDeleteTodo()">Delete</button>
        </div>
        <br class="form__break">
    </form>
</template>

<style scoped>

.form__container__div--button:nth-child(2) {
    margin: 0 1rem;
}

.form__container__div--button:nth-child(2):hover {
    background-color: #2237f3;
    color: #ffffff;
}

.form__container__div--button:nth-child(2):active {
    background-color: #6776ff;
}

.form__button--add {
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
</style>