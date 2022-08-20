<template>  
  <component :is="layout">
      <router-view />
      {{ loggedIn }}
  </component>
</template>

<script >  
import { computed } from "vue";
import { useRouter } from "vue-router";
import { authComputed } from './vuex/helpers.js'
export default { 
    computed: {
        ...authComputed
    },
    setup(){
      const defaultLayout = "default";
      const { currentRoute } = useRouter();
      console.log(currentRoute.value);
      const layout = computed(() => {  
        if(currentRoute.value.meta.layout){
          return `${currentRoute.value.meta.layout}-layout`;
        }else if(defaultLayout){
          return `${defaultLayout}-layout`
        }
        // return `${currentRoute.value.meta.layout || defaultLayout}-layout`
      });
      // const layout = 'default-layout';
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
 