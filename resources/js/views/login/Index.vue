<template>
  <form @submit.prevent="login" class="flex flex-col container mx-auto mt-20">
    <input class="border-2 mb-5 focus:outline-none " type="email" v-model="email" />
    <input class="border-2 mb-3 focus:outline-none " type="password" v-model="password" />
    <button class="border-2 mb-3 bg-primary text-white border-primary rounded-lg" type="submit">Login</button>
  </form>
</template>

<script>
import { AbilityBuilder, Ability } from '@casl/ability';
import { ABILITY_TOKEN } from '@casl/vue';
import useJwt from '../../auth/jwt/useJwt' //'@/auth/jwt/useJwt'
import ability from '../../libs/acl/ability'
import { getHomeRouteForLoggedInUser } from '../../auth/utils' //@/auth/utils
export default {
  name: 'LoginForm',
  inject: {
    $ability: { from: ABILITY_TOKEN }
  },
  data: () => ({
    email: 'nLKpLYi1pn@gmail.com',
    password: 'password',
  }),
  created() {
    const { can, rules } = new AbilityBuilder(Ability);
      
     let user = 'admin';
     if (user === 'admin') {
        can('manage', 'undefined');
      } else {
        can('read', 'undefined');
      }
    this.$ability.update(ability);
   
  },
  methods: {
    // login() {
    //   const { email, password } = this;
    //   const params = { method: 'POST', body: JSON.stringify({ email, password }) };

    //   return fetch('http://laravel-prime-vue.test/api/login', params)
    //     .then(response => response.json())
    //     .then(({ user }) => this.updateAbility(user));
        
    // },
    async login () {
        const { email, password } = this;
        console.log(password);
        const credentials = { email, password };
        const { data } = await axios.post('http://laravel-prime-vue.test/api/login', credentials);
        useJwt.setToken(data.accessToken)
        useJwt.setRefreshToken(data.refreshToken)
        localStorage.setItem('userData', JSON.stringify(data))  
        this.$ability.update(data.userData.ability)  
        this.$router.replace({path : getHomeRouteForLoggedInUser(data.userData.role) } ).then(() => {
              
        }) 
    }, 
  }
};
</script>