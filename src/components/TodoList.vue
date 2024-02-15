<script setup>
</script>

<template>
    <div class="container">
        <div id="empty_todo-list">
            <h1 class="container__title">Todos</h1>
            <div class="container__empty-todo-list">
                <h2 class="container__empty-todo-list__title">No todos</h2>
                <p class="container__empty-todo-list__body">Get started by creating a new todo</p>
                <br>
            <button class="container__button" @click=""><span id="plus">+</span> New Todo</button>
            </div>
        </div>

        <div id="todo-list" class="container__todo-list">
            <div class="container__todo-list__title-div">
                <h1 class="container__todo-list__title-div__title">Todos</h1>
                <button class="container__todo-list__title-div__addtodo--button">Add New Todo</button>
            </div>
            <div class="container__todo-list__todo">
                <h2 class="container__todo-list__todo__name">Read a book</h2>
                <p class="container__todo-list__todo__priority">MEDIUM</p>
                <p class="container__todo-list__todo__body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nobis quidem voluptas magnam numquam qui, iure reprehenderit dolor deserunt commodi, eum nisi nihil vitae velit mollitia aut cumque, praesentium consequuntur expedita corrupti? Ad, iusto? Soluta adipisci nihil recusandae error id. Sit maxime id soluta! Corporis beatae commodi nulla fugit error.</p>
            </div>

            <div class="container__todo-list__todo">
                <h2 class="container__todo-list__todo__name">Read a book</h2>
                <p class="container__todo-list__todo__priority">HIGH</p>
                <p class="container__todo-list__todo__body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nobis quidem voluptas magnam numquam qui, iure reprehenderit dolor deserunt commodi, eum nisi nihil vitae velit mollitia aut cumque, praesentium consequuntur expedita corrupti? Ad, iusto? Soluta adipisci nihil recusandae error id. Sit maxime id soluta! Corporis beatae commodi nulla fugit error.</p>
            </div>

            <div class="container__todo-list__todo">
                <h2 class="container__todo-list__todo__name">Read a book</h2>
                <p class="container__todo-list__todo__priority">LOW</p>
                <p class="container__todo-list__todo__body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nobis quidem voluptas magnam numquam qui, iure reprehenderit dolor deserunt commodi, eum nisi nihil vitae velit mollitia aut cumque, praesentium consequuntur expedita corrupti? Ad, iusto? Soluta adipisci nihil recusandae error id. Sit maxime id soluta! Corporis beatae commodi nulla fugit error.</p>
            </div>
        </div>
    </div>
</template>