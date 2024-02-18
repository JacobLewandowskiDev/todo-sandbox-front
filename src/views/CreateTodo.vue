<script>

</script>

<template>
<div class="container">
    <router-link class="back-to-main" :to="{ name: 'Home' }" tag="button">X</router-link>

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
        <label class="form__label">Subtasks</label>
        <br>
        <div class="form__dropdown__subtasks">
            <input class="form__input" type="text" placeholder="Name">
            <br>
            <input class="form__input" type="text" placeholder="Description">
            <button class="form__button__delete">Delete</button>
        </div>
        <br class="form__break">
        <hr class="form__line">
        <input class="form__input" type="text" placeholder="Name">
        <br>
        <input class="form__input" type="text" placeholder="Description">
        <br>
        <button class="form__button__add">Add subtask</button>
        <br class="form__break">
        <button class="form__button__add">Create Todo</button>
        <br class="form__break">
    </form>
</div>
</template>

<style>

</style>