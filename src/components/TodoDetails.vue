<script>

</script>

<template>
    <div class="container">
        <KeepAlive>
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
                    <router-link class="form__container__div__button" :to="{ name: 'Home' }" tag="button">Cancel</router-link>
                    <button class="form__container__div__button">Save</button>
                </div>
                <br class="form__break">
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
                <router-link class="form__button__add" :to="{ name: 'Subtask' }" tag="button">Add next subtask</router-link>
                <br class="form__break">
            </form>
        </KeepAlive>
    </div>
</template>

<style scoped>
.form__button__add {
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
</style>