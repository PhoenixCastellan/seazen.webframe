export default [{
  path: '/',
  name: 'home',
  meta:{title:'大跃节能'},
  component: () => import('@/views/Home.vue')
},
{
  path: '/news',
  name: 'news',
  meta:{title:'大跃节能'},
  component: () => import('@/views/News.vue'),
},
{
  path: '/newsdetails/:id',
  name: 'newsdetails',
  meta:{title:'产品中心'},
  component: () => import('@/views/NewsDetails.vue'),
},
{
  path: '/product',
  name: 'product',
  meta:{title:'大跃节能'},
  component: () => import('@/views/Product.vue'),
},
{
  path: '/case',
  name: 'case',
  meta:{title:'产品中心'},
  component: () => import('@/views/Case.vue')
},
{
  path: '/casedetails/:id',
  name: 'casedetails',
  meta:{title:'产品中心'},
  component: () => import('@/views/CaseDetails.vue')
},
{
  path: '/goin',
  name: 'goin',
  meta:{title:'走进大跃'},
  component: () => import('@/views/GoIn.vue')
},
{
  path: '/download',
  name: 'download',
  component: () => import('@/views/Download.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue')
},
{
  path: '/admin',
  name: 'admin',
  meta: {
    requireAuth: true
  },
  component: () => import('@/views/Admin.vue'),
  children: [{
      path: '/admin/user',
      name: 'user',
      component: () => import('@/views/Admin/User.vue')
    },
    {
      path: '/admin/news',
      name: 'new',
      component: () => import('@/views/Admin/News.vue')
    },
    {
      path: '/admin/cases',
      name: 'cases',
      component: () => import('@/views/Admin/Cases.vue')
    },
    {
      path: '/admin/team',
      name: 'team',
      component: () => import('@/views/Admin/Team.vue')
    },
    {
      path: '/admin/course',
      name: 'course',
      component: () => import('@/views/Admin/Course.vue')
    },
    {
      path: '/admin/enterprise',
      name: 'enterprise',
      component: () => import('@/views/Admin/Enterprise.vue')
    },
    {
      path: '/admin/honor',
      name: 'honor',
      component: () => import('@/views/Admin/Honor.vue')
    },
    {
      path: '/admin/dictionary',
      name: 'dictionary',
      component: () => import('@/views/Admin/Dictionary.vue')
    },
    {
      path: '/admin/page',
      name: 'page',
      component: () => import('@/views/Admin/Page.vue')
    }
  ]
}
];
