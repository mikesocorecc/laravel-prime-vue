<template>  
   <router-view></router-view> 
</template>

<script  >
  import { ElButton } from 'element-plus'
   export default {
    components: { ElButton },
    data() {
      return {
        
      }
    },
    created() {
       const userString = localStorage.getItem('user') // obtener datos de usuario del almacenamiento local
     
        if (userString) { // verifique si efectivamente hay un usuario
          const userData = JSON.parse(userString) // analizar datos de usuario en JSON 
          this.$store.commit('SET_USER_DATA', userData) // restaurar datos de usuario con Vuex
        }
      this.axios.interceptors.response.use(
        response => response, // simplemente devuelva la respuesta
        error => {
          if (error.response.status === 401) { // si detectamos un error 401
            this.$store.dispatch('logout') // forzar un cierre de sesión
          }
          return Promise.reject(error) // rechazar la Promesa, con el error como razón
        }
      )
    }
  }
</script>
 