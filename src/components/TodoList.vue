<script setup>
</script>

<template>
    <div id="container">
        <h1>Todos</h1>
        <div class="todo-list">
            <h2>No Todos</h2>
            <p>Get started by creating a new todo</p>
        </div>
        <br>
        <button @click=""><span id="plus">+</span> New Todo</button>
    </div>
    
</template>

<style>
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    position: relative; 
    right: 110px;
}

.todo-list {
    border: dashed 0.3em #848484;
    width: 20em;
    height: 20em;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2e43ff;
    color: #ffffff;
    font-size: 1.5em;
    line-height: 2em;
    text-align: center;
    padding: 0 2em;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: none;
    border-radius: .3em;
    cursor: pointer;
    transition-duration: 0.4s;
}

button:hover {
  background-color: #2237f3;
  color: #ffffff;
}

button span {
    font-size:1.8em;
    font-weight: initial;
    margin-right: 0.2em;
}
</style>