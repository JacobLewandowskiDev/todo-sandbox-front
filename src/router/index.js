import { createRouter, createWebHistory } from "vue-router";
import TodoList from '../views/TodoList.vue';
import CreateTodo from '../views/CreateTodo.vue';
import TodoDetails from '../components/TodoDetails.vue';
import AddSubtask from '../views/AddSubtask.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {path: '/', name: 'Home', component: TodoList},
        {path: '/todos', name: 'Todos', component: TodoList},
        {path: '/create', name: 'Create', component: CreateTodo},
        {path: '/details', name: 'Details', component: TodoDetails},
        {path: '/subtask', name: 'Subtask', component: AddSubtask},

        // default redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

export default router;
