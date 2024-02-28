<script scoped>
    import SubtaskList from '../components/SubtaskList.vue';
    import AddSubtask from '../components/AddSubtask.vue';


    export default {
        components: {
            SubtaskList,
            AddSubtask
        }
    }
</script>

<template>
<div class="container">
    <router-link class="back-to-main" :to="{ name: 'Todos' }" tag="button">X</router-link>

    <form class="form">
        <label class="form__label">Task</label>
        <br>
        <input class="form__input" type="text" placeholder="Task Name">
        <br>
        <input class="form__input" type="text" placeholder="Task Description">
        <br>
        <select class="form__dropdown">
            <option value="" disabled selected hidden>Task Priority</option>
            <option class="form__dropdown__option" value="HIGH">HIGH</option>
            <option class="form__dropdown__option" value="MEDIUM">MEDIUM</option>
            <option class="form__dropdown__option" value="LOW">LOW</option>
        </select>
        <SubtaskList/>
        <AddSubtask/>       
        <button class="form__button--add">Create Todo</button>
        <br class="form__break">
    </form>
</div>
</template>

<style>

</style>