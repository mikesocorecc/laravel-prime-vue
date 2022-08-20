export default {
  // Puntos finales
  loginEndpoint: 'http://laravel-prime-vue.test/api/login',
  registerEndpoint: 'http://laravel-prime-vue.test/api/register',
  refreshEndpoint: 'http://laravel-prime-vue.test/api/refresh-token',
  logoutEndpoint: 'http://laravel-prime-vue.test/api/logout',

  // Esto se prefijas en el encabezado de autorización con token
  // p.ej. Autorización: Bearer <Token>
  tokenType: 'Bearer',

  // El valor de esta propiedad se utilizará como clave para almacenar el token JWT en almacenamiento
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
