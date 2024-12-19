import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import DashBoard from '../views/DashBoard/DashBoard.vue';
import Notice from '../views/Board/Notice.vue';
import NoticeDetailTanstack from '../components/page/Board/Notice/NoticeDetailTanstack.vue';
import AddOn from '../components/layout/AddOn.vue';
import Approval from '../views/Approval/Approval.vue';

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
  children: [
      {
        path: '',
        name: 'addon',
        component: AddOn
      },
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
            //     component: NoticeDetailTanstack,
            //   },
            // ],
          },
          {
            path: 'notice.do/insert',
            name: 'noticeInsert',
            component: NoticeDetailTanstack,
          },
          {
            path: 'notice.do/:idx',
            name: 'noticeDetail',
            component: NoticeDetailTanstack,
          },
        ],
    },
    {
      path: 'manage-post',
      name: 'manage-post',
      children: [
        {
          path: 'approval.do',
          name: 'approval',
          component: Approval,
        }
      ]
        

      },

    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
