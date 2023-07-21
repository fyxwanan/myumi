const routers: any = [
  // { path: '/knowledge', component: '@/pages/knowledge', layout: false },
  // { path: '/about', component: '@/pages/about', layout: false },
  // { path: '/introduce', component: '@/pages/introduce', layout: false },
  // { path: '/', component: '@/index', exact: false, layout: false },
  { 
    path: '/',
    component: '@/layouts/index', 
    exact: false, 
    routes: [
      { path: '/', component: '@/pages/home', exact: true },
      { path: '/home', component: '@/pages/home', exact: true },
      { path: '/about', component: '@/pages/about', exact: true },
      { path: '/knowledge', component: '@/pages/knowledge', exact: true },
      { path: '/introduce', component: '@/pages/introduce', exact: true },
    ]
  },
];

export default routers;