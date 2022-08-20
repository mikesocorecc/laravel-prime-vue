import {createRouter, createWebHistory } from 'vue-router' 

// 2.Defina algunas rutas
// Cada ruta debe asignarse a un componente.El "componente" puede
// sea un constructor de componentes real creado a través de
// `vue.extend ()`, o simplemente un objeto de opciones de componentes.
// hablaremos de rutas anidadas más tarde.
const routes = [
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('./views/login/Index.vue'),
    meta: { 
      layout: "empty-layout" 
    }
  },
  { 
    path: '/dashboard', 
    name: 'dashboard', 
    component: () => import('./views/Dashboard.vue'), 
    meta: {
      requiresAuth: true, 
    } 
  },
  { 
    path: '/usuarios', 
    name: 'usuarios', 
    component: () => import('./views/usuarios/Index.vue'), 
    meta: {
      requiresAuth: true 
    } 
  },
]

// 3. Cree la instancia del enrutador y pase la opción 'rutas'
// Puede pasar en opciones adicionales aquí, pero vamos a
// Manténgalo simple por ahora.
const router = new createRouter({
  history: createWebHistory(),
  routes // Corto para `rutas: rutas '
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user'); 
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  }
  next()
 
})
 

export default router