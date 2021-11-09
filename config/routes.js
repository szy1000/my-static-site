export default [
  {
    path: '/',
    routes: [
      {
        path: '/',
        component: './home/index'
      },
      // {
      //   path: '/front',
      //   name: '首页',
      //   component: '../layouts/FrontLayout',
      //   routes: [
      //     {
      //       path: '/front',
      //       name: '首页',
      //       component: './front/home',
      //     },
      //     {
      //       path: '/front/contact',
      //       name: '联系我们',
      //       component: './front/contact',
      //     },
      //     {
      //       path: '/front/about',
      //       name: '关于我们',
      //       component: './front/about',
      //     },
      //   ],
      // },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/user/login',
            name: '登录',
            component: './User/login',
          },
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: '注册',
            icon: 'smile',
            path: '/user/register',
            component: './user/register',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/project',
            name: '建筑碳排放计算',
            icon: 'icon-nav02',
            routes: [
              {
                path: '/project/create',
                component: './project/create',
                // hideInMenu: true,
                name: '新建项目',
                routes: [
                  {
                    path: '/project/create/step1/:id',
                    component: './project/create/step1/[id]',
                  },
                  {
                    path: '/project/create/step2/:id',
                    component: './project/create/step2/[id]',
                  },
                  {
                    path: '/project/create/step3/:id',
                    component: './project/create/step3/[id]',
                  },
                  {
                    path: '/project/create/step4/:id',
                    component: './project/create/step4/[id]',
                  },
                  {
                    path: '/project/create/step5/:id',
                    component: './project/create/step5/[id]',
                  },
                ],
              },
              {
                path: '/project/list',
                name: '项目列表',
                component: './project/list',
              },
            ],
          },
          // {
          //   path: '/areaProject',
          //   name: '区域项目',
          //   icon: 'icon-nav03',
          //   routes: [
          //     {
          //       path: '/areaProject/list',
          //       name: '区域碳排放列表',
          //       component: './areaProject/list',
          //     },
          //     {
          //       path: '/areaProject/create/:id',
          //       name: '区域碳排放计算',
          //       component: './areaProject/create/[id]',
          //     },
          //   ],
          // },
          {
            path: '/greenProject',
            name: '绿色建筑评价标准',
            icon: 'icon-step03',
            routes: [
              {
                name: '新建项目',
                path: '/greenProject/create',
                component: './greenProject/create',
                routes: [
                  {
                    path: '/greenProject/create/step1/:id',
                    component: './greenProject/create/step1/[id]',
                  },
                  {
                    path: '/greenProject/create/step2/:id',
                    component: './greenProject/create/step2/[id]',
                  },
                  {
                    path: '/greenProject/create/step3/:id',
                    component: './greenProject/create/step3/[id]',
                  },
                  {
                    path: '/greenProject/create/step4/:id',
                    component: './greenProject/create/step4/[id]',
                  },
                  {
                    path: '/greenProject/create/step5/:id',
                    component: './greenProject/create/step5/[id]',
                  },
                  {
                    path: '/greenProject/create/step6/:id',
                    component: './greenProject/create/step6/[id]',
                  },
                  {
                    path: '/greenProject/create/step8/:id',
                    component: './greenProject/create/step8/[id]',
                  },
                ],
              },
              {
                name: '项目列表',
                path: '/greenProject/list',
                component: './greenProject/list',
              }
            ],
            // path: '/project/green',

            // routes: [
            //   {
            //     path: '/project/green/step1/:id',
            //     component: './project/green/step1/[id]',
            //   },
            //   {
            //     path: '/project/green/step2/:id',
            //     component: './project/green/step2/[id]',
            //   },
            //   {
            //     path: '/project/green/step3/:id',
            //     component: './project/green/step3/[id]',
            //   },
            //   {
            //     path: '/project/green/step4/:id',
            //     component: './project/green/step4/[id]',
            //   },
            //   {
            //     path: '/project/green/step5/:id',
            //     component: './project/green/step5/[id]',
            //   },
            //   {
            //     path: '/project/green/step8/:id',
            //     component: './project/green/step8/[id]',
            //   },
            // ],
          },


          {
            name: 'account',
            icon: 'user',
            path: '/account',
            hideInMenu: true,
            routes: [
              {
                path: '/',
                redirect: '/account/center',
              },
              {
                name: 'center',
                icon: 'smile',
                path: '/account/center',
                component: './account/center',
              },
              {
                name: 'settings',
                icon: 'smile',
                path: '/account/settings',
                component: './account/settings',
              },
            ],
          },
          {
            component: '404',
          },
        ],
      },
    ],
  },
];
