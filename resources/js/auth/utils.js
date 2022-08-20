import useJwt from './jwt/useJwt' //@/auth/jwt/useJwt


/**
 * Return si el usuario se inicia sesión
 * Esto depende completamente de usted y cómo desea almacenar el token en su aplicación frontend
 * p.ej.Si está utilizando cookies para almacenar la aplicación, actualice esta función
 */
export const isUserLoggedIn = () => { 
  return localStorage.getItem('userData') && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 * Esta función se utiliza para la navegación de ruta de propósito de demostración
 * En la aplicación real no necesitará esta función porque su aplicación navegará a la misma ruta para cada usuarios, independientemente de la capacidad.
 * Tenga en cuenta que el campo de roles es solo para mostrar un propósito que no lo utiliza en frontend
 * Estamos revisando el rol solo para facilitar
 * Nota: si tiene diferentes páginas para navegar según la capacidad del usuario, esta función puede ser útil.Sin embargo, debe actualizarlo.
 * @param {String} Userrole papel del usuario
 */
export const getHomeRouteForLoggedInUser = userRole => {
  console.log(userRole);
  if (userRole === 'admin') return '/dashboard'
  if (userRole === 'client') return { name: 'login' }
  return { name: 'login' }
}
