import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import DashBoard from '../views/DashBoard/DashBoard.vue';
import MenuMain from '../components/page/Login/MenuMain.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/vue',
        name: 'vue',
        component: DashBoard,

        children : [
            {
              path: '',
              name: 'menu',
              component:  MenuMain,
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
