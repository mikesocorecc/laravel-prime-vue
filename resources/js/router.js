import {createRouter, createWebHistory } from 'vue-router' 
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from './auth/utils'
import { canNavigate } from './libs/acl/routeProtection' //@/libs/acl/routeProtection

const routes = [
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('./views/login/Index.vue'),
    meta: { 
      layout: "empty",
      resource: 'Auth',
      redirectIfLoggedIn: true,
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
      requiresAuth: true,
      resource: 'usuarios',
    } 
  },
]

const router = new createRouter({
  history: createWebHistory(),
  routes // Corto para `rutas: rutas '
})

 
router.beforeEach((to, _, next) => { 
  const isLoggedIn = isUserLoggedIn() 
      console.log(!canNavigate(to));
  if (!canNavigate(to)) { 
    // Redirigir a iniciar sesión si no se inicia sesión
    if (!isLoggedIn){
      console.log('accedio al nav pero como no hay session regresar a login');
      return next({ name: 'login' })
    } 
      

    // Si se registra => no autorizado
    console.log('se ejecuta el registra => no autorizado');
    return next({ name: 'login' })
  }

  // Redirigir si se registra
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData() 
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
// router.afterEach(() => {
//   // Remove initial loading
//   const appLoading = document.getElementById('loading-bg')
//   if (appLoading) {
//     appLoading.style.display = 'none'
//   }
// })

export default router 