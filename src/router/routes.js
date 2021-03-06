import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'DashBoard', params: { name: 'DashBoard' } },
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('../views/Pages/DashBoard.vue')
      },
      {
        path: '/plantas',
        name: 'Plantas',
        component: () => import('../views/Pages/Plantas.vue')
      },
      {
        path: '/nutrientes',
        name: 'Nutrientes',
        component: () => import('../views/Pages/Nutrientes.vue')
      },
      {
        path: '/fases',
        name: 'FasesCrecimento',
        component: () => import('../views/Pages/FasesCrecimento.vue')
      },
      {
        path: '/estufas',
        name: 'Estufas',
        component: () => import('../views/Pages/Estufas.vue')
      },
      {
        path: '/usuarios',
        name: 'Usuarios',
        component: () => import('../views/Pages/Usuarios.vue')
      },
      {
        path: '/setorestufa',
        name: 'Setores',
        component: () => import('../views/Pages/EstufaSetor.vue')
      },
      {
        path: '/controladores',
        name: 'Controladores',
        component: () => import('../views/Pages/Controladores.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../security/Login.vue')
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: () => import('../views/Pages/DashBoard.vue')
  }
]
export default routes
