import { createRouter, createWebHistory } from "vue-router";
import TodoList from '../views/TodoList.vue';
import CreateTodo from '../views/CreateTodo.vue';
import TodoDetails from '../components/TodoDetails.vue';

export const apiUrl = 'http://localhost:8080';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {path: '/todos', name: 'Todos', component: TodoList},
        {path: '/create', name: 'Create', component: CreateTodo},
        {path: '/details/:id', name: 'Details', component: TodoDetails, props: true},

        // default redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/todos' }
    ]
});

export default router;
