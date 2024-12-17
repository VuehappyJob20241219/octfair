import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import DashBoard from '../views/DashBoard/DashBoard.vue';
import MenuMain from '../components/page/Login/MenuMain.vue';
import SnowMain from '../components/page/Login/SnowMain.vue';
import Notice from '../views/Board/Notice.vue';

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
              components: {
                default: MenuMain,  // 기본 뷰는 MenuMain
                snow: SnowMain,     // 'snow'라는 named view는 SnowMain
              },
            },
            {
              path: 'board',
              name: 'board',
              children: [
                {
                  path: 'notice.do',
                  name: 'notice',
                  component: Notice,
                },
              ]
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
