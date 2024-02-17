<script>

</script>

<template>
     <div class="todo--container">
        <h2 class="todo--container__todo--name">Read a book</h2>
        <p class="todo--container__todo--priority">HIGH</p>
        <p class="todo--container__todo--body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ipsum nobis quidem voluptas magnam numquam qui, iure reprehenderit dolor deserunt commodi, eum nisi 
            nihil vitae velit mollitia aut cumque, praesentium consequuntur expedita corrupti? Ad, iusto? Soluta 
            adipisci nihil recusandae error id. Sit maxime id soluta! Corporis beatae commodi nulla fugit error.
        </p>
    </div>
</template>

<style>
.todo--container {
    border-bottom: 2px solid #c3c3c3;
    position: relative;
    display: grid;
    grid-template-columns: 2fr 0.5fr;
    grid-template-rows: 60px 80px;
    column-gap: 10px;
    margin: 0 auto;
}

.todo--container__todo--name {
    font-size: 1.1em;
    font-weight: 800;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    align-items: center;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.todo--container__todo--priority {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffb3b3;
    color: #c02b2b;
    font-weight: bold;
    width: fit-content;
    padding: 1em;
    border-radius: 50000em;
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: right;
}

.todo--container__todo--priority--high {
    background-color: #ffb3b3;
    color: #c02b2b;
}

.todo--container__todo--priority--medium {
    background-color: #ffd8b3;
    color: #b25009;
}

.todo--container__todo--priority--low {
    background-color: #fdffb3;
    color: #998a00;
}

.todo--container__todo--body  {
    color: #777777;
    font-size: 1.2em;
    margin-top: 15px;
    grid-column-start: 1;
    grid-column-end: 3;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>