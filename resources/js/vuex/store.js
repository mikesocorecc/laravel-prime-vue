import { createStore } from 'vuex' 
import axios  from 'axios';
 
export default createStore({
  state: {
    user: null 
  },
  mutations: {
      SET_USER_DATA (state, userData) {
        console.log(userData.token); 
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
          userData.token
        }`
      },  
    LOGOUT (state) {
      localStorage.removeItem('user')
      location.reload()
    }  
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('http://localhost:3000/register', credentials)
        .then(({ data }) => {
          // eslint-disable-next-line no-undef
          console.log('user data is', data)
          commit('SET_USER_DATA', data)
        })
    },
    async login ({ commit }, credentials) {
        const { data } = await axios
          .post('http://laravel-prime-vue.test/api/login', credentials);
        commit('SET_USER_DATA', data);
    },
    logout ({ commit }) {
      commit('LOGOUT')
    }
  },
  // Getters para retornar informacion
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  },
  modules: {

  }
})

