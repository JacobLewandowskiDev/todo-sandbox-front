<script>

</script>

<template>
     <div class="todo">
        <h2 class="todo__name">Read a book</h2>
        <p class="todo__priority">MEDIUM</p>
        <p class="todo__body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ipsum nobis quidem voluptas magnam numquam qui, iure reprehenderit dolor deserunt commodi, eum nisi 
            nihil vitae velit mollitia aut cumque, praesentium consequuntur expedita corrupti? Ad, iusto? Soluta 
            adipisci nihil recusandae error id. Sit maxime id soluta! Corporis beatae commodi nulla fugit error.
        </p>
    </div>
</template>

<style scoped>
.todo {
    border-bottom: 2px solid #c3c3c3;
    position: relative;
    display: grid;
    grid-template-columns: 2fr 0.5fr;
    grid-template-rows: 40px 80px;
    column-gap: 10px;
    margin: 0 auto;
    padding-top: 1rem;
    cursor: pointer;
}

.todo:hover {
   background-color: #adadad10;
}

.todo__name {
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

.todo__priority {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffb3b3;
    color: #c02b2b;
    font-weight: bold;
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 50000rem;
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: right;
}

.todo__priority--high {
    background-color: #ffb3b3;
    color: #c02b2b;
}

.todo__priority--medium {
    background-color: #ffd8b3;
    color: #b25009;
}

.todo__priority--low {
    background-color: #fdffb3;
    color: #998a00;
}

.todo__body  {
    color: #777777;
    font-size: 1.2rem;
    margin: 0.35rem 0;
    grid-column-start: 1;
    grid-column-end: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-y: hidden;
}
</style>