import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import DashBoard from '../views/DashBoard/DashBoard.vue';
import Notice from '../views/Board/Notice.vue';
import NoticeModalCopy from '../components/page/Board/Notice/NoticeModalCopy.vue';

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
        path: 'board',
        name: 'board',
        children: [
          {
            path: 'notice.do',
            name: 'notice',
            component: Notice,
            // children: [
            //   {
            //     path: ':idx', // Dynamic라우터
            //     name: 'noticeDetail',
            //     component: NoticeModalCopy,
            //   },
            // ],
          },
          {
            path: 'notice.do/insert',
            name: 'noticeInsert',
            component: NoticeModalCopy,
          },
          {
            path: 'notice.do/:idx',
            name: 'noticeDetail',
            component: NoticeModalCopy,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
