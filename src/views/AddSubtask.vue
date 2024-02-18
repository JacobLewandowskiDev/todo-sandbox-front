<script>

</script>

<template>
    <router-link class="back-to-main" :to="{ name: 'Todos' }" tag="button">X</router-link>
    <div class="container">
        <form class="form">
            <label class="form__label">Subtask</label>
            <input class="form__input" type="text" placeholder="Subtask Name">
            <br>
            <input class="form__input" type="text" placeholder="Subtask Description">
            <br>
            <button class="form__button__add">Add subtask</button>
            <br class="form__break">
        </form>
    </div>
</template>

<style>

</style>