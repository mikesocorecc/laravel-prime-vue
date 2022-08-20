<template>  
  <component :is="layout">
  <!-- <component :is="this.$route.meta.layout">  -->
 
      <router-view />
    </component>
</template>

<script >  
import { computed } from "vue";
import { useRouter } from "vue-router"; 
// import { mapGetters, mapState } from 'vuex'
// import { authComputed } from './vuex/helpers.js'
  export default {  
    setup(){ 
      const { currentRoute } = useRouter();
      const userLoged = localStorage.getItem('user'); 
      // localStorage.setItem('user', JSON.stringify('00000000000000000000000000'));
      const layout = computed(() => {
        if(currentRoute.value.meta.layout == 'dafault-layout'){
          if(userLoged){
            return 'dafault-layout';
          }else{
            return 'empty-layout';
            // return `${currentRoute.value.meta.layout || defaultLayout}-layout`
          }
        }else{
          return 'empty-layout';
          // return `${currentRoute.value.meta.layout || defaultLayout}-layout`
        }

      });
    return {
      layout,
    };

    },
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
 