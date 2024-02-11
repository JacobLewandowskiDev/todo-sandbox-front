<script>

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
    </form>
</div>
</template>

<style>

</style>