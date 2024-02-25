<script scoped>
    export default {
       
       }
</script>

<template>
    <form class="form">
        <label class="form__label">New Subtask</label>
        <input class="form__input" type="text" placeholder="Subtask Name">
        <br>
        <input class="form__input" type="text" placeholder="Subtask Description">
        <br>
        <button class="form__button--add" @click="addStepToList()">Add subtask</button>
        <br class="form__break">
    </form>
</template>

<style scoped>
.form__button--add {
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
</style>