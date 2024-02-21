<script scoped>
    export default {
        props: ["todos"]
    }
</script>

<template>
    <div class="pagintation">
        <button class="pagintation__button">&#60;</button>
        <div class="pagintation__number">1</div>
        <div class="pagintation__number">2</div>
        <div class="pagintation__number">3</div>
        <button class="pagintation__button">&#62;</button>
    </div>
    <div style="color:red; width: 100%; border: 2px solid red; height: 100%; font-size: 2rem; margin-bottom: 4rem; text-align: center;">{{ todos.length }} hello</div>

</template>

<style scoped>
.pagintation {
    margin: 3rem auto;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.pagintation__button,
.pagintation__button,
.pagintation__number {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid #c3c3c3;
    width: 3rem;
    margin: 0 0.5rem;
    font-size: 1.2rem;
    color: #2e43ff;
    font-weight: bold;
    background-color: #ffffff00;
    border-radius: 0.3rem;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}

.pagintation__number:active {
    background-color: #2e43ff;
    color: #ffffff;
    border: 0.1rem solid #2e43ff;
}

.pagintation__button:active,
.pagintation__button:active {
    color: #c3c3c3;
}

</style>